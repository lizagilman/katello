import {
  REPOSITORY_SETS_REQUEST,
  REPOSITORY_SETS_SUCCESS,
  REPOSITORY_SETS_FAILURE,
} from '../../consts';

const initialState = { isLoading: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case REPOSITORY_SETS_REQUEST:
      return { ...state, ...{ isLoading: true } };

    case REPOSITORY_SETS_SUCCESS:
      return {
        ...state,
        ...{
          results: action.response.results,
          isLoading: false,
          success: true,
        },
      };

    case REPOSITORY_SETS_FAILURE:
      return { ...state, ...{ results: action.result, isLoading: false, success: false } };

    default:
      return state;
  }
};
