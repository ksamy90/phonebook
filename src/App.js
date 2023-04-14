import { useEffect, useState } from "react";
import axios from "axios";
import personServices from "./services/persons";
import SearchFilter from "./components/SearchFilter";
import NewPerson from "./components/NewPerson";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [filterPerson, setFilterPerson] = useState("");

  useEffect(() => {
    personServices.getAll().then((personsData) => {
      setPersons(personsData);
    });
  }, []);

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
    const personObject = { name: newName, number: phoneNo };
    personServices.create(personObject).then((returnedPersons) => {
      setPersons(persons.concat(returnedPersons));
      setNewName("");
      setPhoneNo("");
    });
  };

  const deleteUser = (id) => {
    if (window.confirm("Do you really want delete user?")) {
      personServices.deleteUser(id).then(() => {
        setPersons(persons.filter((returnedUser) => returnedUser.id !== id));
      });
    } else {
      setPersons(persons);
    }
    console.log(id);
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
      <Persons deleteUser={deleteUser} filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
