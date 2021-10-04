import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import KaKoMap from '@/components/KaKaoMap';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const MainPage = () => {
  const inputRef = useRef<any>();
  const [keyword, setKeyword] = useState<string>('');

  const onPressed = () => {
    if (!inputRef.current) return;

    setKeyword(inputRef.current.value);
  };

  return (
    <Wrapper>
      <input placeholder="장소를 입력하세요" ref={inputRef} />
      <button onClick={onPressed}>검색</button>
      <KaKoMap keyword={keyword} />
    </Wrapper>
  );
};

export default MainPage;
