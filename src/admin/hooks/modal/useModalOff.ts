import { useDispatch } from "react-redux";
import {
  closeAddModal,
  closeEditModal,
} from "../../../features/modal/modal-slice";

const useModalOff = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeAddModal());
    dispatch(closeEditModal());
  };

  return closeModal;
};

export default useModalOff;
