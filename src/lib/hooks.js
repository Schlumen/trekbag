import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider";

export function useItemsContext() {
  if (!ItemsContext) {
    throw new Error(
      "useItemsContext must be used within an ItemsContextProvider"
    );
  }
  return useContext(ItemsContext);
}
