import { ReactNode, createContext, useState } from "react";

interface CreateCycleData {
    task: string;
    minutesAmount: number;
}

interface CyclesContextType {
    cycles: Cycle[]
    activeCycle: Cycle | undefined;
    activeCycleId: string | null;
    secondsElapsed: number;
    setSecondsPassed: (seconds: number) => void;
    markCurrentCycleAsFinished: () => void;
    createNewCycle: (data: CreateCycleData) => void;
    interruptCurrentCycle: () => void;
}

interface Cycle {
    id: string;
    task: string;
    minutes: number;
    startDate: Date;
    interruptedDate?: Date;
    completedDate?: Date;
}

interface CyclesContextProviderProps {
    children: ReactNode
}


export const CyclesContext = createContext({} as CyclesContextType);

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {
    const [cycles, setCycles] = useState<Cycle[]>([]);
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
    const [secondsElapsed, setSecondsElapsed] = useState<number>(0);

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

    function setSecondsPassed(seconds: number) {
        setSecondsElapsed(seconds);
    }

    function markCurrentCycleAsFinished() {
        setCycles((state) =>
            state.map(cycle => {
                if (cycle.id === activeCycleId) {
                    
                    return { ...cycle, completedDate: new Date() }
                } else {
                    return cycle;
                }
            })
        )

        setActiveCycleId(null);
        alert('Your cycle is completed.')
    }

    function createNewCycle(data: CreateCycleData) {
        const newCycle: Cycle = {
            id: String(new Date().getTime()),
            task: data.task,
            minutes: data.minutesAmount,
            startDate: new Date()
        }

        setCycles(state => [...state, newCycle]);
        setActiveCycleId(newCycle.id);
        setSecondsElapsed(0);

        //reset();
    }

    function interruptCurrentCycle() {
        setCycles((state) =>
            state.map(cycle => {
                if (cycle.id === activeCycleId) {
                    return { ...cycle, interruptedDate: new Date() }
                } else {
                    return cycle;
                }
            })
        )

        setActiveCycleId(null);
    }

    return (
        <CyclesContext.Provider
            value={{
                cycles,
                activeCycle,
                activeCycleId,
                markCurrentCycleAsFinished,
                secondsElapsed,
                setSecondsPassed,
                createNewCycle,
                interruptCurrentCycle
            }}
        >
            {children}
        </CyclesContext.Provider>
    )
}