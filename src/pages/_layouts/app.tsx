import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <>
      <h1>cabeçalho</h1>

      <div>
        <Outlet />
      </div>
    </>
  );
};
