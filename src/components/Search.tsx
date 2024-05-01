interface SearchProps {
    changeWeather: any
}

export default function Search({ changeWeather }: SearchProps){

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const query = (e.target as HTMLFormElement).search.value;
        changeWeather(query);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="search" id="search-box" type="text" placeholder="Enter city name" autoComplete="off"/>
        </form>
    )
}