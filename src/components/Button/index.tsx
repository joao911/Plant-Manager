import React from "react";

import { Container, ButtonText } from "./styles";

interface ButtonProps {
  title: string;
}
const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <Container activeOpacity={0.7}>
      <ButtonText> {title}</ButtonText>
    </Container>
  );
};

export default Button;
