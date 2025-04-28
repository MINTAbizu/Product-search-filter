

let products={

    data:[
        {
            productname:"boy",
            catagory:"boy",
            price:'120',
            image:"api.jpg"




        },
        {
            productname:"men",
            catagory:"men",
            price:'120',
            image:"men.jpg"




        },
        {
            productname:"men",
            catagory:"men",
            price:'120',
            image:"men.jpg"




        },
        {
            productname:"men",
            catagory:"men",
            price:'120',
            image:"men.jpg"




        },
        
        {
            productname:"men",
            catagory:"men",
            price:'120',
            image:"api.jpg"




        },
        {
            productname:"women",
            catagory:"women",
            price:'120',
            image:"api.jpg"




        },

        {
            productname:"men",
            catagory:"men",
            price:'120',
            image:"app.jpg"




        }
        , {
            productname:"men",
            catagory:"men",
            price:'120',
            image:"apple-card.jpg"




        }
        , {
            productname:"men",
            catagory:"men",
            price:'120',
            image:"apple-card.jpg"




        }
        , {
            productname:"child",
            catagory:"child",
            price:'120',
            image:"backend.jpg"




        }
    ]


}











for (let i of products.data) {
    // create card
    let card = document.createElement('div');
 
    card.classList.add("card", i.catagory, "hidde");

    // image div
    let imagecontainer = document.createElement('div');
    imagecontainer.classList.add("image-container");

    // img tag
    let imagetag = document.createElement('img');
    imagetag.setAttribute("src", i.image);

    imagecontainer.appendChild(imagetag);
    card.appendChild(imagecontainer);

    // name container
    let namecontainer = document.createElement('div');
    namecontainer.classList.add('container');

    // productname
    let name = document.createElement('h5');
    name.classList.add('productname');
    name.innerText = i.productname.toUpperCase();

    namecontainer.appendChild(name);
    card.appendChild(namecontainer);

    // price container
    let pricecontainer = document.createElement('div');
    pricecontainer.classList.add("pricecontainer");

    // price heading
    let hedd = document.createElement('h3');
    hedd.classList.add('price');
    hedd.innerText = "Birr : " + i.price + ".00";

    pricecontainer.appendChild(hedd);
    card.appendChild(pricecontainer);

    document.getElementById('products').appendChild(card);

    let cart=document.createElement('div')
     cart.classList.add('cart')
     cart.innerHTML='<button>Add-To-Cart</button>'
     card.appendChild(cart)
}

function filterproduct(value) {
    let buttons = document.querySelectorAll('.buttonvalue');

    // buttons.forEach((button) => {
    //     if (value.toUpperCase() == button.innerText.toUpperCase()) {
    //         button.classList.add('active');
    //     } else {
    //         button.classList.remove("active");
    //     }
    // });

    // select all 
    let elements = document.querySelectorAll('.card');

    elements.forEach((element) => {
        if (value == 'all') {
            element.classList.remove("hidde");
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hidde");
            } else {
                element.classList.add("hidde");
            }
        }
    });
}

// search product
document.getElementById('search').addEventListener('click', () => {
    let searchInput = document.getElementById('searchinput').value;
    let elements = document.querySelectorAll('.productname');
    let cards = document.querySelectorAll('.card');
    let matchFound = false; // Flag to track if a match is found

    console.log(searchInput);

    // Loop through all elements
    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            // Display matching product
            cards[index].classList.remove('hidde');
            matchFound = true; // Set flag to true if a match is found
        } else if (searchInput) {
            cards[index].classList.add('hidde');
        }
    });

    // Inform the user if no matches were found
    if (!matchFound && searchInput) {
        alert('No matching products found.');
    }

    // Clear the search input field
    document.getElementById('searchinput').value = "";
});



window.onload = () => {
    filterproduct('all');
}


// carousel effect 

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    document.getElementById('next').addEventListener('click', nextSlide);
    document.getElementById('prev').addEventListener('click', prevSlide);

    // Auto-advance slides every 3 seconds
    setInterval(nextSlide, 3000);
});





