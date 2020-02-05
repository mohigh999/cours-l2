import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props)
    this.data = '';
    this.state = {
      on: false,
      post: []
    }
    }
    

  componentDidMount() {
    axios.get(`https://randomuser.me/api/`)
      .then(res => {
        const posts = res.data.results;
        console.log(posts)
        this.setState({ 
          on: true,
          post: posts });
        console.log(this.state.post[0].email);
      });
  }


  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <img src={this.state.on ? this.state.post[0].picture.large : 'bru'} className="card-img-top" alt="..."/>
              <div clasNames="card-body">
                <h5 className="card-title">{this.state.on ? this.state.post[0].name.title+this.state.post[0].name.last : 'Wait...'}</h5>
                <p className="card-text">{this.state.on ? "username: "+this.state.post[0].login.username+this.state.post[0].name.last : 'Wait...'}</p>
                <a href="https://space-invader.pierre-monier.com" className="btn btn-primary">{this.state.on ? "Discover his work" : 'Wait...'}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
