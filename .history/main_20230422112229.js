const pets = [
  {
    id: 1,
    name: "Cleo",
    imageUrl: "https://th.bing.com/th/id/R.ae32e7ccd45665539a83d2d8b58a4b83?rik=j1fUSYUECyLEeQ&pid=ImgRaw&r=0",
    petColor: "golden",
    specialSkill: "Sit and stay",
    type: "dog"
    
  },
  {
    id: 2,
    name: "Nova",
    imageUrl: "https://th.bing.com/th/id/R.2415c091a5de791315d77de1f913df45?rik=0dmYdvWe%2b%2b0UzQ&pid=ImgRaw&r=0",
    petColor: "black and white",
    specialSkill: "not listen",
    type: "dog"
  },
  {
    id: 3,
    name: "Summer",
    imageUrl: "https://th.bing.com/th/id/OIP._s93BJ0ZhQXiMMKTYDUd_AHaFn?pid=ImgDet&rs=1",
    petColor: "white",
    specialSkill: "catch all the birds",
    type: "dog"
  },
  {
    id: 4,
    name: "Boo",
    imageUrl: "https://www.thehappycatsite.com/wp-content/uploads/2017/11/persian-1.jpg",
    petColor: "white",
    specialSkill: "sleep and attack",
    type: "cat"
  },
  {
    id: 5,
    name: "Blah",
    imageUrl: "https://th.bing.com/th/id/R.c727218778135e5de159f8ff43d5de48?rik=otOAKGRMu%2bjvJQ&pid=ImgRaw&r=0",
    petColor: "white",
    specialSkill: "lay eggs",
    type: "chicken"
  },
  
  
  
  ];
  
  const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };
  
  const cardsOnDom = (array) => {
  let domString = " ";
  for (const pet of array) {
      
    domString += `<div class="card" style="width: 18rem;">
        <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
        <div class="card-body">
        <h5 class="card-title">${pet.name}</h5>
         <p class="card-text">${pet.type}</p>
         <p class="card-text">${pet.specialSkill}</p>
         </div>
        </div>`;
  
    }
  
  renderToDom ("#app", domString);
  }
  //cardsOnDom(pets); 
//   const form = document.querySelector('form');

//   const createPet = (e) => {
//     e.preventDefault();

//     const newPetObject ={
//     id: team.length +1,
//     name: document.querySelector('#name').value,
//     imageUrl: document.querySelector('#image').value,
//     petColor: document.querySelector('#petColor'),
//     specialSkill: document.querySelector('#skills').value,
//     type: document.querySelector('#petType'),
//         }

//     pets.push(newPetObject);
// cardsOnDom(pets);
// form.reset();

//   }

  // form.addEventListener('submit', createPet)
  // // function to filter pet with specific type of pet
  // const filter = (array, petTypes) => {
  //   const petArray = [];
  
  //   for(const ourPets of array){
  //     if (ourPets.type === petTypes){
  //       petArray.push(ourPets);
  //     }
  //   }
  //   return petArray;
  // }

  const showAllButton = document.querySelector("#all");
  const showDogButton = document.querySelector("#dog");

// 2. Add click event to show all the pets on button click using the function we created above
showAllButton.addEventListener('click', () => {
  cardsOnDom(pets);
  alert("button click");

})
// 3. Add click event to filter all the instructors whose favorite pet is dog on button click
showDogButton.addEventListener('click', () => {
  const dogAnimalType = filter(pets, 'dog');
  cardsOnDom(dogAnimalType);
  
});
  
