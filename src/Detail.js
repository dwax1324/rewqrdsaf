import React from "react";
import { Query } from "react-apollo";
import { MOVIE_DETAILS } from "./queries";
import logo from "./ZKZg.gif";
import { Link } from "react-router-dom";

const Detail = ({
  match: {
    params: { movieId }
  }
}) => (
  <Query query={MOVIE_DETAILS} variables={{ movieId }}>
    {({ loading, error, data }) => {
      if (loading) return <img className="loadingImg" src={logo}></img>;
      if (error) return "error";
      return (
        <React.Fragment>
          <div className="detailContainer">
            <div className="cnd">
              <img
                className="titleImage"
                src={data.movie.medium_cover_image}
              ></img>
              <p className="titleBox">{data.movie.title}</p>

              <p className="titleBox">{data.movie.rating}/10 💕</p>
            </div>
            <div className="summaryBox">
              <p>{data.movie.description_intro}</p>
            </div>

            <p className="sug">Suggested</p>

            {data.suggestions.map(
              movie => (
                console.log(movie),
                (
                  <div className="Suggest">
                    <img src={movie.medium_cover_image}></img>
                    <div className="SuggestTxt">
                      {movie.id}
                      {movie.title}
                      <br></br>
                      {movie.rating}/10 💕
                    </div>
                  </div>
                )
              )
            )}
          </div>
        </React.Fragment>
      );
    }}
  </Query>
);

export default Detail;
