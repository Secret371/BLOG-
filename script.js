// Blog Data
const blogPosts = [
    {
        id: 1,
        title: "The Future of Web Development in 2024",
        excerpt: "Explore the latest trends and technologies shaping the future of web development, from AI integration to advanced frameworks.",
        content: "Web development is evolving at an unprecedented pace. In 2024, we're seeing revolutionary changes in how we build and deploy web applications. From AI-powered development tools to advanced frameworks like Next.js 14 and Svelte 5, the landscape is more exciting than ever. This comprehensive guide explores the key trends that will define web development in the coming year.",
        category: "technology",
        tags: ["web development", "AI", "frameworks"],
        author: "John Doe",
        date: "2024-01-15",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
        featured: true,
        readTime: "8 min read"
    },
    {
        id: 2,
        title: "10 Healthy Habits for a Better Lifestyle",
        excerpt: "Discover simple yet effective habits that can transform your daily routine and improve your overall well-being.",
        content: "Living a healthy lifestyle doesn't have to be complicated. Small, consistent changes in your daily routine can lead to significant improvements in your physical and mental well-being. From morning routines to evening wind-downs, these 10 habits will help you create a more balanced and fulfilling life.",
        category: "lifestyle",
        tags: ["health", "wellness", "habits"],
        author: "Jane Smith",
        date: "2024-01-12",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=300&fit=crop",
        featured: true,
        readTime: "6 min read"
    },
    {
        id: 3,
        title: "Hidden Gems: 5 Underrated Travel Destinations",
        excerpt: "Uncover breathtaking locations that offer incredible experiences without the crowds of popular tourist spots.",
        content: "While everyone flocks to Paris, Tokyo, and New York, there are countless hidden gems around the world waiting to be discovered. These five underrated destinations offer stunning landscapes, rich cultures, and unforgettable experiences without the overwhelming crowds and inflated prices of mainstream tourist hotspots.",
        category: "travel",
        tags: ["travel", "destinations", "adventure"],
        author: "Mike Johnson",
        date: "2024-01-10",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
        featured: true,
        readTime: "7 min read"
    },
    {
        id: 4,
        title: "Mastering the Art of Homemade Pasta",
        excerpt: "Learn the secrets to creating perfect pasta from scratch with this comprehensive guide to traditional techniques.",
        content: "There's nothing quite like the satisfaction of creating fresh pasta from scratch. This ancient art form has been passed down through generations, and with the right techniques and a little practice, you can master it too. From selecting the perfect flour to achieving the ideal texture, we'll guide you through every step of the process.",
        category: "food",
        tags: ["cooking", "pasta", "italian"],
        author: "Maria Rodriguez",
        date: "2024-01-08",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&h=300&fit=crop",
        featured: false,
        readTime: "10 min read"
    },
    {
        id: 5,
        title: "Building Scalable Applications with Microservices",
        excerpt: "A deep dive into microservices architecture and how it can help you build more maintainable and scalable applications.",
        content: "Microservices architecture has revolutionized how we think about building large-scale applications. By breaking down monolithic applications into smaller, independent services, teams can develop, deploy, and scale components independently. This approach offers numerous benefits but also comes with its own set of challenges.",
        category: "technology",
        tags: ["microservices", "architecture", "scalability"],
        author: "David Chen",
        date: "2024-01-05",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
        featured: false,
        readTime: "12 min read"
    },
    {
        id: 6,
        title: "Mindfulness in the Digital Age",
        excerpt: "How to maintain mental clarity and focus in our hyperconnected world through mindfulness practices.",
        content: "In our increasingly digital world, finding moments of peace and clarity has become more challenging than ever. Constant notifications, endless scrolling, and information overload can leave us feeling overwhelmed and disconnected. Mindfulness practices offer a powerful antidote to digital fatigue.",
        category: "lifestyle",
        tags: ["mindfulness", "mental health", "digital wellness"],
        author: "Sarah Wilson",
        date: "2024-01-03",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
        featured: false,
        readTime: "9 min read"
    },
    {
        id: 7,
        title: "Street Food Adventures Around the World",
        excerpt: "Embark on a culinary journey through the vibrant street food scenes of different cultures and countries.",
        content: "Street food represents the heart and soul of a culture's culinary identity. From Bangkok's bustling night markets to Mexico City's taco stands, street vendors serve up authentic flavors that tell the story of their communities. Join us on a global adventure through the world's most exciting street food scenes.",
        category: "food",
        tags: ["street food", "culture", "travel"],
        author: "Carlos Martinez",
        date: "2024-01-01",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=300&fit=crop",
        featured: false,
        readTime: "11 min read"
    },
    {
        id: 8,
        title: "Sustainable Travel: Exploring Responsibly",
        excerpt: "Learn how to minimize your environmental impact while still enjoying incredible travel experiences around the globe.",
        content: "As awareness of climate change grows, more travelers are seeking ways to explore the world responsibly. Sustainable travel isn't about limiting your adventures—it's about making conscious choices that preserve the destinations we love for future generations. From eco-friendly accommodations to carbon offset programs, there are many ways to travel more sustainably.",
        category: "travel",
        tags: ["sustainable travel", "environment", "eco-friendly"],
        author: "Emma Thompson",
        date: "2023-12-28",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
        featured: false,
        readTime: "8 min read"
    },
    {
        id: 9,
        title: "The Rise of Artificial Intelligence in Healthcare",
        excerpt: "Discover how AI is revolutionizing medical diagnosis, treatment planning, and patient care in modern healthcare systems.",
        content: "Artificial Intelligence is transforming healthcare at an unprecedented pace. From diagnostic imaging that can detect diseases earlier than human doctors to personalized treatment plans based on genetic data, AI is making healthcare more precise and accessible. This revolution promises to save lives and reduce costs while improving patient outcomes across the globe.",
        category: "technology",
        tags: ["AI", "healthcare", "innovation"],
        author: "Dr. Alex Chen",
        date: "2024-01-20",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
        featured: true,
        readTime: "9 min read"
    },
    {
        id: 10,
        title: "Mediterranean Diet: A Path to Longevity",
        excerpt: "Explore the science-backed benefits of the Mediterranean diet and how it can transform your health and well-being.",
        content: "The Mediterranean diet isn't just a way of eating—it's a lifestyle that has been linked to increased longevity, reduced risk of heart disease, and improved cognitive function. Based on the traditional eating patterns of countries bordering the Mediterranean Sea, this diet emphasizes whole foods, healthy fats, and fresh ingredients that nourish both body and soul.",
        category: "lifestyle",
        tags: ["nutrition", "health", "longevity"],
        author: "Isabella Martinez",
        date: "2024-01-18",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=300&fit=crop",
        featured: false,
        readTime: "7 min read"
    },
    {
        id: 11,
        title: "Digital Nomad Guide: Working from Paradise",
        excerpt: "Essential tips and strategies for successfully working remotely while traveling the world as a digital nomad.",
        content: "The digital nomad lifestyle has exploded in popularity, offering the freedom to work from anywhere with an internet connection. However, success requires careful planning, the right tools, and strategies for maintaining productivity while exploring new destinations. This comprehensive guide covers everything from choosing destinations to managing time zones and building a sustainable remote work routine.",
        category: "travel",
        tags: ["digital nomad", "remote work", "lifestyle"],
        author: "Jake Williams",
        date: "2024-01-16",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&h=300&fit=crop",
        featured: false,
        readTime: "11 min read"
    },
    {
        id: 12,
        title: "Fermentation: Ancient Art, Modern Science",
        excerpt: "Dive into the fascinating world of fermentation and discover how this ancient technique is creating modern culinary magic.",
        content: "Fermentation is experiencing a renaissance in modern kitchens, combining ancient wisdom with cutting-edge science. From kombucha and kimchi to artisanal cheeses and sourdough bread, fermented foods offer incredible flavors and health benefits. Learn the science behind fermentation and how to start your own fermentation journey at home.",
        category: "food",
        tags: ["fermentation", "probiotics", "cooking"],
        author: "Chef Marcus Brown",
        date: "2024-01-14",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
        featured: false,
        readTime: "10 min read"
    },
    {
        id: 13,
        title: "Quantum Computing: The Next Frontier",
        excerpt: "Understanding quantum computing and its potential to revolutionize everything from cryptography to drug discovery.",
        content: "Quantum computing represents a paradigm shift in computational power, promising to solve problems that are impossible for classical computers. From breaking current encryption methods to accelerating drug discovery and optimizing complex systems, quantum computers could reshape our technological landscape. This article explores the current state and future potential of quantum computing.",
        category: "technology",
        tags: ["quantum computing", "future tech", "science"],
        author: "Dr. Sarah Kim",
        date: "2024-01-12",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop",
        featured: false,
        readTime: "13 min read"
    },
    {
        id: 14,
        title: "Minimalism: Less is More",
        excerpt: "Discover how embracing minimalism can lead to greater happiness, reduced stress, and a more meaningful life.",
        content: "Minimalism isn't about living with nothing—it's about living with intention. By focusing on what truly matters and eliminating excess, minimalism can reduce stress, increase focus, and create space for experiences over possessions. Learn practical strategies for decluttering your life and embracing a minimalist mindset that prioritizes quality over quantity.",
        category: "lifestyle",
        tags: ["minimalism", "decluttering", "mindfulness"],
        author: "Maya Patel",
        date: "2024-01-10",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop",
        featured: false,
        readTime: "8 min read"
    },
    {
        id: 15,
        title: "Iceland's Hidden Wonders: Beyond the Tourist Trail",
        excerpt: "Venture off the beaten path to discover Iceland's secret hot springs, hidden waterfalls, and untouched landscapes.",
        content: "While Iceland's Ring Road attracts millions of visitors, the island's true magic lies in its hidden corners. From secret hot springs accessible only by hiking to remote waterfalls that few tourists ever see, Iceland offers incredible experiences for those willing to venture beyond the typical itinerary. This guide reveals some of Iceland's best-kept secrets.",
        category: "travel",
        tags: ["Iceland", "hidden gems", "adventure"],
        author: "Erik Johansson",
        date: "2024-01-08",
        image: "https://images.unsplash.com/photo-1539066834-3c395bc6e4b8?w=500&h=300&fit=crop",
        featured: false,
        readTime: "9 min read"
    },
    {
        id: 16,
        title: "Plant-Based Protein: Complete Nutrition Guide",
        excerpt: "Everything you need to know about getting complete protein from plant-based sources for optimal health and performance.",
        content: "Plant-based proteins are gaining recognition not just among vegetarians and vegans, but among all health-conscious individuals. From quinoa and hemp seeds to legumes and spirulina, plant proteins offer complete amino acid profiles along with fiber, vitamins, and minerals. Learn how to combine plant proteins for optimal nutrition and discover delicious recipes that make plant-based eating enjoyable.",
        category: "food",
        tags: ["plant-based", "protein", "nutrition"],
        author: "Dr. Lisa Green",
        date: "2024-01-06",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop",
        featured: false,
        readTime: "12 min read"
    },
    {
        id: 17,
        title: "Cybersecurity in the Age of Remote Work",
        excerpt: "Essential cybersecurity practices to protect yourself and your organization in an increasingly remote work environment.",
        content: "The shift to remote work has created new cybersecurity challenges that require updated strategies and awareness. From securing home networks to recognizing phishing attempts and using VPNs effectively, remote workers must be more vigilant than ever. This comprehensive guide covers the essential cybersecurity practices every remote worker should know to protect sensitive data and maintain digital privacy.",
        category: "technology",
        tags: ["cybersecurity", "remote work", "privacy"],
        author: "Michael Torres",
        date: "2024-01-04",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=300&fit=crop",
        featured: false,
        readTime: "10 min read"
    },
    {
        id: 18,
        title: "The Art of Slow Living in a Fast World",
        excerpt: "Learn how to embrace slow living principles to reduce stress, increase mindfulness, and find joy in everyday moments.",
        content: "In our hyperconnected, fast-paced world, the slow living movement offers a refreshing alternative. Slow living isn't about doing everything slowly—it's about being intentional with your time, savoring experiences, and prioritizing what truly matters. Discover practical ways to incorporate slow living principles into your daily routine, from mindful morning rituals to creating tech-free spaces in your home.",
        category: "lifestyle",
        tags: ["slow living", "mindfulness", "well-being"],
        author: "Anna Larsson",
        date: "2024-01-02",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
        featured: false,
        readTime: "9 min read"
    }
];

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const featuredPosts = document.getElementById('featuredPosts');
const blogPostsContainer = document.getElementById('blogPosts');
const filterBtns = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const backToTop = document.getElementById('backToTop');
const newsletterForm = document.getElementById('newsletterForm');
const postModal = document.getElementById('postModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close');
const categoryCards = document.querySelectorAll('.category-card');

