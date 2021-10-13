//data filtering
const selectedFilters = new Set();
const itemValues = [...document.querySelectorAll(".selector")];

//filters elements depending on the value that has been clicked
let buttons = document.querySelectorAll("button");

const parentContainer = [...document.querySelectorAll(".item")];

parentContainer.forEach((item) => {
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      let resultsParentElement = document.querySelector(".filters");
      resultsParentElement.style.opacity = "1";

      const filter = e.target.dataset.filter;

      let results = document.querySelector(".filtered-items");

      if (item.classList.contains(filter)) {

        console.log(results)
        selectedFilters.add(filter)
        let array = Array.from(selectedFilters);
        let arrayToString = array.toString();
        // console.log(arrayToString)


        results.innerHTML += `
        <div class="element-item ${arrayToString}" data-item=${filter}>
            ${arrayToString}
        </div>
          `;
      } else {
        item.style.display = "none"
      }

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
})

    
    

      
    // });
  
  








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



        
        // parentContainer.forEach((item) => {



        //   if (item.classList.contains(filter)) {

        //     let results = document.querySelector(".filtered-items");
        //     console.log(results)
        //     selectedFilters.add(filter)
        //     let array = Array.from(selectedFilters);
        //     let arrayToString = array.toString();
        //     // console.log(arrayToString, array)

        //     array.forEach(function(arrayItem) {
        //     })

        //     results.innerHTML += `
        //     <div class="element-item ${arrayToString}" data-item=${filter}>
        //         ${arrayToString}
            // </div>
            //   `;
  //         } else {
  //           item.style.display = "none"
  //         }

  //         //hides selected item (selects parent element of the icon along with the description)
  //         let closeButton = [...document.querySelectorAll(".element-item")];
          
  //         closeButton.forEach((activeButton) => {
  //           activeButton.addEventListener('click', (e) => {
  //             const filter2 = activeButton.dataset.item;
  //             if(activeButton.classList.contains(filter2)) {
  //               activeButton.remove(filter2);    
  //               selectedFilters.delete(filter2); 
  //             }
  //           })
  //         })
  //       });
  //     });

  //     //clears all selected elements on one click
  // const clearAll = document.querySelector(".clear");

  // clearAll.onclick = () => {
  //   const myNode = document.querySelector(".filters");
  //   let items = document.querySelectorAll(".item");
  //   const myNodeText = results;
  //   myNode.style.opacity = "0";
  //   myNodeText.textContent = "";
  //   items.forEach((item) => {
  //     item.style.display = "flex";
  //     selectedFilters.clear();
  //   })
  // };
  //   });
  
  

        
          // //hides selected item (selects parent element of the icon along with the description)
          // let closeButton = [...document.querySelectorAll(".element-item")];
          
          // closeButton.forEach((activeButton) => {
          //   activeButton.addEventListener('click', (e) => {
          //     const filter2 = activeButton.dataset.item;
          //     if(activeButton.classList.contains(filter2)) {
          //       activeButton.remove(filter2);    
          //       selectedFilters.delete(filter2); 
            //   }
            // })