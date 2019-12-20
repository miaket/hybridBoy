import React from 'react';
import PageContainer from '../../elements/pageContainer/PageContainer';
import MainTitle from '../../elements/mainTitle/MainTitle';
import ContentBlock from '../../elements/contentBlock/ContentBlock';
import InputButton from '../../elements/inputButton/InputButton';
import InputText from '../../elements/inputText/InputText';
import AlertText from '../../elements/alertText/AlertText';

const yup = require('yup');

let schema = yup.object().shape({
  username: yup.string().required('*Username is required'),
  password: yup.string().required('*Password is required'),
  passwordConfirmation: yup.string()
     .oneOf([yup.ref('password'), null], '*Passwords must match')
});

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        username: '',
        password: '',
        passwordConfirmation: ''
      },
      formStatus:{
        isValid: false,
        errorMessage: ''
      }
    };
  }

  handleChange = ( name, value ) => {
    const { formValues } = this.state;
    formValues[name] = value;
    this.setState({ formValues });
  };

  validateForm = () => {
    const { formValues: {username, password, passwordConfirmation}, formStatus } = this.state;
    const setErrorMsg = (val) => {
      formStatus.errorMessage = val;
      this.setState({ formStatus })
    }
    const validatedForm = () => {
      formStatus.errorMessage = '';
      formStatus.isValid = true;
      this.setState({ formStatus })
    }
    
    return schema
      .validate({
        username,
        password,
        passwordConfirmation
        },
        { abortEarly: true })
      .then(function() {
        validatedForm();
      })
      .catch(function(err) {
        console.log(err);
        setErrorMsg (err.errors[0])
      });
  };

  render() {
    const { formStatus:{errorMessage} } = this.state;
    return (
      <PageContainer>
        <MainTitle>
          Signup
        </MainTitle>
        <ContentBlock>
          <InputText
            inputLabel={'Username'}
            inputType="text"
            name={'username'}
            onChange={this.handleChange}
          />
          <InputText
            inputLabel={'Password'}
            inputType="password"
            name={'password'}
            onChange={this.handleChange}
          />
          <InputText
            inputLabel={'Password Confirmation'}
            inputType="password"
            name={'passwordConfirmation'}
            onChange={this.handleChange}
          />
        </ContentBlock>
        <ContentBlock>
          <InputButton>Cancel</InputButton>
          <InputButton onClick={this.validateForm}>
            Sign up
          </InputButton>
          <AlertText>
            { errorMessage }
          </AlertText>
        </ContentBlock>
      </PageContainer>
    );
  }
}

//alterar rotas com history.push apos importar navigationServices!
/*
bebê nativo vai importar o navservice e trigar o change!
import NavigationService from 'path-to-NavigationService.js';
NavigationService.navigate('ChatScreen', { userName: 'Lucy' });
*/
export default SignupPage;
