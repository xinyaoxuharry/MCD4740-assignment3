// Define the footer structure
const footerHtml = `
<footer class="site-footer section-padding">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h4 class="text-white mb-4 me-5">Seddon Deadly Sins</h4>
            </div>

            <div class="col-lg-4 col-md-7 col-xs-12 tooplate-mt30">
                <h6 class="text-white mb-lg-4 mb-3">Location</h6>
                <p>148 Victoria Street Seddon, 3011 Victoria</p>
                <a href="https://maps.app.goo.gl/C2j7jJL3JdpZp92N7" class="custom-btn btn btn-dark mt-2">Directions</a>
            </div>

            <div class="col-lg-4 col-md-5 col-xs-12 tooplate-mt30">
                <h6 class="text-white mb-lg-4 mb-3">Opening Hours</h6>
                <p class="mb-2">Monday - Friday</p>
                <p>7:00 AM - 3:30 PM</p>
                <p class="mb-2">Saturday - Sunday</p>
            <p>7:30 AM - 3:00 PM</p>
        </div>

        <div class="col-lg-4 col-md-7 col-xs-12 tooplate-mt30">
            <h6 class="text-white mb-lg-4 mb-3">Contact Us</h6>
            <p>Phone: +61 0396 893 092</p>
            <p>Email: <a href="mailto:orders@seddondeadlysins.com.au" class="site-footer-link">orders@seddondeadlysins.com.au</a></p>
        </div>
    </div>
</div>
</footer> `;

// Insert the generated HTML into the DOM
document.getElementById('footerContainer').innerHTML = footerHtml;