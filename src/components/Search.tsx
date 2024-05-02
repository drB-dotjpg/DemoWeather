import "../styles/Search.css";

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
            <input className="search-input" name="search" id="search-box" type="text" placeholder="Enter location name" autoComplete="off"/>
        </form>
    )
}