
const Banner = ({search}) => {
  return (
    <div className="banner">
      <div className="container">
        <h1>The Joke Bible</h1>
        <h3> Daily Laughts for you and yours</h3>
        <div className="searchContainer">
          <input
            type="search"
            id="search"
            name="searchJokes"
            placeholder="How can we make you laugh today?"
          />
          <button onClick={search} > <i className="fa-solid fa-magnifying-glass" style={{color:'white'}}></i></button>
        </div>
      </div>
    </div> 
  );
};
export default Banner;
