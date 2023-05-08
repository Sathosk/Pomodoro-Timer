import { ActionType, ActionTypes } from "./actions";

interface CyclesState {
    cycles: Cycle[];
    activeCycleId: string | null;
}

export interface Cycle {
    id: string;
    task: string;
    minutes: number;
    startDate: Date;
    interruptedDate?: Date;
    completedDate?: Date;
}

export function cyclesReducer(state: CyclesState, action: ActionType) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_CYCLE:
            return {
                ...state,
                cycles: [...state.cycles, action.payload.newCycle],
                activeCycleId: action.payload.newCycle.id,
            }

        case ActionTypes.INTERRUPT_CYCLE:
            return {
                ...state,
                cycles: state.cycles.map(cycle => {
                    if (cycle.id === state.activeCycleId) {
                        return { ...cycle, interruptedDate: new Date() };
                    } else {
                        return cycle;
                    }
                }),
                activeCycleId: null,
            }

        case ActionTypes.COMPLETE_CYCLE:
            return {
                ...state,
                cycles: state.cycles.map(cycle => {
                    if (cycle.id === state.activeCycleId) {
                        return { ...cycle, completedDate: new Date() };
                    } else {
                        return cycle;
                    }
                }),
                activeCycleId: null,
            }

        default:
            return state;
    }
}