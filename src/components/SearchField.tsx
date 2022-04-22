import React, {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import "./SearchField.scss";
import SearchForm from "./SearchForm";
import tips from "./tips";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { SearchWordTypes } from "../types/searchWord";
import { useNavigate } from "react-router-dom";
import { searchPhotos } from "../store/action-creators/photo";

const SearchField: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const searchState = useTypedSelector((state) => state.word);
  const searchListState = useTypedSelector(
    (state) => state.photos?.searchPhotos
  );

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    dispatch({ type: SearchWordTypes.SET_SEARCH_WORD, payload: search });
    dispatch(searchPhotos(1, search));
    console.log(searchListState);
    console.log(searchState);
    navigate(`/search/${search}`);
  };

  const arrTipsFunc = useMemo(() => {
    let setTips = new Set();
    while (setTips.size !== 7) {
      let arr = tips[Math.floor(Math.random() * 40)];
      setTips.add(arr);
    }
    let arrTips: any[] = Array.from(setTips);
    return arrTips;
  }, []);

  const tipsSearch = (e: any) => {
    e.preventDefault();
    const tip = e.target.innerHTML.substr(0, e.target.innerHTML.length - 1);
    console.log(tip);
    dispatch({
      type: SearchWordTypes.SET_SEARCH_WORD,
      payload: tip.toString(),
    });
    dispatch(searchPhotos(1, tip.toString()));
    console.log(searchState);
    navigate(`/search/${tip}`);
  };

  return (
    <div className="search-field">
      <h1 className="search-title">
        Лучшие бесплатные стоковые фото, изображения без роялти и видео от
        талантливых авторов.
      </h1>
      <form className="search-block" onSubmit={submitHandler}>
        <SearchForm
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        <button
          className="search-button"
          onKeyPress={(e) => e.key === "Enter" && submitHandler}
        >
          <i className="fa fa-search"></i>
        </button>
      </form>
      <div className="search-tips">
        <span>Идеи для поиска:</span>
        <ul className="search-keywords" onClick={tipsSearch}>
          {arrTipsFunc.map((item) => (
            <li key={item.id}>
              <a href="">{item.tip},</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchField;
