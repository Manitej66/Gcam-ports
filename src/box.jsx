import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";
import AlertDialog from "./alert";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";

const Box = ({ name, color, link, version, config }) => {
  const [open, setOpen] = React.useState(false);
  const [click, setClick] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <Button
        onClick={handleClickOpen}
        className="box"
        style={{
          backgroundImage: color,
        }}
      >
        {name}
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Download Files
        </DialogTitle>
        <DialogContent dividers>
          <Typography
            gutterBottom
            style={{
              fontFamily: "Gilroy",
              fontWeight: "bold",
              margin: 10,
              fontSize: 30,
            }}
          >
            {name}
          </Typography>
          <Typography
            gutterBottom
            style={{
              fontFamily: "Gilroy",
              fontWeight: "bold",
              margin: 10,
              fontSize: 30,
            }}
          >
            V{version}
          </Typography>
          <Typography gutterBottom>
            <Button
              href={link}
              color="primary"
              className="bb"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #30cfd0 0%, #330867 100%)",
              }}
            >
              Download APK
            </Button>
          </Typography>
          <Typography gutterBottom>
            <Button
              href={config}
              color="primary"
              className="bb"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)",
              }}
            >
              Download Config
            </Button>
          </Typography>
          <Typography gutterBottom>
            <Button
              href="https://www.celsoazevedo.com/files/android/google-camera/f/settings09/"
              color="primary"
              className="bb"
            >
              How To use config?
            </Button>
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Box;
