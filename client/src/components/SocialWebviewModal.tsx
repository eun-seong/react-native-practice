import React from 'react';
import styled from 'styled-components/native';
import SocialWebview from './SocialWebview';

interface SocialWebviewModalProps {
  visible: boolean;
  source: string;
  closeSocialModal: () => void;
}

const SocialWebviewModal = (props: SocialWebviewModalProps) => {
  const { visible, source, closeSocialModal } = props;
  return (
    <Wrapper animationType="slide" transparent={true} visible={visible}>
      <SocialWebview source={{ uri: source }} closeSocialModal={closeSocialModal} />
    </Wrapper>
  );
};
export default SocialWebviewModal;

const Wrapper = styled.Modal`
  flex: 1;
`;
