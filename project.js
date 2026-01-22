
const contentDiv = document.getElementById('content');
const phonesLink = document.getElementById('phonesLink');
const offersLink = document.getElementById('offersLink');
const createLink = document.getElementById('createLink');

const phones = [
    "iPhone 15 Pro - $999",
    "Samsung Galaxy S23 - $899",
    "Google Pixel 8 - $799",
    "OnePlus 11 - $699"
];
const offers = [
    "iPhone 15 Pro: $100 off this month",
    "Samsung Galaxy S23: Free case included",
    "OnePlus 11: Buy one, get 50% off accessories"

];


phonesLink.addEventListener('click', showPhones);

offersLink.addEventListener('click', showOffers);
createLink.addEventListener('click', showCreateForm);


function showPhones() {
    let html = "<h2>Available Phones</h2><ul>";
    phones.forEach(phone => {
        html += `<li>${phone}</li>`;
    });
    total+=addchart
    html += "</ul>";
    html += `<button onclick="goHome()">Back to Home</button>`;
    contentDiv.innerHTML = html;
}

function showOffers() {
    let html = "<h2>Current Offers</h2><ul>";
    offers.forEach(offer => {
        html += `<li>${offer}</li>`;
    });
    html += "</ul>";
    html += `<button onclick="goHome()">Back to Home</button>`;
    contentDiv.innerHTML = html;
}

function showCreateForm() {
    let html = `
        <h2>Create a New Phone Record</h2>
        <form id="phoneForm">
            <input type="text" id="name" placeholder="Phone Name" required><br>
            <input type="number" id="price" placeholder="Price" required><br>
            <button type="submit">Add Phone</button>
        </form>
        <h3>Phone Records:</h3>
        <ul id="records"></ul>
        <button onclick="goHome()">Back to Home</button>
    `;
    contentDiv.innerHTML = html;

    const form = document.getElementById('phoneForm');
    const recordsList = document.getElementById('records');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const li = document.createElement('li');
        li.textContent = `${name} - $${price}`;
        recordsList.appendChild(li);
        form.reset();
    });
}


function goHome() {
    contentDiv.innerHTML = "";
}
