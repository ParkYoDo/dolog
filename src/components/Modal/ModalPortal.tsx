import useModal from '@hooks/useModal';
import { createPortal } from 'react-dom';

const ModalPortal = () => {
  const { modal } = useModal();
  const modalPortal = document.getElementById('portal-modal')!;
  return createPortal(modal, modalPortal);
};

export default ModalPortal;
