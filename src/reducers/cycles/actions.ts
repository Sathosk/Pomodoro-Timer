import { Cycle } from "./reducer";

export enum ActionTypes {
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
    INTERRUPT_CYCLE = 'INTERRUPT_CYCLE',
    COMPLETE_CYCLE = 'COMPLETE_CYCLE',
}

interface AddNewCycleAction {
    type: ActionTypes.ADD_NEW_CYCLE;
    payload: {
        newCycle: Cycle;
    };
}

interface InterruptCycleAction {
    type: ActionTypes.INTERRUPT_CYCLE;
}

interface CompleteCycleAction {
    type: ActionTypes.COMPLETE_CYCLE;
}

export type ActionType =
    | AddNewCycleAction
    | InterruptCycleAction
    | CompleteCycleAction;

export function addNewCycleAction(newCycle: Cycle) {
    return {
        type: ActionTypes.ADD_NEW_CYCLE,
        payload: {
            newCycle,
        }
    }
}

export function completeCycleAction(): CompleteCycleAction {
    return {
        type: ActionTypes.COMPLETE_CYCLE,
    }
}

export function interruptCycleAction(): InterruptCycleAction {
    return {
        type: ActionTypes.INTERRUPT_CYCLE,
    }
}