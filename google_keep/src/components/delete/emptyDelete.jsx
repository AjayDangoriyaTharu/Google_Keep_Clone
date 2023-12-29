import * as React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Delete = styled(DeleteIcon)`
  font-size: 120px;
  color: #f0f0f0;
`;
const Text = styled(Typography)`
  font-size: 22px;
  color: #86808b;
`;
const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 350px;
  margin-top: 15vh;
`;
const EmptyDelete = () => {
  return (
    <Container>
      <Delete />
      <Text>Your deleted notes appear here..</Text>
    </Container>
  );
};

export default EmptyDelete;
