# Pomodoro-Timer
This is a simple pomodoro timer app that helps you stay focused and productive by breaking your work into timed intervals. You can create sessions from 5 to 60 minutes, if you are studying on other tabs on your browser you can still see the timer on the title.

The app also allows you to track all your previous pomodoro sessions, including those that were interrupted, completed, or still in progress. You can view your session history, see how long you worked, and analyze your productivity over time.

You can check out the demo version here:   https://pomodoro-timer-sath.netlify.app/

![pomodoro](https://github.com/Sathosk/Pomodoro-Timer/assets/63148481/a5306ea3-86bf-43f9-aa28-71e4f7193250)
![pomodoro](https://github.com/Sathosk/Pomodoro-Timer/assets/63148481/47977725-e31f-4c3d-912f-b59e59c76e34)

# How it was made
This pomodoro timer app was built using React and TypeScript, along with several third-party libraries.

### Native React functions
The app makes use of the following native React functions:

- **'useState'** and **'useReducer'** for managing component state
- **'useEffect'** for handling side effects
- **'useContext'** for global state management

The **'useState'** and **'useReducer'** are used to manage the state of the timer and the session history. The **'useEffect'** is used to update the timer every second and to persist the session history to local storage. The **'useContext'** is used to manage global state and to pass data between components.

### Third-party libraries
The app uses the following third-party libraries:

- **'styled-components'** for styling and theming
- **'zod'** for data validation
- **'react-router-dom'** for client-side routing
- **'react-hook-form'** for form validation and submission

The **'styled-components'** is used to style the app's components and to provide theming. **'Zod'** is used for data validation, ensuring that user input is in the correct format. The **'react-router-dom'** is used to handle client-side routing, allowing users to navigate between pages without a full page refresh. And **'react-hook-form'** is used to handle form submission and validation, ensuring that user input is correct before it is submitted.

Overall, this app is built using modern web development tools and techniques, and is a great example of how to build a React-based pomodoro timer app.
