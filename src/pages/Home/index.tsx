import { Play } from 'phosphor-react';
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from './styles';

export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">I will work on</label>
                    <TaskInput 
                        id="task" 
                        list="taskSuggestions" 
                        placeholder="Name your project"
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
                        step={5}
                        min={5}
                        max={60}
                    />

                    <span>minutes.</span>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountdownButton type="submit">
                    <Play size={24}/>
                    Start
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}