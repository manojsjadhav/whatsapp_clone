import React, { useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import HeaderMenu from "./HeaderMenu";
import { Box, makeStyles } from "@material-ui/core";
import { Chat as MessageIcon } from "@material-ui/icons";
import { useContext } from "react";
import InfoDrawer from "../../drawer/Drawer";

const useStyle = makeStyles({
  header: {
    height: 35,
    background: "#ededed",
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    height: 37,
    width: 37,
    borderRadius: "50%",
    cursor: 'pointer',
  },
  icons: {
    marginLeft: "auto",
    "&>*": {
      marginLeft: 2,
      padding: 8,
      color: "#919191",
      cursor: "pointer",
    },
    "& :first-child": {
      fontSize: 22,
      marginRight: 8,
      marginTop: 3,
    },
  },
});

const Header = () => {
  const classes = useStyle();
  const { account } = useContext(AccountContext);
  const [open, setOpen] = useState(false);

  const toggeleDrawer = () => {
    setOpen(true);
  };

  return (
    <>
      <Box className={classes.header}>
        <img
          src={account.imageUrl}
          onClick={() => toggeleDrawer()}
          alt=""
          className={classes.avatar}
        />
        <Box className={classes.icons}>
          <MessageIcon />
          <HeaderMenu />
        </Box>
      </Box>
      <InfoDrawer open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
