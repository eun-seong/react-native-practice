import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  border-width: 0px;
  color: #0045b0;
  /* padding: 13px 16px 14px 16px; */
  box-sizing: border-box;
  font-size: 16px;
  background: #f3f6ff;
  border-radius: 4px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
`;

const Button = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
