import { ActionTypes } from '../../constants/action-types.constants';

export const setCurrentUser = (user) => ({
  type: ActionTypes.SET_CURRENT_USER,
  payload: user,
});
