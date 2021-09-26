//data filtering

const frontend = [...document.querySelectorAll("[value = frontend]")];
const itemValues = [...document.querySelectorAll(".selector")];
const itemValues3 = Array.from(document.querySelectorAll("[value]"));
const itemValues4 = [...document.querySelectorAll("[value]")].map(
  (value) => value.innerHTML
);

//filters all elements in an array and deletes dublicates
// let uniqueArrayElement = itemValues4.filter(function (element, index, self) {
//   console.log(self)

//   return index === self.indexOf(element);
// });

itemValues.forEach((element) => {
  let results = document.querySelector(".filtered-items");
  // let resultsArray = [...document.querySelector(".filtered-items")];
  let resultsParentElement = document.querySelector(".filters");
  element.addEventListener("click", function (event) {
    event.stopPropagation();
    event.preventDefault();

    resultsParentElement.style.opacity = "1";

    if (element) {
      results.innerHTML += `
            <div class="element-item ${element.innerHTML.toLocaleLowerCase()}">
                <span>${element.innerHTML}</span>
                <span class="material-icons close-icon">close</span>
            </div>
             `;
    }

  });

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
    })
  };
});

//filters elements depending on the value that has been clicked
function filterClick() {
  let buttons = document.querySelectorAll("button");
  let items = document.querySelectorAll(".item");
  const itemValues = [...document.querySelectorAll(".item")];

  buttons.forEach((button) => {

    button.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const filter = e.target.dataset.filter;

      //array that updates every time you add filter by clicking the button. also it would need to remove filters/classes when you remove them
      //an array which adds the class each time a class is selected by the user to create a list of all currently active classes
      //create an array and add to this - how do i create an array and add items to it

      itemValues.forEach((item) => {

        let arrayOfElements = [];

        if (item.classList.contains(filter)) {
          arrayOfElements.push(filter);
        } else {
          item.style.display = "none"
        }

        //hides selected item (selects parent element of the icon along with the description)
        let closeButton = document.querySelectorAll(".close-icon");
        let activeCloseButton = [...closeButton];

        activeCloseButton.forEach((activeButton) => {
          console.log(activeButton)
          activeButton.addEventListener('click', (e) => {
            activeButton.parentElement.style.display = "none";
          })
        })
      });
    });
  });
}

filterClick();






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