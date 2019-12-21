import React from 'react';
import './styles/contentBlock.scss';
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

export default ContentBlock;