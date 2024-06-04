"use client";
import React from "react";
import { useTimer } from "./useTimer";

const TimerComponent: React.FC = () => {
  const { timerState, startTimer, pauseTimer, resetTimer, stopTimer } =
    useTimer(25 * 60);

  return (
    <div>
      <div>
        {Math.floor(timerState.remainingTime / 60)}:
        {timerState.remainingTime % 60 < 10 ? "0" : ""}
        {timerState.remainingTime % 60}
      </div>
      <button onClick={startTimer} disabled={timerState.isRunning}>
        Start
      </button>
      <button onClick={pauseTimer} disabled={!timerState.isRunning}>
        Pause
      </button>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default TimerComponent;
