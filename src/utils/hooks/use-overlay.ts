import { useEffect, useRef } from "react";
import { OverlayConfig, OverlayView } from "../overlay-view";

 const UserOverlay = (options: OverlayConfig) => {
   
  const overlay = useRef<OverlayView | null>(null);

  useEffect(() => {
    overlay.current = new OverlayView(options);
    return () => overlay.current?.destroy();
  }, [options]);
  return overlay;
};

export const useOverlay = UserOverlay