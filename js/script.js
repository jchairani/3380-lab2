//save contact in array
let contactList = Array.from(document.querySelectorAll('li.contact-item'));

//get total number of contact
let numContacts = contactList.length;

//count number of pages
let pages = (numContacts / 10);
pages = Math.floor(pages);

//to create the pagination 
const pagination = document.querySelector('div.pagination');
for (let i = 0; i < pages; i++) {
    let liNode = document.createElement(`li`);
    liNode.classList.add("pages");
    let aNode = document.createElement("a");

    let numberNode = document.createTextNode(i + 1);

    aNode.appendChild(numberNode);
    liNode.appendChild(aNode);
    pagination.appendChild(liNode);
}

//set the page to empty
let target = document.querySelector('ul.contact-list');
target.innerHTML = '<p> </p>';

//first show the first 10
for (let i = 0; i < 10; i++) {
    target.appendChild(contactList[i]);
}

//add event listener to each button
let elements = document.querySelectorAll('li.pages>a');
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function () {
        //get the text from clicked element
        let clickedPage = elements[i].innerHTML;

        //set page to empty
        target.innerHTML = '<p> </p>';

        //show 
        for (let i = 0; i < 10; i++) {
            target.appendChild(contactList[i + (clickedPage * 10)]);
        }



    });
}











