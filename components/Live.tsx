import React, { useCallback } from "react";
import LiveCursors from "./cursor/LiveCursors";
import { useMyPresence, useOthers } from "@/liveblocks.config";

const Live = () => {
  const others = useOthers();
  const [{ cursor }, updateMyPresence] = useMyPresence() as any;

  const handlePointerMove = useCallback((event: React.PointerEvent) => {
    event.preventDefault();

    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

    updateMyPresence({ cursor: { x, y } });
  }, []);
  return <LiveCursors others={others} />;
};

export default Live;
