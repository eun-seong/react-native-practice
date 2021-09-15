import React from 'react';
import styled from 'styled-components/native';
import LoginButton from '../components/LoginButton';

export default function LoginScreen() {
  return (
    <Wrapper>
      <LoginButton title={'NAVER'} />
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
