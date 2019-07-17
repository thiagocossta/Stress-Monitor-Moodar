/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
import './Main.css';

import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import moment from 'moment';
import api from '../../services/api';

class Main extends Component {
  state = {
    stress: [],
    stressSelector: 0,
  };

  async componentDidMount() {
    const response = await api.get('/');
    this.setState({ stress: response.data });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('stressSelector', this.state.stressSelector);

    await api.put('/updateCurrentStatus', data);
  }

  handleChange = (e) => {
    this.setState({ stressSelector: e.target.stressSelector });
  }

  handleClick = (e) => {
    this.setState({ stressSelector: e.target.value });
  }

  render() {
    return (
      <section id="main__list">
        <article>
          <header>
            <div className="main__info">
              <h1>Qual seu nível de estresse hoje? </h1>
              <h3>{this.state.stressSelector}</h3>
              <br />
              <div className="main__form">
                <form id="main__buttons-stress">
                  <div className="main__buttons">
                    <button name="status" type="button" id="button1" value="0" onClick={this.handleClick}>0</button>
                    <button name="status" type="button" id="button2" value="20" onClick={this.handleClick}>20</button>
                    <button name="status" type="button" id="button3" value="40" onClick={this.handleClick}>40</button>
                    <button name="status" type="button" id="button4" value="60" onClick={this.handleClick}>60</button>
                    <button name="status" type="button" id="button5" value="80" onClick={this.handleClick}>80</button>
                    <button name="status" type="button" id="button6" value="100" onClick={this.handleClick}>100</button>
                  </div>
                  <button type="submit" onClick={this.handleSubmit}>Confirmar</button>
                </form>
              </div>
            </div>
          </header>
          <footer>
            {/* <h5>{this.state.stress[0]}</h5> */}
          </footer>
        </article>
        <article>
          <header>
            <div className="main__info">
              <h2>nível de estresses anteriores</h2>
              { this.state.stress.map(stress => (
                <div key={stress._id}>
                  <Link className="main__link" to="/stress">
                    <div className="main__content">
                      <h2>{moment(stress.date).format('DD/MM/YYYY')}</h2>
                      <h2>{stress.status}</h2>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </header>
        </article>
      </section>
    );
  }
}

export default Main;
