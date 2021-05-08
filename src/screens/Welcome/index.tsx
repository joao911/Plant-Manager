import React from "react";
import { Feather } from "@expo/vector-icons";

import { Container, Title, Image, SubTitle, Button, Wrapper } from "./styles";

import wateringImg from "../../assets/watering.png";
import { rh } from "../../utils/responsive";
import colors from "../../utils/styles/colors";
import { useNavigation } from "@react-navigation/native";

const Welcome: React.FC = () => {
  const navigation = useNavigation();
  const handleStart = () => {
    navigation.navigate("UserIdentification");
  };
  return (
    <Container>
      <Wrapper>
        <Title>
          Gerencie{"\n"} suas plantas de {"\n"} forma fácil
        </Title>
        <Image source={wateringImg} />
        <SubTitle>
          Não esqueça de regar suas plantas. Nós cuidamos de lembrar você sempre
          que precisar
        </SubTitle>
        <Button activeOpacity={0.7} onPress={handleStart}>
          <Feather name="chevron-right" size={rh(32)} color={colors.white} />
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Welcome;
