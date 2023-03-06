import * as React from "react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import aboutIcon from "../../../assets/about_icon.svg";
import skillsIcon from "../../../assets/skills_icon.svg";
import projectsIcon from "../../../assets/projects_icon.svg";
import homeIcon from "../../../assets/home_icon.svg";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const links = [
  {
    label: "Home",
    path: "#home",
    icon: homeIcon,
  },
  {
    label: "About me",
    path: "#about",
    icon: aboutIcon,
  },
  {
    label: "Skills",
    path: "#skills",
    icon: skillsIcon,
  },
  {
    label: "My projects",
    path: "#projects",
    icon: projectsIcon,
  },
];

export const Navigation = ({ isVisible }) => (
  <motion.ul variants={variants} className="mobileNavContainer">
    {links.map((item) => (
      <MenuItem
        key={item.label}
        component={HashLink}
        icon={item.icon}
        text={item.label}
        {...item}
        isVisible={isVisible}
      />
    ))}
  </motion.ul>
);
