import React from "react";

export const Movies = ({movies}) => {
    return (
        <div id="movies">
            <table border={1}>
                <thead>
                    <tr>
                        <th>Ime</th>
                        <th>Godina</th>
                        <th>Zanr</th>
                        <th>Opis</th>
                        <th>Link</th>
                        <th>Slika</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie, i) =>{
                        return (
                            <tr key={i}>
                                <td>{movie.name}</td>
                                <td>{movie.date}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.plot}</td>
                                <td>
                                   <a href={movie.imdbLink}>Link</a>
                                   </td>
                                <td>
                                   <img src={movie.imgUrl}
                                    alt={movie.name}
                                    width={100}/>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};
