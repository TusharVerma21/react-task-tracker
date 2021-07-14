import { useLocation } from "react-router-dom";

import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
  /*const onButtonClick = () => {
    console.log("click");
  };*/

  const location = useLocation();

  return (
    /*<div>
      <h1>{props.title}</h1>
    </div>*/
    <header className="header">
      <h1>{props.title}</h1>

      {location.pathname === "/" && (
        <Button
          text={props.showAdd ? "Close" : "Add"}
          className={props.showAdd ? ".show" : ".btn .dont-show"}
          onClick={props.onToggleAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

/*
// Styles in Js
const HeadingStyle = {
  color: "red",
  backgroundColor: "lightblue",
};
*/

export default Header;
