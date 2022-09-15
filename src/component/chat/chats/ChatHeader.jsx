import { Box, Typography, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { UserContext } from "../../../context/UserProvider";
import { Videocam, MoreVert, Search } from "@material-ui/icons";
import { AccountContext } from "../../../context/AccountProvider";

const useStyle = makeStyles({
  component: {
    display: "flex",
    height: 35,
    background: "#ededed",
    padding: "10px 16px ",
    alignItems: "center",
  },
  avatar: {
    height: 37,
    width: 37,
    borderRadius: "50%",
  },
  icons: {
    marginLeft: "auto",
    "&>*": {
      marginLeft: 2,
      padding: 13,
      color: "#919191",
      cursor: "pointer",
    },
  },
  name: {
    marginLeft: 15,
  },
  status: {
    fontSize: 12,
    marginLeft: 15,
    color: "rgb(0,0,0,0.6)",
  },
});

const ChatHeader = () => {
  const classes = useStyle();
  const { person } = useContext(UserContext);
  const { activeUsers } = useContext(AccountContext);

  // console.log(activeUsers.userId, person.googleId);
  // console.log(person);
  const Url = person.imageUrl;
  return (
    <Box className={classes.component}>
      <img src={Url} alt="" className={classes.avatar} />
      <Box>
        <Typography className={classes.name}>{person.name}</Typography>
        <Typography className={classes.status}>
          {activeUsers?.find((user) => user.userId === person.googleId)
            ? "Online"
            : "Offline"}
        </Typography>
      </Box>
      <Box className={classes.icons}>
        <Videocam />
        <Search />
        <MoreVert />
      </Box>
    </Box>
  );
};

export default ChatHeader;
