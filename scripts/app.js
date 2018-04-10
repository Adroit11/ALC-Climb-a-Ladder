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
                                '<div class=" h-16 w-3/4 pl-8 ml-8 mt-8 pt-8 text-red text-right">'+
                                '<svg class="h-12 fill-current text-red" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 489.06 489.06" style="enable-background:new 0 0 489.06 489.06;" xml:space="preserve"><path d="M391.859,336.46c-42.1-0.1-76.3,34.1-76.3,76.3s34.2,76.3,76.3,76.3c42.2,0,76.3-34.2,76.3-76.3C468.159,370.56,433.959,336.46,391.859,336.46z M429.159,423.06h-26.9v26.9h-20.7v-26.9h-26.9v-20.7h26.9v-26.9h20.7v26.9h26.9V423.06z"/><path d="M298.259,126.86c1.5-4.2,2.6-8.4,3.4-12.6c13.2-79.1-25.8-81.9-25.8-81.9s-6.5-12.4-23.5-21.8c-11.4-6.8-27.3-12-48.2-10.2c-6.8,0.3-13.2,1.6-19.2,3.7c-7.7,2.6-14.7,6.4-21.1,10.8c-7.8,5-15.2,11-21.7,18c-10.3,10.5-19.5,24.2-23.5,41.2c-3.3,12.7-2.6,26,0.2,40.2c0.8,4.2,1.9,8.4,3.4,12.6c-7.8-0.7-17,3.8-8.3,34.3c6.1,22.4,12,28.6,16.5,29c4.1,26.6,24.6,60.3,58.3,72.2c13.8,4.9,29,4.9,42.7-0.1c33.2-12,54.3-45.6,58.4-72.1c4.5-0.4,10.3-6.6,16.7-29C315.159,130.56,306.059,126.06,298.259,126.86z"/><path d="M386.859,309.56c-5.4-7.1-13-12.8-23.7-15.5c-47.4-12.1-86-39.2-86-39.2l-30.1,95.1l-5.7,17.9l-0.1-0.2l-4.9,15.2l-15.8-45c39-54.4-7.9-53.8-10.5-53.8c-2.6-0.1-49.5-0.6-10.5,53.8l-15.9,45l-4.9-15.2l-0.1,0.2l-5.7-17.9l-30.1-95.1c0,0-38.5,27.1-86,39.2c-35.4,9-37.1,49.8-35.6,70c0.2,0,2.2,27.4,4.3,39.4c0,0,69,44.9,184.6,44.9c30.9,0,58.4-3.2,82.2-7.9c-2.5-8.8-3.8-18.1-3.8-27.7C288.559,357.46,332.259,312.16,386.859,309.56z"/>'+ 
                                '</div>'+
                                '<div class="h-8 w-full text-right mt-4">' +
                                '<span class="text-black mt-2 ml-8"><a class="no-underline" href="#" onclick="editContact(\''+id+'\')"><svg class="fill-current text-black" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="774.266px" height="774.266px" viewBox="0 0 774.266 774.266" style="enable-background:new 0 0 774.266 774.266;" xml:space="preserve"><g><g><path d="M640.35,91.169H536.971V23.991C536.971,10.469,526.064,0,512.543,0c-1.312,0-2.187,0.438-2.614,0.875C509.491,0.438,508.616,0,508.179,0H265.212h-1.74h-1.75c-13.521,0-23.99,10.469-23.99,23.991v67.179H133.916c-29.667,0-52.783,23.116-52.783,52.783v38.387v47.981h45.803v491.6c0,29.668,22.679,52.346,52.346,52.346h415.703c29.667,0,52.782-22.678,52.782-52.346v-491.6h45.366v-47.981v-38.387C693.133,114.286,670.008,91.169,640.35,91.169zM285.713,47.981h202.84v43.188h-202.84V47.981z M599.349,721.922c0,3.061-1.312,4.363-4.364,4.363H179.282c-3.052,0-4.364-1.303-4.364-4.363V230.32h424.431V721.922z M644.715,182.339H129.551v-38.387c0-3.053,1.312-4.802,4.364-4.802H640.35c3.053,0,4.365,1.749,4.365,4.802V182.339z"/><rect x="475.031" y="286.593" width="48.418" height="396.942"/><rect x="363.361" y="286.593" width="48.418" height="396.942"/><rect x="251.69" y="286.593" width="48.418" height="396.942"/></g></svg></a>'+
                                '<span class="text-black mt-2 ml-8"><a class="no-underline" href="#" onclick="deleteContact(\''+id+'\')"><svg class="fill-current text-black" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="774.266px" height="774.266px" viewBox="0 0 774.266 774.266" style="enable-background:new 0 0 774.266 774.266;" xml:space="preserve"><g><g><path d="M640.35,91.169H536.971V23.991C536.971,10.469,526.064,0,512.543,0c-1.312,0-2.187,0.438-2.614,0.875C509.491,0.438,508.616,0,508.179,0H265.212h-1.74h-1.75c-13.521,0-23.99,10.469-23.99,23.991v67.179H133.916c-29.667,0-52.783,23.116-52.783,52.783v38.387v47.981h45.803v491.6c0,29.668,22.679,52.346,52.346,52.346h415.703c29.667,0,52.782-22.678,52.782-52.346v-491.6h45.366v-47.981v-38.387C693.133,114.286,670.008,91.169,640.35,91.169zM285.713,47.981h202.84v43.188h-202.84V47.981z M599.349,721.922c0,3.061-1.312,4.363-4.364,4.363H179.282c-3.052,0-4.364-1.303-4.364-4.363V230.32h424.431V721.922z M644.715,182.339H129.551v-38.387c0-3.053,1.312-4.802,4.364-4.802H640.35c3.053,0,4.365,1.749,4.365,4.802V182.339z"/><rect x="475.031" y="286.593" width="48.418" height="396.942"/><rect x="363.361" y="286.593" width="48.418" height="396.942"/><rect x="251.69" y="286.593" width="48.418" height="396.942"/></g></svg></a></span>'+
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


