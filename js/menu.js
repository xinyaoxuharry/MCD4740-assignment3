const menuItems = [
    { 
        title: "Phantom Pancakes", 
        price: 24.50, 
        rating: 4.4, 
        reviews: 128, 
        image: "images/breakfast/brett-jordan-8xt8-HIFqc8-unsplash.jpg",
        description: "A chilling stack of pancakes, ghosted in vanilla and syrup, topped with eerie berries and whipped cream."
    },
    { 
        title: "Creepy Casserole", 
        price: 16.50, 
        rating: 3.0, 
        reviews: 64, 
        image: "images/breakfast/lucas-swennen-1W_MyJSRLuQ-unsplash.jpg",
        description: "A spine-tingling creamy casserole with a blend of spooky spices and cheesy goodness."
    },
    { 
        title: "Zombie Burger", 
        price: 24.50, 
        oldPrice: 36.50, 
        rating: 3.0, 
        reviews: 32, 
        image: "images/breakfast/louis-hansel-dphM2U1xq0U-unsplash.jpg",
        description: "A monstrous burger set with all the fixings, served with blood-red ketchup and creepy fries."
    },
    { 
        title: "Grim Feast", 
        price: 32.75, 
        oldPrice: 55.00, 
        rating: 4.2, 
        reviews: 72, 
        image: "images/lunch/louis-hansel-cH5IPjaAYyo-unsplash.jpg",
        description: "A bone-chilling steak feast, grilled to perfection and served with frightful sides of garlic mashed potatoes and sinister greens."
    }
    // Add more items here
];

const menuSection = document.getElementById('menuItems');
menuItems.forEach(item => {
    const itemHtml = `
        <div class="col-lg-4 col-md-6 col-12">
            <div class="menu-thumb">
                <img src="${item.image}" class="img-fluid menu-image" alt="">
                <div class="menu-info d-flex flex-wrap align-items-center">
                    <h4 class="mb-0">${item.title}</h4>
                    <span class="price-tag bg-white shadow-lg ms-4"><small>$</small>${item.price.toFixed(2)}</span>
                    ${item.oldPrice ? `<del class="ms-4"><small>$</small>${item.oldPrice.toFixed(2)}</del>` : ''}
                    <p class="description-text mt-2">${item.description}</p>
                    <div class="d-flex flex-wrap align-items-center w-100 mt-2">
                        <h6 class="reviews-text mb-0 me-3">${item.rating}/5</h6>
                        <div class="reviews-stars">${'<i class="bi-star-fill reviews-icon"></i>'.repeat(Math.floor(item.rating))}${item.rating % 1 !== 0 ? '<i class="bi-star reviews-icon"></i>' : ''}</div>
                        <p class="reviews-text mb-0 ms-4">${item.reviews} Reviews</p>
                    </div>
                </div>
            </div>
        </div>`;
    menuSection.innerHTML += itemHtml;
});
