import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, Typography, CardContent } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 16
  },
  media: {
    height: 140,
  },
});

const CardImage = ({
  image,
  description
}) => {
  const classes = useStyles();

  return (
  <Card className={classes.card}>
    <CardMedia
      className={classes.media}
      image={image}
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        { description }
      </Typography>
    </CardContent>
  </Card>
)};

CardImage.propTypes = {
};

CardImage.defaultProps = {
};

export default CardImage;