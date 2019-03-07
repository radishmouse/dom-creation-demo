

// const aHeading = document.createElement('h1');
const aDiv = document.createElement('div');
aDiv.textContent = "This is the div you created!";
console.log(aDiv);

const body = document.querySelector('body');
// document.body
body.appendChild(aDiv);
body.prepend(aDiv);

const data = [
    { 
        description: "The black hole of the internet",
        url: "http://reddit.com"
    },
    { 
        description: "The black hole of my wallet",
        url: "http://apple.com"
    },
    { 
        description: "The black hole of my privacy",
        url: "http://google.com"
    },
];

// I want to loop through and create anchor tags for each
// Then append them to a single element
// Then append the single element to the page

function goAfter2Seconds(url) {
    setTimeout(function () {
        window.location = url;
    }, 2000);
}

function logIt(event) {
    event.preventDefault();
    // console.log('you clicked!');
    console.log(`you clicked ${event.target}`);    
    // console.log(`you clicked ${event.path}`);  
    goAfter2Seconds(event.target.href);
}

const navElement = document.querySelector('[data-nav]');
navElement.addEventListener('click', logIt);


data.forEach(function (obj) {
    // debugger;
    const newAnchor = document.createElement('a');
    newAnchor.textContent = obj.description;
    newAnchor.setAttribute('href', obj.url);
    // newAnchor.href = url;

    // newAnchor.addEventListener('click', logIt);

    navElement.append(newAnchor);
});


