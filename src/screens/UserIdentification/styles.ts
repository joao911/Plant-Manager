import styled, { css } from "styled-components/native";
import { rh } from "../../utils/responsive";
import colors from "../../utils/styles/colors";
import font from "../../utils/styles/font";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Key = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0px ${rh(54)}px;
`;
export const Header = styled.View``;

export const Icon = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: ${rh(20)}px;
  font-size: ${rh(25)}px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${font.heading};
  line-height: ${rh(32)}px; ;
`;
interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
}
export const Input = styled.TextInput<InputProps>`
  border-bottom-width: ${rh(1)}px;
  border-color: ${colors.gray};
  width: 100%;
  font-size: ${rh(18)}px;
  margin-top: ${rh(50)}px;
  padding: ${rh(10)}px;
  text-align: center;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${colors.heading};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      border-color: ${colors.heading};
    `}
`;

export const Footer = styled.View`
  margin-top: ${rh(40)}px;
  padding: 0px ${rh(20)}px;
`;
