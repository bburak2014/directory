import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

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
import SendIcon from "@mui/icons-material/Send";
export default function FormDialog({ open, setOpen, setData, data }) {
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();

  const [Phone, setPhone] = useState();
  const [id, Setid] = useState(data.length);
  const handleClose = () => {
    setOpen(false);
  };
  const AddData = () => {
    Setid((id) => id + 1);

    setData((data) => [...data, { id, FirstName, LastName, Phone }]);
  };
  const nameChange = (e) => {
    setFirstName(e.target.value);
  };
  const LastChange = (e) => {
    setLastName(e.target.value);
  };
  const phoneChange = (e) => {
    setPhone(e.target.value);
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <div>
          <div
            className="CardDetails"
            style={{ marginTop: 0, boxShadow: "0px 0px 0px 0px #aaa" }}
          >
            <div className="imagebackground">
              <Avatar
                sx={{ bgcolor: red[500], width: 100, height: 100 }}
                aria-label="recipe"
              ></Avatar>

              {
                <>
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
                    placeholder="First Name"
                    variant="standard"
                    onChange={nameChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </ListItem>

                <ListItem alignItems="flex-start">
                  <TextField
                    fullWidth
                    id="standard-disabled2"
                    label="Last Name"
                    placeholder="Last Name"
                    variant="standard"
                    onChange={LastChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </ListItem>
                <ListItem alignItems="flex-start">
                  <TextField
                    fullWidth
                    id="standard-disabled3"
                    label="Phone"
                    placeholder="Phone"
                    variant="standard"
                    onChange={phoneChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </ListItem>

                <Divider variant="middle" />
                <div className="iconbuttondiv">
                  <Button onClick={handleClose}>Cancel</Button>

                  <Button
                    variant="contained"
                    onClick={AddData}
                    endIcon={<SendIcon />}
                  >
                    Save
                  </Button>
                  <DialogActions></DialogActions>
                </div>
              </List>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
