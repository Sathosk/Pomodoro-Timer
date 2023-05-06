import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
    return (
        <HistoryContainer>
            <h1>Session History</h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Duration</th>
                            <th>Start at</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Task</td>
                            <td>20 minutes</td>
                            <td>Há 2 meses</td>
                            <td>
                                <Status statusColor="green">Completed</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Task</td>
                            <td>20 minutes</td>
                            <td>Há 2 meses</td>
                            <td>
                                <Status statusColor="yellow">In progress</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Task</td>
                            <td>20 minutes</td>
                            <td>Há 2 meses</td>
                            <td>
                                <Status statusColor="red">Interrupted</Status>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}