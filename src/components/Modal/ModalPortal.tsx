import { createPortal } from 'react-dom';
import { IChildren } from '../../types/inteface';

const ModalPortal = ({ children }: IChildren) => {
  const modal = document.getElementById('portal-modal') as HTMLElement;
  return createPortal(children, modal);
};

export default ModalPortal;
