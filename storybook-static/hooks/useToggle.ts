import { useState } from "react";

const useToggle = (initValue?: boolean) => {
  const [isOpen, setShow] = useState(initValue ?? false);

  const onOpen = () => {
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  const onToggle = () => {
    setShow((prev) => !prev);
  };

  return { isOpen, onOpen, onClose, onToggle };
};

export default useToggle;
