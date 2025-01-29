// Blog posts data (same as in main.js)
const posts = [
    {
        id: 1,
        title: "The Rise of Zero Trust Security",
        category: "cybersecurity",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
        excerpt: "Explore how zero trust architecture is revolutionizing enterprise security in the post-pandemic world...",
        content: "Zero Trust Security is becoming increasingly important in today's digital landscape. This comprehensive guide explores the principles, implementation strategies, and benefits of adopting a Zero Trust architecture. Unlike traditional security models that assume everything inside a network is safe, Zero Trust operates on the principle of 'never trust, always verify.' This means every user, device, and application must be authenticated and authorized before accessing resources. Key components of Zero Trust include micro-segmentation, least privilege access, and continuous monitoring. By implementing Zero Trust, organizations can significantly reduce the risk of data breaches and insider threats. This article also delves into real-world case studies of companies that have successfully adopted Zero Trust and the challenges they faced during the transition.",
        date: "2024-01-15",
        author: "Vishal Narayanan"
    },
    {
        id: 2,
        title: "AI in Cybersecurity: Friend or Foe?",
        category: "ai",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b",
        excerpt: "Examining the dual role of artificial intelligence in both defending against and creating cyber threats...",
        content: "Artificial Intelligence is revolutionizing cybersecurity, but it's a double-edged sword. While AI can help detect and prevent cyber attacks, it can also be used by malicious actors to create more sophisticated threats. On the defensive side, AI-powered tools can analyze vast amounts of data to identify anomalies and predict potential attacks. Machine learning algorithms can also automate threat detection and response, reducing the workload for security teams. However, cybercriminals are leveraging AI to develop advanced malware, phishing schemes, and deepfake technology. This article explores the ethical implications of AI in cybersecurity and discusses how organizations can balance the benefits and risks. It also provides recommendations for implementing AI-driven security solutions while mitigating potential downsides.",
        date: "2024-01-12",
        author: "Vishal Narayanan"
    },
    {
        id: 3,
        title: "Blockchain Beyond Cryptocurrency",
        category: "blockchain",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
        excerpt: "Discovering new applications of blockchain technology in various industries...",
        content: "While blockchain is commonly associated with cryptocurrency, its potential applications extend far beyond digital currencies. From supply chain management to healthcare records, blockchain is transforming various industries. In supply chain management, blockchain can provide transparency and traceability, ensuring that products are sourced ethically and delivered securely. In healthcare, blockchain can enable secure sharing of patient data between providers while maintaining privacy and compliance with regulations. This article also explores how blockchain is being used in voting systems, intellectual property protection, and even in combating counterfeit goods. The decentralized nature of blockchain makes it a powerful tool for creating trust and accountability in systems where intermediaries are traditionally required. However, challenges such as scalability and energy consumption remain, and this article discusses potential solutions to these issues.",
        date: "2024-01-10",
        author: "Vishal Narayanan"
    },
    {
        id: 4,
        title: "Cloud Security Best Practices",
        category: "cloud",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
        excerpt: "Essential security measures for protecting your cloud infrastructure...",
        content: "As organizations continue to migrate to the cloud, implementing robust security measures becomes crucial. This guide covers essential best practices for securing your cloud infrastructure and protecting sensitive data. Key practices include encrypting data both in transit and at rest, implementing strong access controls, and regularly auditing your cloud environment for vulnerabilities. Multi-factor authentication (MFA) should be enforced for all users, and role-based access control (RBAC) can help limit access to sensitive resources. Additionally, organizations should adopt a shared responsibility model, understanding that while cloud providers secure the infrastructure, customers are responsible for securing their data and applications. This article also discusses the importance of incident response planning and continuous monitoring to detect and respond to threats in real-time. Case studies of cloud security breaches and lessons learned are included to provide practical insights.",
        date: "2024-01-08",
        author: "Vishal Narayanan"
    },
    {
        id: 5,
        title: "The Future of Quantum Computing",
        category: "ai",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
        excerpt: "Understanding the potential impact of quantum computing on modern cryptography...",
        content: "Quantum computing poses both opportunities and challenges for the future of technology. This article explores how quantum computers might revolutionize various fields and their potential impact on current cryptographic systems. Quantum computers leverage qubits, which can exist in multiple states simultaneously, enabling them to solve complex problems much faster than classical computers. While this has exciting implications for fields like drug discovery, optimization, and artificial intelligence, it also threatens the security of current encryption methods. For example, quantum computers could break widely used cryptographic algorithms like RSA and ECC, rendering many of today's security systems obsolete. This article discusses the development of post-quantum cryptography, which aims to create encryption methods resistant to quantum attacks. It also examines the timeline for quantum computing adoption and the steps organizations can take to prepare for this technological shift.",
        date: "2024-01-05",
        author: "Vishal Narayanan"
    },
    {
        id: 6,
        title: "5G Security Challenges",
        category: "cybersecurity",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
        excerpt: "Analyzing the security implications of widespread 5G adoption...",
        content: "The rollout of 5G networks brings new security challenges that need to be addressed. From IoT device vulnerabilities to network infrastructure security, this article examines the key security considerations in the 5G era. 5G's increased speed and connectivity enable a wide range of applications, from smart cities to autonomous vehicles, but they also expand the attack surface for cybercriminals. One major concern is the security of IoT devices, many of which lack robust security features and can be easily compromised. Additionally, the use of software-defined networking (SDN) and network function virtualization (NFV) in 5G introduces new risks, such as the potential for software vulnerabilities to be exploited. This article provides recommendations for securing 5G networks, including the adoption of zero-trust architectures, regular security assessments, and collaboration between stakeholders to establish industry-wide standards. Real-world examples of 5G security incidents and their implications are also discussed.",
        date: "2024-01-03",
        author: "Vishal Narayanan"
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
    },

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

// Get post ID from URL
const urlParams = new URLSearchParams(window.location.search);
const postId = parseInt(urlParams.get('id'));

// Find the post
const post = posts.find(p => p.id === postId);

// Render post detail
if (post) {
    document.title = `${post.title} - TechInsights Blog`;
    
    const postDetail = document.getElementById('postDetail');
    postDetail.innerHTML = `
        <a href="index.html" class="back-button">← Back to Home</a>
        <img src="${post.image}" alt="${post.title}">
        <div class="post-detail-content">
            <span class="tag">${post.category}</span>
            <h1>${post.title}</h1>
            <div class="meta">
                <span>By ${post.author}</span>
                <span>|</span>
                <span>${new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}</span>
            </div>
            <div class="content">
                ${post.content}
            </div>
        </div>
    `;
} else {
    window.location.href = 'index.html';
}

// Subscribe form handling
document.getElementById('subscribeForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    if (email) {
        alert('Thank you for subscribing! You will receive our latest updates.');
        e.target.reset();
    }
});