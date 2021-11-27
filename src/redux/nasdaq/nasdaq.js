import axios from 'axios';

const initialState = [];

const url = 'https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=8943ece709160466abe79abb2d1abaae';

const FETCH_URL = 'FETCH_URL';

const fetchUrl = (payload) => (
  {
    type: FETCH_URL,
    payload,
  });

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_URL:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const getCompany = () => async (dispatch) => {
  await axios
    .get(url)
    .then((res) => {
      const company = res.data;
      dispatch(fetchUrl(company));
    })
    .catch((err) => err);
};

export default companyReducer;
