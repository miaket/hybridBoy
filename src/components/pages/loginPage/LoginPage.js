import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../actions/walletActions';
import PageContainer from '../../elements/pageContainer/PageContainer';
import MainTitle from '../../elements/mainTitle/MainTitle';
import ContentBlock from '../../elements/contentBlock/ContentBlock';
import InputButton from '../../elements/inputButton/InputButton';
import InputText from '../../elements/inputText/InputText';

// Since this component is simple and static, there's no parent container for it.
class LoginPage extends Component {
  render() {
    return (
      <PageContainer>
        <MainTitle>
          Login
        </MainTitle>
        <ContentBlock>
          <InputText
            inputLabel={'Username'}
            inputType="text"
          />
          <InputText
            inputLabel={'Password'}
            inputType="password"
          />
        </ContentBlock>
        <ContentBlock>
          <InputButton>Sign up</InputButton>
          <InputButton>Login</InputButton>
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