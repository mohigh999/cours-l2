import React from "react";
import './Button.css';

class Button extends React.Component {

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
  }

  render() {
    return (
      <button data-testid="button" className={this.state.toggled ? "toggled" : "untoggled"} onClick={this.handleClick}
         

      >
        
      {this.props.children ? this.props.children : "Add text!"}
      </button>);
  }

}


export default Button;
