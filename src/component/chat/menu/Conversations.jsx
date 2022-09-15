import React, { useEffect, useState, useContext } from "react";
import { getUsers } from "../../../service/Api";
import Conversation from "./Conversation";
import { AccountContext } from "../../../context/AccountProvider";
import { Box, makeStyles, Divider } from "@material-ui/core";

const useStyle = makeStyles({
  component: {
    height: "81vh",
    overflow: "overlay",
  },
});

const Conversations = ({ text }) => {
  const classes = useStyle();
  const [users, setUsers] = useState([]);

  const { account, socket, setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      const filterData = data.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filterData);
    };
    fetchData();
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUser", account.googleId);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [account]);

  return (
    <Box className={classes.component}>
      {users &&
        users.map(
          (user, index) =>
            user.googleId !== account.googleId && (
              <>
                <Conversation user={user} />
                {users.length !== index + 1 && (
                  <Divider className={classes.divider} />
                )}
              </>
            )
        )}
    </Box>
  );
};

export default Conversations;
