import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDishes } from '../../../reducers/dishesReducer';
import PageContainer from '../../elements/pageContainer/PageContainer';
import ContentBlock from '../../elements/contentBlock/ContentBlock';
import CardImage from '../../elements/cardImage/CardImage';
import MainTitle from '../../elements/mainTitle/MainTitle';

// Since this component is simple and static, there's no parent container for it.
class HomePage extends React.Component {
  
  componentDidMount() {
    const { getDishes, dishes } = this.props;
    if (dishes.length === 0) {
      getDishes();
    }
  }

  render() {
    const { dishes } = this.props;
    return (
      <PageContainer>
        <MainTitle>
          Favourite Dishes
        </MainTitle>
        <ContentBlock
          flexDirection={true}
        >
          {(dishes.length > 0) && dishes.map((dish, key) => (
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
  // getDishes: PropTypes.func.isRequired,
  // funds: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDishes: bindActionCreators(getDishes, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);