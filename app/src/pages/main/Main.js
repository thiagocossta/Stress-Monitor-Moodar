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
    status: 0,
  };

  async componentDidMount() {
    const result = await api.get('/');
    await this.props.setStresses(result.data);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    const stress = await api.get('/get');
    if (stress.data) {
      stress.data.status = this.state.status;

      data.append('status', stress.data.status);
      data.append('date', stress.data.date);
      data.append('description', stress.data.description);
      await api.put(`/${stress.data._id}/put`, data);
      await this.props.deleteStress(stress.data._id);
      await this.props.addStress(stress.data);
    } else {
      data.append('status', this.state.status);
      data.append('date', moment(Date.now()).format('MM/DD/YYYY'));
      data.append('description', 'edite sua descrição');
      const result = await api.post('save', data);

      if (result.status === 200) {
        this.props.history.push('/');
        await this.props.addStress(result.data);
        const arr = await api.get('/');
        await this.props.setStresses(arr.data);
      }
    }
  }

  handleCardClick = (stress) => {
    this.props.setSelectedStress(stress);
    this.props.history.push('/stress');
  };

  handleClick = (e) => {
    this.setState({ status: e.target.value });
  }

  render() {
    return (
      <section id="main__list">
        <article>
          <header>
            <div className="main__info">
              <h1>Qual seu nível de estresse hoje? </h1>
              <div className="main__status-container">
                <h3>{this.state.status}</h3>
              </div>
              <br />
              <div className="main__form" onSubmit={this.handleSubmit}>
                <form id="main__buttons-stress">
                  <div className="main__buttons">
                    <button name="status" type="button" id="button1" value="0" onClick={this.handleClick}>0</button>
                    <button name="status" type="button" id="button2" value="20" onClick={this.handleClick}>20</button>
                    <button name="status" type="button" id="button3" value="40" onClick={this.handleClick}>40</button>
                    <button name="status" type="button" id="button4" value="60" onClick={this.handleClick}>60</button>
                    <button name="status" type="button" id="button5" value="80" onClick={this.handleClick}>80</button>
                    <button name="status" type="button" id="button6" value="100" onClick={this.handleClick}>100</button>
                  </div>
                  <button type="submit">Confirmar</button>
                </form>
              </div>
            </div>
          </header>
          <footer>
            <h3>{}</h3>
          </footer>
        </article>
        <article>
          <header>
            <div className="main__info">
              <h2>níveis de estresse cadastrados</h2>
              { this.props.stresses.map(str => (
                <div key={str._id} className="main__content">
                  <Link className="main__link" to="/stress">
                    <div onClick={() => this.handleCardClick(str)}>
                      <div className="main__specific-content">
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
  stress: state.stress.selectedStress,
});

const mapDispatchToProps = dispatch => bindActionCreators(stressActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
