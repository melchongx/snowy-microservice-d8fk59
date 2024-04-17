import "./styles.css";
import { useState } from "react";
import { tempMusicData, tempPlaylist } from "./data";
import NavBar from "./components/NavBar";
import NumberResult from "./components/NumberResult";
import Playlist from "./components/Playlist";
import Music from "./components/Music";
import Box from "./components/Box";
import Search from "./components/Search";
import Main from "./components/Main";

function App() {
  const [music, setMusic] = useState(tempMusicData);
  const [playlist, setPlaylist] = useState(tempPlaylist); // State for playlist
  const [query, setQuery] = useState("");

  const addToPlaylist = (music) => {
    const updatedMusic = tempMusicData.map((song) =>
      song.id === music.id ? { ...song, isChecked: true } : song
    );
    setMusic(updatedMusic);

    setPlaylist([...playlist, music]);
  };

  const removeFromPlaylist = (music) => {
    const updatedMusic = tempMusicData.map((song) =>
      song.id === music.id ? { ...song, isChecked: false } : song
    );
    setMusic(updatedMusic);

    setPlaylist(playlist.filter((song) => song.id !== music.id));
  };

  const inPlaylist = (song) => playlist.some((s) => s.id === song.id);

  return (
    <>
      <NavBar>
        <Search setQuery={setQuery} />
        <NumberResult music={music} />
      </NavBar>
      <Main>
        <Box>
          <Music
            music={music}
            query={query}
            addToPlaylist={addToPlaylist}
            removeFromPlaylist={removeFromPlaylist}
            inPlaylist={inPlaylist}
          />
        </Box>
        <Box>
          <Playlist playlist={playlist} />
        </Box>
      </Main>
    </>
  );
}

// function MusicListBox() {
//   const [musics, setMusic] = useState(tempMusicData);
//   return <Music musics={musics} />;
// }
// function PlaylistBox() {
//   const [playlist, setPlaylist] = useState(tempPlaylist);
//   const addToPlaylist = (music) => {
//     setPlaylist([...playlist, music]);
//   };
//   return <Playlist playlist={playlist} />;
// }

export default App;
