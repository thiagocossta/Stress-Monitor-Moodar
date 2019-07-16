import './Main.css';

import React, { Component } from 'react';

// eslint-disable-next-line no-unused-vars
import Popup from './components/moodSelector/Popup';
import api from '../../services/api';
import emoji1 from '../../assets/Emoji1.png';

// eslint-disable-next-line react/prefer-stateless-function
class Main extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    stress: [],
  };


  async componentDidMount() {
    const response = await api.get('/stresses');
    // eslint-disable-next-line react/no-unused-state
    this.setState({ stress: response.data });
  }


  render() {
    return (

      <section id="stress-list">
        <article>
          <header>
            <div className="stress-info">
              <h1>Seu mood atual</h1>
            </div>
          </header>
          <div className="stress-image">
            <img src={emoji1} alt="" />
          </div>
          <footer>
            <p>descrição do mood diário</p>
          </footer>
        </article>

        <article>
          <header>
            <div className="stress-info">
              <h1>Moods de dias anteriores</h1>
            </div>
          </header>
        </article>
      </section>


    );
  }
}

export default Main;
