import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { createSwitchNavigator, NavigationScreenProp } from 'react-navigation';
import styled from 'styled-components/native';
import LoginButton from '../components/LoginButton';
import SocialWebviewModal from '../components/SocialWebviewModal';

interface LoginProps {
  navigation: NavigationScreenProp<any, any>;
}

const LoginScreen = (props: LoginProps) => {
  const { navigation } = props;
  const [socialModalVisible, setSocialModalVisible] = useState<boolean>(false);
  const [source, setSource] = useState<undefined | string>(undefined);

  const closeSocialModal = async (token?: string) => {
    setSocialModalVisible(!socialModalVisible);
    if (token) {
      try {
        console.log(token);

        await AsyncStorage.setItem('userToken', token);
        navigation.navigate('App');
      } catch (e) {
        console.log('[Signup 에러]', e);
      }
    }
  };

  const loginWithSocial = (social: string) => {
    setSocialModalVisible(!socialModalVisible);
    setSource(
      `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=Idvq5aCHJ0BohQIPOban&state=STATE_STRING&redirect_uri=http://localhost:3000/api/auth/naver`,
    );
    // setSource(`http://localhost:3000/auth/${social}`);
  };

  return (
    <Wrapper>
      {source && (
        <SocialWebviewModal
          visible={socialModalVisible}
          source={source}
          closeSocialModal={closeSocialModal}
        />
      )}
      <LoginButton title={'naver'} onPress={() => loginWithSocial('naver')} />
    </Wrapper>
  );
};

export default LoginScreen;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
