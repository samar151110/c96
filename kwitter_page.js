//YOUR FIREBASE LINKS
const firebaseConfig = {

      apiKey: "AIzaSyCc9bAcF1pQcuabONzrDMjia0tL5ni03Ak",
      authDomain: "kwitter-final-b7754.firebaseapp.com",
      databaseURL: "https://kwitter-final-b7754-default-rtdb.firebaseio.com",
      projectId: "kwitter-final-b7754",
      storageBucket: "kwitter-final-b7754.appspot.com",
      messagingSenderId: "1098604962366",
      appId: "1:1098604962366:web:fabd693f2556816863276f",
      measurementId: "G-N0VKFW72XY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("user_name");
roomname = localStorage.getItem("Room_name");

function send() {
      message = document.getElementById("Send_input").value;
      firebase.database().ref(roomname).push({
            names: username,
            msg: message,
            like: 0

      });
      document.getElementById("Send_input").value = " ";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();