import React from "react";
import LaunchIcon from "@material-ui/icons/Launch";

import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
`;

const StyledLaunchIcon = styled(LaunchIcon)`
  width: 0.5em;
  padding-left: 2px;
`;

const MyUrlField = ({ record = {}, source }) => {
  return (
    <StyledLink href={record[source]}>
      {record[source]}
      <StyledLaunchIcon />
    </StyledLink>
  );
};

export default MyUrlField;

/*
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LaunchIcon from "@material-ui/icons/Launch";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  },
  icon: {
    width: "0.5em",
    paddingLeft: 2,
  },
});

const MyUrlField = ({ record = {}, source }) => {
  const classes = useStyles();
  return (
    <a href={record[source]} className={classes.link}>
      {record[source]}
      <LaunchIcon className={classes.icon} />
    </a>
  );
};

export default MyUrlField;
*/
