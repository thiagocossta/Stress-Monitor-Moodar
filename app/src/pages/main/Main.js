/* eslint-disable import/order */
/* eslint-disable block-spacing */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-underscore-dangle */

import './Main.css';

import * as stressActions from '../../actions';

import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import api from '../../services/api';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

class Main extends Component {
  state = {
    stressSelector: 0,
  };

  // constructor(props) {
  //   super(props);
  //   console.log(props);
  // }

  async componentDidMount() {
    const result = await api.get('/');
    this.props.setStresses(result.data);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('stressSelector', this.state.stressSelector);

    await api.put('/updateCurrentStatus', data);
  }

  handleCardClick = (stress) => {
    this.props.setSelectedStress(stress);
    this.props.history.push('/stress');
  };

  handleChange = (e) => {
    this.setState({ stressSelector: e.target.stressSelector });
  }

  handleClick = (e) => {
    this.setState({ stressSelector: e.target.value });
  }

  // getCurrentStress = () => {
  //   this.props.stresses.filter(
  // eslint-disable-next-line max-len
  //   stress => (moment(stress.date).format('DD/MM/YYYY') === moment(Date.now()).format('DD/MM/YYYY')),
  //   );
  // }

  render() {
    console.log(this.props);
    return (
      <section id="main__list">
        <article>
          <header>
            <div className="main__info">
              <h1>Qual seu nível de estresse hoje? </h1>
              <div className="main__status-container">
                <h3>{this.state.stressSelector}</h3>
              </div>
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
            {/* {this.getCurrentStress() && this.getCurrentStress().description} */}
          </footer>
        </article>
        <article>
          <header>
            <div className="main__info">
              <h2>nível de estresses anteriores</h2>
              { this.props.stresses.map(str => (
                <div key={str._id} className="main__content">
                  <Link className="main__link" to="/stress">
                    <div onClick={() => this.handleCardClick(str)}>
                      <div key={str._id} className="main__specific-content">
                        <h2>{moment(str.date).format('DD/MM/YYYY')}</h2>
                        <h2>{str.status}</h2>
                      </div>
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


const mapStateToProps = state => ({
  stresses: state.stress.stresses,
});

const mapDispatchToProps = dispatch => bindActionCreators(stressActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
