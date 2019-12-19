import React from 'react';
import PropTypes from 'prop-types';
import './styles/contentBlock.scss';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      width: 250,
    },
    '& .MuiButton-root': {
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
    },
  },
}));

const ContentBlock = ({
  children
}) => {
  const classes = useStyles();
  return (
  <div
    className="content-block"
  >
    <Grid
      column
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