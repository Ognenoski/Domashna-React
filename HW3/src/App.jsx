import React from "react";
import {Movies} from "./components/Movies.jsx";

export function App() {

  const movies = [
    {
      name: "The Shawshank Redemption",
      date: 1994,
      genre: "Drama",
      plot: "Nepravedno osuden bankar, se bori za sloboda.",
      imdbLink: "https://www.imdb.com/title/tt0111161/?ref_=chttp_tsp_t",
      imgUrl:"/theshawshank.jpg"
    },

    {
      name: "The Godfather",
      date: 1972,
      genre:"Crime,Drama",
      plot:"Mlad covek go prevzema semejniot mafijaski biznis.",
       imdbLink:"https://www.imdb.com/title/tt0068646/?ref_=chttp_t_2",
        imgUrl: "/thegodfather.jpg"
      },
      {
      name: "The Dark Knight",
      date: 2008,
      genre:"Crime,Thriller",
      plot:"Borba pomegju betmen i dzoker za spas na gotam.",
       imdbLink:"https://www.imdb.com/title/tt0468569/?ref_=chttp_t_3",
        imgUrl: "/thedarkknight.jpg"
      },
      {
      name: "Forrest Gump",
      date: 1994,
      genre:"Drama,Romance",
      plot:"Forrest ja raskazuva svojata zivotna prikazna.",
       imdbLink:"https://www.imdb.com/title/tt0109830/?ref_=chttp_t_12",
        imgUrl: "/forrestgump.jpg"
      },
      {
      name: "Psycho",
      date: 1960,
      genre:"Drama, Horror, Mystery",
      plot:"Motel cij sopstvenik krie mracni tajni.",
       imdbLink:"https://www.imdb.com/title/tt0054215/?ref_=chttp_t_39",
        imgUrl: "/psycho.jpg"
      },
  ] 
  return (
    <div>
      <Movies movies={movies}/>
    </div>
  )
}