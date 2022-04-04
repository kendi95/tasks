import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export function useGlobal() {
  return useContext(GlobalContext);
}