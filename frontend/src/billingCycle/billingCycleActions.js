import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/tabActions';

import { BASE_URL } from '../dashboard/dashboardActions';

export const BILLING_CYCLE_FETCHED = 'BILLING_CYCLE_FETCHED';
const INITIAL_VALUES = {};

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`);

  return {
    type: BILLING_CYCLE_FETCHED,
    payload: request,
  };
}

export function create(values) {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/billingCycles`, values)
      .then((resp) => {
        toastr.success('Sucesso', 'Novo ciclo adicionado com sucesso.');
        dispatch(init());
      })
      .catch((e) => {
        e.response.data.errors.forEach((error) => toastr.error('Erro', error));
      });
  };
}

export function showUpdate(billingCycle) {
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', billingCycle),
  ];
}

export function init() {
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm', INITIAL_VALUES),
  ];
}
