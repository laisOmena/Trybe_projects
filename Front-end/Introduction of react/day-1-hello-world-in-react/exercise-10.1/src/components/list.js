import React, { Component, Fragment } from "react";

export default class List extends Component {
  render() {
    const animes = ['One Piece', 'Hunter x Hunter', 'Fairy Tail', 'Naruto', 'Bleach'];
    return (<Fragment>
      <h1>list</h1>
      <ul>
        { animes.map((item) => <li>{ item }</li>) }
      </ul>
    </Fragment>);
  }
}