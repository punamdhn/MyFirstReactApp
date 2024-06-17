export const ListPicker = ({ values }) => {
  const randIdx = Math.floor(Math.random() * values.length);
  const randElement = values[randIdx];

  return (
    <div>
      <p>The list of value:{values} </p>
      <p>Randam Element is:{randElement} </p>
    </div>
  );
};
