export const setSelectedStress = stress => ({
  type: 'SET_SELECTED_STRESS',
  payload: stress,
});

export const setStresses = stresses => ({
  type: 'SET_STRESSES',
  payload: stresses,
});

export const addStress = stress => ({
  type: 'ADD_STRESS',
  payload: stress,
});

export const deleteStress = id => ({
  type: 'DELETE_STRESS',
  payload: id,
});

export const updateStress = stress => ({
  type: 'UPDATE_STRESS',
  payload: stress,
});
