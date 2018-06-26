import React from "react";
import axios from 'axios';
import { Button } from 'react-bootstrap';

class IsLoggedIn extends React.Component {
  constructor() {
      super()
      this.state = {
        user: null,
        movies: {
        "one": {
            "name": "one",
            "pic": "/ocsmt4duUyNZtTM641k262PBeIU.jpg"
        },
        "two": {
            "name": "two",
            "pic": "/ocsmt4duUyNZtTM641k262PBeIU.jpg"
        },
        "three": {
            "name": "three",
            "pic": "/ocsmt4duUyNZtTM641k262PBeIU.jpg"
        },
        "four": {
            "name": "four",
            "pic": "/ocsmt4duUyNZtTM641k262PBeIU.jpg"
        },
        "five": {
            "name": "five",
            "pic": "/ocsmt4duUyNZtTM641k262PBeIU.jpg"
        }
      }
    }
      this.movieDisplay = this.movieDisplay.bind(this);
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
movieDisplay() {
  return (
    <div>
      <h1>1</h1>
      <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.state.movies.one.pic}`} alt="58008" />
      <h2>{this.state.movies.one.name}</h2>
        <form action="/onetwo" method="post" name="onetwo">
          <input type="hidden" name="name" value={this.state.user}/>
          <input type="hidden" name="onemov" value={this.state.movies.one.name}/>
          <input type="hidden" name="onepic" value={this.state.movies.one.pic}/>
          <input type="hidden" name="twomov" value={this.state.movies.two.name}/>
          <input type="hidden" name="twopic" value={this.state.movies.two.pic}/>
          <Button bsStyle="info" type="submit">Swap One and Two</Button>
        </form>
      <h1>2</h1>
      <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.state.movies.two.pic}`} alt="58008" />
      <h2>{this.state.movies.two.name}</h2>
        <form action="/twothree" method="post" name="twothree">
          <input type="hidden" name="name" value={this.state.user}/>
          <input type="hidden" name="threemov" value={this.state.movies.three.name}/>
          <input type="hidden" name="threepic" value={this.state.movies.three.pic}/>
          <input type="hidden" name="twomov" value={this.state.movies.two.name}/>
          <input type="hidden" name="twopic" value={this.state.movies.two.pic}/>
          <Button bsStyle="info" type="submit">Swap Two and Three</Button>
        </form>
      <h1>3</h1>
      <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.state.movies.three.pic}`} alt="58008" />
      <h2>{this.state.movies.three.name}</h2>
        <form action="/threefour" method="post" name="threefour">
          <input type="hidden" name="name" value={this.state.user}/>
          <input type="hidden" name="threemov" value={this.state.movies.three.name}/>
          <input type="hidden" name="threepic" value={this.state.movies.three.pic}/>
          <input type="hidden" name="fourmov" value={this.state.movies.four.name}/>
          <input type="hidden" name="fourpic" value={this.state.movies.four.pic}/>
          <Button bsStyle="info" type="submit">Swap Three and Four</Button>
        </form>
      <h1>4</h1>
      <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.state.movies.four.pic}`} alt="58008" />
      <h2>{this.state.movies.four.name}</h2>
        <form action="/fourfive" method="post" name="fourfive">
          <input type="hidden" name="name" value={this.state.user}/>
          <input type="hidden" name="fivemov" value={this.state.movies.five.name}/>
          <input type="hidden" name="fivepic" value={this.state.movies.five.pic}/>
          <input type="hidden" name="fourmov" value={this.state.movies.four.name}/>
          <input type="hidden" name="fourpic" value={this.state.movies.four.pic}/>
          <Button bsStyle="info" type="submit">Swap Four and Five</Button>
        </form>
      <h1>5</h1>
      <img className="moviepic" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.state.movies.five.pic}`} alt="58008" />
      <h2>{this.state.movies.five.name}</h2>
    </div>
  )
}
  render() {
    return(
      <div>
        <h1>Welcome, {this.state.user}</h1>
        {this.movieDisplay()}
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
