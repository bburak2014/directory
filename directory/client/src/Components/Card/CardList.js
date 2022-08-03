import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "../../Assets/Card.css";

function CardList({
  item,
  setCardID,

  setVisiblemobile,
}) {
  const cardClick = () => {
    setCardID(item.id);
    setVisiblemobile(false);
  };
  return (
    <>
      <div className="directorlist" onClick={cardClick}>
        <Card
          sx={{
            maxWidth: "100%",
            width: "100%",
            borderBottom: "1px solid whitesmoke",
            p: 1,
          }}
        >
          <CardHeader
            avatar={
              item.image ? (
                <Avatar alt={item.image} src={item.image} />
              ) : (
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {item.FirstName[0]}
                </Avatar>
              )
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon sx={{ fill: "rgb(130 130 130 / 60%)" }} />
              </IconButton>
            }
            title={item.FirstName + " " + item.LastName}
            subheader={item.Phone}
          />
        </Card>
      </div>
    </>
  );
}

export default CardList;
