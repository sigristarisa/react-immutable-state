const Checkbox = (props) => {
  return (
    <div>
      <label htmlFor="checkbox"> Hide Finished Workout</label>
      <input
        type="checkbox"
        id="checkbox"
        checked={props.hideDoneWorkouts}
        onChange={() => props.toggleDoneWorkouts()}
      />
    </div>
  );
};

export default Checkbox;
