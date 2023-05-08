import { useContext } from "react";
import { formatDistanceToNow } from "date-fns";
import { HistoryContainer, HistoryList, Status } from "./styles";
import { CyclesContext } from "../../contexts/CyclesContext";

export function History() {
  const { cycles } = useContext(CyclesContext);

  return (
    <HistoryContainer>
      <h1>Session History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Started at</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles
              .sort(
                (a, b) =>
                  new Date(b.startDate).getTime() -
                  new Date(a.startDate).getTime()
              )
              .map((cycle) => {
                return (
                  <tr key={cycle.id}>
                    <td>{cycle.task}</td>
                    <td>
                      {cycle.minutes > 1
                        ? `${cycle.minutes} ${"minutes"}`
                        : `${cycle.minutes} ${"minute"}`}
                    </td>
                    <td>
                      {formatDistanceToNow(new Date(cycle.startDate), {
                        addSuffix: true,
                      })}
                    </td>
                    <td>
                      {cycle.completedDate && (
                        <Status statusColor="green">Completed</Status>
                      )}
                      {cycle.interruptedDate && (
                        <Status statusColor="red">Interrupted</Status>
                      )}
                      {!cycle.interruptedDate && !cycle.completedDate && (
                        <Status statusColor="yellow">In progress</Status>
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
