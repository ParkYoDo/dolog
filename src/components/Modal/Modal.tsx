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
  const [mount, setMount] = useState(false);

  const { onCloseModal } = useModal();

  const onkeydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      onCloseModal();
    }
  };

  // 외부 스크롤 방지
  useEffect(() => {
    setMount(true);
    document.body.style.overflow = 'hidden';

    return () => {
      setMount(false);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Overlay>
      <S.ModalLayout
        width={props.width || '500px'}
        height={props.height || 'fit-content'}
        mount={mount}
      >
        <S.Header>
          {props.title}
          <IconButton onClick={onCloseModal}>
            <XmarkIcon />
          </IconButton>
        </S.Header>

        <S.Body>{props.content}</S.Body>

        {!!props?.buttons && <S.Footer></S.Footer>}
      </S.ModalLayout>
    </Overlay>
  );
};

export default Modal;
