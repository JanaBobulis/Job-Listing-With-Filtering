//data filtering 

/*
let btn = document.querySelectorAll('#category');
let names = '';
for (var i = 0; i < btn.length; i++) {
    names += btn[i].value;
}

console.log(names)

btn.addEventListener("click", function (e) {
    
    let results = document.getElementsById('results');

    if ([...document.querySelectorAll('[value = frontend]')]) {
        results.innerHTML = e.target.dataset.id;
    } 
    
})


    let frontend = document.querySelectorAll('[value=frontend]').forEach(element => {
        console.log(element)
    })
    
    let senior = document.querySelectorAll('[value = senior]').forEach(element => {
        element.addEventListener('click', function() {
            element.classlist.toggle('new')
        } )
    })

*/







/*


document.addEventListener('click', function() {
    let btn = document.querySelectorAll('#category');
    btn.value;
    console.log(btn.value);
    console.log(btn)
    for(let i = 0; i < btn.length; i++) {
        let element = btn.getAttribute('value');
    console.log(element)
    }
    
})
*/


const frontend = [...document.querySelectorAll('[value = frontend]')];
const senior = [...document.querySelectorAll('[value = senior]')];
const html = [...document.querySelectorAll('[value = html]')];

let btn = document.querySelectorAll('.category');
let arr = [...btn]

console.log(btn)
console.log(arr)


arr.forEach(element => {
    let results = document.querySelector('.filters')
    console.log(results)
    console.log(element)
    element.addEventListener('click', function (event) {
        event.stopPropagation();
        event.preventDefault()
        if (senior) {
            results.innerHTML +=
                `
            <div class="element-item">
                <span>${element.value}</span>
                <span class="material-icons close-icon">close</span>
            </div>
             `;
            console.log(element)
        } else if (frontend) {
            results.innerHTML +=
                `
            <div class="element-item">
                <span>${element.value}</span>
                <span class="material-icons close-icon">close</span>
            </div>
             `;
            console.log(element)
        } else if (html) {
            results.innerHTML += `
            <div class="element-item">
                <span>${element.value}</span>
                <span class="material-icons close-icon">close</span>
            </div>
             `;
            console.log(element)
        }

        //hides selected item (selects parent element of the icon along with the description)
        let closeButton = document.querySelectorAll('.close-icon');
        let activeCloseButton = [...closeButton];

        let i;
        for (i = 0; i < activeCloseButton.length; i++) {
            activeCloseButton[i].onclick = function () {
                let div = this.parentElement;
                div.style.display = "none"
                console.log(div)
            }
        };
    })








    /*
    
    document.addEventListener('click', function () {
        let results = document.getElementById('results');
        if (arr.value = 'senior') {
            results.innerHTML = '<div><p>Senior</p></div>';
            console.log(arr.value)
        } else if (arr.value = "frontend") {
            results.innerHTML = arr.value;
            results.innerHTML = '<div><p>Frontend</p></div>';
            console.log(arr.value)
        } else if (arr.value = "html") {
            results.innerHTML = arr.value;
            console.log(arr.value)
        }
    
        document.addEventListener('click', function(event) {
                event.preventDefault()
                let searchItem = document.querySelectorAll('.element-item');
                let closeButton = document.querySelectorAll('.close-icon')
                searchItem.forEach(element => {
                    this.style.display = "none"
                })
            })
    })
    */





    /*arr.addEventListener("click", function (e) {
        
        let results = document.getElementsById('results');
    
        if ([...document.querySelectorAll('[value = frontend]')]) {
            results.innerHTML = e.target.dataset.id;
        } 
        
    })*/
})






/*

console.log(items)

items.addEventListener('click', function(e) {
    document.getElementById('results').innerHTML = e.target.dataset.id;
})


/*

let results = $("#category").map(function() {
    return $(this).data("id");
}).get();
console.log(results);

let items = document.querySelector(`[data-id]`);

let modifiedItems = items.map(function(element) {
    return element;
})

console.log(modifiedItems);

console.log(items)

items.addEventListener('click', function(e) {
    document.getElementById('results').innerHTML = e.target.dataset.id;
})
*/