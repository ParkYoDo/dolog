import { CSSProperties } from 'react';
import Overlay from '@components/Overlay/Overlay';
import { LayoutWrap } from '@styles/GlobalStyle';
import * as S from '@components/Modal/ModalStyle';

interface IProps {
  width?: string;
  height?: string;
  title: string;
  content: React.ReactNode;
  buttons: any;
}

const Modal = (props: IProps) => {
  return (
    <Overlay>
      <LayoutWrap
        width={props.width || 'fit-content'}
        height={props.height || 'fit-content'}
        flexDirection="column"
        style={{ border: '1px solid red' }}
      >
        <S.Header>{props.title}</S.Header>
        <S.Body>{props.content}</S.Body>
        {!!props?.buttons && <S.Footer></S.Footer>}
      </LayoutWrap>
    </Overlay>
  );
};

export default Modal;
