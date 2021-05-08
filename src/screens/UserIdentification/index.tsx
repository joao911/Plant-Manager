import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Content,
  Form,
  Title,
  Input,
  Icon,
  Footer,
  Key,
  Header,
  Without,
} from "./styles";

import { rh } from "../../utils/responsive";
import colors from "../../utils/styles/colors";
import { Platform } from "react-native";
import { ButtonText } from "../../components/Button/styles";
import { Button } from "../../components/Button";

const UserIdentification: React.FC = () => {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!name);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputChange = (value: string) => {
    setIsFilled(!!value);
    setName(value);
  };

  const handleSubmit = () => {
    navigation.navigate("Confirmation");
  };

  return (
    <Container>
      <Key behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Content>
          <Form>
            <Header>
              {isFilled ? (
                <Icon>
                  <Entypo
                    name="emoji-happy"
                    size={rh(54)}
                    color={colors.blue}
                  />
                </Icon>
              ) : (
                <Icon>
                  <MaterialCommunityIcons
                    name="emoticon-happy-outline"
                    size={rh(54)}
                    color={colors.blue}
                  />
                </Icon>
              )}
              <Title>Como podemos chamar você?</Title>
            </Header>
            <Input
              placeholder="Digite um nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              isFocused={isFocused}
              isFilled={isFilled}
              onChangeText={handleInputChange}
            />
            <Footer>
              <Button title="Confirmar" onPress={handleSubmit} />
            </Footer>
          </Form>
        </Content>
      </Key>
    </Container>
  );
};

export default UserIdentification;
