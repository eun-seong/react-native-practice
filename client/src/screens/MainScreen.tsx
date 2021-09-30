import React from 'react';
import env from '../../environments';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

const MainScreen = () => {
  return (
    <Wrapper>
      <GooglePlacesAutocomplete
        placeholder="장소를 입력해주세요"
        query={{
          key: env.GOOGLE_MAPS_API_KEY,
          language: 'ko',
        }}
        onPress={(data, details = null) => alert(data)}
        onFail={(error) => alert(error)}
      />
    </Wrapper>
  );
};

export default MainScreen;

const Wrapper = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #ecf0f1;
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
