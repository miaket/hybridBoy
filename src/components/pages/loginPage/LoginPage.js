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
  
  validateForm = () => {
    const { formValues: {username, password} } = this.state;
    return schema
      .validate({
        username,
        password
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
    const { formValues } = this.state;

    this.validateForm().then((response) =>{
      if (response === true){
        this.setErrorMsg('');
        loginRequest(formValues).then(() => {
          this.navigationRef.current.navigationFunction(ROUTES.HOME)
        });
      } else {
        this.setErrorMsg(response.errors[0]);
      }
    })
  }

  handleSignupButton = () => {
    this.navigationRef.current.navigationFunction(ROUTES.SIGNUP)
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
          <InputButton onClick={this.handleSignupButton}>Sign up</InputButton>
          <InputButton onClick={this.handleLoginButton}>
            Login
          </InputButton>
          <NavigationAction oi={'oie'} ref={this.navigationRef}/>
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