const Section = (category, films) => {
  console.log("FILMS : " + films.category);
  console.log("CATE : " + category.category);
  return (
    <div className="section">
      <h1>{category.category}</h1>
    </div>
  );
};

export default Section;
