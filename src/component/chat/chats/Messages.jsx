import { Box, makeStyles } from "@material-ui/core";
import React, { useState, useContext, useEffect, useRef } from "react";
import Footer from "./Footer";
import Message from "./Message";
import { AccountContext } from "../../../context/AccountProvider";
import { newMessages, getMessage } from "../../../service/Api";

const useStyle = makeStyles({
  wrapper: {
    backgroundImage: `url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"})`,
    // height: 'calc(100% - 114px)',
    backgroundSize: "50%",
  },
  component: {
    height: "79vh",
    // overflow: "scroll",
    overflowY: "scroll",
  },
  container: {
    padding: "1px 80px",
  },
});

const Messages = ({ person, conversation }) => {
  const classes = useStyle();
  const { account, socket, newMessageFlag, setNewMessageFlag } =
    useContext(AccountContext);

  const [messages, setMessages] = useState([]);
  const [incomingMessage, setIncomingMessage] = useState(null);
  const [value, setValue] = useState();

  const scrollRef = useRef();

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    const getMassegeDetails = async () => {
      const response = await getMessage(conversation._id);
      setMessages(response.data);
    };
    getMassegeDetails();
  }, [conversation?._id, person._id, newMessageFlag]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [messages]);

  useEffect(() => {
    incomingMessage &&
      conversation?.members?.includes(incomingMessage.sender) &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);

  const receiverId = conversation?.members?.find(
    (member) => member !== account.googleId
  );

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (!value) return;
    if (code === 13) {
      let message = {
        sender: account.googleId,
        conversationId: conversation._id,
        text: value,
      };

      socket.current.emit("sendMessage", {
        senderId: account.googleId,
        receiverId,
        text: value,
      });

      await newMessages(message);
      setValue("");
      setNewMessageFlag((prev) => !prev);
    }
  };

  return (
    <>
      <Box className={classes.wrapper}>
        <Box className={classes.component}>
          {messages &&
            messages.map((messages) => (
              <Box className={classes.container}>
                <Message messages={messages} />
              </Box>
            ))}
        </Box>
        <Footer sendText={sendText} value={value} setValue={setValue} />
      </Box>
    </>
  );
};

export default Messages;
