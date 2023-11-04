let products = {
  data: [
    {
      productName: "Lenovo ThinkPad X1 Carbon Gen 10",
      category: "Business",
      price: "₹2,49,000-₹3,00,000",
      image: "images/B1.jpeg",
    },
    {
      productName: "Macbook Pro 16-inch",
      category: "Creator",
      price: "₹1,50,000-₹2,50,000",
      image: "images/C1.jpg",
    },
    {
      productName: "Acer Aspire 5 AMD Ryzen 5", category: "Student", price: "₹50,000-₹60,000", image: "images/S1.jpg"
    },
    {
      productName: "Apple MacBook Pro 13-Inch ", category: "Business", price: "₹80,000-₹1,30,000", image: "images/B2.webp"
    },
    {
      productName: "HP Victus 16", category: "Gaming", price: "₹60,000-₹95,000", image: "images/G2.jpg",
    },
    {
      productName: "Asus Zenbook Pro Duo 15", category: "Creator", price: "₹2,00,000-₹3,00,000", image: "images/C2.png",
    },
    {
      productName: "Asus TUF Gaming F15", category: "Gaming", price: "₹60,000-₹1,00,000", image: "images/G1.jpg",
    },
    {
      productName: "hp spectre x360 16", category: "Creator", price: "₹1,00,000-₹2,00,000",image: "images/C3.webp",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};