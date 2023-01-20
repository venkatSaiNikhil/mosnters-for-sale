import "./search-box.styles.css";
const SearchBox = ({ className, placeholder, onChangeHandeler }) => (
  <div>
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandeler}
    ></input>
  </div>
);
export default SearchBox;
