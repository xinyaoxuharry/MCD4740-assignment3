 // Define the navigation structure
 const navItems = [
    { name: 'Home', href: 'index.html', active: true },
    { name: 'Menu', href: 'menu.html' },
    { name: 'Contact', href: 'contact.html' }
];

// Generate the navigation HTML
const navbarHtml = `
    <nav class="navbar navbar-expand-lg bg-white shadow-lg">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <a class="navbar-brand" href="index.html">
                Seddon Deadly Sins
            </a>

            <div class="d-lg-none">
                <button type="button" class="custom-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#BookingModal">Reservation</button>
            </div>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    ${navItems.map(item => `
                        <li class="nav-item">
                            <a class="nav-link ${item.active ? 'active' : ''}" href="${item.href}">${item.name}</a>
                        </li>`).join('')}
                </ul>
            </div>

            <div class="d-none d-lg-block">
                <button type="button" class="custom-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#BookingModal">Reservation</button>
            </div>
        </div>
    </nav>
`;

// Insert the generated HTML into the DOM
document.getElementById('navbarContainer').innerHTML = navbarHtml;