import Person from "./Person";

const Persons = ({ filteredPersons }) => {
  return filteredPersons.map((person) => {
    return <Person key={person.id} person={person} />;
  });
};

export default Persons;
