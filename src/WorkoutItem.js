import Buttons from "./Buttons";

const WorkoutItem = (props) => {
  return (
    <li key={props.index}>
      <p>
        {props.workout.sets}x sets of{" "}
        <strong>
          {props.workout.reps}x{props.workout.exercise}
        </strong>{" "}
        with {props.workout.rest} seconds rest
      </p>
      <Buttons
        workout={props.workout}
        completeWorkout={props.completeWorkout}
        deleteWorkout={props.deleteWorkout}
      />
    </li>
  );
};

export default WorkoutItem;
