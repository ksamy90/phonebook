const NewPerson = (props) => {
  return (
    <form onSubmit={props.onSubmitChange}>
      <div>
        name: <input value={props.newName} onChange={props.handleNewName} />
      </div>
      <div>
        number:{" "}
        <input value={props.phoneNo} onChange={props.handlePhoneNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default NewPerson;
