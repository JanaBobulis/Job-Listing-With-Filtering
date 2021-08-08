//data filtering 

const frontend = [...document.querySelectorAll('[value = frontend]')];
const senior = [...document.querySelectorAll('[value = senior]')];
const html = [...document.querySelectorAll('[value = html]')];

let btn = document.querySelectorAll('.category');
let arr = [...btn]

console.log(btn)
console.log(arr)


arr.forEach(element => {
    let results = document.querySelector('.filtered-items')
    let resultsParent = document.querySelector('.filters')
    console.log(results)
    console.log(element)
    element.addEventListener('click', function (event) {
        event.stopPropagation();
        event.preventDefault();

        resultsParent.style.opacity = "1"

        if (element) {
            results.innerHTML +=
                `
            <div class="element-item">
                <span>${element.innerHTML}</span>
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

    //clears all selected elements on one click
    const clearAll = document.querySelector('.clear');

    clearAll.onclick = () => {
        const myNode = resultsParent;
        myNode.style.opacity = '0'
    }
})

