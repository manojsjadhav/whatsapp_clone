import React, { useContext, useState, useEffect } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { AccountContext } from "../../../context/AccountProvider";
import { UserContext } from "../../../context/UserProvider";
import { setConversation, getConversation } from "../../../service/Api";

const useStyle = makeStyles({
  displayPicture: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    padding: "0 14px",
  },
  component: {
    display: "flex",
    padding: "13px 0",
    height: 40,
  },
  timestamp: {
    fontSize: 12,
    marginLeft: "auto",
    color: "#00000099",
    marginRight: 20,
  },
  text: {
    display: "block",
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 14,
  },
});

const Conversation = ({ user }) => {
  const classes = useStyle();
  const Url = user.imageUrl;

  const { account, socket, newMessageFlag } = useContext(AccountContext);
  const { setPerson } = useContext(UserContext);
  // console.log(user);

  const [message, setMessage] = useState({});

  useEffect(() => {
    const getConversationMessage = async () => {
      const data = await getConversation({
        sender: account.googleId,
        receiver: user.googleId,
      });
      setMessage({ text: data.message, timestamp: data.updatedAt });
    };
    getConversationMessage();
  }, [newMessageFlag]);

  const setUser = async () => {
    setPerson(user);
    await setConversation({
      senderId: account.googleId,
      receiverId: user.googleId,
    });
  };

  const getTime = (time) => {
    return time < 10 ? "0" + time : time;
  };

  return (
    <>
      <Box className={classes.component} onClick={() => setUser()}>
        <Box>
          <img src={Url} alt="" className={classes.displayPicture} />
        </Box>
        <Box>
          <Typography>{user.name}</Typography>
          {message.text && (
            <Typography className={classes.timestamp}>
              {getTime(new Date(message.timestamp).getHours())}:
              {getTime(new Date(message.timestamp).getMinutes())}
            </Typography>
          )}
        </Box>
        <Box>
          <Typography className={classes.text}>{message.text}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Conversation;
