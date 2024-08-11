import React from 'react';
import ButtonIcon from '../../ui/ButtonIcon';
import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from './useLogout';
import SpinnerMini from '../../ui/Spinner';

function Logout() {
  const { logout, isLogoutLoading } = useLogout();

  return (
    <ButtonIcon disabled={isLogoutLoading} onClick={logout}>
      {!isLogoutLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
