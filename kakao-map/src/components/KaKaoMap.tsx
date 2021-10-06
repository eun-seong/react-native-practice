import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import InfoWindow from './InfoWindow';

interface KaKaoMapProps {
  keyword: string;
}

const KaKoMap = (props: KaKaoMapProps) => {
  const { keyword } = props;

  const [info, setInfo] = useState<any>();
  const [markers, setMarkers] = useState<any>([]);
  const [map, setMap] = useState<any>();

  useEffect(() => {
    if (!map || !keyword) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(keyword, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];
        console.log(data);

        for (let i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
            id: data[i].id,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  }, [map, keyword]);

  return (
    <Map
      center={{
        lat: 37.566826,
        lng: 126.9786567,
      }}
      style={{
        width: '100%',
        height: '100%',
      }}
      level={3}
      onCreate={setMap}
    >
      {markers.map((marker: any) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => setInfo(marker)}
          image={{
            src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다
            size: {
              width: 64,
              height: 69,
            }, // 마커이미지의 크기입니다
            options: {
              offset: {
                x: 27,
                y: 69,
              }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            },
          }}
        >
          {info && info.content === marker.content && <InfoWindow marker={marker} />}
        </MapMarker>
      ))}
    </Map>
  );
};

export default KaKoMap;
