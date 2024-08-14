import { useContext } from "react";
import { ModalContext } from "../ModalProvider";

const useModal = () => {
  const values = useContext(ModalContext);

  if (!values) throw new Error("Not Found ModalProvider");

  return values;
};

export default useModal;
