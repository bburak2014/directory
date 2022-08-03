import React, { useState, useRef } from "react";
import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
import { IconButton } from "@mui/material";
import "../../Assets/CardDetails.css";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VideoCameraBackOutlinedIcon from "@mui/icons-material/VideoCameraBackOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditLocationAltOutlinedIcon from "@mui/icons-material/EditLocationAltOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ReplyAllOutlinedIcon from "@mui/icons-material/ReplyAllOutlined";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

import { Button } from "@mui/material";
function CardDetails({
  id,
  FirstName,
  setCardID,
  cardID,
  image,
  LastName,
  mediascreen,
  Phone,
  visiblemobile,
  setVisiblemobile,
  setData,
  data,
  disableinput,
  SetDisableinput,
}) {
  const [Name, setName] = useState();
  const [LastNm, setLastNm] = useState();
  const [phone, setPhone] = useState();
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();

  const handleClick = () => {
    setVisiblemobile(true);
  };

  const handleRemove = () => {
    const filteredData = data.filter((filr) => filr.id !== id);
    setData(filteredData);

    mediascreen === false ? setVisiblemobile(true) : <p></p>;
    cardID <= data.length - 1 ? setCardID(id + 1) : <></>;
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };
  const LastChange = (e) => {
    setLastNm(e.target.value);
  };
  const phoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEditSave = () => {
    const EditdDirectory = data.findIndex((filr) => filr.id === id);

    if (Name?.length > 0 && LastNm?.length > 0 && LastNm?.length > 0) {
      data[EditdDirectory].FirstName = Name;
      data[EditdDirectory].LastName = LastNm;

      data[EditdDirectory].Phone = phone;
      setData(data);
      setName("");
      setLastNm("");
      setPhone("");

      inputRef1.current.value = "";
      inputRef2.current.value = "";
      inputRef3.current.value = "";
    }
  };
  return (
    <div>
      <div className="buttonDetail">
        {visiblemobile === false ? (
          <Button
            variant="contained"
            startIcon={<ReplyAllOutlinedIcon />}
            onClick={handleClick}
          >
            Geri
          </Button>
        ) : null}
      </div>

      <div className="CardDetails">
        <div className="imagebackground">
          {image ? (
            <Avatar alt={image} src={image} sx={{ width: 100, height: 100 }} />
          ) : (
            <Avatar
              sx={{ bgcolor: red[500], width: 100, height: 100 }}
              aria-label="recipe"
            >
              <h1>{FirstName[0]}</h1>
            </Avatar>
          )}
          {
            <>
              <div className="textinf">
                {FirstName} {LastName}
              </div>

              <div className="numberinf">{Phone}</div>
              <div className="iconbuttondiv">
                <IconButton
                  color="primary"
                  variant="outlined"
                  sx={{
                    backgroundColor: "white",
                    "&:hover": {
                      background: "rgba(25, 118, 210, 0.7843137255);",
                      color: "white",
                    },
                  }}
                  aria-label="add to shopping cart"
                >
                  <MessageOutlinedIcon />
                </IconButton>
                <IconButton
                  color="error"
                  sx={{
                    backgroundColor: "white",
                    "&:hover": {
                      background: "red",
                      color: "white",
                    },
                  }}
                  aria-label="add to shopping cart"
                >
                  <CallOutlinedIcon />
                </IconButton>
                <IconButton
                  color="success"
                  sx={{
                    backgroundColor: "white",
                    "&:hover": {
                      background: "#4caf50",
                      color: "white",
                    },
                  }}
                  aria-label="add to shopping cart"
                >
                  <EmailOutlinedIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  sx={{
                    backgroundColor: "white",
                    "&:hover": {
                      background: "#ba68c8",
                      color: "white",
                    },
                  }}
                  aria-label="add to shopping cart"
                >
                  <VideoCameraBackOutlinedIcon />
                </IconButton>
              </div>
            </>
          }
        </div>
        <div className="directoryinf">
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            <ListItem alignItems="flex-start">
              <TextField
                fullWidth
                id="standard-disabled1"
                label="First Name"
                placeholder={FirstName}
                variant="standard"
                onChange={nameChange}
                InputLabelProps={{
                  shrink: true,
                }}
                inputRef={inputRef1}
              />
              {/* <input type="text" value={searchString}  onChange={(e) => setSearchString(e.target.value)}   /> */}
            </ListItem>

            <ListItem alignItems="flex-start">
              <TextField
                fullWidth
                id="standard-disabled2"
                label="Last Name"
                placeholder={LastName}
                variant="standard"
                onChange={LastChange}
                InputLabelProps={{
                  shrink: true,
                }}
                inputRef={inputRef2}
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <TextField
                fullWidth
                id="standard-disabled3"
                label="Phone"
                placeholder={Phone}
                variant="standard"
                onChange={phoneChange}
                InputLabelProps={{
                  shrink: true,
                }}
                inputRef={inputRef3}
              />
            </ListItem>

            <ListItem alignItems="flex-start">
              <ListItemText
                sx={{ cursor: "pointer" }}
                primary="Add to favourites"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="rgba(130, 130, 130, 0.6)"
                    ></Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="middle" />
            <div className="iconbuttondiv">
              <IconButton
                color="primary"
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                  border: "1px solid rgba(25, 118, 210, 0.7843137255);",
                  "&:hover": {
                    background: "rgba(25, 118, 210, 0.7843137255);",
                    color: "white",
                  },
                }}
                aria-label="add to shopping cart"
              >
                <FavoriteBorderOutlinedIcon />
              </IconButton>
              <IconButton
                color="success"
                sx={{
                  backgroundColor: "white",
                  border: "1px solid #4caf50;",

                  "&:hover": {
                    background: "#4caf50",
                    color: "white",
                  },
                }}
                aria-label="add to shopping cart"
              >
                <EditLocationAltOutlinedIcon />
              </IconButton>
              <IconButton
                onClick={handleRemove}
                color="error"
                sx={{
                  backgroundColor: "white",
                  border: "1px solid red",

                  "&:hover": {
                    background: "red",
                    color: "white",
                  },
                }}
                aria-label="add to shopping cart"
              >
                <DeleteOutlinedIcon />
              </IconButton>

              <Button
                variant="contained"
                onClick={handleEditSave}
                endIcon={<SendIcon />}
              >
                Save
              </Button>
            </div>
          </List>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
