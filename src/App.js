import { useState } from "react";
import { initialWorkouts, generateWorkout } from "./Workouts.js";
import "./App.css";
import WorkoutItem from "./WorkoutItem";
import AddNewWorkout from "./AddNewWorkout";
import Checkbox from "./Checkbox";

function App() {
  const [workouts, setWorkouts] = useState(initialWorkouts);
  const [hideDoneWorkouts, setHideDoneWorkouts] = useState(false);

  const addNewWorkout = () => {
    const newWorkout = generateWorkout();
    setWorkouts([...workouts, newWorkout]);
  };

  const deleteWorkout = (workout) => {
    const remainingWorkouts = workouts.filter(
      (workoutMenu) => workoutMenu !== workout
    );
    setWorkouts(remainingWorkouts);
  };

  const completeWorkout = (workout) => {
    const completedWorkouts = workouts.map((workoutMenu) => {
      if (workout === workoutMenu) workoutMenu.done = true;
      return workoutMenu;
    });
    setWorkouts(completedWorkouts);
  };

  const toggleDoneWorkouts = () => setHideDoneWorkouts(!hideDoneWorkouts);

  const handleWorkouts = () => {
    if (hideDoneWorkouts) {
      const doneWorkouts = workouts.filter((workout) => workout.done);
      return doneWorkouts;
    }
    return workouts;
  };

  return (
    <div className="App">
      <h1>🏋️‍♀️Workout Generator</h1>
      <AddNewWorkout addNewWorkout={addNewWorkout} />
      <Checkbox
        hideDoneWorkouts={hideDoneWorkouts}
        toggleDoneWorkouts={toggleDoneWorkouts}
      />
      <ul>
        {handleWorkouts().map((workout, index) => (
          <WorkoutItem
            workout={workout}
            index={index}
            completeWorkout={completeWorkout}
            deleteWorkout={deleteWorkout}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
