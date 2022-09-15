import { Box, Dialog, withStyles, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import ChatBox from "./chats/ChatBox";
import Menu from "./menu/Menu";
import { UserContext } from "../../context/UserProvider";
import EmptyChat from "../chat/chats/EmptyChat";

const style = {
  dialogPaper: {
    width: "91%",
    height: "95%",
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
  leftComponent: {
    minWidth: 380,
  },
  rightComponent: {
    borderLeft: "1px solid rgba(0, 0, 0, 0.14)",
    width: "70%",
    minWidth: 300,
    height: "100%",
  },
});

const ChatDialog = ({ classes }) => {
  const className = useStyle();
  const { person } = useContext(UserContext);
  return (
    <Dialog
      classes={{ paper: classes.dialogPaper }}
      open={true}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
      <Box className={className.component}>
        <Box className={className.leftComponent}>
          <Menu />
        </Box>
        <Box className={className.rightComponent}>
          {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
        </Box>
      </Box>
    </Dialog>
  );
};

export default withStyles(style)(ChatDialog);
