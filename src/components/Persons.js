import Person from "./Person";

const Persons = ({ filteredPersons, deleteUser }) => {
  return filteredPersons.map((person) => {
    return (
      <Person
        key={person.id}
        person={person}
        deleteUser={() => deleteUser(person.id)}
      />
    );
  });
};

export default Persons;
