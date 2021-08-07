//data filtering 

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
        event.preventDefault();

        results.style.opacity = "1"

        if (element) {
            results.innerHTML +=
                `
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
})