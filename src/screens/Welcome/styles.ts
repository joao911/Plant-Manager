import styled from "styled-components/native";
import { rh, rw } from "../../utils/responsive";
import colors from "../../utils/styles/colors";
import font from "../../utils/styles/font";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0px ${rh(20)}px;
`;

export const Title = styled.Text`
  font-size: ${rh(32)}px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
  font-family: ${font.heading};
  line-height: ${rh(38)}px;
`;
export const Image = styled.Image`
  width: ${rw(292)}px;
  height: ${rh(284)}px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: ${rh(18)}px;
  padding: 0px 20px;
  font-family: ${font.text};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  justify-content: center;
  border-radius: ${rh(16)}px;
  margin-bottom: ${rh(10)}px;
  height: ${rh(56)}px;
  height: ${rh(56)}px;
  padding: 0px ${rh(10)}px;
`;
