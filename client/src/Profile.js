import React from "react";
import axios from 'axios';

class IsLoggedIn extends React.Component {
  constructor() {
      super()
      this.state = {
        user: null,
        movies: []
      }
    }
componentDidMount() {
  this.setState({ user: this.props.user });
  var currentUser = this.props.user;
  axios.get(`/userprofile/?name=${currentUser}`)
    .then((response) => {
      console.log(response.data.movie);
      this.setState({ movies: response.data.movie });
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  render() {
    return(
      <div>
        <h1>Welcome, {this.state.user}</h1>
        {/* <div>{this.state.movies.map((movie, index) => <div key={index}>
          <div>
            <h1>1</h1>
            <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.one.pic}`} alt="58008" />
            <h2>{movie.one.name}</h2>
            <h1>2</h1>
            <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.two.pic}`} alt="58008" />
            <h2>{movie.two.name}</h2>
            <h1>3</h1>
            <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.movie.pic}`} alt="58008" />
            <h2>{movie.three.name}</h2>
            <h1>4</h1>
            <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.four.pic}`} alt="58008" />
            <h2>{movie.four.name}</h2>
            <h1>5</h1>
            <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.five.pic}`} alt="58008" />
            <h2>{movie.five.name}</h2>
          </div>
        </div>
        )
        }
      </div> */}
  </div>
    );
  }
}

class Profile extends React.Component {
  constructor() {
      super()
      this.state = {
        user: null,
        movies: []
      }
      axios.get('/auth').then(response => {
         console.log(response.data);
         if (!!response.data.user) {
             console.log('PROFILE DETECTED USER');
             this.setState({ user: response.data.user });
        } else {
          this.setState({
            user: null
          })
        }
      })
    }
    loginCheckLogin () {
      if (this.state.user == null) {
        return (
          <div>
            <h2>You have to be logged in to see this page</h2>
          </div>
        )
      }
      else {
        return (
          <div>
            <IsLoggedIn user={this.state.user}/>
          </div>
        )
      }
    }


  render () {
    return(
      <div>
        <h1>Profile</h1>
        {this.loginCheckLogin()}
      </div>
    )
  }
}

export default Profile;
