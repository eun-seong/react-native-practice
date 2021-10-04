import React from 'react';

interface InfoWindowProps {
  marker: any;
}

declare global {
  interface Window {
    ReactNativeWebView: any;
  }
}

const InfoWindow = (props: InfoWindowProps) => {
  if (window.ReactNativeWebView) {
    // 웹뷰 -> 앱
    window.ReactNativeWebView.postMessage(JSON.stringify(props.marker));
  } else {
    console.log(props.marker);
  }
  return <div style={{ color: '#000' }}>{props.marker.content}</div>;
};

export default InfoWindow;
