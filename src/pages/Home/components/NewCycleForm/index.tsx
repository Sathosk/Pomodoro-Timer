import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";



export function NewCycleForm() {
    const { activeCycle } = useContext(CyclesContext);
    const { register } = useFormContext();

    return (
        <FormContainer>
            <label htmlFor="task">I will work on</label>
            <TaskInput
                id="task"
                // list="taskSuggestions"
                placeholder="Name your project"
                {...register('task')}
                disabled={!!activeCycle}
            />

            {/* <datalist id="taskSuggestions">
                <option value="Projeto 1" />
                <option value="Projeto 2" />
                <option value="Projeto 3" />
                <option value="Projeto 4" />
            </datalist> */}

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
    )
}