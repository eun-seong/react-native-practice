import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styled from 'styled-components/native';

const MainScreen = () => {
  return (
    <Wrapper>
      <Map
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </Wrapper>
  );
};

export default MainScreen;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const MapWrapper = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Map = styled(MapView)`
  width: 100%;
  flex: 1;
`;
