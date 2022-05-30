const firebaseConfig = {
  apiKey: "AIzaSyAAaoTOHv8nW_fRi3T3IW2l-HfTq2wyUd8",
  authDomain: "kwitter-project-8f075.firebaseapp.com",
  databaseURL: "https://kwitter-project-8f075-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-8f075",
  storageBucket: "kwitter-project-8f075.appspot.com",
  messagingSenderId: "734269235483",
  appId: "1:734269235483:web:8ca52445de2858435333be"
};

const app = initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value
    localStorage.setItem("user_name" , user_name);
    window.location = "kwitter_room.html"
}