import React, { useState } from 'react';
import { Text, View } from 'react-native';
import WebView from 'react-native-webview';
import styled from 'styled-components';

const Wrapper = styled(View)`
  height: 100%;
`;

interface Place {
  id: string;
  content: string;
  position: {
    lat: string;
    lng: string;
  };
}

const MainScreen = () => {
  const [place, setPlace] = useState<Place | null>();

  // 웹뷰 -> 앱
  const onMessage = (e: any) => {
    const data: Place = JSON.parse(e.nativeEvent.data);
    setPlace(data);
  };

  return (
    <Wrapper>
      <WebView source={{ uri: 'https://eunseong.loca.lt' }} onMessage={onMessage} />
    </Wrapper>
  );
};

export default MainScreen;
