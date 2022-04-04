import { useContext } from "react";
import { AnimationContext } from "../contexts/AnimationContext";

export function useAnimation() {
  return useContext(AnimationContext);
}