const getSavedData = function(){
    const contactsJSON = localStorage.getItem('contacts')
    if (contactsJSON !== null){
         return JSON.parse(contactsJSON)
    }else{
        return []
    }
}

const visibleContacts = function (contacts, filters) {
    $('#contacts').html('')
    contacts = sort(contacts)
    if(contacts.length === 0){
        $('#contacts').append('<h3>No contacts, click "+" button to create a new contact</h3>')
    }else if(filters.searchText !== ''){
        searchContacts(contacts, filters)
    }else{
        for(i=0; i<contacts.length; i++){
            const contactEl = $('<div>')
            $('<a>').attr('href', '/contact.html#'+ contacts[i].id).text(contacts[i].name + ' ' + contacts[i].surname).appendTo(contactEl)
            $(contactEl).appendTo('#contacts')
        }
    }
}

const anchorTags = function(){
    var anchors = $("a");
    for (var i = 0; i < anchors.length ; i++) {
        $(anchors[i]).on("click", function (e) {
            e.preventDefault()
            $("#contact-popup").css('height', "100%")
            const id = e.target.hash.slice(1)
            filters.searchId = id
            searchById(id)
        })
    }
}

const uniqueID = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

const sort = function(contacts){
    return contacts.sort(function(a, b){
        if(a.name.toLowerCase()  < b.name.toLowerCase()){
            
            return -1 
        } else if (a.name.toLowerCase() > b.name.toLowerCase()){
            return 1
        }else {
            return 0
        }
    })
}

const searchById = function (id) {
    const filteredContactsById = contacts.filter(function(contact){
        return contact.id.includes(id)
    })
    filteredContactsById.forEach(function(contact){
        const element = $('<div>')
        $(element).addClass('contact-popup-content')
        $('<h1>').text('Name and Surname: ').appendTo(element)
        $('<p>').text(contact.name + ' ' + contact.surname).appendTo(element)
        $('<h1>').text('Telephone: ').appendTo(element)
        $('<p>').text(contact.phoneNumber).appendTo(element)
        $('<h1>').text('Address: ').appendTo(element)
        $('<p>').text(contact.address).appendTo(element)
        $('<button>').text('Delete contact').on('click', function(){
            deleteContact(contact.id)
            saveData()
            location.assign('/index.html')           
        }).appendTo(element)
        $('<button>').text('Edit contact').on('click', function(){
            $("#contact-edit-popup").html('')
            $("#contact-edit-popup").css("height", "100%")
            const form = $('<div>')
            $('<h1>').text(contact.name + ' ' + contact.surname).appendTo(form)
            $('<h4>').text("Name:").appendTo(form)
            $('<input id="name">').val(contact.name).appendTo(form)
            $('<h4>').text("Surname:").appendTo(form)
            $('<input id="surname">').val(contact.surname).appendTo(form)
            $('<h4>').text("telephone:").appendTo(form)
            $('<input id="telephone">').val(contact.phoneNumber).appendTo(form)
            $('<h4>').text("address:").appendTo(form)
            $('<textarea id="address"></textarea>').val(contact.address).appendTo(form).on()
            $(form).appendTo('#contact-edit-popup')
            $('<button>').text('save').on('click', function(e){
                $("#contact-edit-popup").css("height", "0%")
                contact.name = $('#name').val()
                contact.surname = $('#surname').val()
                contact.phoneNumber = $('#telephone').val()  
                contact.address = $('#address').val()
                saveData()
                location.assign('/index.html')                
            }).appendTo('#contact-edit-popup')
            $('<button>').text('cancel').on('click', function(e){
                $("#contact-edit-popup").css("height", "0%")   
            }).appendTo('#contact-edit-popup')     
        }).appendTo(element)
        $('<button>').text('Home').on('click', function(){
            location.assign('/index.html') 
        }).appendTo(element)
        $(element).appendTo('#contact-popup') 
    })
}


const searchContacts = function (contacts, filters) {
    contacts = sort(contacts)
    const filteredContacts = contacts.filter(function(contact){
        return contact.name.toLowerCase().includes(filters.searchText.toLowerCase()) ||
                 contact.surname.toLowerCase().includes(filters.searchText.toLowerCase()) ||
                 contact.phoneNumber.toLowerCase().includes(filters.searchText.toLowerCase())
    })
        filteredContacts.forEach(function(contact){
            const contactEl = $('<div>')
            $('<a>').attr('href', '/contact.html#'+ contact.id).text(contact.name + ' ' + contact.surname).appendTo(contactEl)
            $(contactEl).appendTo('#contacts')
        })
}

const deleteContact = function(id){
    const contactIndex = contacts.findIndex(function(contact){
        return contact.id === id
    })
    if (contactIndex > -1){
        contacts.splice(contactIndex, 1)
    }
}

const saveData = function(){
    localStorage.setItem('contacts', JSON.stringify(contacts))
}


const editContact = function(contact){
    
}