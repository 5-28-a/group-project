import React from "react";
import { connect } from "react-redux";
import { saveMovies } from "./actions/AppActions";

class Search extends React.Component {
  state = {
    search: ""
  };

searchMovies = () => {
    fetch('https://api.themoviedb.org/3/search/movie?api_key=c917eb71754e2d7a6123061c45f8b4a6&language=en-US&query=' + this.state.search + '&page=1&include_adult=false')
      .then(resp => resp.json())
      .then(respJson => {
        this.props.dispatch(saveMovies(respJson.results));
      })
    };

  handleSubmit = e => {
    e.preventDefault();
    this.searchMovies();
  };

  render() {
    return (
      <div className="container">
        <hr />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="search"
            value={this.state.search}
            onChange={search => {
              this.setState({ search: search.target.value });
            }}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {results: state.results};
};

export default connect(mapStateToProps)(Search);
