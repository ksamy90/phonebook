import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const userExists = (name) => {
    return persons.some((el) => {
      return el.name === name;
    });
  };

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNo(e.target.value);
  };
  const onSubmitChange = (e) => {
    e.preventDefault();
    if (userExists(newName)) {
      alert(`${newName} already added to phonebook`);
      setNewName("");
      return;
    }
    setPersons(persons.concat({ name: newName, phone: phoneNo }));
    setNewName("");
    setPhoneNo("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onSubmitChange}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={phoneNo} onChange={handlePhoneNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return (
          <p key={person.name}>
            {person.name} - {person.phone}
          </p>
        );
      })}
    </div>
  );
};

export default App;
