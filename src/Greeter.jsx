export const Greeter = ({ person = "BillS", from = "agoda" }) => {
  return (
    <div>
      {/* <h1>
        Name is {props.person.title} {props.person.name}.your roll number is{" "}
        {props.person.roll_N} Your result is {props.person.Grade}{" "}
      </h1> */}
      <h1>Hello There, {person}!!!</h1>
      <h2>---{from}</h2>
    </div>
  );
};
