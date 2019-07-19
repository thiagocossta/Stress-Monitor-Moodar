/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import moment from 'moment';

// eslint-disable-next-line react/prefer-stateless-function
class Stress extends Component {
  render() {
    return (
      <div>
        {this.props.stresses && (
          <div>
            <div>

              <h2>
                {moment(this.props.stresses.date).format('DD/MM/YYYY')}
              </h2>
              <h2>
                {this.props.stresses.description}
              </h2>
              <h2>{this.props.stresses.status}</h2>
            </div>
          </div>

        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stresses: state.stress.selectedStress,
});

export default connect(mapStateToProps)(Stress);
