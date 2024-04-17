import { useState } from "react";

function Music({
  music,
  query,
  addToPlaylist,
  removeFromPlaylist,
  inPlaylist,
}) {
  const [sortBy, setSortBy] = useState("title"); // State to control sorting

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const sortedMusic = [...music].sort((a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "artist") {
      return a.artist.localeCompare(b.artist);
    } else if (sortBy === "genre") {
      return a.genre.localeCompare(b.genre);
    } else {
      return 0; // No specific order
    }
  });
  return (
    <div>
      <div style={{ display: "flex" }}>
        <h2>Music List</h2>
        <button onClick={() => handleSortChange("title")}>Sort by Title</button>
        <button onClick={() => handleSortChange("artist")}>
          Sort by Artist
        </button>
        <button onClick={() => handleSortChange("genre")}>Sort by Genre</button>
      </div>
      <ul>
        {sortedMusic
          .filter((song) => {
            // Apply the search filter again
            const searchTerm = query.toLowerCase();
            const titleMatch = song.title.toLowerCase().includes(searchTerm);
            const artistMatch = song.artist.toLowerCase().includes(searchTerm);
            const genreMatch = song.genre.toLowerCase().includes(searchTerm);
            return titleMatch || artistMatch || genreMatch;
          })
          .map((music) => (
            <li
              key={music.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: "20px",
              }}
            >
              <div style={{ marginTop: "10px", marginRight: "10px" }}>
                {music.title} by {music.artist} ({music.genre})
              </div>
              <div>
                {" "}
                {/* Space for buttons */}
                {inPlaylist(music) ? (
                  <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => removeFromPlaylist(music)}
                  >
                    X
                  </button>
                ) : (
                  <button onClick={() => addToPlaylist(music)}>♥️</button>
                )}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Music;
