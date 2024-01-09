import { ReactNode, useContext } from 'react';
import { ModalContext, ModalDispatchContext } from '@contexts/ModalContext';

const useModal = () => {
  const { modal } = useContext(ModalContext)!;
  const { setModal } = useContext(ModalDispatchContext)!;

  const onOpenModal = (newModal: ReactNode) => {
    const copyModal = [...modal];
    return setModal([...copyModal, newModal]);
  };

  const onCloseModal = () => {
    const copyModal = [...modal];
    return setModal(copyModal.slice(0, copyModal.length - 1));
  };

  return { modal, onOpenModal, onCloseModal };
};

export default useModal;
