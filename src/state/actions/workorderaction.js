const WORKORDER_SUBMITTED = 'WORKORDER_SUBMITTED';
const FORM_FAILED = 'FORM_FAILED';

const workorderAction = formvalues => {
  return dispatch => {
    dispatch({ type: WORKORDER_SUBMITTED, payload: formvalues });
  };
};

const workorderFailed = () => {
  return dispatch => {
    dispatch({ type: FORM_FAILED });
  };
};

export { workorderAction, workorderFailed };
