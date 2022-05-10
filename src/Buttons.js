const Buttons = (props) => {
  return (
    <div className="buttons">
      {!props.workout.done && (
        <button onClick={() => props.completeWorkout(props.workout)}>
          Done
        </button>
      )}
      {props.workout.done && <p>✅</p>}
      <button onClick={() => props.deleteWorkout(props.workout)}>Delete</button>
    </div>
  );
};

export default Buttons;
