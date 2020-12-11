/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-scroll";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import TheatersIcon from "@material-ui/icons/Theaters";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const useStyles = makeStyles(styles);

const iconStyle = {
  fontSize: 22,
  marginTop: 0,
  marginRight: 0,
};

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="music-tooltip"
          title="My Inspirations"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="myinspirations" className={classes.navLink} offset={-50}>
            <AccountCircleIcon style={iconStyle} />
          </Link>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="videos-tooltip"
          title="Vieos"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="whatido" className={classes.navLink} offset={-50}>
            <TheatersIcon style={iconStyle} />
          </Link>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="news-tooltip"
          title="News"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="myprojects" className={classes.navLink} offset={-50}>
            <MusicNoteIcon style={iconStyle} />
          </Link>
        </Tooltip>
      </ListItem>
    </List>
  );
}
