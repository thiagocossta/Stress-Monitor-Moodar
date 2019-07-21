/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import './Edit.css';

import * as stressActions from '../../actions';

import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import api from '../../services/api';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

// eslint-disable-next-line react/prefer-stateless-function
class Edit extends Component {
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

    const result = await api.put(`/${this.props.stress._id}/put`, data);
    if (result.status === 200) {
      await this.props.updateStress(result.data);
      this.props.setSelectedStress(result.data);
      this.props.history.push('/stress');
    }
  }

  handleDate = (e) => {
    this.setState({ date: moment(e.target.value).format('MM/DD/YYYY') });
  }

  handleClick = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="edit__div-container">
        {this.props.stress && (
          <section id="edit__container">
            <div className="edit__content">
              <form id="edit__form" onSubmit={this.handleSubmit}>
                <input
                  type="date"
                  name="date"
                  onChange={this.handleDate}
                  required
                />
                <div className="edit__button" required>
                  <button name="status" type="button" onClick={this.handleClick} value="0">0</button>
                  <button name="status" type="button" onClick={this.handleClick} value="20">20</button>
                  <button name="status" type="button" onClick={this.handleClick} value="40">40</button>
                  <button name="status" type="button" onClick={this.handleClick} value="60">60</button>
                  <button name="status" type="button" onClick={this.handleClick} value="80">80</button>
                  <button name="status" type="button" onClick={this.handleClick} value="100">100</button>
                </div>
                <input
                  type="text"
                  name="description"
                  placeholder={this.props.stress.description}
                  onChange={this.handleChange}
                  required
                />
                <div className="edit__buttons">
                  <div id="edit__ok-button">
                    <button className="edit__edit-button" type="submit">OK</button>
                  </div>
                <div id="edit__cancel-button">
                  <Link to="/Stress">
                    <button
                      className="edit__c-button"
                      type="button">Cancelar
                    </button>
                  </Link>
                </div>
                </div>
              </form>
            </div>
          </section>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stress: state.stress.selectedStress,
  stresses: state.stress.stresses,
});

const mapDispatchToProps = dispatch => bindActionCreators(stressActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
