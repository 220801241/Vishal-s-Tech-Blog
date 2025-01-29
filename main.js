// Blog posts data
const posts = [
    {
        id: 1,
        title: "The Rise of Zero Trust Security",
        category: "cybersecurity",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
        excerpt: "Explore how zero trust architecture is revolutionizing enterprise security in the post-pandemic world...",
        content: "Zero Trust Security is becoming increasingly important in today's digital landscape. This comprehensive guide explores the principles, implementation strategies, and benefits of adopting a Zero Trust architecture...",
        date: "2024-01-15",
        author: "John Smith"
    },
    {
        id: 2,
        title: "AI in Cybersecurity: Friend or Foe?",
        category: "ai",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b",
        excerpt: "Examining the dual role of artificial intelligence in both defending against and creating cyber threats...",
        content: "Artificial Intelligence is revolutionizing cybersecurity, but it's a double-edged sword. While AI can help detect and prevent cyber attacks, it can also be used by malicious actors to create more sophisticated threats...",
        date: "2024-01-12",
        author: "Sarah Johnson"
    },
    {
        id: 3,
        title: "Blockchain Beyond Cryptocurrency",
        category: "blockchain",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
        excerpt: "Discovering new applications of blockchain technology in various industries...",
        content: "While blockchain is commonly associated with cryptocurrency, its potential applications extend far beyond digital currencies. From supply chain management to healthcare records, blockchain is transforming various industries...",
        date: "2024-01-10",
        author: "Mike Chen"
    },
    {
        id: 4,
        title: "Cloud Security Best Practices",
        category: "cloud",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
        excerpt: "Essential security measures for protecting your cloud infrastructure...",
        content: "As organizations continue to migrate to the cloud, implementing robust security measures becomes crucial. This guide covers essential best practices for securing your cloud infrastructure and protecting sensitive data...",
        date: "2024-01-08",
        author: "Lisa Anderson"
    },
    {
        id: 5,
        title: "The Future of Quantum Computing",
        category: "ai",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
        excerpt: "Understanding the potential impact of quantum computing on modern cryptography...",
        content: "Quantum computing poses both opportunities and challenges for the future of technology. This article explores how quantum computers might revolutionize various fields and their potential impact on current cryptographic systems...",
        date: "2024-01-05",
        author: "David Wilson"
    },
    {
        id: 6,
        title: "5G Security Challenges",
        category: "cybersecurity",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
        excerpt: "Analyzing the security implications of widespread 5G adoption...",
        content: "The rollout of 5G networks brings new security challenges that need to be addressed. From IoT device vulnerabilities to network infrastructure security, this article examines the key security considerations in the 5G era...",
        date: "2024-01-03",
        author: "Emma Davis"
    },
    {
        id: 7,
        title: "Smart Homes: The Future of Living",
        category: "iot",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
        excerpt: "Discover how IoT is transforming homes into smart, interconnected ecosystems...",
        content: "Smart homes are revolutionizing the way we live by integrating IoT devices to automate and enhance everyday tasks. From smart thermostats that optimize energy usage to voice-controlled assistants like Alexa and Google Home, IoT is making homes more efficient and convenient. This article explores the key components of a smart home, including security systems, lighting, and appliances, and how they work together to create a seamless experience. It also discusses the challenges of smart home adoption, such as privacy concerns and interoperability issues, and provides tips for securing your IoT devices. Real-world examples of smart home implementations and their benefits are included to inspire readers to embrace this technology.",
        date: "2024-02-10",
        author: "Vishal Narayanan"
    },
    {
        id: 8,
        title: "IoT in Healthcare: Revolutionizing Patient Care",
        category: "iot",
        image: "https://images.unsplash.com/photo-1578496781985-452d4a934d50",
        excerpt: "Exploring how IoT devices are improving healthcare delivery and patient outcomes...",
        content: "The Internet of Things is transforming healthcare by enabling remote monitoring, personalized treatment, and efficient resource management. IoT devices like wearable fitness trackers, smart insulin pumps, and connected medical equipment are empowering patients and healthcare providers alike. This article delves into the applications of IoT in healthcare, including telemedicine, chronic disease management, and hospital asset tracking. It also highlights the challenges of implementing IoT in healthcare, such as data security and regulatory compliance. Case studies of successful IoT healthcare solutions are provided to demonstrate the potential of this technology to save lives and reduce costs.",
        date: "2024-02-08",
        author: "Vishal Narayanan"
    }

];

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', theme);
}

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 
    (prefersDarkScheme.matches ? 'dark' : 'light');
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// Render posts
function renderPosts(postsToRender = posts) {
    const postsGrid = document.getElementById('postsGrid');
    postsGrid.innerHTML = postsToRender.map(post => `
        <article class="post-card" data-post-id="${post.id}">
            <img src="${post.image}" alt="${post.title}">
            <div class="post-content">
                <span class="tag">${post.category}</span>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <button class="read-more" data-post-id="${post.id}">Read More</button>
            </div>
        </article>
    `).join('');

    // Add click handlers for post cards and buttons
    document.querySelectorAll('.post-card, .read-more').forEach(element => {
        element.addEventListener('click', (e) => {
            const postId = e.currentTarget.dataset.postId;
            window.location.href = `post.html?id=${postId}`;
        });
    });
}

// Filter posts by category
document.querySelectorAll('[data-category]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = e.target.dataset.category;
        const filteredPosts = category ? 
            posts.filter(post => post.category === category) : 
            posts;
        renderPosts(filteredPosts);
        
        // Update active state
        document.querySelectorAll('.nav-links a').forEach(a => {
            a.classList.remove('active');
        });
        e.target.classList.add('active');
    });
});

// Handle featured post click
document.querySelector('.featured-card').addEventListener('click', () => {
    window.location.href = `post.html?id=1`; // Featured post is always the first post
});

// Subscribe form handling
document.getElementById('subscribeForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    if (email) {
        alert('Thank you for subscribing! You will receive our latest updates.');
        e.target.reset();
    }
});

// Initial render
renderPosts();