var firebaseConfig = {
      apiKey: "AIzaSyAp7g27cYbxHDgVrcCJoD7bBHHbEmiLDak",
      authDomain: "foodie-eb13c.firebaseapp.com",
      databaseURL: "https://foodie-eb13c-default-rtdb.firebaseio.com",
      projectId: "foodie-eb13c",
      storageBucket: "foodie-eb13c.appspot.com",
      messagingSenderId: "564457700655",
      appId: "1:564457700655:web:0fb0ffdf16b9de9bcfb5da",
      measurementId: "G-P0MDLW9LHD"
    };

    function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
console.log("Room Name - " + Room_names);
row = "<div class='room name' id="+Room_names+" onclick='redirectToRoomName(this.id' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTMl += row;


});});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
getData();
