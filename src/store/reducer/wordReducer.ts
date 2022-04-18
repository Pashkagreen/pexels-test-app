import SearchState, {SearchAction, SearchWordTypes} from "../../types/searchWord";

const initialState: SearchState = {
    searchWord: '',
}

const wordReducer = (state = initialState, action: SearchAction): SearchState | undefined => {
    if (action.type === SearchWordTypes.SET_SEARCH_WORD) {
        return {
            searchWord: action.payload
        }
    } else return state
}

export default wordReducer