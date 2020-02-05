import React from 'react';
// import logo from './logo.svg';
// import Map from "./components/map/Map";
import './App.css';

// function App() {
  class App extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      toggled : false,
      index : 0
    }

    this.handleClick = this.handleClick.bind(this);
    this.imgs = ['https://thumbs.gfycat.com/BravePleasedCrocodileskink-size_restricted.gif', 'https://xceed.me/blog/wp-content/uploads/2017/09/giphy-6.gif'];
   }


 handleClick = () => {
      this.setState(state => ({
        toggled : !state.toggled 
      }));
      console.log(this.state.toggled)
      this.changeImg(this.imgs)
    }

  changeImg(tab) {

    if(this.state.index < this.imgs.length){

      console.log(this.imgs.length)
      this.setState(state => ({
        index : 1
      }))   
     } else{
      this.setState(state => ({
        index : 0
      })) 
     }
    console.log(this.state.index)
  }

  render (){
    return (
    <div className="App">
      <h1 className="greeting">
        Bonjour, monde !
     </h1>
     <button className={this.state.toggled ? "btn on" : "btn off"} onClick={this.handleClick} value="Button"/>
     <img className="img" src={this.imgs[this.state.index]} alt="bru"/>
    </div>
    
    )
  }

}

export default App;
