import { Outlet } from 'react-router-dom';
import { LayoutWrap } from '@styles/GlobalStyle';
import NavigationBar from '@components/NavigationBar/NavigationBar';

const Layout = () => {
  return (
    <LayoutWrap flexDirection="column">
      <NavigationBar />
      <Outlet />
    </LayoutWrap>
  );
};

export default Layout;
