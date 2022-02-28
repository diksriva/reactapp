import React, { useState } from "react";
import "./App.css";

const App: React.FunctionComponent = () => {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  // onKeyDown handler function
  const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(event.code);
    if (event.code === "ArrowUp") {
      setTop((top) => top - 10);
    }

    if (event.code === "ArrowDown") {
      setTop((top) => top + 10);
    }

    if (event.code === "ArrowLeft") {
      setLeft((left) => left - 10);
    }

    if (event.code === "ArrowRight") {
      setLeft((left) => left + 10);
    }
  };

  return (
    <div className="container" tabIndex={0} onKeyDown={keyDownHandler}>
      <div className="box" style={{ top: top, left: left }}></div>
    </div>
  );
};

