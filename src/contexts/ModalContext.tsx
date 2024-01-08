import { createContext, ReactNode, useState } from 'react';

interface IModalContext {
  modal: ReactNode[];
  setModal: (modal: ReactNode[]) => void;
}

export const ModalContext = createContext<IModalContext | undefined>(undefined);
export const ModalActionContext = createContext({ open, close });

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState<ReactNode | undefined>(undefined);

  return <ModalContext.Provider value={{ modal, setModal }}>{children}</ModalContext.Provider>;
};
