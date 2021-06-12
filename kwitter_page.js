// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDnLsZW1uEtJZvkgLEZ6Z3qzodAtA8TRrI",
    authDomain: "project-94-213da.firebaseapp.com",
    databaseURL: "https://project-94-213da-default-rtdb.firebaseio.com",
    projectId: "project-94-213da",
    storageBucket: "project-94-213da.appspot.com",
    messagingSenderId: "339163776113",
    appId: "1:339163776113:web:3c724588f5fb88a10707d0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });

    document.getElementById("msg").value = "";
}