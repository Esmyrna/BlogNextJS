import React from 'react'
import { Button } from '../Btn/style';
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Btn: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  );
}

export default Btn;