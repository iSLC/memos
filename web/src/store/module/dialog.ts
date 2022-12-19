import { last } from "lodash";
import store, { useAppSelector } from "..";
import { pushDialogStack, popDialogStack, removeDialog } from "../reducer/dialog";

export const useDialogStore = () => {
  const state = useAppSelector((state) => state.dialog);

  return {
    state,
    getState: () => {
      return store.getState().dialog;
    },
    pushDialogStack: (dialogName: string) => {
      store.dispatch(pushDialogStack(dialogName));
    },
    popDialogStack: () => {
      store.dispatch(popDialogStack());
    },
    removeDialog: (dialogName: string) => {
      store.dispatch(removeDialog(dialogName));
    },
    topDialogStack: () => {
      return last(store.getState().dialog.dialogStack);
    },
  };
};