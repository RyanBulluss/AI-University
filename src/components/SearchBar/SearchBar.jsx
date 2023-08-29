

export default function SearchBar( { handleSubmit, search, setSearch } ) {

    return (
    <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="search"
          placeholder="Search..."
          className="bg-fourth w-full p-2 rounded-lg border border-fifth"
        />
    </form>
    )
}