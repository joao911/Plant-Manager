import styled from "styled-components/native";
import { rh, rw } from "../../utils/responsive";
import colors from "../../utils/styles/colors";
import font from "../../utils/styles/font";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${rh(22)}px;
  font-family: ${font.heading};
  text-align: center;
  line-height: ${rh(38)}px;
  color: ${colors.heading};
  margin-top: ${rh(15)}px;
`;
export const SubTitle = styled.Text`
  font-family: ${font.text};
  text-align: center;
  font-size: ${rh(17)}px;
  padding: 0px ${rh(10)}px;
  color: ${colors.heading};
`;

export const Footer = styled.View`
  width: ${rw(300)}px;
  margin-top: ${rh(40)}px;
  padding: 0px ${rh(20)}px;
`;
