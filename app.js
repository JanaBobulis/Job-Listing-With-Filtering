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
    console.log(selectedFilters)

    let array = Array.from(selectedFilters);

    results.innerHTML += `
    <div class="element-item ${button.value}" data-filter="${button.innerHTML}">
        ${button.innerHTML}
    </div>
    `;

    parentContainer.forEach((item) => {

        if (item.classList.contains(filter)) {
          return;

        } else {
          item.style.display = "none"
        }
    })

    let closeButton = [...document.querySelectorAll(".element-item")];

    closeButton.forEach((activeButton) => {
      activeButton.addEventListener('click', (e) => {
        const filter2 = activeButton.dataset.filter;
        const filterLowerCase = filter2.toLowerCase;
        console.log(filter2.toLowerCase())
          activeButton.remove(filterLowerCase);    
          selectedFilters.delete(filter);
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
