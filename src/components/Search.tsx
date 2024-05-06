import "../styles/Search.css";

interface SearchProps {
    changeWeather: any
    loading: boolean
}

export default function Search({ changeWeather, loading }: SearchProps){

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const query = (e.target as HTMLFormElement).search.value;
        changeWeather(query);
    }
    
    if (loading) {
        return (
            <>
                <input className="search-input" id="search-box" type="text" value={"Searching..."} autoComplete="off" disabled/>
            </>
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="search-input" name="search" id="search-box" type="text" placeholder="Enter location name" autoComplete="off"/>
        </form>
    )
}