import * as React from "react";
import TravelCard from "../TravelCard";
import CardHeader from "../../CardHeader/CardHeader";
import CardMedia from "../../CardMedia/CardMedia";
import CardContent from "../../CardContent/CardContent";
import CardActions from "../../CardActions/CardActions";
import Avatar from "../../Avatar/Avatar";
import Typography from "../../Typography/Typography";
import Icon from "../../Icon/Icon";
import CardM from '@material-ui/core/Card';

export default (
  <TravelCard uxpId="travelcard">
    <CardMedia uxpId="1.1"
      image="https://www.platingsandpairings.com/wp-content/uploads/2016/01/Paella-1-Square.jpg"
    />
     <CardActions disableActionSpacing uxpId="1.4">
      <IconButton aria-label="Add to favorites" uxpId="1.4.1">
        <Icon uxpId="1.4.1.1">favorite</Icon>
      </IconButton>
    </CardActions>
    <CardHeader
      uxpId="1.2"
      avatar={<Avatar aria-label="Destination" uxpId="1.1.1">R</Avatar>}
      title="Savannah"
      price="$500"
      rating="4.8/5"
    />
    <CardContent uxpId="1.3">
      <Typography component="p" uxpId="1.3.1">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </Typography>
    </CardContent>
  </TravelCard>
);
