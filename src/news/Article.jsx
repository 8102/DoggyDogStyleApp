import React from 'react';
import firebase from 'firebase';

export default class Article extends React.Component {

  constructor(props) {
    super(props);
    this.headline = this.props.headline;
    this.smallDesc = this.props.smallDesc;
    this.description = this.props.description;
    this.index = this.props.index;
  }

  handleClick(e) {
    e.preventDefault();
    /*console.log("ça click " + this.index);*/
  }

  render() {
    return (
      <a style={{"display": "block"}} key={this.index} href="#" onClick={this.handleClick}>
        <div className="smallArticle row">
          <div className="col-xs-4">
            <img src="./img/newsFav.jpeg" />
          </div>
          <div className="col-xs-8">
            <h2>{this.headline}</h2>
            <p>{this.smallDesc}</p>
          </div>
          <div style={{"display": "none"}}>
            <p>
              {this.description}
            </p>
          </div>
        </div>
      </a>

    );
  }

}
