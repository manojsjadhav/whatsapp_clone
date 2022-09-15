import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Header from "./Header";
import Conversations from "./Conversations";
import Search from "./Search";

const Menu = () => {
  const [text, setText] = useState("");
  return (
    <>
      <Box>
        <Header />
        <Search setText={setText} />
        <Conversations text={text} />
      </Box>
    </>
  );
};

export default Menu;
