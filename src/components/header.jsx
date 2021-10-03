import React from 'react';
import Button from './button';
import { useAuthContext } from '../hooks/auth';

const Header = () => {
  const { logoutUser } = useAuthContext();
  return (
    <div style={{ marginBottom: 20 }}>
      <Button
        title="Logout"
        onClick={() => {
          logoutUser();
        }}
        variant="s"
      />
    </div>
  );
};

export default Header;
