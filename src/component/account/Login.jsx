import React from "react";
import {
  Dialog,
  withStyles,
  Box,
  Typography,
  makeStyles,
  List,
  ListItem,
} from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { clientId } from "../../constent/Data";
import { addUser } from "../../service/Api";

const style = {
  dialogPaper: {
    width: "60%",
    height: "95%",
    marginTop: "12%",
    boxShadow: "none",
    borderRadius: "0",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
};

const useStyle = makeStyles({
  component: {
    display: "flex",
  },
  rightComponent: {},
  leftComponent: {
    padding: "56px 0 56px 56px",
  },
  title: {
    fontSize: 26,
    marginBottom: 25,
    color: "#a7a8a8",
    fontFamily:
      "Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
    fontWeight: 400,
  },
  list: {
    "&>*": {
      fontSize: 18,
      padding: 0,
      marginTop: 15,
      lineHeight: "28px",
      color: "#4a4a4a",
    },
  },
  qrcode: {
    height: 264,
    width: 264,
    padding: "50px 0 0 50px",
  },
});

const Login = ({ classes }) => {
  const className = useStyle();
  const url = "https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg";
  const { account, setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    console.log("login success", res.profileObj);
    setAccount(res.profileObj);
    await addUser(res.profileObj);
  };

  const onLoginFail = () => {
    console.log("login fail");
  };

  return (
    <Dialog
      open={true}
      classes={{ paper: classes.dialogPaper }}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
      <Box className={className.component}>
        <Box className={className.leftComponent}>
          <Typography className={className.title}>
            To use whatsapp on your computer:
          </Typography>
          <List className={className.list}>
            <ListItem>1. Open whatsapp on your phone</ListItem>
            <ListItem>
              2. Tap menu or settings and select Linked devices
            </ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code
            </ListItem>
          </List>
        </Box>
        <Box
          className={className.rightComponent}
          style={{ position: "relative" }}
        >
          <img src={url} alt="qr" className={className.qrcode} />
          <Box style={{ position: "absolute", left: "50%", top: "50%" }}>
            <GoogleLogin
              clientId={clientId}
              buttonText=""
              isSignedIn={true}
              onSuccess={onLoginSuccess}
              onFailure={onLoginFail}
              cookiePolicy={"single_host_origin"}
            />
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default withStyles(style)(Login);
