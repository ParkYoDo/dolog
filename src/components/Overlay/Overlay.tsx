import * as S from '@components/Overlay/OverlayStyle';
import { IChildren } from 'types/inteface';

const Overlay = ({ children }: IChildren) => {
  return <S.OverlayWrap>{children}</S.OverlayWrap>;
};

export default Overlay;
