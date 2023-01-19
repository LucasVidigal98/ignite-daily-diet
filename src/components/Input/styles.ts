import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const InputText = styled(TextInput)`
  width: 327px;
  height: 48px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
  padding-left: 24px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};

  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_300};
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;