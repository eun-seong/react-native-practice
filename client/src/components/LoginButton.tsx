import React from 'react';
import styled from 'styled-components/native';

type TitleType = 'naver' | 'kakao';

interface LoginButtonProps {
  title: TitleType;
  onPress: () => void;
}

export default function LoginButton(props: LoginButtonProps) {
  const { title, onPress } = props;

  return (
    <Wrapper onPress={onPress}>
      <Title>{title.toUpperCase()}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.TouchableOpacity`
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
