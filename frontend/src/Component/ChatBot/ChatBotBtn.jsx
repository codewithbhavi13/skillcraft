import { SmartToy } from "@mui/icons-material";
import { Box, Fab, Grow, Slide } from "@mui/material";
import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import ChatBotWindow from "./ChatBotWindow";

export default function ChatBotBtn() {
  const [dragging, setDragging] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const nodeRef = useRef(null);
  const handleDragging = () => {
    setDragging(true);
  };
  const handleStop = () => {
    setTimeout(() => {
      setDragging(false);
    }, 100);
  };

  const handleOnClick = () => {
    if (!dragging) {
      setIsOpened(isOpened ? false : true);
    }
  };
  return (
    <>
      <ChatBotWindow opened={isOpened} />

      <Draggable onDrag={handleDragging} onStop={handleStop} nodeRef={nodeRef}>
        <div
          ref={nodeRef}
          style={{ position: "fixed", bottom: 16, right: 30, zIndex: 9999 }}
        >
          <Fab
            onClick={handleOnClick}
            sx={{ cursor: dragging ? "grabbing" : "pointer" }}
            color="primary"
          >
            <SmartToy />
          </Fab>
        </div>
      </Draggable>
    </>
  );
}
