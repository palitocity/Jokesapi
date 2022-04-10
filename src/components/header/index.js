
const Header = () => {
  return (
    <div className="navbar">
      <a href="#home">so funktioniert's </a>
      <a href="#news">sonderancebote</a>
      <div className="dropdown">
        <button className="dropbtn">
          Mein Bereich
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#first">My published jokes</a>
          <a href="#second"> My saved jokes</a>
          <a href="#third">Account information</a>
          <a href="#forth"> Publish new joke</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
