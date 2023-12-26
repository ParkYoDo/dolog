import { Outlet } from 'react-router-dom';
import { LayoutWrap } from '@styles/GlobalStyle';
import NavigationBar from '@components/NavigationBar/NavigationBar';

const Layout = () => {
  return (
    <LayoutWrap
      style={{ border: '3px solid red' }}
      height="100vh"
      flexDirection="column"
      justifyContent="flex-start"
    >
      <NavigationBar />
      <Outlet />
    </LayoutWrap>
  );
};

export default Layout;
