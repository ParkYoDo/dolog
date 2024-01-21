import Layout from '@components/Layout/Layout';
import Home from '@pages/Home/Home';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import authApi from '@apis/reactQuery/authApi';
import Write from '@pages/Write/Write';

const Router = () => {
  const { silentRefresh } = authApi();
  useEffect(() => {
    silentRefresh();
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
      </Route>
    </Routes>
  );
};

export default Router;
