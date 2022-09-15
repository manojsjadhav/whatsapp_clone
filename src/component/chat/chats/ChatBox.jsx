import { Box } from "@material-ui/core";
import React, { useContext, useState, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { UserContext } from "../../../context/UserProvider";
import { getConversation } from "../../../service/Api";
import { AccountContext } from "../../../context/AccountProvider";

const ChatBox = () => {
  const { person } = useContext(UserContext);
  const { account } = useContext(AccountContext);
  const [conversation, setConversation] = useState({});

  useEffect(() => {
    const getconversationDetial = async () => {
      const data = await getConversation({
        sender: account.googleId,
        receiver: person.googleId,
      });
      setConversation(data);
    };
    getconversationDetial();
  }, [person.googleId]);

  return (
    <Box>
      <ChatHeader />
      <Messages person={person} conversation={conversation} />
    </Box>
  );
};

export default ChatBox;
