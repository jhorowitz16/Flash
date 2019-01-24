import React, {Component} from 'react';
import '../css/card.css'
import '../css/typography.css'
import '../css/icons.css'

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextState) {
    return false;
  }

  render() {
    return (
      <div className="card app-container">

        <div className='card__panel'>
          <a href="localhost:3000">
            <div className="card__panel__logo"></div>
          </a>
          <div className="card__panel__banner">
            <span>
              Wordz with Friendz: Lesson 1
            </span>
          </div>
          <div className="card__panel__control-panel">
            <a href="localhost:3000"><i type="glyph-cross-soft"></i></a>
            <div className="icon icon--cancel"></div>
          </div>
        </div>

        <div className='card__screens'>
          <p>flashpopZ Content TBD</p>
          <img alt="flashpopz-large" src="../../flashpopz-large.png" height='200px'/>
        </div>

      </div>
    );
  }
}

export default Card;
