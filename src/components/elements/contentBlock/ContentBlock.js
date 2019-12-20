import React from 'react';
import PropTypes from 'prop-types';
import './styles/contentBlock.scss';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const ContentBlock = ({
  children,
  flexDirection
}) => {
  return (
  <div
    className="content-block"
  >
    <Grid
      container={flexDirection}
      item xs={12}
      >
      { children }
    </Grid>
  </div>
)};

ContentBlock.propTypes = {
  // children: PropTypes.ReactElementLike
};

ContentBlock.defaultProps = {
  // children: <div />
};

export default ContentBlock;