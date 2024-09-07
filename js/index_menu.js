const menuItems = [
    { 
        title: "Phantom Pancakes", 
        price: 12.50, 
        rating: 4.3, 
        reviews: 102, 
        image: "images/breakfast/brett-jordan-8xt8-HIFqc8-unsplash.jpg",
        description: "A chilling stack of pancakes, ghosted in vanilla and syrup, topped with eerie berries and whipped cream.",
        tag: "Breakfast"
    },
    { 
        title: "Creepy Casserole", 
        price: 24.50, 
        rating: 3.0, 
        reviews: 50, 
        image: "images/lunch/farhad-ibrahimzade-MGKqxm6u2bc-unsplash.jpg",
        description: "A spine-tingling creamy casserole with a blend of spooky spices and cheesy goodness.",
        tag: "Lunch"
    },
    { 
        title: "Grim Feast", 
        price: 45.00, 
        oldPrice: 150.00, 
        rating: 3.0, 
        reviews: 86, 
        image: "images/dinner/keriliwi-c3mFafsFz2w-unsplash.jpg",
        description: "A bone-chilling steak feast, grilled to perfection and served with frightful sides of garlic mashed potatoes and sinister greens.",
        tag: "Dinner"
    },
    { 
        title: "Seafood Doom", 
        price: 86.00, 
        oldPrice: 124.00, 
        rating: 3.0, 
        reviews: 44, 
        image: "images/dinner/farhad-ibrahimzade-ZipYER3NLhY-unsplash.jpg",
        description: "An eerie assortment of seafood, presented with a sinister sauce and frightful sides.",
        tag: "Dinner"
    },
    { 
        title: "Zombie Burger Set", 
        price: 20.50, 
        rating: 4.3, 
        reviews: 102, 
        image: "images/breakfast/louis-hansel-dphM2U1xq0U-unsplash.jpg",
        description: "A monstrous burger set with all the fixings, served with blood-red ketchup and creepy fries.",
        tag: "Breakfast"
    },
    { 
        title: "Haunted Soup", 
        price: 34.20, 
        rating: 3.0, 
        reviews: 64, 
        image: "images/lunch/farhad-ibrahimzade-D5c9ZciQy_I-unsplash.jpg",
        description: "A spooky, healthy soup with a frightful mix of vegetables and a hint of ghostly spices.",
        tag: "Lunch"
    }
];

const menuSection = document.getElementById('menuItems');
menuItems.forEach(item => {
    const itemHtml = `
        <div class="col-lg-4 col-md-6 col-12">
            <div class="menu-thumb">
                <div class="menu-image-wrap">
                    <img src="${item.image}" class="img-fluid menu-image" alt="">

                    <span class="menu-tag bg-warning">${item.tag}</span>
                </div>

                <div class="menu-info d-flex flex-wrap align-items-center">
                    <h4 class="mb-0">${item.title}</h4>

                    <span class="price-tag bg-white shadow-lg ms-4"><small>$</small>${item.price.toFixed(2)}</span>
                    ${item.oldPrice ? `<del class="ms-4"><small>$</small>${item.oldPrice.toFixed(2)}</del>` : ''}

                    <p class="description-text mt-2">${item.description}</p>

                    <div class="d-flex flex-wrap align-items-center w-100 mt-2">
                        <h6 class="reviews-text mb-0 me-3">${item.rating}/5</h6>

                        <div class="reviews-stars">
                            ${'<i class="bi-star-fill reviews-icon"></i>'.repeat(Math.floor(item.rating))}${item.rating % 1 !== 0 ? '<i class="bi-star reviews-icon"></i>' : ''}
                        </div>

                        <p class="reviews-text mb-0 ms-4">${item.reviews} Reviews</p>
                    </div>
                </div>
            </div>
        </div>`;
    menuSection.innerHTML += itemHtml;
});
