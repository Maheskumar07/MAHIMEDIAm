// ==================== 1. INFLUENCER MANAGEMENT ====================
let influencers = JSON.parse(localStorage.getItem('myInfluencers')) || [];

function displayInfluencers() {
    const container = document.getElementById('influencerContainer');
    container.innerHTML = '';
    influencers.forEach((inf, index) => {
        let btnClass = 'btn-insta';
        let platformName = 'Instagram';
        if (inf.platform === 'youtube') { btnClass = 'btn-youtube'; platformName = 'YouTube'; }
        if (inf.platform === 'facebook') { btnClass = 'btn-facebook'; platformName = 'Facebook'; }

        let imgUrl = inf.img || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';

        container.innerHTML += `
            <div class="influencer-card">
                <button class="delete-btn" onclick="deleteInfluencer(${index})">X</button>
                <div class="inf-img-box"><img src="${imgUrl}"></div>
                <h4 style="margin-bottom:5px;">${inf.name}</h4>
                <span class="inf-badge">${inf.category}</span>
                <p style="color:#94a3b8; font-size:0.9rem; line-height:1.5; margin-bottom:20px; min-height:40px;">${inf.bio}</p>
                <a href="${inf.link}" target="_blank" class="follow-btn ${btnClass}"><i class="fab fa-${inf.platform}"></i> Visit Profile</a>
            </div>
        `;
    });
}

function addNewInfluencer() {
    const name = document.getElementById('infName').value;
    const category = document.getElementById('infCategory').value;
    const bio = document.getElementById('infBio').value;
    const img = document.getElementById('infImg').value;
    const link = document.getElementById('infLink').value;
    const platform = document.getElementById('infPlatform').value;

    if (!name || !link) return alert("Name And Profile Link Necessary!");

    influencers.push({ name, category, bio, img, link, platform });
    localStorage.setItem('myInfluencers', JSON.stringify(influencers));
    
    // ક્લીઅર ઇનપુટ્સ
    document.getElementById('infName').value = ''; document.getElementById('infCategory').value = '';
    document.getElementById('infBio').value = ''; document.getElementById('infImg').value = ''; document.getElementById('infLink').value = '';
    displayInfluencers();
}

function deleteInfluencer(index) {
    if(confirm("To be Deleted?")) { influencers.splice(index, 1); localStorage.setItem('myInfluencers', JSON.stringify(influencers)); displayInfluencers(); }
}

// ==================== 2. BLOG MANAGEMENT ====================
let blogs = JSON.parse(localStorage.getItem('myBlogs')) || [];

function displayBlogs() {
    const container = document.getElementById('blogContainer');
    container.innerHTML = '';
    blogs.forEach((blog, index) => {
        container.innerHTML += `
            <div class="blog-card">
                <button class="delete-btn" onclick="deleteBlog(${index})">X</button>
                <h3 style="color:#00f2fe; margin-bottom:12px; font-weight:700;">${blog.title}</h3>
                <p style="color:#94a3b8; line-height:1.6; font-size:0.95rem;">${blog.desc}</p>
            </div>
        `;
    });
}

function addNewBlog() {
    const title = document.getElementById('blogTitle').value;
    const desc = document.getElementById('blogDesc').value;
    if (!title || !desc) return alert("Fill in all the Details!");

    blogs.push({ title, desc });
    localStorage.setItem('myBlogs', JSON.stringify(blogs));
    document.getElementById('blogTitle').value = ''; document.getElementById('blogDesc').value = '';
    displayBlogs();
}

function deleteBlog(index) {
    if(confirm("Want to Delete The Blog?")) { blogs.splice(index, 1); localStorage.setItem('myBlogs', JSON.stringify(blogs)); displayBlogs(); }
}

// ==================== 3. PRODUCT MANAGEMENT ====================
let products = JSON.parse(localStorage.getItem('myProducts')) || [];

function displayProducts() {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';
    products.forEach((prod, index) => {
        let defImg = prod.img || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=300';
        container.innerHTML += `
            <div class="product-card">
                <button class="delete-btn" onclick="deleteProduct(${index})">X</button>
                <div class="prod-img-box"><img src="${defImg}"></div>
                <h4 style="font-weight:700; margin-bottom:10px;">${prod.title}</h4>
                <div class="price-container">
                    <span class="new-price">${prod.price}</span>
                    <span class="old-price">${prod.oldPrice}</span>
                </div>
                <a href="${prod.link}" target="_blank" class="buy-btn">Buy Now</a>
            </div>
        `;
    });
}

function addNewProduct() {
    const title = document.getElementById('prodTitle').value;
    const price = document.getElementById('prodPrice').value;
    const oldPrice = document.getElementById('prodOldPrice').value;
    const img = document.getElementById('prodImg').value;
    const link = document.getElementById('prodLink').value;

    if (!title || !price || !link) return alert("name,Price and Link Mandatory!");

    products.push({ title, price, oldPrice, img, link });
    localStorage.setItem('myProducts', JSON.stringify(products));
    
    document.getElementById('prodTitle').value = ''; document.getElementById('prodPrice').value = '';
    document.getElementById('prodOldPrice').value = ''; document.getElementById('prodImg').value = ''; document.getElementById('prodLink').value = '';
    displayProducts();
}

function deleteProduct(index) {
    if(confirm("Want to Delete Product?")) { products.splice(index, 1); localStorage.setItem('myProducts', JSON.stringify(products)); displayProducts(); }
}

// પેજ લોડ થાય ત્યારે બધો જ ડેટા લોડ કરવો
document.addEventListener("DOMContentLoaded", () => {
    displayInfluencers();
    displayBlogs();
    displayProducts();
});