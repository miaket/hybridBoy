import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../actions/walletActions';
import PageContainer from '../../elements/pageContainer/PageContainer';
import MainTitle from '../../elements/mainTitle/MainTitle';
import ContentBlock from '../../elements/contentBlock/ContentBlock';
import InputButton from '../../elements/inputButton/InputButton';
import InputText from '../../elements/inputText/InputText';
import AlertText from '../../elements/alertText/AlertText';

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
          <InputButton onClick={this.validateForm}>
            Sign up
          </InputButton>
          {errorMessage && 
            <AlertText>
              { errorMessage }
            </AlertText>
          }
        </ContentBlock>
      </PageContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    funds: state.wallet.funds
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);