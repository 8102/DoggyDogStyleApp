import React from 'react';
import firebase from 'firebase';

export default class Article extends React.Component {

  constructor(props) {
    super(props);
    this.headline = this.props.headline;
    this.smallDesc = this.props.smallDesc;
    this.description = this.props.description;
    this.index = this.props.index;
    this.state = {
      isClicked: false,
      display: {"display": "none"}
    };
  }

  handleClick() {
    if (this.state.isClicked) {
      this.setState({
        isClicked: false,
        display: {"display": "none"}
      });
    } else {
      this.setState({
        isClicked: true,
        display: {"display": "block"}
      });
    }
    console.log("lol " + this.index);
  }

  render() {
    return (
      <div className="smallArticle row" style={{"display": "block"}} key={this.index} onClick={this.handleClick.bind(this)}>
        <div className="col-xs-4">
          <img src="./img/newsFav.jpeg" />
        </div>
        <div className="col-xs-8">
          <h2>{this.headline}</h2>
          <p>{this.smallDesc}</p>
        </div>
        <div style={this.state.display}>
          <p>
            {this.description}
          </p>
        </div>
      </div>
    );
  }

}
