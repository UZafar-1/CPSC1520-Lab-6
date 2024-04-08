/*
  HTML for the project.
  Template
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">FULLNAME HERE</h5>
    </div>
  <small>EMAIL HERE<</small>
  </div>
*/



document.addEventListener('DOMContentLoaded', getContacts);

function getContacts() {
    fetch('public/data/contacts.json') // Adjust the path to your JSON file as needed
        .then(response => response.json())
        .then(data => {
            console.log(data); // Logging the fetched data
            renderContacts(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function renderContacts(contacts) {
    const contactsContainer = document.getElementById('contacts');
    // Clear the default or previous content
    contactsContainer.innerHTML = '';
    contactsContainer.classList.remove('no-load'); // Remove the 'no-load' class if you want to change styling

    contacts.forEach(contact => {
        // Constructing the contact element
        const contactHTML = `
            <div class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${contact.name}</h5>
                </div>
                <small>${contact.email}</small>
            </div>`;
        // Adding the new contact element to the contacts container
        contactsContainer.innerHTML += contactHTML;
    });
}