// State
let currentFilter = 'all';
let displayedPosts = 6;
let filteredPosts = [];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    loadFeaturedPosts();
    loadBlogPosts();
    loadTrendingPosts();
    setupEventListeners();
    setupScrollAnimations();
    createParticles();
    animateStats();
    setupReadingProgress();
});

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Navigation
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Featured Posts
function loadFeaturedPosts() {
    const featured = blogPosts.filter(post => post.featured);
    featuredPosts.innerHTML = featured.map(post => createFeaturedCard(post)).join('');
}

function createFeaturedCard(post) {
    return `
        <div class="featured-card fade-in" onclick="openPost(${post.id})">
            <img src="${post.image}" alt="${post.title}" loading="lazy">
            <div class="featured-card-content">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="card-meta">
                    <span>${post.author} • ${formatDate(post.date)}</span>
                    <span>${post.readTime}</span>
                </div>
                <div class="card-tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// Blog Posts
function loadBlogPosts() {
    filteredPosts = currentFilter === 'all' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === currentFilter);
    
    displayPosts();
    updateLoadMoreButton();
}

function displayPosts() {
    const postsToShow = filteredPosts.slice(0, displayedPosts);
    blogPostsContainer.innerHTML = postsToShow.map(post => createBlogCard(post)).join('');
    
    // Add animation to new posts
    setTimeout(() => {
        document.querySelectorAll('.blog-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('fade-in');
        });
    }, 100);
}

function createBlogCard(post) {
    return `
        <div class="blog-card" onclick="openPost(${post.id})">
            <img src="${post.image}" alt="${post.title}" loading="lazy">
            <div class="blog-card-content">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="card-meta">
                    <span>${post.author} • ${formatDate(post.date)}</span>
                    <span>${post.readTime}</span>
                </div>
                <div class="card-tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// Filtering
function filterPosts(category) {
    currentFilter = category;
    displayedPosts = 6;
    
    // Update active filter button
    filterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === category);
    });
    
    loadBlogPosts();
}

