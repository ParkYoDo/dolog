import * as S from '@components/Overlay/OverlayStyle';
import { IChildren } from 'type/interface';

const Overlay = ({ children }: IChildren) => {
  return <S.OverlayWrap>{children}</S.OverlayWrap>;
};

export default Overlay;
