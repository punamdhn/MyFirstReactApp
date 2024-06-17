function handleclick(message) {
  window.alert(message);
}

function handelHover() {
  console.log("HOVERS!!!");
}

export default function Clicker({ message, buttonText }) {
  return (
    <div>
      {/* <p onMouseOver={handelHover}>{message}</p> */}
      <button onClick={() => handleclick(message)}>{buttonText}</button>
    </div>
  );
}
