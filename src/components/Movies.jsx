import { Movie } from "./Movie";
import smile from "../img/pngwing.com.png";


function Movies(props) {
    const { movies = [] } = props;
    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) : (
                <div>
                    <h4>No movies found</h4>
                    <img className="img" src={smile}  />
                </div>
            )}
        </div>
    );
}


export { Movies };
