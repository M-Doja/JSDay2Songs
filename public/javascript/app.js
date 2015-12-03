// CRUD - Create Read Update & Delete

var songs = [];
var Song = function(title, artist, genre) {
  this.title = title;
  this.artist = artist;
  this.genre = genre;
}
var wonderwall = new Song('Wonderwall', 'Oasis', 'popishthing');
var stairway = new Song("Stairway to Heaven", "Led Zepplin", 'rock');
var toxic = new Song("Toxic", "Brittney Spears", 'pop');
songs.unshift(wonderwall,stairway,toxic);

function displaySongs(){
  var elemString = "";
  for (var i = 0; i < songs.length; i++){
    //  pass in song and song index
    elemString += getElemString(songs[i], i)

  }
  document.getElementById('songs').innerHTML = elemString;
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
  songs.unshift(mySong);
// ------------------------------------------------------------------
document.getElementById('songs').innerHTML += getElemString(mySong, songs.length -1)
// ---------  Replaces above code ^  --------------------
displaySongs();

//  Clears out the value after being submitted
  document.getElementById('songTitle').value = "";
  document.getElementById('songArtist').value = "";
  document.getElementById('songGenre').value = "";

});
// ------- This is too remove song ------------
function getElemString(song, z){
          // console.log(z);
          return '<div class="well container">'
          + '<h3>' + song.title + '</h3>'
          + '<p><i>' + song.artist + '</i></p><br>'
          + '<p><i>' + song.genre + '</i></p><br>'
          +'<div>'
            + '<button class="btn btn-primary" onclick="editSong(' + z + ')">Edit</button>'
            +'<button class="btn btn-danger" onclick="deleteSong(' + z + ')">Delete</button></div>'
            + '</div>'
          + '</div>';
}
// ------- This is edit songs ------------------
function editSong(index){
    $("#editTitle").val(songs[index].title);
    $("#editArtist").val(songs[index].artist);
    $("#editGenre").val(songs[index].genre);
    $("#saveEditButton").html('<button onclick="saveSong('+ index + ')" type="button" class="btn btn-primary">Save changes</button>');

    $("#myModal").modal('toggle');
  }
  function saveSong(index){
    var editTitle = $("#editTitle").val();
    var editArtist = $("#editArtist").val();
    var editGenre = $("#editGenre").val();
    // var index = $("#editSongId").val();
    songs[index] = new Song(editTitle, editArtist, editGenre);
    $("#editTitle").val('');
    $("#editArtist").val('');
    $("#editGenre").val('');

    $("#myModal").modal('toggle');
    displaySongs();
  }

  // a is the song index we want to delete (references z in getElemString())
  function deleteSong(a){
    songs.splice(a, 1);
    displaySongs();
}

// ---------------------------------------------------------------------------







//  // -------- This gets the song value -----------
//   document.getElementById('songTitle').value = editTitle;
//   document.getElementById('songArtist').value = editArtist;
//   document.getElementById('songGenre').value = editGenre;
// // ----------- keep track of index
//   document.getElementById('editSongId').value = index;
//
//   var save = "<button onclick='saveSong()'>Save Song</button>"
//
//   for (var i = 0; i < songs.length; i++){
//     document.getElementById("save" + index).innerHTML = save;
//   }
//
//
// function saveSong(){
//   var editTitle = document.getElementById("songTitle").value;
//   var editArtist = document.getElementById("songArtist").value;
//   var editGenre = document.getElementById("songGenre").value;
//   var postIndex = document.getElementById("editSongId").value;
//
//   songs[postIndex].title = editTitle;
//   songs[postIndex].artist = editArtist;
//   songs[postIndex].genre = editGenre;
//
//   document.getElementById('songTitle').value = '';
//   document.getElementById('songArtist').value = '';
//   document.getElementById('songGenre').value = '';
//
//   displaySongs();
//
// }






/*
var array = [2, 4, 6, 8];

function Arith(arr) {
  // code goes here
  var diff = arr[1] - arr[0];
  var type = "";
  // loop thru array and compare
  for(var i = 0; i < arr.length - 1; i++){
    // check if diff is consistent
    if (arr[i+1] - arr[i] !== diff){
      console.log("This Not is arithmatic");
    } else {
      console.log("This is Arithmatic");
    }
  }
}
Arith(array);


function Geo(arr){
	var ratio = arr[1] / arr[0];
  	for(var i = 0; i<Geo.length - 1; i++){
    	if (arr[i] * ratio !== arr[i + 1]){
        	console.log(false);
        } else{
        	console.log(true)
        }
    }
}

Geo(array);


function ArithGeo() {
  if (arr.length < 3) return -1;
	if (Arith(arr) === true) {
    	console.log("Arithmatic");
    }
	else if (Geo(arr) === true) {
    	consoloe.log("Geometric");
    } else {
    	console.log("-1");
    }
}


ArithGeo(array);








function insertionSort() {
  var i, j, k, val, lim = ar.length;
  while(j && ar[k]>val) ar([j--] = ar[k--]);
  ar[j] = val;
  }
  return ar;
}

*/
