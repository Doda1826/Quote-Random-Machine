import axios from 'axios';

export const addQuote = (quote) => ({
  type: 'ADD_QUOTE',
  payload: quote,
});

export const fetchQuote = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      dispatch(addQuote(response.data.content));
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };
};

export default fetchQuote;