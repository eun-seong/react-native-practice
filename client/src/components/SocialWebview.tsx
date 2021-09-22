import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useRef } from 'react';
import { Button } from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import { NavigationScreenProp } from 'react-navigation';
import styled from 'styled-components/native';

let userAgent =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1';

interface SocialWebviewProps {
  source: {
    uri: string;
  };
  closeSocialModal: (token?: string) => void;
}

const SocialWebview = (props: SocialWebviewProps) => {
  const { source, closeSocialModal } = props;
  const webview = useRef(null);

  const INJECTED_JAVASCRIPT = ` (function() {
        if(window.document.getElementsByTagName("pre").length>0) {
          window.ReactNativeWebView.postMessage((window.document.getElementsByTagName("pre")[0].innerHTML));
      }})();`;

  const handleMessage = async (e: WebViewMessageEvent) => {
    let result = JSON.parse(e.nativeEvent.data);

    if (!result.ok) {
      // TODO 실패했을 시 로직 추가
      console.log('실패');
      return;
    }

    const { data } = result;
    closeSocialModal(data.accessToken);
  };

  return (
    <Wrapper>
      <Button title={'닫기'} onPress={() => closeSocialModal()} />
      <WebView
        ref={webview}
        source={source}
        userAgent={userAgent}
        useWebKit={true}
        javaScriptEnabled={true}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        onMessage={handleMessage}
      />
    </Wrapper>
  );
};
export default SocialWebview;

const Wrapper = styled.SafeAreaView`
  flex: 1;
`;
