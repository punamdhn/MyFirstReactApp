function handleFormSubmit(evt) {
  evt.preventDefault(), console.log("FORM SUBMITTED ");
}

export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <button>Submit</button>
    </form>
  );
}
