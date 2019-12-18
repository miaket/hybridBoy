import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../actions/walletActions';
import LoginPageContent from './content/LoginPageContent';

// Since this component is simple and static, there's no parent container for it.
class LoginPage extends Component {
  render() {
    return (
      <LoginPageContent />
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