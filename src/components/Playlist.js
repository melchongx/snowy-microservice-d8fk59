import NumberResult from "./NumberResult";

function Playlist({ playlist }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>Playlist</h2>
        <NumberResult music={playlist} />
      </div>
      <ul>
        {playlist.map((music) => (
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "20px",
            }}
            key={music.id}
          >
            <div style={{ marginTop: "10px", marginRight: "10px" }}>
              {music.title} by {music.artist} ({music.genre})
            </div>
            <button style={{ visibility: "hidden" }}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
