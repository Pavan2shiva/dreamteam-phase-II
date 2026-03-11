export default function BookCard({ title, author, thumbnail, preview }) {

  const addBookmark = () => {

    const token = localStorage.getItem("token");

    fetch("http://127.0.0.1:5000/add-bookmark", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ title, author, thumbnail, preview }),
    });

  };

  return (
    <div className="book-card">

      <img src={thumbnail} />

      <h3>{title}</h3>
      <p>{author}</p>

      <a href={preview} target="_blank">
        <button>View</button>
      </a>

      <button onClick={addBookmark}>Bookmark</button>

    </div>
  );
}