function filterByCategory(category) {
    filterPosts(category);
    document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
}

// Load More
function loadMorePosts() {
    displayedPosts += 6;
    displayPosts();
    updateLoadMoreButton();
}

function updateLoadMoreButton() {
    if (displayedPosts >= filteredPosts.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

// Search
function searchPosts() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (!query) {
        loadBlogPosts();
        return;
    }
    
    filteredPosts = blogPosts.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query)) ||
        post.category.toLowerCase().includes(query)
    );
    
    displayedPosts = filteredPosts.length;
    displayPosts();
    updateLoadMoreButton();
    
    // Update filter buttons
    filterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === 'all');
    });
    currentFilter = 'all';
}

// Modal
function openPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;
    
    modalBody.innerHTML = `
        <img src="${post.image}" alt="${post.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 10px; margin-bottom: 20px;">
        <h1 style="font-size: 2rem; margin-bottom: 15px; color: var(--text-primary);">${post.title}</h1>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; color: var(--text-secondary); border-bottom: 1px solid var(--border-color); padding-bottom: 15px;">
            <span>${post.author} • ${formatDate(post.date)}</span>
            <span>${post.readTime}</span>
        </div>
        <div style="margin-bottom: 20px;">
            ${post.tags.map(tag => `<span class="tag" style="margin-right: 10px;">${tag}</span>`).join('')}
        </div>
        <div style="line-height: 1.8; color: var(--text-primary); font-size: 1.1rem;">
            ${post.content.split('\n').map(paragraph => `<p style="margin-bottom: 20px;">${paragraph}</p>`).join('')}
        </div>
    `;
    
    postModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePostModal() {
    postModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Newsletter
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Simulate API call
    const button = e.target.querySelector('button');
    const originalText = button.textContent;
    button.innerHTML = '<div class="loading"></div>';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = 'Subscribed!';
        button.style.background = '#10b981';
        e.target.reset();
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            button.disabled = false;
        }, 2000);
    }, 1500);
}

