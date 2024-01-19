import * as S from '@components/Overlay/OverlayStyle';
import { IChildren } from '@models/interface';

const Overlay = ({ children }: IChildren) => {
  return <S.OverlayWrap>{children}</S.OverlayWrap>;
};

export default Overlay;
