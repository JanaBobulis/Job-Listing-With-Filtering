//data filtering
const selectedFilters = new Set();
const itemValues = [...document.querySelectorAll(".selector")];

//filters elements depending on the value that has been clicked
let buttons = document.querySelectorAll("button");
const parentContainer = document.querySelectorAll(".item");
let resultsParentElement = document.querySelector(".filters");

//loops through all buttons
buttons.forEach((button) => {
 button.addEventListener('click', (e) => {
    resultsParentElement.style.opacity = "1";
    let results = document.querySelector(".filtered-items")
    const filter = e.target.dataset.filter;

    //checking if filtered array/set has the same value as clicked element, if so the value is returned and not being executed 
    if(selectedFilters.has(filter)) {
      return;
    }

    selectedFilters.add(filter)
    let array = Array.from(selectedFilters);

    results.innerHTML += `
    <li class="element-item ${filter}" data-filter="${filter}">
        ${button.innerHTML}
    </li>
    `;

    const btnInnerHtml = button.innerHTML
    const btnInnerHtmlArray = Array.from(button.innerHTML)

    //loops through parent elements of the button elements (the whole container)
    parentContainer.forEach((item) => {
      // console.log(item, 'item')
        if (item.classList.contains(filter)) {
          return;
        } else {
          item.classList.add('inactive');
          item.classList.remove('active');
        }
    })

    let closeButton = [...document.querySelectorAll(".element-item")];

    //loops through filtered buttons
    closeButton.forEach((activeButton) => {
      activeButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const filter2 = activeButton.dataset.filter;

        if(selectedFilters.has(filter2)) {
          activeButton.remove(filter2);    
          selectedFilters.delete(filter2); 
        }

        if(selectedFilters.size == 0) {
          document.querySelector(".filters").style.opacity = "0";
        }

        parentContainer.forEach((item) => {
            let array2 = Array.from(selectedFilters);
            let classes = [... item.classList]

          
            const containsAll = array2.every(element => {
              return classes.includes(element);
            });
  
            //check if an array of all selected elements is included in to the array of the class elements
            if(containsAll === true) {
              item.classList.add('active');
              item.classList.remove('inactive');
            }

            if(array2.length === 0) {
              console.log('length is 0')
              item.classList.remove('active');
              item.classList.remove('inactive');
              return;
            }
        })
      })})

    //clears all selected elements on one click
    const clearAll = document.querySelector(".clear");

    clearAll.onclick = () => {
      const myNode = document.querySelector(".filters");
      let items = document.querySelectorAll(".item");
      const myNodeText = results;
      myNode.style.opacity = "0";
      myNodeText.textContent = "";
      items.forEach((item) => {
        selectedFilters.clear();
        item.classList.remove('active');
        item.classList.remove('inactive');
      })
    };
  })
})
