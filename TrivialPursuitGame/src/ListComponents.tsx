let categories = [
  "Arts & Leisure",
  "Entertainment",
  "Geography",
  "Science & Nature",
  "Sports & Leisure",
];
let questions = [
  "Who wrote the satirical essay “A Modest Proposal?",
  "The Last Supper was painted by which artist?",
  "Samuel Langhorne Clemens is the birth name of which famous American author?",
];
let answers = [
  ["Jonathan Swift", "James Bramston", "Edgar Allen Poe"],
  ["Da Vinci", "Donatello", "Michalangelo"],
];

function ListGroup() {
  return (
    <>
      <h1 className="page-section-inner-bold">Categories</h1>
      <ol className="page-section-item">
        {categories.map((category) => (
          <li key={category}>{categories}</li>
        ))}
      </ol>
    </>
  );
}
