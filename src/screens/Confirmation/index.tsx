import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Container, Content, Icon, SubTitle, Title, Footer } from "./styles";
import colors from "../../utils/styles/colors";
import { rh } from "../../utils/responsive";
import { Button } from "../../components/Button";

const Confirmation: React.FC = () => {
  return (
    <Container>
      <Content>
        <Icon>
          <MaterialCommunityIcons
            name="emoticon-happy-outline"
            size={rh(78)}
            color={colors.blue}
          />
        </Icon>
        <Title>Prontinho</Title>
        <SubTitle>
          Vamos começar a cuidar das suas plantinhas com muito cuidado
        </SubTitle>
        <Footer>
          <Button title="Começar" />
        </Footer>
      </Content>
    </Container>
  );
};

export default Confirmation;
