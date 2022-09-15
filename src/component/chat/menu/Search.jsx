import { Box, makeStyles, InputBase } from "@material-ui/core";
import React from "react";
import { Search as SearchIcon } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  component: {
    background: "#ffffff",
    padding: 8,
  },
  search: {
    position: "relative",
    borderRadius: 7,
    backgroundColor: "#f6f6f6",
    margin: 0,
    width: "100%",
  },
  searchIcon: {
    color: "#919191",
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
  },
  inputRoot: {
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: 65,
    fontSize: 14,
    height: 17,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const Search = ({ setText }) => {
  const classes = useStyle();
  return (
    <Box className={classes.component}>
      <Box className={classes.search}>
        <Box className={classes.searchIcon}>
          <SearchIcon fontSize="small" />
        </Box>
        <InputBase
          placeholder="Search or start a new chat"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setText(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default Search;
