import React from 'react';
import HomePageContent from './content/HomePageContent';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../actions/walletActions';

// Since this component is simple and static, there's no parent container for it.
class HomePage extends React.Component {
  getFunds = () => {
    this.props.actions.getFunds();
  };
  componentDidMount() {
    // this.getFunds();
    this.getFunds;
  }
  render() {
    const {funds} = this.props;
    console.log('wallet', funds);
    return (
      <HomePageContent funds={funds} />
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  funds: PropTypes.number.isRequired,
};

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
)(HomePage);