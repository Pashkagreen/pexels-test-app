import { SET_LANGUAGE, LangAction, LangState } from "../../types/langTypes";

const localStorageLang = localStorage.getItem("language");

const initialState: LangState = {
  language: localStorageLang ? localStorageLang : "RU",
};

const langReducer = (state = initialState, action: LangAction) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default langReducer;
