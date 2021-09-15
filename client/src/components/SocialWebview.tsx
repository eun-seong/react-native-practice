import React, { useRef } from 'react';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import styled from 'styled-components/native';

let userAgent =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1';

interface SocialWebviewProps {
  source: {
    uri: string;
  };
  closeSocialModal: () => void;
}

const SocialWebview = (props: SocialWebviewProps) => {
  const { source, closeSocialModal } = props;
  const webview = useRef(null);

  const INJECTED_JAVASCRIPT =
    '(function() {if(window.document.getElementsByTagName("pre").length>0){window.ReactNativeWebView.postMessage((window.document.getElementsByTagName("pre")[0].innerHTML));}})();';
  const _handleMessage = async (e: WebViewMessageEvent) => {
    let result = JSON.parse(e.nativeEvent.data);

    if (result.ok) {
      const { code } = result;
      console.log(code);
    }
    closeSocialModal();
  };

  return (
    <Wrapper>
      <WebView
        ref={webview}
        source={source}
        userAgent={userAgent}
        useWebKit={true}
        javaScriptEnabled={true}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        onMessage={_handleMessage}
      />
    </Wrapper>
  );
};
export default SocialWebview;

const Wrapper = styled.SafeAreaView`
  flex: 1;
`;
