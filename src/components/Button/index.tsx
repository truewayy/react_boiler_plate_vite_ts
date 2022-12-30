import styled from 'styled-components';
import { ButtonProps, StyledButtonProps } from '../../interface/button';

const Button = ({ children, onClick, disabled, width }: ButtonProps) => (
  <CustomButton onClick={onClick} disabled={disabled} width={width}>
    {children}
  </CustomButton>
);

export default Button;

const CustomButton = styled.button<StyledButtonProps>`
  width: ${({ width }) => width};
  border-radius: 15px;
  padding: 10px 30px;
  color: #000;
  background-color: #fff;
  cursor: pointer;
`;
