import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";
import "./App.css";
import { Link } from "react-router-dom";
import logo from "./ZKZg.gif";

const Home = () => (
  <Query query={HOME_PAGE}>
    {({ loading, data, error }) => {
      if (loading) return <img className="loadingImg" src={logo} alt=""></img>;
      if (error) return "something happend";
      return data.movies.map(movie => (
        <div className="containerHome2">
          <Link to={`/details/${movie.id}/`} style={{ textDecoration: "none" }}>
            <img
              className="titleImg"
              src={movie.medium_cover_image}
              alt=""
            ></img>

            <h4 className="title" key={movie.id}>
              {movie.title} <br></br> {movie.rating}/10💕
            </h4>
          </Link>
        </div>
      ));
    }}
  </Query>
);

export default Home;
