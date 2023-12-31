async function infobox(txt, type) {
    document.getElementById('notify').innerHTML = txt

    document.getElementById('notify').style.display='flex';
    setTimeout(function() {
        
    if(type == 1) {
        document.getElementById('notify').style.backgroundcolor='rgba(255, 0, 0, 0.671)';
    }else if(type == 2){
        document.getElementById('notify').style.backgroundcolor='rgba(0, 255, 0, 0.671)';
    }
    document.getElementById('notify').style.display='none';
    },5000)
}

function create() {
    window.location.href = "create/create.html"
}

const firebaseConfig = {
    apiKey: "AIzaSyCJiUyClTJKl_7yYs9t-fDzrua58foitm4",
    authDomain: "blackchat-1-72126.firebaseapp.com",
    databaseURL: "https://blackchat-1-72126-default-rtdb.firebaseio.com",
    projectId: "blackchat-1-72126",
    storageBucket: "blackchat-1-72126.appspot.com",
    messagingSenderId: "144957923199",
    appId: "1:144957923199:web:d5938846b8df2d710b444a"
};
  
firebase.initializeApp(firebaseConfig)
var database = firebase.database()

firebase.database().ref('todos').on('child_added', (snapshot) => {
    let list = document.getElementById('content')
    var data = snapshot.val()

    list.innerHTML += `
    <div class="todo_card">
      <p class="title">${data.title}</p>
      <p class="desc">${data.desc}</p>
      <button>Erledigt</button> <button onclick="del('${data.id}')">${data.id}</button>
    </div>
    `
})

firebase.database().ref('todos').on('child_removed', (snapshot) => {
    window.location = ""
})

function del(uuid) {
    firebase.database().ref(`todos/todo_${uuid}`).set({})
}