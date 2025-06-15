const fishData = {
    salmon: {
      image: "images/salmon.jpg",
      description: "Salmon is a type of ray-finned fish..."
    },
    tuna: {
      image: "images/tuna.jpg",
      description: "Tuna is a saltwater fish..."
    },
    goldfish: {
      image: "images/goldfish.jpg",
      description: "Goldfish are small ornamental fish..."
    },
    MYFISH: {
        image: "images/goldfish.jpg",
        description: "Goldfish are small ornamental fish..."
      }
  };
  
  function showFishDetails() {
    const selectedFish = document.getElementById('fishSelect').value;
    const fish = fishData[selectedFish];
  
    document.getElementById('fishInfo').innerHTML = `
      <h2>${selectedFish.toUpperCase()}</h2>
      <img src="${fish.image}" alt="${selectedFish}" width="300">
      <p>${fish.description}</p>
    `;
  }
  