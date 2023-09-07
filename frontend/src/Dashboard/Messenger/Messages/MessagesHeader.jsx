import PropTypes from "prop-types";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

import Avatar from "../../../shared/components/Avatar";

const MainContainer = styled("div")({
  width: "98%",
  display: "column",
  marginTop: "10px",
});

const MessagesHeader = ({ name }) => {
  return (
    <MainContainer>
      <Avatar large username={name} />
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "white",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          color: "#b9bbbe",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        This is the beginning of your conversation with {name}
      </Typography>
    </MainContainer>
  );
};

MessagesHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

MessagesHeader.defaultProps = {
  name: "",
};

export default MessagesHeader;
