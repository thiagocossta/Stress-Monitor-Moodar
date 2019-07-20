/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import './Stress.css';

import React, { Component } from 'react';

import { connect } from 'react-redux';
import moment from 'moment';
import api from '../../services/api';

// eslint-disable-next-line react/prefer-stateless-function
class Stress extends Component {
  handleSubmit = async (id) => {
    const result = await api.delete(`/${id}/delete`, this.props.stress._id);
    if (result.status === 200) {
      this.props.history.push('/');
      this.props.stress.deleteStress(result.data._id);
    }
  }

  render() {
    return (
      <div>
        {this.props.stress && (
          <section id="stress__container">
            <div className="stress__content">
              <div className="stress__info">
                <div className="stress__info-date">
                  <h1>
                    {moment(this.props.stress.date).format('DD/MM/YYYY')}
                  </h1>
                </div>
              </div>
              <div className="stress__info-status">
                <h1>{this.props.stress.status}</h1>
              </div>
              <div className="stress__info">
                <h2>{this.props.stress.description}</h2>
              </div>
              <div className="stress__buttons">
                <div className="stress__e-button">
                  <button className="stress__edit-button" type="button">Editar</button>
                </div>
                <div className="stress__d-button">
                  <button
                    className="stress__delete-button"
                    type="button"
                    onClick={() => this.handleSubmit(this.props.stress._id)}
                  >
Deletar

                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stress: state.stress.selectedStress,
});

export default connect(mapStateToProps)(Stress);