// Scroll Effects
function handleScroll() {
    const scrollTop = window.pageYOffset;
    
    // Back to top button
    if (scrollTop > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
    
    // Navbar background
    const navbar = document.querySelector('.navbar');
    if (scrollTop > 50) {
        navbar.style.background = document.documentElement.getAttribute('data-theme') === 'dark' 
            ? 'rgba(17, 24, 39, 0.98)' 
            : 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = document.documentElement.getAttribute('data-theme') === 'dark' 
            ? 'rgba(17, 24, 39, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)';
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    document.querySelectorAll('.category-card, .blog-card, .featured-card').forEach(el => {
        observer.observe(el);
    });
}

// Event Listeners
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Mobile menu
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Search
    searchBtn.addEventListener('click', searchPosts);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchPosts();
    });
    
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => filterPosts(btn.dataset.filter));
    });
    
    // Category cards
    categoryCards.forEach(card => {
        card.addEventListener('click', () => filterByCategory(card.dataset.category));
    });
    
    // Load more
    loadMoreBtn.addEventListener('click', loadMorePosts);
    
    // Newsletter
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    
    // Modal
    closeModal.addEventListener('click', closePostModal);
    window.addEventListener('click', (e) => {
        if (e.target === postModal) closePostModal();
    });
    
    // Back to top
    backToTop.addEventListener('click', scrollToTop);
    
    // Scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Utility Functions
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Escape key to close modal
    if (e.key === 'Escape' && postModal.style.display === 'block') {
        closePostModal();
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
});

