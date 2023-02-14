import * as React from "react";

import { useState } from "react";
import { Tabs, Tab, Button, Box } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import { makeStyles } from "@mui/styles";

const links = [
  {
    label: "Section 1",
    path: "#home",
  },
  {
    label: "Section 2",
    path: "#services",
  },
  {
    label: "Section 3",
    path: "#testimonial",
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
  // const [tabValue, setTabValue] = useState(0);
  const [value, setValue] = useState(0);
  // const location = useLocation();
  const classes = useStyles();

  // useEffect(() => {
  //   setValue(links.findIndex((link) => link.path === location.pathname));
  // }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <header>
      <Box
        sx={{
          display: "flex",
          height: 70,
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          // margin: 2,
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
                // sx={{
                //   display: "block",
                //   py: 4,
                // }}
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
        >
          Contact me
        </Button>
      </Box>
    </header>
  );
};
export default DesktopNav;
