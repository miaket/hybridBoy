import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../actions/walletActions';
import PageContainer from '../../elements/pageContainer/PageContainer';
import ContentBlock from '../../elements/contentBlock/ContentBlock';
import CardImage from '../../elements/cardImage/CardImage';
import MainTitle from '../../elements/mainTitle/MainTitle';

const mockContent = {
  "dishes": [
      {
          "image": "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/baked-chilli-jacket-potatoes.jpg",
          "description": "This impressive baked potato is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
      },
      {
          "image": "https://thumbor.thedailymeal.com/Li6jFZP4s0EjJYTzA4H2lJvhAuM=/870x565/filters:format(webp)/https://www.thedailymeal.com/sites/default/files/slideshows/1952820/2121750/1-cordonbleu-shutterstock.JPG",
          "description": "This dish originated in Switzerland, and is a riff on traditional schnitzel. But instead of just frying the pounded veal cutlet, it’s stuffed with ham and an easily meltable cheese (generally Swiss or Gruyère), rolled up into a roulade, and then deep-fried."
      },
      {
          "image": "https://assets.marthastewart.com/styles/wmax-750/d34/med105046_1109_thx_brussels_sprout/med105046_1109_thx_brussels_sprout_horiz.jpg?itok=I0yv420R",
          "description": "This delicious seasonal vegetable becomes sweet and nutty when browned. For the best flavor and texture, make the dish just before serving."
      },
      {
          "image": "https://assets.marthastewart.com/styles/wmax-750/d35/homemade-stuffing-in-dish-mla101092/homemade-stuffing-in-dish-mla101092_horiz.jpg?itok=A3bUnnFE",
          "description": "Studded with meaty chestnuts and fragrant with parsley and sage, this stuffing is equally good cooked inside or outside the turkey."
      }
  ]
} 
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
    const { funds } = this.props;
    const {dishes} = mockContent;

    return (
      <PageContainer>
        <MainTitle>
          Favourite Dishes
        </MainTitle>
        <ContentBlock
          flexDirection={true}
        >
          {dishes.map((dish, key) => (
            <CardImage
              key={key}
              image={dish.image}
              description={dish.description}
            />
          ))}
        </ContentBlock>
      </PageContainer>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  // funds: PropTypes.number.isRequired,
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