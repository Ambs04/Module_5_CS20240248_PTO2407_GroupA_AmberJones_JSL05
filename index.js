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
  //STAR-LORD PLAYLIST
  let starLord = songs.filter(
    (songs) => songs.genre === guardians["Star-Lord"]
  );
  const starLordPlaylist = starLord.map(
    (starLord) =>
      `<div class = "song"><span class = "song-title" class = "song-title:hover">${starLord.artist}</span></div>`
  );
  let starLordSongs = starLordPlaylist.join("");
  starLordPlaylist.innerHTML += `<div class="playlist><div><>Star-Lord's Playlist:</b></div>${starLordSongs}</div>`;

  //GAMORA PLAYLIST
  let gamora = songs.filter((songs) => songs.genre === guardians["Gamora"]);
  const gamoraPlaylist = gamora.map(
    (gamora) => [gamora.title] + " by " + [gamora.artist]
  );
  // console.log(gamoraPlaylist);

  //ROCKET PLAYLIST
  let rocket = songs.filter((songs) => songs.genre === guardians["Rocket"]);
  const rocketPlaylist = rocket.map(
    (rocket) => [rocket.title] + " by " + [rocket.artist]
  );
  //console.log(rocketPlaylist);

  //DRAX PLAYLIST
  let drax = songs.filter((songs) => songs.genre === guardians["Drax"]);
  const draxPlaylist = drax.map(
    (drax) => [drax.title] + " by " + [drax.artist]
  );
  //console.log(draxPlaylist);

  //GROOT PLAYLIST
  let groot = songs.filter((songs) => songs.genre === guardians["Groot"]);
  const grootPlaylist = groot.map(
    (groot) => [groot.title] + " by " + [groot.artist]
  );
  //console.log(grootPlaylist);
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
