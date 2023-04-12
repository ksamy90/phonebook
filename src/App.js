import { useState } from "react";
import SearchFilter from "./components/SearchFilter";
import NewPerson from "./components/NewPerson";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [filterPerson, setFilterPerson] = useState("");

  const filteredPersons = persons.filter((person) => {
    return person.name.toLowerCase().includes(filterPerson);
  });

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
  const handleFilters = (e) => {
    setFilterPerson(e.target.value);
  };

  const onSubmitChange = (e) => {
    e.preventDefault();
    if (userExists(newName)) {
      alert(`${newName} already added to phonebook`);
      setNewName("");
      return;
    }
    setPersons(
      persons.concat({ name: newName, number: phoneNo, id: persons.length + 1 })
    );
    setNewName("");
    setPhoneNo("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter filterPerson={filterPerson} handleFilters={handleFilters} />
      <h2>add a new</h2>
      <NewPerson
        onSubmitChange={onSubmitChange}
        newName={newName}
        phoneNo={phoneNo}
        handleNewName={handleNewName}
        handlePhoneNumber={handlePhoneNumber}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
