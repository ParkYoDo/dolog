import { createContext, ReactNode, useState } from 'react';
import { IChildren } from '@types/inteface';

interface IModalContext {
  modal: ReactNode[];
  setModal: (modal: ReactNode[]) => void;
}

export const ModalContext = createContext<Pick<IModalContext, 'modal'> | null>(null);
export const ModalDispatchContext = createContext<Pick<IModalContext, 'setModal'> | null>(null);

export const ModalProvider = ({ children }: IChildren) => {
  const [modal, setModal] = useState<ReactNode[]>([]);

  return (
    <ModalDispatchContext.Provider value={{ setModal }}>
      <ModalContext.Provider value={{ modal }}>{children}</ModalContext.Provider>
    </ModalDispatchContext.Provider>
  );
};
