import * as S from '@components/Overlay/OverlayStyle';

interface Iprops {
  children: React.ReactNode;
}

const Overlay = (props: Iprops) => {
  return <S.OverlayWrap>{props.children}</S.OverlayWrap>;
};

export default Overlay;
