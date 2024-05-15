import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import PropTypes from "prop-types";

function ReusableButton({
  width,
  backgroundColor,
  color,
  size,
  onClick,
  icon,
  iconFlip = "normal",
  text,
}) {
  return (
    <>
      <Button
        style={{
          width: width,
          background: backgroundColor,
          color: color,
        }}
        size={size}
        onClick={onClick}
      >
        <FontAwesomeIcon
          icon={icon}
          flip={iconFlip}
          style={{
            marginRight: "4px",
          }}
        />
        {text}
      </Button>
    </>
  );
}

ReusableButton.propTypes = {
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  iconFlip: PropTypes.string,
  text: PropTypes.string,
};

export default ReusableButton;
