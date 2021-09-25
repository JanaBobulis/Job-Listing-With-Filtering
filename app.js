//data filtering

const frontend = [...document.querySelectorAll("[value = frontend]")];
const itemValues = [...document.querySelectorAll(".selector")];
const itemValues3 = Array.from(document.querySelectorAll("[value]"));
const itemValues4 = [...document.querySelectorAll("[value]")].map(
  (value) => value.innerHTML
);

//filters all elements in an array and deleted dublicates
let uniqueArrayElement = itemValues4.filter(function (element, index, self) {
  return index === self.indexOf(element);
});

itemValues.forEach((element) => {
  let results = document.querySelector(".filtered-items");
  let resultsParentElement = document.querySelector(".filters");
  element.addEventListener("click", function (event) {
    event.stopPropagation();
    event.preventDefault();

    resultsParentElement.style.opacity = "1";

    if (element) {
      results.innerHTML += `
            <div class="element-item">
                <span>${element.innerHTML}</span>
                <span class="material-icons close-icon">close</span>
            </div>
             `;
    }

    let btn = document.querySelectorAll(".category");
    let arr = [...btn];

    //hides selected item (selects parent element of the icon along with the description)
    let closeButton = document.querySelectorAll(".close-icon");
    let activeCloseButton = [...closeButton];

    let i;
    for (i = 0; i < activeCloseButton.length; i++) {
      activeCloseButton[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
      };
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
  console.log(items)

  buttons.forEach((button) => {
    
    button.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const filter = e.target.dataset.filter;

      items.forEach((item) => {
        console.log(item)
        console.log(button)
        if (item.classList.contains(filter)) {
          item.style.display = "flex";
        }
        else {
          item.style.display = "none";
        }
      });
    });
  });
}

filterClick();
