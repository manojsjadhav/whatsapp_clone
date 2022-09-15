import React, { createContext } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

export const TempletContext = createContext(null);

const TempletProvider = ({ children }) => {
  const theme = createTheme({
    overrides: {
      MuiDrawer: {
        paperAnchorLeft: {
          height: "95%",
          top: 16,
          width: "27.8%",
          left: 61,
          boxShadow: "none",
        },
      },
      MuiBackdrop: {
        root: {
          backgroundColor: "unset",
        },
      },
    },
  });

  return (
    <TempletContext.Provider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </TempletContext.Provider>
  );
};

export default TempletProvider;
