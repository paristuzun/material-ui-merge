import * as React from "react";
import TravelCard from "../TravelCard";
import CardHeader from "../../CardHeader/CardHeader";
import CardMedia from "../../CardMedia/CardMedia";
import CardContent from "../../CardContent/CardContent";
import CardActions from "../../CardActions/CardActions";
import Typography from "../../Typography/Typography";
import Icon from "../../Icon/Icon";
import IconButton from "../../IconButton/IconButton";
import Image from "../../Image/Image";
import Button from "../../Button/Button";

export default (
  <TravelCard uxpId="travelcard">
     <CardActions disableActionSpacing uxpId="1.4">
      <IconButton aria-label="Add to favorites" uxpId="1.4.1">
        <Icon uxpId="1.4.1.1">favorite</Icon>
      </IconButton>
    </CardActions>
     <CardMedia uxpId="1.1">
      <Image
       src="https://www.platingsandpairings.com/wp-content/uploads/2016/01/Paella-1-Square.jpg"
       alt="Savannah"
       uxpId="1.1"
       width="100%"
       height="100%"
       objectFit="cover"
    />
    </CardMedia>
 
    <CardHeader 
       uxpId="1.2"
       title="Savannah"
       subheader="$500  |  4.8/5"
    />

    <CardContent uxpId="1.3">
      <Typography component="p" uxpId="1.3.3">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </Typography>
    </CardContent>

    <Button
      uxpId="action1"
      size="medium"
      variant="outlined"
      color="primary"
    >
      Book Now
  </Button>

  </TravelCard>
);
