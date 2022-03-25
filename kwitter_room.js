// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyB-T9SdYcGKCTKfb3pkJXdi8sd8vtGZJQ0",
      authDomain: "classtest-1d6a1.firebaseapp.com",
      projectId: "classtest-1d6a1",
      storageBucket: "classtest-1d6a1.appspot.com",
      messagingSenderId: "90229083301",
      appId: "1:90229083301:web:416b7ae2a3398579a3d14c",
      measurementId: "G-D7F42D4RN9"
    };
    
    // Initialize Firebase
    var app = initializeApp(firebaseConfig);
    var analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose :"adding room name"
      });

      localStorage.setItem("room_name", room_name)

      window.location = "kwitter_page.html"

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       console.log("Room Name - "+ Room_names);
       row = "<div class ='room_name' id="+Room_names+"' onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      firebase.setItem("room_name", name);
      window.location("kwitter_page.html");
}
