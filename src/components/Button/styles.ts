import styled from "styled-components/native";
import { rh } from "../../utils/responsive";
import colors from "../../utils/styles/colors";
import font from "../../utils/styles/font";

export const Container = styled.TouchableOpacity`
  background-color: ${colors.green};
  height: ${rh(56)}px;
  border-radius: ${rh(16)}px;
  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: ${rh(16)}px;
  font-family: ${font.heading};
`;
