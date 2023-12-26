import { LayoutWrap } from '@styles/GlobalStyle';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <LayoutWrap
      height="70px"
      style={{ background: 'black', color: 'white', letterSpacing: '10px' }}
    >
      <Link to="/">PARKYODO.Log</Link>
    </LayoutWrap>
  );
};

export default NavigationBar;
