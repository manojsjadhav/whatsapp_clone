import { Box, Dialog, withStyles } from "@material-ui/core";
import React from "react";
import Picker from "emoji-picker-react";

const style = {
  dialogPaper: {
    boxShadow: "none",
    borderRadius: 0,
    overflow: "hidden",
    marginRight: "12rem",
    marginTop: "15rem",
  },
};

const EmojiDialog = ({ open, setOpen, setValue, value, classes }) => {
  const handClick = () => {
    setOpen(false);
  };

  const emojiSelect = (e, emojiObject) => {
    setValue(emojiObject.emoji);
  };

  return (
    <Dialog
      open={open}
      onClose={handClick}
      classes={{ paper: classes.dialogPaper }}
    >
      <Box>
        <Picker onEmojiClick={emojiSelect} />
      </Box>
    </Dialog>
  );
};

export default withStyles(style)(EmojiDialog);
