import { Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout/Layout';
import Home from '@pages/Home/Home';
import { useEffect } from 'react';
import authApi from '@apis/reactQuery/authApi';
import Write from '@pages/Home/Write';

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
