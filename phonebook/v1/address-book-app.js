const contacts = getSavedData()
const filters ={
    searchText: '',
    searchId: ''
}

visibleContacts(contacts,filters)
anchorTags()


$("#create-new-button").on("click", function(){
    $("#create-new-popup").css("height", "100%")
})

$("#close-button").on("click",  function(){
    $("#create-new-popup").css("height", "0%")
    location.reload(true)
})

$("#create-new-contact").on('submit', function(e){
    e.preventDefault()
    const id = uniqueID()
    if(e.target.elements.newName.value !== '' || e.target.elements.newSurname.value !== ''){
        contacts.push({
            id: id,
            name: e.target.elements.newName.value,
            surname: e.target.elements.newSurname.value,
            phoneNumber: e.target.elements.phoneNumber.value,
            address: e.target.elements.address.value
        })
        saveData()
        visibleContacts(contacts, filters)
        location.assign('/index.html')
    } else{
        contacts.push({
            id: id,
            name: 'New',
            surname: 'Contact',
            phoneNumber: '',
            address: ''
        })
        saveData()
        visibleContacts(contacts, filters)
        location.assign('/index.html')
    }

})

$("#search-contact").on('input', function(e){
    filters.searchText = e.target.value
    visibleContacts(contacts,filters)
    anchorTags()
})

$("#reset").on('click', function(){
    localStorage.clear()
    window.location.reload()
})


