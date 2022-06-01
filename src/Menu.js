import FlexBox from "components/FlexBox";
import { Typography } from "@mui/material";
import React from "react";

const MobileCategoryImageBox = ({ subMenus }) => {
  return (
    <FlexBox flexDirection="column" alignItems="center" justifyContent="center">
      <Typography
        textAlign="center"
        fontSize="11px"
        lineHeight="1"
        mt={1}
        noWrap={false}
      >
        {subMenus.name}
      </Typography>
    </FlexBox>
  );
};

export default MobileCategoryImageBox;