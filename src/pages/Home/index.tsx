import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { differenceInSeconds } from 'date-fns';

import { HandPalm, Play } from 'phosphor-react';

import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, StopCountdownButton, TaskInput } from './styles';


const newCycleFormValidationSchema = zod.object({
    task: zod.string().trim().min(1, 'Informe a tarefa'),
    minutesAmount: zod
        .number()
        .min(5, 'The minimum value is 5 minutes.')
        .max(60, 'The max value is 60 minutes.')
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
    id: string;
    task: string;
    minutes: number;
    startDate: Date;
    interruptedDate?: Date;
}

export function Home() {
    const [cycles, setCycles] = useState<Cycle[]>([]);
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
    const [secondsElapsed, setSecondsElapsed] = useState<number>(0);

    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    });

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

    useEffect(() => {
        let interval: number;

        if (activeCycle) {
            interval = setInterval(() => {
                setSecondsElapsed(differenceInSeconds(new Date(), activeCycle.startDate))
            }, 1000)
        }

        return () => {
            clearInterval(interval)
        }
    }, [activeCycle])

    function handleCreateNewCycle(data: NewCycleFormData) {
        const newCycle: Cycle = {
            id: String(new Date().getTime()),
            task: data.task,
            minutes: data.minutesAmount,
            startDate: new Date()
        }

        setCycles(state => [...state, newCycle]);
        setActiveCycleId(newCycle.id);
        setSecondsElapsed(0);

        reset();
    }

    function handleInterruptCycle() {
        setActiveCycleId(null)
    }

    const totalSeconds = activeCycle ? activeCycle.minutes * 60 : 0;
    const currentSeconds = activeCycle ? totalSeconds - secondsElapsed : 0;

    const minutesAmount = Math.floor(currentSeconds / 60);
    const secondsAmount = currentSeconds % 60;

    const minutes = String(minutesAmount).padStart(2, '0');
    const seconds = String(secondsAmount).padStart(2, '0');

    useEffect(() => {
        if (activeCycle) {
            document.title = `${minutes}:${seconds}`
        }
    }, [minutes, seconds, activeCycle])

    const task = watch('task');
    const isSubmitDisabled = !task.trim();

    //
    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>
                    <label htmlFor="task">I will work on</label>
                    <TaskInput
                        id="task"
                        list="taskSuggestions"
                        placeholder="Name your project"
                        {...register('task')}
                        disabled={!!activeCycle}
                    />

                    <datalist id="taskSuggestions">
                        <option value="Projeto 1" />
                        <option value="Projeto 2" />
                        <option value="Projeto 3" />
                        <option value="Projeto 4" />
                    </datalist>

                    <label htmlFor="minutesAmount">for</label>
                    <MinutesAmountInput
                        type="number"
                        id="minutesAmount"
                        placeholder='00'
                        required
                        step={5}
                        min={5}
                        max={60}
                        {...register('minutesAmount', { valueAsNumber: true })}
                        disabled={!!activeCycle}
                    />

                    <span>minutes.</span>
                </FormContainer>

                <CountdownContainer>
                    <span>{minutes[0]}</span>
                    <span>{minutes[1]}</span>
                    <Separator>:</Separator>
                    <span>{seconds[0]}</span>
                    <span>{seconds[1]}</span>
                </CountdownContainer>

                {activeCycle ? (
                    <StopCountdownButton type="button">
                        <HandPalm size={24} />
                        Stop
                    </StopCountdownButton>
                ) : (
                    <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                        <Play size={24} />
                        Start
                    </StartCountdownButton>
                )}
            </form>
        </HomeContainer>
    )
}