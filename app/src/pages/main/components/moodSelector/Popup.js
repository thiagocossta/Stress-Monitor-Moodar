import './Popup.css';

import React, { Component } from 'react';

import emoji1 from '../../../../assets/Emoji1.png';
import emoji2 from '../../../../assets/Emoji2.png';
import emoji3 from '../../../../assets/Emoji3.png';
import emoji4 from '../../../../assets/Emoji4.png';
import emoji5 from '../../../../assets/Emoji5.png';

// eslint-disable-next-line react/prefer-stateless-function
class Popup extends Component {
  render() {
    return (
      <div className="bg-modal">
        <div className="modal-content">
          <div className="modal-images">
            <input type="image" src={emoji1} alt="" />
            <input type="image" src={emoji2} alt="" />
            <input type="image" src={emoji3} alt="" />
            <input type="image" src={emoji4} alt="" />
            <input type="image" src={emoji5} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
