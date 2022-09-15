import React, { useState } from "react";
import { Box, makeStyles, InputBase } from "@material-ui/core";
import { Mic, AttachFile, EmojiEmotionsOutlined } from "@material-ui/icons";
import EmojiDialog from "./EmojiDialog";

const useStyle = makeStyles((theme) => ({
  footer: {
    height: "55px",
    background: "#ededed",
    widh: "100%",
    bottom: 0,
    display: "flex",
    alignItems: "center",
    padding: "0 15px",
    "&>*": {
      color: "#919191",
      margin: 5,
    },
  },
  search: {
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    width: "calc(97% - 100px)",
  },
  inputRoot: {
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: 25,
    fontSize: 14,
    height: 20,
    width: "100%",
  },
  clipIcon: {
    transform: "rotate(-40deg)",
  },
}));

const Footer = ({ sendText, value, setValue }) => {
  const classes = useStyle();

  const [open, setOpen] = useState(false);

  const openLoginDialog = () => {
    setOpen(true);
  };

  return (
    <Box className={classes.footer}>
      <EmojiEmotionsOutlined onClick={() => openLoginDialog()} style={{cursor:"pointer"}} />
      <AttachFile className={classes.clipIcon} />

      <Box className={classes.search}>
        <InputBase
          placeholder="Type a message"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => sendText(e)}
          value={value}
        />
      </Box>

      <Mic style={{cursor:"pointer"}}/>
      <EmojiDialog
        open={open}
        setOpen={setOpen}
        setValue={setValue}
        value={value}
        // showEmoji={showEmoji}
        // ref={ref}
      />
    </Box>
  );
};

export default Footer;
