import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <>
      <h1>autenticacao</h1>

      <div>
        <Outlet />
      </div>
    </>
  );
};
