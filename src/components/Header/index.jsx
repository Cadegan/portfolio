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
    label: "Experiences",
    path: "#experiences",
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
          backgroundColor: "white",
          overflow: "visible",
          position: "fixed",
          zIndex: 1000,
          boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.03)",
        }}
      >
        <div className="logo">
          <span className="firstLetter">J</span>
          <span>ean-charles</span>
        </div>
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
