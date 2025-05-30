import { AGATA } from "../action";

const inizialState = {
  preferiti: {
    content: [],
  },
};
const mainReducer = (state = inizialState, action) => {
  switch (action.type) {
    case AGATA:
      return {
        ...state,
        preferiti: {
          content: [...state.preferiti.content, action.payload],
        },
      };
    default:
      console.log("DEFAULT");
      return state;
  }
};
export default mainReducer;
