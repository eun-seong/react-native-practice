import React from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';

type TitleType = 'NAVER' | 'KAKAO';

interface LoginButtonProps {
  title: TitleType;
}

export default function LoginButton(props: LoginButtonProps) {
  const { title } = props;

  return (
    <Wrapper onPress={() => Alert.alert('pressed', 'pressed')}>
      <Title>{title}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  background-color: #3eaf0e;
`;

const Title = styled.Text`
  font-weight: bold;
  color: white;
`;
