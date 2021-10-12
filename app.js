//data filtering
const selectedFilters = new Set();
const itemValues = [...document.querySelectorAll(".selector")];

let data, body = document.querySelector('body'), realJobList = [];



itemValues.forEach((element) => {
  let results = document.querySelector(".filtered-items");
  let resultsParentElement = document.querySelector(".filters");
  element.addEventListener("click", function (event) {
    event.stopPropagation();
    event.preventDefault();

    resultsParentElement.style.opacity = "1";
    resultsParentElement.classList.add('listing');
    }
  )

  //filters elements depending on the value that has been clicked
  function filterClick() {
    let buttons = document.querySelectorAll("button");

    const itemValues = [...document.querySelectorAll(".item")];

    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {

        const filter = e.target.dataset.filter; // same as button.dataset.filter
        //array that updates every time you add filter by clicking the button. also it would need to remove filters/classes when you remove them
        //an array which adds the class each time a class is selected by the user to create a list of all currently active classes
        //create an array and add to this - how do i create an array and add items to it


        itemValues.forEach((item) => {

          if (item.classList.contains(filter)) {
            selectedFilters.add(filter)
            let array = Array.from(selectedFilters);
            let arrayToString = array.toString();
            console.log(arrayToString, array)

            array.forEach(function(arrayItem) {
              console.log(arrayItem)
              console.log('test')
            })

            // results.innerHTML += `
            // <div class="element-item ${arrayToString}" data-item=${filter}>
            //     ${arrayToString}
            // </div>
            //   `;
          } else {
            item.style.display = "none"
          }

          //hides selected item (selects parent element of the icon along with the description)
          let closeButton = [...document.querySelectorAll(".element-item")];
          
          closeButton.forEach((activeButton) => {
            activeButton.addEventListener('click', (e) => {
              const filter2 = activeButton.dataset.item;
              if(activeButton.classList.contains(filter2)) {
                activeButton.remove(filter2);    
                selectedFilters.delete(filter2); 
              }
            })
          })
        });
      });
    });
  }

  filterClick();
  

  //clears all selected elements on one click
  const clearAll = document.querySelector(".clear");

  clearAll.onclick = () => {
    const myNode = resultsParentElement;
    let items = document.querySelectorAll(".item");
    const myNodeText = results;
    myNode.style.opacity = "0";
    myNodeText.textContent = "";
    items.forEach((item) => {
      item.style.display = "flex";
      selectedFilters.clear();
    })
  };
});








 // let i;
        // for (i = 0; i < activeCloseButton.length; i++) {
        //   const filterTest = e.target.dataset.filter;
        //   activeCloseButton[i].onclick = function () {
        //     let div = this.parentElement;
        //     div.style.display = "none";
        //     if (div.classList.contains(filterTest) === item.classList.contains(filter)) {
        //       item.style.display = "flex"
        //       let testPop = arrayOfElements.pop(filter);
        //     }
        //   };
        // }

        