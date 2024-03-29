/* eslint-disable import/order */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import './Insert.css';

import * as stressActions from '../../actions';

import React, { Component } from 'react';

import api from '../../services/api';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

// eslint-disable-next-line react/prefer-stateless-function
class Insert extends Component {
   state = {
     status: 0,
     date: '',
     description: '',
   };


    handleSubmit = async (e) => {
      e.preventDefault();
      const data = new FormData();

      data.append('status', this.state.status);
      data.append('date', this.state.date);
      data.append('description', this.state.description);
      console.log(...data);
      const result = await api.post('save', data);
      if (result.status === 200) {
        this.props.history.push('/');
        await this.props.addStress(result.data);
      }
    }

    handleDate = (e) => {
      this.setState({ date: moment(e.target.value).format('MM/DD/YYYY') });
    }

    handleClick = (e) => {
      this.setState({ status: e.target.value });
    }

    handleChange = (e) => {
      this.setState({ description: e.target.value });
    }

    render() {
      return (
        <div className="stress-container">
          <h1>Cadastrar novo Mood</h1>
          <br />
          <h5>selecione seu nível de estresse, a data e uma descrição</h5>
          <div className="stress-status-container">
            <div className="stress-status">
              <h2>{this.state.status}</h2>
            </div>
          </div>

          <form id="new-stress" onSubmit={this.handleSubmit}>
            <div className="form-button" required>
              <button name="status" type="button" value="0" onClick={this.handleClick}>0</button>
              <button name="status" type="button" value="20" onClick={this.handleClick}>20</button>
              <button name="status" type="button" value="40" onClick={this.handleClick}>40</button>
              <button name="status" type="button" value="60" onClick={this.handleClick}>60</button>
              <button name="status" type="button" value="80" onClick={this.handleClick}>80</button>
              <button name="status" type="button" value="100" onClick={this.handleClick}>100</button>
            </div>

            <input
              type="date"
              name="date"
              placeholder="data"
              onChange={this.handleDate}
              required
            />

            <input
              type="text"
              name="description"
              placeholder="description"
              onChange={this.handleChange}
              required
            />

            <button type="submit">Cadastrar</button>
          </form>
        </div>

      );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(stressActions, dispatch);

export default connect(null, mapDispatchToProps)(Insert);
