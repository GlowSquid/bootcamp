import { songsList } from '../data/songs.js';

const Playlist = (_ => {
  // State
  let songs = songsList;
  let currentlyPlayingIndex = 0;
  let currentSong = new Audio(songs[currentlyPlayingIndex].url);
  let isPlaying = false;

  // cache the DOM
  const playlistEl = document.querySelector('.playlist');

  const init = _ => {
    render();
    listeners();
  };

  const changeAudioSrc = _ => {
    currentSong.src = songs[currentlyPlayingIndex].url;
  };

  const togglePlayPause = _ => {
    return currentSong.paused ? currentSong.play() : currentSong.pause();
  };

  const mainPlay = clickedIndex => {
    if (currentlyPlayingIndex === clickedIndex) {
      console.log('same song');
      togglePlayPause();
    } else {
      currentlyPlayingIndex = clickedIndex;
      changeAudioSrc();
      togglePlayPause();
      console.log('new song');
    }
  };

  const listeners = _ => {
    playlistEl.addEventListener('click', e => {
      if (e.target && e.target.matches('.fa')) {
        const listElem = e.target.parentNode.parentNode;

        const listElemIndex = [...listElem.parentElement.children].indexOf(
          listElem
        );
        mainPlay(listElemIndex);
        render();
      }
    });
  };

  const render = _ => {
    let markup = '';
    const toggleIcon = itemIndex => {
      if (currentlyPlayingIndex === itemIndex) {
        return currentSong.paused ? 'fa-play' : 'fa-pause';
      } else {
        return 'fa-play';
      }
    };

    songs.forEach((songObj, index) => {
      markup += `
      <li class="playlist__song ${
        index === currentlyPlayingIndex ? 'playlist__song--active' : ''
      }">
        <div class="play-pause">
          <i class="fa ${toggleIcon(index)} pp-icon"> </i>
        </div>
        <div class="playlist__song-details">
          <span class="playlist__song-name">${songObj.title}</span> <br />
          <span class="playlist__song-artist">${songObj.artist}</span>
        </div>
        <div class="playlist__song-duration">${songObj.duration}</div>
      </li>
      `;
    });

    playlistEl.innerHTML = markup;
  };

  return {
    init
  };
})();

export default Playlist;
