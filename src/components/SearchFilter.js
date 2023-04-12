const SearchFilter = ({ filterPerson, handleFilters }) => {
  return (
    <div>
      filter shown with: <input value={filterPerson} onChange={handleFilters} />
    </div>
  );
};

export default SearchFilter;
