import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';

const AuthLoadingScreen = (props: any) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const getUserToken = async () => {
    const token = await AsyncStorage.getItem('userToken');
    setUserToken(token);
    props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  useEffect(() => {
    getUserToken();
  }, []);

  return (
    <Wrapper>
      <Text>AuthLoading</Text>
    </Wrapper>
  );
};

export default AuthLoadingScreen;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
