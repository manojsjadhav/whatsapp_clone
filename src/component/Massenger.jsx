import React, { useContext } from "react";
import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";
import Login from "./account/Login";
import { AccountContext } from "../context/AccountProvider";
import ChatDialog from "./chat/ChatDialog";

const useStyle = makeStyles({
  component: {
    background: "#DCDCDC",
    height: "100vh",
  },
  loginHeader: {
    height: 200,
    background: "#00bfa5",
    boxShadow: "none",
  },
  header: {
    height: 115,
    background: "#128c7e",
    boxShadow: "none",
  },
});

const Massenger = () => {
  const classes = useStyle();
  const { account } = useContext(AccountContext);
  return (
    <Box className={classes.component}>
      <AppBar className={account ? classes.header : classes.loginHeader}>
        <Toolbar></Toolbar>
      </AppBar>
      {account ? <ChatDialog /> : <Login />}
    </Box>
  );
};

export default Massenger;
