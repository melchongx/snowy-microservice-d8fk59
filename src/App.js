import "./styles.css";
import { useState } from "react";
const tempMusicData = [
  {
    id: 1,
    title: "Song 1",
    artist: "Artist A",
    genre: "Pop",
  },
  {
    id: 2,
    title: "Song 2",
    artist: "Artist B",
    genre: "Rock",
  },
  {
    id: 3,
    title: "Song 3",
    artist: "Artist C",
    genre: "Jazz",
  },
];
const tempPlaylist = [
  {
    id: 1,
    title: "Song 1",
    artist: "Artist A",
    genre: "Pop",
  },
  {
    id: 2,
    title: "Song 2",
    artist: "Artist B",
    genre: "Rock",
  },
  {
    id: 3,
    title: "Song 3",
    artist: "Artist C",
    genre: "Jazz",
  },
];
function App() {
  const [music, setMusic] = useState(tempMusicData);
  return (
    <>
      <NavBar>
        <NumberResult music={music} />
      </NavBar>
      <Main>
        <Box>
          <Music music={music} />
        </Box>
        <Box>
          <Playlist />
        </Box>
      </Main>
    </>
  );
}
function NavBar({ children }) {
  return (
    <nav className="container">
      <Logo />
      <Search />
      {children}
    </nav>
  );
}
function Logo() {
  return <h1>Music App Logo</h1>;
}
function NumberResult({ music }) {
  return (
    <p>
      Found <strong>{music.length}</strong> results
    </p>
  );
}
function Search() {
  const [query, setQuery] = useState("");
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
function Music({ music }) {
  return (
    <div className="container">
      <h2>Music List</h2>
      <ul>
        {musics.map((music) => (
          <li key={music.id}>
            {music.title} by {music.artist} ({music.genre})<button>♥️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
function Box({ children }) {
  return <div className="container">{children}</div>;
}
function MusicListBox() {
  const [musics, setMusic] = useState(tempMusicData);
  return <Music musics={musics} />;
}
function PlaylistBox() {
  const [playlist, setPlaylist] = useState(tempPlaylist);
  const addToPlaylist = (music) => {
    setPlaylist([...playlist, music]);
  };
  return <Playlist playlist={playlist} />;
}
function Playlist() {
  const [playlist, setPlaylist] = useState(tempPlaylist);
  const addToPlaylist = (music) => {
    setPlaylist([...playlist, music]);
  };
  return (
    <div className="container">
      <h2>Playlist</h2>
      <ul>
        {playlist.map((music) => (
          <li key={music.id}>
            {music.title} by {music.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}
function Main({ children }) {
  return (
    <div className="container">
      <MusicListBox />
      <PlaylistBox />
      {children}
    </div>
  );
}

export default App;
