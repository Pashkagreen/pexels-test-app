export default interface SearchState {
    searchWord: string | null | undefined,
}

export enum SearchWordTypes {
    SET_SEARCH_WORD = 'SET_SEARCH_WORD',
}

interface SearchPhotosAction {
    type: SearchWordTypes.SET_SEARCH_WORD,
    payload: string | undefined
}

export type SearchAction = SearchPhotosAction
