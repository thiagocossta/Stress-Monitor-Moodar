/* eslint-disable no-case-declarations */
const initialState = {
  stresses: [],
  selectedStress: null,
  error: null,
};

export default function stresses(state = initialState, action) {
  switch (action.type) {
    case 'SET_SELECTED_STRESS':
      return {
        ...state,
        selectedStress: action.payload,
      };
    case 'SET_STRESSES':
      return {
        ...state,
        stresses: action.payload,
      };
    case 'ADD_STRESS':
      return {
        ...state,
        stresses: state.stresses.concat(action.payload),
      };
    case 'DELETE_STRESS':
      return {
        ...state,
        stresses: state.stresses.filter(i => i !== action.payload),
      };
    case 'UPDATE_STRESS':
      const arr = state.stresses.filter(i => i !== action.payload);
      return {
        ...state,
        stresses: [...arr, action.payload],
      };
    default:
      return state;
  }
}
