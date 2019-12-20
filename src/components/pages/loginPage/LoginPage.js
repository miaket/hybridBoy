import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginRequest } from '../../../reducers/authReducer';
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
  password: yup.string().required('*Password is required')
});

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        username: '',
        password: ''
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
  clearErrorMsg = () => {
    const { formStatus } = this.state;
    formStatus.errorMessage = '';
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

  handleLoginButton = () => {
    const { loginRequest } = this.props;
    console.log('click')
    this.validateForm().then((response) =>{
      if (response === true){
        this.clearErrorMsg();
        loginRequest();
        this.navigationRef.current.navigationFunction('/signup')
      } else {
        this.setErrorMsg(response.errors[0]);
      }
    })
  }

  render() {
    const { formStatus:{errorMessage} } = this.state;

    return (
      <PageContainer>
        <MainTitle>
          Login
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
        </ContentBlock>
        <ContentBlock>
          <InputButton>Sign up</InputButton>
          <InputButton
            onClick={this.handleLoginButton}
            navigateTo={ROUTES.HOME}
            >
            Login
            <NavigationAction ref={this.navigationRef}/>
          </InputButton>
          {(errorMessage && errorMessage.length > 0) ? (
            <AlertText>
              { errorMessage }
            </AlertText>)
              :
            <></>
          }
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
    loginRequest: bindActionCreators(loginRequest, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);