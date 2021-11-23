function cleanUpIndex() {
    const elementNodes = document.querySelectorAll('h1, h2, .contact, title')
    for(let i = 0; i < elementNodes.length; i++) {
        elementNodes[i].remove(); 
    }
}

let contactlist = [
    {
        name: "Roberta Dobbs",
        phone: "778-555-1234",
        address: "101 Main St, Anytown, USA",
        email: "subgenius@slack.example.com",
    }, 
    {
        name: "Bugs Bunny",
        phone: "123-867-5309",
        address: "Warner Brothers Animation Lot",
        email: "whatsup@doc.example.com",
    },
]
function createSingleIndex(contactlist) {
    const singlenodeelement = document.createElement('div');
    singlenodeelement.className= "contact";
    const contactlink = document.createElement('a');
    const contact = document.createElement('p');
    contact.textContent = "Barry Allen";
    const contacts = document.createTextNode(contactlist);
    singlenodeelement.appendChild(contactlink);
    contactlink.appendChild(contact);
    contact.appendChild(contacts);
    contactlink.setAttribute("href", "page3.html")
    console.log(singlenodeelement)
}

function renderIndex(contactlist) {
    let indexpage = document.querySelector(".main");
    for (let i = 0; i < contactlist.length; i++) {
        let page = createSingleIndex(contactlist[i]);
        indexpage.appendChild(page);
    }
}

function cleanUpView() {
    const viewNodes = document.querySelectorAll("h1, h2, div");
    for(let i = 0; i < viewNodes.length; i++) {
        viewNodes[i].remove();
    }
}

function cleanUpCreate() {
    const page2Nodes = document.querySelectorAll("h1, h2, .inputcontainer, .buttons, img");
    for(let i = 0; i < page2Nodes.length; i++) {
        page2Nodes[i].remove();
    }
}