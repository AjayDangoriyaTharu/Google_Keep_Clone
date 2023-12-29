import * as React from "react";
import Lightbulb from "@mui/icons-material/LightbulbOutlined";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Light = styled(Lightbulb)`
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
  margin-left: 33%;
  margin-top: 15vh;
`;
const EmptyNote = () => {
  return (
    <Container>
      <Light />
      <Text>Notes you add appears here..</Text>
    </Container>
  );
};

export default EmptyNote;
