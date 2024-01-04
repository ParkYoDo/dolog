import * as S from '@components/ToggleSwitch/ToggleSwitchStyle';

interface Iprops {
  prev: string;
  next: string;
}

const ToggleSwitch = ({ prev, next }: Iprops) => {
  return (
    <>
      <S.Input type="checkbox" id="switch" prev={prev} />
      <S.Label htmlFor="switch" next={next} />
    </>
  );
};

export default ToggleSwitch;
