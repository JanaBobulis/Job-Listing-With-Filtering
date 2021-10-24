//data filtering
const selectedFilters = new Set();
const itemValues = [...document.querySelectorAll(".selector")];

//filters elements depending on the value that has been clicked
let buttons = document.querySelectorAll("button");

const parentContainer = document.querySelectorAll(".item");

let resultsParentElement = document.querySelector(".filters");

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {

    resultsParentElement.style.opacity = "1";
    let results = document.querySelector(".filtered-items")
    const filter = e.target.dataset.filter;

    selectedFilters.add(filter)
    let array = Array.from(selectedFilters);
    //array.slice(-1).pop()

    results.innerHTML += `
    <div class="element-item ${filter}" data-filter="${filter}">
        ${filter}
    </div>
    `;
    console.log(selectedFilters)

    parentContainer.forEach((item) => {

        if (item.classList.contains(filter)) {
          return;

        } else {
          item.style.display = "none"
        }

        // if (selectedFilters.has(filter)) {
        //   console.log('test')
        //   this.removeEventListener('click', (e))
        // }
    })

    let closeButton = [...document.querySelectorAll(".element-item")];

    closeButton.forEach((activeButton) => {
      activeButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(selectedFilters)

        const filter2 = activeButton.dataset.filter;

        if(selectedFilters.has(filter2)) {
          console.log(filter2)
          activeButton.remove(filter2);    
          selectedFilters.delete(filter2); 
          console.log(selectedFilters)
        }

        if(selectedFilters.size == 0) {
          console.log(selectedFilters.size)
          document.querySelector(".filters").style.opacity = "0";
        }
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
        item.style.display = "flex";
        selectedFilters.clear();
      })
    };
  })
})
