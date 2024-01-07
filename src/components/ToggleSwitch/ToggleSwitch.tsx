import * as S from '@components/ToggleSwitch/ToggleSwitchStyle';

interface Iprops {
  onClick: () => void;
  checked: boolean;
}

const ToggleSwitch = (props: Iprops) => {
  return (
    <>
      <S.Input type="checkbox" id="switch" onChange={props?.onClick} checked={props.checked} />
      <S.Label htmlFor="switch" />
    </>
  );
};

export default ToggleSwitch;
