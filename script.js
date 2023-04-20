
const firebaseConfig = {
  apiKey: "AIzaSyAZ55RzY7e660xagJO70amnW653l4g72R0",
  authDomain: "petizd-80397.firebaseapp.com",
  databaseURL: "https://petizd-80397-default-rtdb.firebaseio.com",
  projectId: "petizd-80397",
  storageBucket: "petizd-80397.appspot.com",
  messagingSenderId: "781534226707",
  appId: "1:781534226707:web:f9cd0ad58714562f6652e6",
  measurementId: "G-S578ZWPNC8"
};

firebase.initializeApp(firebaseConfig);


var messagesRef = firebase.database().ref('messages');


document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e){
  e.preventDefault();


  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');


  saveMessage(name, company, email, phone, message);


  document.querySelector('.alert').style.display = 'block';


  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  document.getElementById('contactForm').reset();
}


function getInputVal(id){
  return document.getElementById(id).value;
}


function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
