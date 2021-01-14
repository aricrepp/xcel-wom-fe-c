const WORKORDER_SUBMITTED = 'WORKORDER_SUBMITTED';
const FORM_FAILED = 'FORM_FAILED';

export const workorderAction = formvalues => {
  return dispatch => {
    dispatch({ type: WORKORDER_SUBMITTED, payload: formvalues });
  };
};

export const workorderFailed = err => {
  return dispatch => {
    dispatch({ type: FORM_FAILED, payload: err });
  };
};
