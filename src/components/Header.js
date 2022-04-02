import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
    /*const onClick = () => {
        console.log('Click1')
    }
    const onClick1 = () => {
        console.log('Click2')
    }
      <Button onClick={onClick1}/>
      */

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

/*
<h1 style={headingStyle}></h1>
const headingStyle = {
    color: 'blue',
    backgroundColor: 'green'
}*/

export default Header;
