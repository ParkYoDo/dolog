import * as S from '@components/Modal/ModalStyle';
import Overlay from '@components/Overlay/Overlay';
import XmarkIcon from '@components/Svg/XmarkIcon';
import useModal from '@hooks/useModal';
import { IconButton } from '@styles/GlobalStyle';
import React, { ReactNode, useEffect, useState } from 'react';

interface IProps {
  width?: string;
  height?: string;
  title: string;
  content: React.ReactNode;
  buttons?: ReactNode[];
}

const Modal = (props: IProps) => {
  const { onCloseModal } = useModal();

  // 외부 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Overlay>
      <S.ModalLayout
        width={props.width || '480px'}
        height={props.height || 'fit-content'}
        onKeyDown={e => {
          if (e.key === 'Escape') onCloseModal();
        }}
      >
        <S.Header>
          {props.title}
          <S.ModalCloseBtn onClick={onCloseModal}>
            <XmarkIcon />
          </S.ModalCloseBtn>
        </S.Header>

        <S.Body>{props.content}</S.Body>

        {!!props?.buttons?.length && (
          <S.Footer>{props?.buttons?.map((button: ReactNode) => button)}</S.Footer>
        )}
      </S.ModalLayout>
    </Overlay>
  );
};

// Modal.Footer = <S.Footer>{props.asd}</S.Footer>;

export default Modal;
