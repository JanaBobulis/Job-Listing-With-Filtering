//data filtering 

const frontend = [...document.querySelectorAll('[value = frontend]')];
console.log(frontend)
// const html = [...document.querySelectorAll('[value = html]')];



const itemValues = [...document.querySelectorAll('.selector')];
const itemValues3 = Array.from(document.querySelectorAll('[value]'))
const itemValues4 = [...document.querySelectorAll('[value]')].map(value => value.innerHTML)


//filters all elements in an array and deleted dublicates
let uniqueArrayElement = itemValues4.filter(function (element, index, self) {
    return index === self.indexOf(element);
})

itemValues.map(element => {
    // console.log(element)
    let results = document.querySelector('.filtered-items')
    let resultsParentElement = document.querySelector('.filters')
    // console.log(results)
    // console.log(element)
    element.addEventListener('click', function (event) {
        event.stopPropagation();
        event.preventDefault();

        resultsParentElement.style.opacity = "1"

        if (element) {
            results.innerHTML +=
                `
            <div class="element-item">
                <span>${element.innerHTML}</span>
                <span class="material-icons close-icon">close</span>
            </div>
             `;
            // console.log(element)
        }

        // const frontend = [...document.querySelectorAll('[value = frontend]')];
        // const fullstack = [...document.querySelectorAll('[value = fullstack]')];
        // const bodyElement = document.querySelector('body');
        // console.log(bodyElement)
        // console.log(frontend)

        let btn = document.querySelectorAll('.category');
        let arr = [...btn]

        if (arr.value = 'frontend') {
            console.log('frontend')
        } else if (arr.value = 'fullstack') {
            console.log('fullstack')
        }

        //hides selected item (selects parent element of the icon along with the description)
        let closeButton = document.querySelectorAll('.close-icon');
        let activeCloseButton = [...closeButton];

        let i;
        for (i = 0; i < activeCloseButton.length; i++) {
            activeCloseButton[i].onclick = function () {
                let div = this.parentElement;
                div.style.display = "none"
                // console.log(div)
            }
        };
    })

    //clears all selected elements on one click
    const clearAll = document.querySelector('.clear');

    clearAll.onclick = () => {
        const myNode = resultsParentElement;
        const myNodeText = results;
        myNode.style.opacity = '0'
        myNodeText.textContent = ''
    }
})

