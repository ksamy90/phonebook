const Person = ({ person, deleteUser }) => {
  return (
    <div key={person.id}>
      {person.name} - {person.number}
      <button onClick={deleteUser}>delete</button>
    </div>
  );
};

export default Person;
