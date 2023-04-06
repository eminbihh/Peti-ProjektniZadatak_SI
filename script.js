
var config = {
  apiKey: "AIzaSyD5bCyvYm5adElW2tllyfYH-CXnyQdUxVY",
  authDomain: "contactform-2086d.firebaseapp.com",
  databaseURL: "https://contactform-2086d.firebaseio.com",
  projectId: "contactform-2086d",
  storageBucket: "contactform-2086d.appspot.com",
  messagingSenderId: "35839015044"
};

firebase.initializeApp(config);


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