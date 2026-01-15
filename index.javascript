            <button class="filter-btn" data-filter="smart">Smart</button>
        </div>
        
        <div class="products-grid" id="productsGrid">
            <!-- Products will be dynamically loaded by JavaScript -->
        </div>
    </section>

    <!-- Cart Overlay and Sidebar -->
    <div class="cart-overlay" id="cartOverlay"></div>
    <div class="cart-sidebar" id="cartSidebar">
        <div class="cart-header">
            <h3 class="cart-title">Your Shopping Bag</h3>
            <button class="close-cart" id="closeCart">
                <i class="fas fa-times"></i>
            </button>
        </div>
        
        <div class="cart-items" id="cartItems">
            <!-- Cart items will be dynamically loaded by JavaScript -->
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <h3>Your bag is empty</h3>
                <p>Add some timeless pieces to your collection</p>
            </div>
        </div>
        
        <div class="cart-footer" id="cartFooter" style="display: none;">
            <div class="cart-total">
                <span>Total:</span>
                <span id="totalAmount">$0.00</span>
            </div>
            <button class="btn btn-primary checkout-btn" id="checkoutBtn">Proceed to Checkout</button>
        </div>
    </div>

    <!-- Notification -->
    <div class="notification" id="notification">
        <div class="notification-icon">
            <i class="fas fa-check-circle"></i>
        </div>
        <div class="notification-content">
            <h4 id="notificationTitle">Item Added</h4>
            <p id="notificationMessage">Product has been added to your cart</p>
        </div>
    </div>

    <!-- Footer -->
    <footer id="contact">
        <div class="footer-content">
            <div class="footer-column">
                <h3>ChronoVault</h3>
                <p>Your premier destination for luxury and premium watches. We offer timeless pieces that combine precision engineering with elegant design.</p>
            </div>
            <div class="footer-column">
                <h3>Quick Links</h3>
                <ul class="footer-links">
                    <li><a href="#home"><i class="fas fa-chevron-right"></i> Home</a></li>
                    <li><a href="#collection"><i class="fas fa-chevron-right"></i> Collection</a></li>
                    <li><a href="#brands"><i class="fas fa-chevron-right"></i> Brands</a></li>
                    <li><a href="#about"><i class="fas fa-chevron-right"></i> About Us</a></li>
                    <li><a href="#contact"><i class="fas fa-chevron-right"></i> Contact</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Customer Service</h3>
                <ul class="footer-links">
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Shipping Policy</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Returns & Exchanges</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Warranty</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> FAQs</a></li>
                    <li><a href="#"><i class="fas fa-chevron-right"></i> Privacy Policy</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Contact Us</h3>
                <ul class="footer-links">
                    <li><a href="#"><i class="fas fa-map-marker-alt"></i> 123 Watch Street, Geneva, Switzerland</a></li>
                    <li><a href="#"><i class="fas fa-phone"></i> +1 (555) 123-4567</a></li>
                    <li><a href="#"><i class="fas fa-envelope"></i> info@chronovault.com</a></li>
                </ul>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; 2023 ChronoVault. All rights reserved. | Luxury Watches Boutique</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script>
        // Watch Shopping Website JavaScript
        class WatchStore {
            constructor() {
                this.products = [];
                this.cart = [];
                this.filteredProducts = [];
                this.currentFilter = 'all';
                this.init();
            }

            init() {
                this.loadProducts();
                this.loadCartFromStorage();
                this.setupEventListeners();
                this.renderProducts();
                this.updateCartUI();
            }

            // Product Data
            loadProducts() {
                this.products = [
                    {
                        id: 1,
                        name: "Rolex Submariner",
                        brand: "Rolex",
                        category: "diver",
                        price: 9500,
                        rating: 4.9,
                        description: "The iconic diving watch with Oystersteel case and Chromalight display. Water-resistant up to 300 meters.",
                        features: ["300m Water Resistance", "Ceramic Bezel", "Self-Winding", "Date Display"],
                        image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    },
                    {
                        id: 2,
                        name: "Omega Speedmaster",
                        brand: "Omega",
                        category: "chronograph",
                        price: 6500,
                        rating: 4.8,
                        description: "The legendary Moonwatch with manual winding chronograph movement and hesalite crystal.",
                        features: ["Moonwatch Certified", "Chronograph", "Manual Winding", "Hesalite Crystal"],
                        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    },
                    {
                        id: 3,
                        name: "Tag Heuer Carrera",
                        brand: "Tag Heuer",
                        category: "chronograph",
                        price: 5200,
                        rating: 4.7,
                        description: "Racing-inspired chronograph with automatic movement and sapphire crystal.",
                        features: ["Automatic Movement", "Chronograph", "Sapphire Crystal", "100m Water Resistant"],
                        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    },
                    {
                        id: 4,
                        name: "IWC Pilot Chronograph",
                        brand: "IWC",
                        category: "pilot",
                        price: 7800,
                        rating: 4.8,
                        description: "Classic pilot's watch with chronograph function and soft-iron inner case.",
                        features: ["Pilot Watch", "Chronograph", "Anti-Magnetic", "Date Display"],
                        image: "https://images.unsplash.com/photo-1594576722512-582d5577dc56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    },
                    {
                        id: 5,
                        name: "Patek Philippe Nautilus",
                        brand: "Patek Philippe",
                        category: "luxury",
                        price: 45000,
                        rating: 5.0,
                        description: "Ultra-thin automatic watch with porthole design and integrated bracelet.",
                        features: ["Ultra-Thin", "Automatic", "Stainless Steel", "Date"],
                        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    },
                    {
                        id: 6,
                        name: "Apple Watch Ultra",
                        brand: "Apple",
                        category: "smart",
                        price: 799,
                        rating: 4.6,
                        description: "Advanced smartwatch with rugged titanium case and professional diving features.",
                        features: ["Titanium Case", "GPS", "Heart Rate Monitor", "100m Water Resistant"],
                        image: "https://images.unsplash.com/photo-1579586337278-3fde287fbbbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    },
                    {
                        id: 7,
                        name: "Seiko Prospex Diver",
                        brand: "Seiko",
                        category: "diver",
                        price: 1200,
                        rating: 4.5,
                        description: "Professional diving watch with Seiko's proprietary movement and luminescent markers.",
                        features: ["200m Water Resistant", "Automatic", "Luminescent", "Rotating Bezel"],
                        image: "https://images.unsplash.com/photo-1547996160-81fcc6d6f5b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    },
                    {
                        id: 8,
                        name: "Breitling Navitimer",
                        brand: "Breitling",
                        category: "pilot",
                        price: 8500,
                        rating: 4.7,
                        description: "Aviation chronograph with slide rule bezel for flight calculations.",
                        features: ["Slide Rule Bezel", "Chronograph", "Automatic", "30m Water Resistant"],
                        image: "https://images.unsplash.com/photo-1553545204-5336d22074fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    }
                ];
                this.filteredProducts = [...this.products];
            }

            // Cart Management
            loadCartFromStorage() {
                const savedCart = localStorage.getItem('chronovault_cart');
                if (savedCart) {
                    this.cart = JSON.parse(savedCart);
                }
            }

            saveCartToStorage() {
                localStorage.setItem('chronovault_cart', JSON.stringify(this.cart));
            }

            addToCart(productId) {
                const product = this.products.find(p => p.id === productId);
                if (!product) return;

                const existingItem = this.cart.find(item => item.id === productId);
                
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    this.cart.push({
                        ...product,
                        quantity: 1
                    });
                }

                this.saveCartToStorage();
                this.updateCartUI();
                this.showNotification('Added to Cart', `${product.name} has been added to your cart`);
            }

            removeFromCart(productId) {
                this.cart = this.cart.filter(item => item.id !== productId);
                this.saveCartToStorage();
                this.updateCartUI();
            }

            updateQuantity(productId, change) {
                const item = this.cart.find(item => item.id === productId);
                if (!item) return;

                item.quantity += change;

                if (item.quantity <= 0) {
                    this.removeFromCart(productId);
                } else {
                    this.saveCartToStorage();
                    this.updateCartUI();
                }
            }

            getCartTotal() {
                return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            }

            getCartCount() {
                return this.cart.reduce((count, item) => count + item.quantity, 0);
            }

            // Product Filtering
            filterProducts(category) {
                this.currentFilter = category;
                
                if (category === 'all') {
                    this.filteredProducts = [...this.products];
                } else {
                    this.filteredProducts = this.products.filter(product => product.category === category);
                }
                
                this.renderProducts();
                this.updateFilterButtons();
            }

            // UI Updates
            renderProducts() {
                const productsGrid = document.getElementById('productsGrid');
                if (!productsGrid) return;

                productsGrid.innerHTML = '';

                this.filteredProducts.forEach(product => {
                    const productCard = this.createProductCard(product);
                    productsGrid.appendChild(productCard);
                });
            }

            createProductCard(product) {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <div class="product-img-container">
                        <img src="${product.image}" alt="${product.name}" class="product-img">
                        <span class="product-badge">${product.category.toUpperCase()}</span>
                    </div>
                    <div class="product-info">
                        <div class="product-header">
                            <div>
                                <h3 class="product-title">${product.name}</h3>
                                <p class="product-brand">${product.brand}</p>
                            </div>
                            <div class="product-price">$${product.price.toFixed(2)}</div>
                        </div>
                        <p class="product-description">${product.description}</p>
                        <div class="product-features">
                            ${product.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                        </div>
                        <div class="product-actions">
                            <button class="add-to-cart" onclick="watchStore.addToCart(${product.id})">
                                <i class="fas fa-shopping-bag"></i> Add to Cart
                            </button>
                            <button class="view-details" onclick="watchStore.showProductDetails(${product.id})">
                                <i class="fas fa-eye"></i> View Details
                            </button>
                        </div>
                    </div>
                `;
                return card;
            }

            updateCartUI() {
                const cartCount = document.getElementById('cartCount');
                const cartItems = document.getElementById('cartItems');
                const cartFooter = document.getElementById('cartFooter');
                const totalAmount = document.getElementById('totalAmount');

                // Update cart count
                if (cartCount) {
                    cartCount.textContent = this.getCartCount();
                }

                // Update cart items
                if (cartItems) {
                    if (this.cart.length === 0) {
                        cartItems.innerHTML = `
                            <div class="empty-cart">
                                <i class="fas fa-shopping-bag"></i>
                                <h3>Your bag is empty</h3>
                                <p>Add some timeless pieces to your collection</p>
                            </div>
                        `;
                        if (cartFooter) cartFooter.style.display = 'none';
                    } else {
                        cartItems.innerHTML = this.cart.map(item => `
                            <div class="cart-item">
                                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                                <div class="cart-item-info">
                                    <div class="cart-item-header">
                                        <h4 class="cart-item-title">${item.name}</h4>
                                        <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                                    </div>
                                    <p>${item.brand} • $${item.price.toFixed(2)} each</p>
                                    <div class="cart-item-actions">
                                        <button class="quantity-btn" onclick="watchStore.updateQuantity(${item.id}, -1)">
                                            <i class="fas fa-minus"></i>
                                        </button>
                                        <span class="item-quantity">${item.quantity}</span>
                                        <button class="quantity-btn" onclick="watchStore.updateQuantity(${item.id}, 1)">
                                            <i class="fas fa-plus"></i>
                                        </button>
                                        <button class="remove-item" onclick="watchStore.removeFromCart(${item.id})">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `).join('');

                        if (cartFooter) {
                            cartFooter.style.display = 'block';
                            if (totalAmount) {
                                totalAmount.textContent = `$${this.getCartTotal().toFixed(2)}`;
                            }
                        }
                    }
                }
            }

            updateFilterButtons() {
                const filterButtons = document.querySelectorAll('.filter-btn');
                filterButtons.forEach(button => {
                    if (button.getAttribute('data-filter') === this.currentFilter) {
                        button.classList.add('active');
                    } else {
                        button.classList.remove('active');
                    }
                });
            }

            // Event Handlers
            setupEventListeners() {
                // Cart toggle
                const cartIcon = document.getElementById('cartIcon');
                const closeCart = document.getElementById('closeCart');
                const cartOverlay = document.getElementById('cartOverlay');

                if (cartIcon) {
                    cartIcon.addEventListener('click', () => this.toggleCart(true));
                }

                if (closeCart) {
                    closeCart.addEventListener('click', () => this.toggleCart(false));
                }

                if (cartOverlay) {
                    cartOverlay.addEventListener('click', () => this.toggleCart(false));
                }

                // Filter buttons
                const filterButtons = document.querySelectorAll('.filter-btn');
                filterButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        const filter = button.getAttribute('data-filter');
                        this.filterProducts(filter);
                    });
                });

                // Checkout button
                const checkoutBtn = document.getElementById('checkoutBtn');
                if (checkoutBtn) {
                    checkoutBtn.addEventListener('click', () => this.checkout());
                }

                // Mobile menu
                const mobileMenuBtn = document.getElementById('mobileMenuBtn');
                const mainNav = document.getElementById('mainNav');

                if (mobileMenuBtn && mainNav) {
                    mobileMenuBtn.addEventListener('click', () => {
                        mainNav.classList.toggle('active');
                    });
                }

                // Smooth scrolling for navigation links
                document.querySelectorAll('nav a').forEach(anchor => {
                    anchor.addEventListener('click', function(e) {
                        e.preventDefault();
                        const targetId = this.getAttribute('href');
                        if (targetId.startsWith('#')) {
                            const targetElement = document.querySelector(targetId);
                            if (targetElement) {
                                targetElement.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                                // Close mobile menu if open
                                if (mainNav) mainNav.classList.remove('active');
                            }
                        }
                    });
                });

                // Close cart when pressing Escape key
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        this.toggleCart(false);
                    }
                });
            }

            toggleCart(show) {
                const cartSidebar = document.getElementById('cartSidebar');
                const cartOverlay = document.getElementById('cartOverlay');

                if (show) {
                    cartSidebar.classList.add('active');
                    cartOverlay.style.display = 'block';
                    setTimeout(() => {
                        cartOverlay.style.opacity = '1';
                    }, 10);
                } else {
                    cartSidebar.classList.remove('active');
                    cartOverlay.style.opacity = '0';
                    setTimeout(() => {
                        cartOverlay.style.display = 'none';
                    }, 300);
                }
            }

            showNotification(title, message) {
                const notification = document.getElementById('notification');
                const notificationTitle = document.getElementById('notificationTitle');
                const notificationMessage = document.getElementById('notificationMessage');

                notificationTitle.textContent = title;
                notificationMessage.textContent = message;

                notification.classList.add('show');

                setTimeout(() => {
                    notification.classList.remove('show');
                }, 3000);
            }

            showProductDetails(productId) {
                const product = this.products.find(p => p.id === productId);
                if (!product) return;

                // Create modal for product details
                const modal = document.createElement('div');
                modal.className = 'product-modal';
                modal.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.9);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 2000;
                    padding: 20px;
                `;

                modal.innerHTML = `
                    <div style="background-color: var(--secondary); border-radius: 10px; max-width: 900px; width: 100%; max-height: 90vh; overflow-y: auto; position: relative;">
                        <button onclick="this.parentElement.parentElement.remove()" style="position: absolute; top: 20px; right: 20px; background: none; border: none; color: var(--accent); font-size: 1.5rem; cursor: pointer; z-index: 10;">
                            <i class="fas fa-times"></i>
                        </button>
                        <div style="display: flex; flex-direction: column; gap: 2rem; padding: 3rem;">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;">
                                <div>
                                    <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 10px; border: 2px solid var(--accent);">
                                </div>
                                <div>
                                    <h2 style="color: var(--accent); margin-bottom: 0.5rem;">${product.name}</h2>
                                    <p style="color: var(--gray); margin-bottom: 1.5rem; font-size: 1.2rem;">${product.brand}</p>
                                    <p style="margin-bottom: 2rem; color: var(--light); line-height: 1.8;">${product.description}</p>
                                    <div style="font-size: 2.5rem; color: var(--accent); font-weight: bold; margin-bottom: 2rem;">
                                        $${product.price.toFixed(2)}
                                    </div>
                                    <div style="margin-bottom: 2rem;">
                                        <h3 style="color: var(--accent); margin-bottom: 1rem;">Features</h3>
                                        <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
                                            ${product.features.map(feature => `
                                                <span style="background-color: rgba(100, 255, 218, 0.1); color: var(--accent); padding: 0.5rem 1rem; border-radius: 20px;">
                                                    ${feature}
                                                </span>
                                            `).join('')}
                                        </div>
                                    </div>
                                    <button onclick="watchStore.addToCart(${product.id}); this.parentElement.parentElement.parentElement.parentElement.remove()" 
                                            style="width: 100%; padding: 1rem; background-color: var(--accent); color: var(--primary); border: none; border-radius: 5px; font-size: 1.2rem; font-weight: bold; cursor: pointer; transition: all 0.3s;"
                                            onmouseover="this.style.backgroundColor='#52d4b9'"
                                            onmouseout="this.style.backgroundColor='var(--accent)'">
                                        <i class="fas fa-shopping-bag"></i> Add to Cart - $${product.price.toFixed(2)}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                document.body.appendChild(modal);
                
                // Close modal when clicking outside
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.remove();
                    }
                });
            }

            checkout() {
                if (this.cart.length === 0) {
                    this.showNotification('Empty Cart', 'Your cart is empty!');
                    return;
                }

                const total = this.getCartTotal();
                this.showNotification('Checkout', `Processing your order of $${total.toFixed(2)}`);
                
                // Simulate checkout process
                setTimeout(() => {
                    this.cart = [];
                    this.saveCartToStorage();
                    this.updateCartUI();
                    this.toggleCart(false);
                    this.showNotification('Order Confirmed', 'Thank you for your purchase!');
                }, 1500);
            }
        }

        // Initialize the watch store when DOM is loaded
        let watchStore;
        document.addEventListener('DOMContentLoaded', () => {
            watchStore = new WatchStore();
            
            // Make watchStore available globally for inline onclick handlers
            window.watchStore = watchStore;
        });
    </script>
</body>
</html>
