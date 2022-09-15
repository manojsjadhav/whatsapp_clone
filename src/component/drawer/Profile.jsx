import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const useStyle = makeStyles({
  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: "50%",
    padding: "18px 0",
  },
  nameContainer: {
    background: "#ffffff",
    padding: "12px 30px 2px",
    boxShadow: "0 1px 1px rgba(0,0,0,0.08)",
    "& :first-child": {
      fontSize: 14,
      color: "#009688",
    },
    "& :last-child": {
      color: "#4a4a4a",
      margin: "14px 0",
    },
  },
  description: {
    padding: "10px 20px 28px 30px",
    "&>*": {
      fontSize: 14,
      color: "rgba(0,0,0,0.45)",
    },
  },
});

const Profile = () => {
  const classes = useStyle();
  const { account } = useContext(AccountContext);
  return (
    <>
      <Box className={classes.imageContainer}>
        <img src={account.imageUrl} alt="dp" className={classes.image} />
      </Box>
      <Box className={classes.nameContainer}>
        <Typography>Your name</Typography>
        <Typography>{account.name}</Typography>
      </Box>
      <Box className={classes.description}>
        <Typography>
          This is not your username or pin. this name will be visible to your
          WhatsApp contact
        </Typography>
      </Box>
      <Box className={classes.nameContainer}>
        <Typography>About</Typography>
        <Typography>I don't want perfect life, I want happy life</Typography>
      </Box>
    </>
  );
};

export default Profile;
