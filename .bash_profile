// CRUD - Create Read Update & Delete
/*
var songs = [];
var Song = function(title, artist, genre) {
  this.title = title;
  this.artist = artist;
  this.genre = genre;
}
var wonderwall = new Song('Wonderwall', 'Oasis', 'popishthing');
var stairway = new Song("Stairway to Heaven", "Led Zepplin", 'rock');
var toxic = new Song("Toxic", "Brittney Spears", 'pop');
songs.push(wonderwall,stairway,toxic);

function displaySongs(){
  var elemStr = "";
  for (var i = 0; i < songs.length; i++){
    elemStr += '<div class="well container">'
            + '<h3>' + songs[i].title + '</h3>'
            + '<p><i>' + songs[i].artist + '</i></p><br>'
            + '<p><i>' + songs[i].genre + '</i></p><br>'
            + "<p id='save" + i +"'><button class='btn btn-sm btn-primary' onclick='removeSong(" + i + ")'>Delete Song</button><button class='btn btn-sm btn-primary' onclick='editSong(" + i + ")'>Edit Song</button>" + songs[i].title + "</p>"
            + '</div>';
  }
  document.getElementById('songs').innerHTML = elemStr;
}
displaySongs();
// When someone hits enter or button...run this function
document.getElementById('newSongForm').addEventListener('submit', function(event){
  //  prevent page refresh
  event.preventDefault();
  // Getting values from inputs and storing them in variables
  var title = document.getElementById('songTitle').value;
  var artist = document.getElementById('songArtist').value;
  var genre = document.getElementById('songGenre').value;
  //  Creating new song obj by calling song constructor
  var mySong = new Song(title, artist, genre);
  // Add created song to songs array
  songs.push(mySong);
// ------------------------------------------------------------------
// document.getElementById('songs').innerHTML +='<div class="well container">'
//           + '<h3>' + mySong.title + '</h3>'
//           + '<p><i>' + mySong.artist + '</i></p><br>'
//           + '<p><i>' + mySong.genre + '</i></p><br>'
//           + "<p id='save" + mySong +"'><button class='btn btn-sm btn-primary' onclick='removeSong(" + mySong + ")'>Delete Song</button><button class='btn btn-sm btn-primary' onclick='editSong(" + mySong + ")'>Edit Song</button>" + mySong.title + "</p>"
//           + '</div>';

// ---------  Replaces above code ^  --------------------
displaySongs();

//  CLears out the value after being submitted
  document.getElementById('songTitle').value = "";
  document.getElementById('songArtist').value = "";
  document.getElementById('songGenre').value = "";
  console.log(mySong)
});


// ------- This is too remove song ------------
function removeSong(postIndex){
  songs.splice(postIndex, 1);
  displaySongs();
}

// ------- This is edit songs ------------------
function editSong(postIndex){
  // This is going to be the chosen post er want to edit
  var editTitle = songs[postIndex].title;
  var editArtist = songs[postIndex].artist;
  var editGenre = songs[postIndex].genre;

 // -------- This gets the song value -----------
  document.getElementById('songTitle').value = editTitle;
  document.getElementById('songArtist').value = editArtist;
  document.getElementById('songGenre').value = editGenre;
// ----------- keep track of index
  document.getElementById('editSongId').value = postIndex;

  var save = "<button onclick='saveSong()'>Save Song</button>"

  for (var i = 0; i < songs.length; i++){
    document.getElementById("save" + postIndex).innerHTML = save;
  }
}



function saveSong(){
  var editTitle = document.getElementById("songTitle").value;
  var editArtist = document.getElementById("songArtist").value;
  var editGenre = document.getElementById("songGenre").value;
  var postIndex = document.getElementById("editSongId").value;

  songs[postIndex].title = editTitle;
  songs[postIndex].artist = editArtist;
  songs[postIndex].genre = editGenre;

  document.getElementById('songTitle').value = '';
  document.getElementById('songArtist').value = '';
  document.getElementById('songGenre').value = '';

  displaySongs();

}
*/
