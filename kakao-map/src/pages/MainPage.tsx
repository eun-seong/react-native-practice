import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import KaKoMap from '@/components/KaKaoMap';
import Input from '@/components/Input';
import Button from '@/components/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Search = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const SearchInput = styled(Input)`
  flex: 1;
  margin-right: 10px;
`;

const MainPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [keyword, setKeyword] = useState<string>('');

  const onPressed = () => {
    if (!inputRef.current) return;

    setKeyword(inputRef.current.value);
  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onPressed();
      if (!inputRef.current) return;
      inputRef.current.blur();
    }
  };

  return (
    <Wrapper>
      <Search>
        <SearchInput placeholder="장소를 입력하세요" ref={inputRef} isValueEmpty={!keyword} onKeyUp={onKeyUp} />
        <Button onClick={onPressed}>검색</Button>
      </Search>
      <KaKoMap keyword={keyword} />
    </Wrapper>
  );
};

export default MainPage;
