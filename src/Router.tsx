import { Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout/Layout';
import Home from '@pages/Home/Home';
import { useEffect } from 'react';
import useAuth from '@hooks/useAuth';

const Router = () => {
  const { silentRefresh } = useAuth();
  useEffect(() => {
    silentRefresh();
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
