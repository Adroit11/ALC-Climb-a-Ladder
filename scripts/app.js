document.getElementById('addContactForm').addEventListener('submit', saveContact);
function saveContact(e) {
    var phoneContactName = document.getElementById('contactName').value;
    var contactNumber = document.getElementById('phoneNumber').value;
    var contactEmail = document.getElementById('email').value;
    var contactId = Math.floor((Math.random() * 100000) + 102);

  var contact = {
    id: contactId,
    name: phoneContactName,
    number: contactNumber,
    email: contactEmail
  }
  if (localStorage.getItem('contacts') == null) {
    var contacts = [];
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  } 
  else {
    var contacts = JSON.parse(localStorage.getItem('contacts'));
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  document.getElementById('addContactForm').reset();

  fetchContacts();

  e.preventDefault();
}

function fetchContacts() {
    var contactsList = document.getElementById('contactsList');
    var contacts = JSON.parse(localStorage.getItem('contacts'));
  
    contactsList.innerHTML = '';
    
    var count = 0;
  
    for (var i = 0; i < contacts.length; i++) {
        var id = contacts[i].id;
        var contactName = contacts[i].name;
        var contactNumber = contacts[i].number;
        var contactEmail = contacts[i].email;
  
        if (count % 2 == 0){
            contactsList.innerHTML += '<div onclick="displayContactDetails('+id+')" class="w-full flex rounded border m-2 border-l hover:border-black h-16">'+  
                                '<div class="w-1/4 p-2 pl-4 h-auto">'+
                                '<img class="rounded-full h-12" src="img/avatar.png" alt=""></div>'+
                                '<div class="w-1/2 p-4 h-auto">'+
                                '<h3>' + contactName + '</h3></div>'+
                                '<div class="w-1/2 p-4 word h-auto">'+
                                contactNumber + 
                                '<p>'+
                                contactEmail +
                                '</p>'+
                                '<div class="w-full z-20">'+

                                '</div>'+
                                '</div>';
        }

        else{
            contactsList.innerHTML += '<div onclick="displayContactDetails('+id+')" class="w-full flex rounded border m-2 hover:border-black border-l bg-grey-lightest h-16">'+  
                                '<div class="w-1/4 p-2 pl-4 h-auto">'+
                                '<img class="rounded-full h-12" src="img/avatar2.png" alt=""></div>'+
                                '<div class="w-1/2 p-4 h-auto">'+
                                '<h3>' + contactName + '</h3></div>'+
                                '<div class="w-1/2 p-4 word h-auto">'+
                                contactNumber + 
                                '<p>'+
                                contactEmail +
                                '</p>'+
                                '</div></a>';
        }
        count ++;
    }
    /*
    //Right Div Js
    var contacts = JSON.parse(localStorage.getItem('contacts'));

    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].id == id) {
        contacts[i].status = 'Closed';
    }*/
  }
// To Display Contact's Details On the right Div
  function displayContactDetails(id) {
    var contacts = JSON.parse(localStorage.getItem('contacts'));
  
    for (var i = 0; i < contacts.length; i++) {

        contactDetails.innerHTML = '';

        if (contacts[i].id == id) {
            var contactName = contacts[i].name;
            var contactEmail = contacts[i].email;
            var contactNumber = contacts[i].number;
            contactDetails.innerHTML += '<div class="pt-4 mb-8">'+  
                                '<h3 class="text-red">'+contactName+'</h3>'+
                                '</div>'+
                                '<div class="p-4">'+
                                '<img class="border border-black rounded-full" src="img/avatar.png" alt="">'+
                                '</div>'+
                                '<div class="h-auto border border-red rounded-lg p-4 mt-2 text-red">'+
                                '<svg class="fill-current text-black h-8" aria-labelledby="simpleicons-minutemailer-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-minutemailer-icon">Minutemailer icon</title><path d="M5.564 2.703l3.45 3.734-2.434 4.798 5.14-.921 2.34 5.646L24 2.926 5.564 2.703zm-.636 8.088l.957-.787-1.234.39-.126-.18.51-.495-.669.27C1.813 10.979 0 13.455 0 16.35c0 1.951.822 3.705 2.133 4.947-.563-.99-.885-2.134-.885-3.355 0-2.865 1.809-5.415 4.315-6.42l.315-.766-.75.331-.211-.285.011-.011zm4.364-1.97L10.89 6l9.398-2.201L9.292 8.821z"/></svg>'+
                                '<span>'+contactEmail+'</span>'+
                                '</div>'+
                                '<div class="h-auto p-4 mt-2 text-red">'+contactNumber+'</div>'+
                                '<div class="flex flex-wrap text-right">'+
                                '<div class=" h-auto flex p-4 ml-2 mt-8 pt-8 text-red">'+
                                '<a class="no-underline" href="#" onclick="editContact(\''+id+'\')"><img src="img/edit.png"></a>'+
                                '</div>'+
                                '<div class=" h-auto flex p-4 ml-2 mt-8 pt-8 text-red">'+
                                '<a class="no-underline" href="#" onclick="deleteContact(\''+id+'\')"><img src="img/delete.png"></a>'+
                                '</div>'+
                                '<div class="h-auto w-full text-right mt-4">' +
                                '</div>';


        }
    }
    console.log("added");
  }
  
  function deleteContact(id) {
    var contacts = JSON.parse(localStorage.getItem('contacts'));
  
    for (var i = 0; i < contacts.length; i++) {
      if (contacts[i].id == id) {
        contacts.splice(i, 1);
      }
    }
  
    localStorage.setItem('contacts', JSON.stringify(contacts));
  
    fetchcontacts();
  }


