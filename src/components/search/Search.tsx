import serch from "../../images/icons/search.svg";
import clear from "../../images/icons/fi_delete.svg";
import { MdDelete } from "react-icons/md";
import styles from "./Search.module.css";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

function Search() {
  //   const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Создаем объект запроса, который включает поисковый запрос и значения фильтров
    const query = {
      searchTerm,
    };

    // dispatch(fetchFreeProducts(query));
    // dispatch(fetchProducts(query));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
  };
  const handleClear = () => {
    setSearchTerm(""); // Очищаем поисковой запрос
  };
  return (
    <div className={styles.search}>
      <div className={styles.search_icon}>
        <img src={serch} alt="" />
      </div>

      <form className={styles.search_form} onClick={handleSearch}>
        {/* <div className={styles.search_input}> */}
        <input
          className={styles.input_for_search}
          type="text"
          value={searchTerm}
          onChange={(e) => handleChange}
          placeholder="Поиск"
        />
        {searchTerm && (
          <button>
            <img src={clear} alt="" />
          </button>
        )}
        {/* </div> */}
      </form>
    </div>
  );
}

export default Search;
