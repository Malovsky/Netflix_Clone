const Section = (props) => {
  console.log("FILMS : ", props.films);
  console.log("CATE : ", props.category);
  return (
    <div className="section">
      <h1>{props.category}</h1>
      <div className="film-list">
        {props.films.map((film, index) => {
          return <img key={index} src={film} />;
        })}
      </div>
    </div>
  );
};

export default Section;
