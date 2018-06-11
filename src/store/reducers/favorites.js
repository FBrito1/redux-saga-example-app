const INITIAL_STATE = [];

// O reducer só vai ouvir a resposta da api entregue pelo saga
export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE_SUCCESS':
      return [...state, action.payload.data];
    default:
      return state;
  }
}
