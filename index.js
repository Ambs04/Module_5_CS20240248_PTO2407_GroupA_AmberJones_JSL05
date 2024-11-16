d; // Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  {
    title: "Escape (The Piña Colada Song)",
    artist: "Rupert Holmes",
    genre: "Pop",
  },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  {
    title: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
    genre: "R&B",
  },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  {
    title: "Fooled Around and Fell in Love",
    artist: "Elvin Bishop",
    genre: "Rock",
  },
  { title: "Pour Some Sugar On Me", artist: "Def Leppard", genre: "Rock" },
  {
    title: "Sweet Home Alabama",
    artist: "Lynyrd Skynyrd",
    genre: "Country Rock",
  },
  { title: "U Can't Touch This", artist: "MC Hammer", genre: "Hip hop" },
  { title: "Never Gonna Give You up", artist: "Rick Astley", genre: "Pop" },
  { title: "Y.M.C.A.", artist: "Village People", genre: "Disco" },
  { title: "Red Red Wine", artist: "UB40", genre: "Reggae" },
  {
    title: "Have You Ever Seen The Rain",
    artist: "Creedence Clearwater Revival",
    genre: "Country Rock",
  },
  { title: "The Gambler", artist: "Kenny Rogers", genre: "Country Rock" },
  { title: "Stayin' Alive", artist: "Bee Gees", genre: "Disco" },
  {
    title: "That's the Way (I Like It)",
    artist: "KC and the Sunshine Band",
    genre: "Disco",
  },
  { title: "Ms. Jackson", artist: "OutKast", genre: "Hip hop" },
  { title: "Rock My World", artist: "Michael Jackson", genre: "R&B" },
];

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  Gamora: "Pop",
  Rocket: "Hip hop",
  Drax: "Country Rock",
  Groot: "Disco",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
  let playlist = document.getElementById("playlists");

  //STAR-LORD PLAYLIST
  let starLord = songs.filter(
    (songs) => songs.genre === guardians["Star-Lord"]
  );
  const starLordPlaylist = starLord.map(
    (starLord) =>
      `<div class = "song"><span class = "song-title" class = "song-title:hover">${starLord.title}</span> by ${starLord.artist}</div>`
  );
  let starLordSongs = starLordPlaylist.join("");
  starLordPlaylist.innerHTML += `<div class="playlist><div style=font-size: 26px;><b>Star-Lord's Playlist:</b></div>${starLordSongs}</div>`;

  //GAMORA PLAYLIST
  let gamora = songs.filter((songs) => songs.genre === guardians["Gamora"]);
  const gamoraPlaylist = gamora.map(
    (gamora) =>
      `<div class = "song"><span class = "song-title" class = "song-title:hover">${gamora.title}</span> by ${gamora.artist}</div>`
  );
  let gamoraSongs = gamoraPlaylist.join("");
  gamoraPlaylist.innerHTML += `<div class="playlist><div style=font-size: 26px;><b>Gamora's Playlist:</b></div>${gamoraSongs}</div>`;

  //ROCKET PLAYLIST
  let rocket = songs.filter((songs) => songs.genre === guardians["Rocket"]);
  const rocketPlaylist = rocket.map(
    (rocket) =>
      `<div class = "song"><span class = "song-title" class = "song-title:hover">${rocket.title}</span> by ${rocket.artist}</div>`
  );
  let rocketSongs = rocketPlaylist.join("");
  rocketPlaylist.innerHTML += `<div class="playlist><div style=font-size: 26px;><b>Rocket's Playlist:</b></div>${rocketSongs}</div>`;

  //DRAX PLAYLIST
  let drax = songs.filter((songs) => songs.genre === guardians["Drax"]);
  const draxPlaylist = drax.map(
    (drax) =>
      `<div class = "song"><span class = "song-title" class = "song-title:hover">${drax.title}</span> by ${drax.artist}</div>`
  );
  let draxSongs = draxPlaylist.join("");
  draxPlaylist.innerHTML += `<div class="playlist><div style=font-size: 26px;><b>Drax's Playlist:</b></div>${draxSongs}</div>`;

  //GROOT PLAYLIST
  let groot = songs.filter((songs) => songs.genre === guardians["Groot"]);
  const grootPlaylist = groot.map(
    (groot) =>
      `<div class = "song"><span class = "song-title" class = "song-title:hover">${groot.title}</span> by ${groot.artist}</div>`
  );
  let grootSongs = grootPlaylist.join("");
  grootPlaylist.innerHTML += `<div class="playlist><div style=font-size: 26px;><b>Groot's Playlist:</b></div>${grootSongs}</div>`;
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
