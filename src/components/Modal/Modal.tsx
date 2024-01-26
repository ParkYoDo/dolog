import * as S from '@components/Modal/ModalStyle';
import XmarkIcon from '@components/Svg/XmarkIcon';
import useModal from '@hooks/useModal';
import { Overlay } from '@styles/GlobalStyle';
import { MouseEvent, ReactNode, useEffect } from 'react';

interface IModal {
  width?: string;
  height?: string;
  title: string;
  content: ReactNode;
  buttons?: ReactNode[];
}

const Modal = (props: IModal) => {
  const { onCloseModal } = useModal();

  const onClickOutside = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onCloseModal();
  };

  const onKeyDownEsc = (e: any) => {
    if (e.key === 'Escape') {
      onCloseModal();
      window.removeEventListener('keydown', onKeyDownEsc);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDownEsc);
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Overlay onClick={onClickOutside}>
      <S.ModalLayout width={props.width || '480px'} height={props.height || 'fit-content'}>
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
