import { useState, useEffect, useCallback } from "react";
import {
  TimerState,
  createTimer,
  pause,
  reset,
  start,
  stop,
  tick,
} from "../../domain/Timer";

export const useTimer = (duration: number) => {
  const [timerState, setTimerState] = useState<TimerState>(
    createTimer(duration)
  );

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (timerState.isRunning) {
      intervalId = setInterval(() => {
        setTimerState((prevState) => tick(prevState));
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [timerState.isRunning]);

  const startTimer = useCallback(() => {
    const intervalId = setInterval(() => {
      setTimerState((prevState) => tick(prevState));
    }, 1000);
    setTimerState((prevState) => start(prevState, intervalId));
  }, []);

  const pauseTimer = useCallback(() => {
    setTimerState((prevState) => pause(prevState));
  }, []);

  const resetTimer = useCallback(() => {
    setTimerState((prevState) => reset(prevState));
  }, []);

  const stopTimer = useCallback(() => {
    setTimerState((prevState) => stop(prevState));
  }, []);

  return {
    timerState,
    startTimer,
    pauseTimer,
    resetTimer,
    stopTimer,
  };
};
