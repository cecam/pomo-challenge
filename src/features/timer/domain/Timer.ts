// domain/timer.ts
export type TimerState = {
    duration: number;
    remainingTime: number;
    isRunning: boolean;
    intervalId: NodeJS.Timeout | null;
};

export const createTimer = (duration: number): TimerState => ({
    duration,
    remainingTime: duration,
    isRunning: false,
    intervalId: null,
});

export const tick = (state: TimerState): TimerState => {
    if (state.remainingTime > 0) {
        return { ...state, remainingTime: state.remainingTime - 1 };
    } else {
        return { ...state, isRunning: false, intervalId: null, remainingTime: 0 };
    }
};

export const start = (state: TimerState, intervalId: NodeJS.Timeout): TimerState => ({
    ...state,
    isRunning: true,
    intervalId,
});

export const pause = (state: TimerState): TimerState => {
    if (state.isRunning && state.intervalId) {
        clearInterval(state.intervalId);
        return { ...state, isRunning: false, intervalId: null };
    }
    return state;
};

export const reset = (state: TimerState): TimerState => ({
    ...state,
    remainingTime: state.duration,
});

export const stop = (state: TimerState): TimerState => ({
    ...state,
    remainingTime: 0,
    isRunning: false,
    intervalId: null,
});
