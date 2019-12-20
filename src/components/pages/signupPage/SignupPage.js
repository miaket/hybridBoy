import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signupRequest } from '../../../reducers/authReducer';
import PageContainer from '../../elements/pageContainer/PageContainer';
import MainTitle from '../../elements/mainTitle/MainTitle';
import ContentBlock from '../../elements/contentBlock/ContentBlock';
import InputButton from '../../elements/inputButton/InputButton';
import InputText from '../../elements/inputText/InputText';
import AlertText from '../../elements/alertText/AlertText';
import ROUTES from '../../../constants/ROUTES';
import NavigationAction from '../../elements/navigationAction/NavigationAction';

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
        errorMessage: ''
      }
    };
    this.navigationRef = React.createRef();
  }

  handleChange = ( name, value ) => {
    const { formValues } = this.state;
    formValues[name] = value;
    this.setState({ formValues });
  };

  setErrorMsg = (val) => {
    const { formStatus } = this.state;
    formStatus.errorMessage = val;
    this.setState({ formStatus })
  }

  validateForm = () => {
    const { formValues: {username, password, passwordConfirmation} } = this.state;
    
    return schema
      .validate({
        username,
        password,
        passwordConfirmation
        },
        { abortEarly: true })
      .then(function() {
        return true;
      })
      .catch(function(err) {
        console.log(err);
        return err;
      });
  };

  handleSignupButton = () => {
    const { signupRequest } = this.props;
    const { formValues: {username, password} } = this.state;
    const formFields = {username, password}

    this.validateForm().then((response) =>{
      if (response === true){
        this.setErrorMsg('');
        signupRequest(formFields).then(
          this.navigationRef.current.navigationFunction(ROUTES.LOGIN)
        );
      } else {
        this.setErrorMsg(response.errors[0]);
      }
    })
  }

  handleCancelButton = () => {
    this.navigationRef.current.navigationFunction(ROUTES.LOGIN)
  }

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
          <NavigationAction ref={this.navigationRef}/>
          <InputButton onClick={this.handleCancelButton}>Cancel</InputButton>
          <InputButton onClick={this.handleSignupButton}>
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

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signupRequest: bindActionCreators(signupRequest, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage);
