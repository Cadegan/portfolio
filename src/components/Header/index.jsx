import * as React from "react";

import { useState } from "react";
import { Tabs, Tab, Button, Box } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import { makeStyles } from "@mui/styles";

const links = [
  {
    label: "About me",
    path: "#about",
  },
  {
    label: "Skills",
    path: "#skills",
  },
  {
    label: "My projects",
    path: "#projects",
  },
];

const useStyles = makeStyles({
  tabs: {
    "& .MuiTabs-indicator": {
      // backgroundColor: "#FFA600",
      height: 0,
    },
    "& .MuiTab-root.Mui-selected": {
      color: "#FFA600",
    },
  },
});

const DesktopNav = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <header>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "visible",
          position: "fixed",
          zIndex: 1000,
          backdropFilter: "blur(20px)",
          backgroundColor: "rgba(255,255,255,0.72)",
          boxShadow: "inset 0px -1px 1px #e7ebf060",
        }}
      >
        <HashLink className="logo" to={"#home"} smooth>
          <span className="firstLetter">J</span>
          <span>ean-charles</span>
        </HashLink>
        <nav>
          <Tabs value={value} className={classes.tabs} onChange={handleChange}>
            {links.map(({ label, path }) => (
              <Tab
                key={label}
                label={label}
                component={HashLink}
                to={path}
                smooth
                sx={{ py: 3.5 }}
              />
            ))}
          </Tabs>
        </nav>
        <Button
          variant="contained"
          color="warning"
          sx={{
            boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.03)",
            backgroundColor: "#FFA600",
            m: 2,
          }}
          href="mailto:jeancharlesmaurice@gmail.com"
        >
          Contact me
        </Button>
      </Box>
    </header>
  );
};
export default DesktopNav;
