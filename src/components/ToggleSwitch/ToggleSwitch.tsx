import * as S from '@components/ToggleSwitch/ToggleSwitchStyle';

interface Iprops {
  onClick: () => void;
  checked?: boolean;
}

const ToggleSwitch = (props: Iprops) => {
  return (
    <>
      <S.Input type="checkbox" id="switch" checked={props?.checked} />
      <S.Label htmlFor="switch" onClick={props.onClick} />
    </>
  );
};

export default ToggleSwitch;