// Trending Posts
function loadTrendingPosts() {
    const trending = blogPosts.slice(0, 5).map(post => ({
        ...post,
        views: Math.floor(Math.random() * 5000) + 1000
    }));
    
    const trendingSlider = document.getElementById('trendingSlider');
    trendingSlider.innerHTML = trending.map(post => `
        <div class="trending-card" onclick="openPost(${post.id})">
            <img src="${post.image}" alt="${post.title}" loading="lazy">
            <div class="trending-card-content">
                <h4>${post.title}</h4>
                <div class="views">
                    <i class="fas fa-eye"></i>
                    <span>${post.views.toLocaleString()} views</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Animated Statistics
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateNumber(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 20);
}

// Particle Animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Reading Progress
function setupReadingProgress() {
    const progressBar = document.getElementById('readingProgress');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Toast Notifications
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    const toastIcon = toast.querySelector('i');
    
    toastMessage.textContent = message;
    toastIcon.className = type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
    toastIcon.style.color = type === 'success' ? '#10b981' : '#ef4444';
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Loading Overlay
function showLoading() {
    document.getElementById('loadingOverlay').classList.add('show');
}

function hideLoading() {
    document.getElementById('loadingOverlay').classList.remove('show');
}

// Enhanced Blog Card Creation
function createBlogCard(post) {
    const views = Math.floor(Math.random() * 3000) + 500;
    return `
        <div class="blog-card" onclick="openPost(${post.id})">
            <button type="button" class="bookmark" onclick="event.stopPropagation(); toggleBookmark(${post.id})" title="Bookmark">
                <i class="fas fa-bookmark"></i>
            </button>
            <img src="${post.image}" alt="${post.title}" loading="lazy">
            <div class="blog-card-content">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="card-meta">
                    <span>${post.author} • ${formatDate(post.date)}</span>
                    <div class="view-counter">
                        <i class="fas fa-eye"></i>
                        <span>${views.toLocaleString()}</span>
                    </div>
                </div>
                <div class="card-tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// Bookmark System
let bookmarkedPosts = JSON.parse(localStorage.getItem('bookmarkedPosts')) || [];

function toggleBookmark(postId) {
    const index = bookmarkedPosts.indexOf(postId);
    if (index > -1) {
        bookmarkedPosts.splice(index, 1);
        showToast('Removed from bookmarks');
    } else {
        bookmarkedPosts.push(postId);
        showToast('Added to bookmarks');
    }
    localStorage.setItem('bookmarkedPosts', JSON.stringify(bookmarkedPosts));
    updateBookmarkIcons();
}

function updateBookmarkIcons() {
    document.querySelectorAll('.bookmark').forEach(btn => {
        const postId = parseInt(btn.getAttribute('onclick').match(/\d+/)[0]);
        btn.classList.toggle('bookmarked', bookmarkedPosts.includes(postId));
    });
}

// Enhanced Newsletter Submission
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    showLoading();
    
    setTimeout(() => {
        hideLoading();
        showToast('Successfully subscribed to newsletter!');
        e.target.reset();
    }, 1500);
}

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}