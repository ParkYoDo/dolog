import { ReactNode } from 'react';
import Overlay from '@components/Overlay/Overlay';
import { LayoutWrap } from '@styles/GlobalStyle';
import * as S from '@components/Modal/ModalStyle';
import ModalPortal from '@components/Modal/ModalPortal';

interface IProps {
  width?: string;
  height?: string;
  title: string;
  content: React.ReactNode;
  buttons?: ReactNode[];
}

const Modal = (props: IProps) => {
  return (
    <ModalPortal>
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
    </ModalPortal>
  );
};

export default Modal;
