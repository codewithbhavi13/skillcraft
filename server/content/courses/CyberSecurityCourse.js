const tutorial1_chapter1_topics = [
  {
    name: "Introduction to Operating Systems",
    content: [
      {
        type: "paragraph",
        data: "An Operating System (OS) is software that manages computer hardware and software resources, providing essential services.",
      },
      {
        type: "h6",
        data: "Common OS used in Cybersecurity:",
      },
      {
        type: "bullet",
        data: [
          "Windows (Most widely used in enterprises, often targeted by cyber threats)",
          "Linux (Ubuntu, Kali Linux) (Preferred for penetration testing and security research)",
        ],
      },
    ],
  },
  {
    name: "Windows OS for Cybersecurity",
    content: [
      {
        type: "h6",
        data: "Windows Security Features:",
      },
      {
        type: "bullet",
        data: [
          "Windows Defender & Firewall",
          "Group Policy Management",
          "User Access Control (UAC)",
          "Active Directory (AD) for enterprise security",
        ],
      },
      {
        type: "h6",
        data: "Common Security Challenges:",
      },
      {
        type: "bullet",
        data: [
          "Malware attacks (ransomware, trojans, viruses)",
          "Patch management & software vulnerabilities",
          "Privilege escalation risks",
        ],
      },
    ],
  },
  {
    name: "Linux OS for Cybersecurity",
    content: [
      {
        type: "h6",
        data: "Ubuntu (General-purpose Linux OS)",
      },
      {
        type: "bullet",
        data: [
          "Secure environment for servers & development",
          "Used for hosting web applications & cloud security",
        ],
      },
      {
        type: "h6",
        data: "Kali Linux (Penetration Testing OS)",
      },
      {
        type: "bullet",
        data: [
          "Pre-installed with security tools like Metasploit, Nmap, Wireshark",
          "Used for ethical hacking, penetration testing, and forensic analysis",
        ],
      },
    ],
  },
  {
    name: "Basic Linux Commands for Cybersecurity",
    content: [
      {
        type: "h6",
        data: "File & Directory Management:",
      },
      {
        type: "code",
        language: "bash",
        data: [
          "ls -la        # List all files with details",
          "cd /path      # Change directory",
          "mkdir newdir  # Create a new directory",
        ],
      },
      {
        type: "h6",
        data: "User & Permission Management:",
      },
      {
        type: "code",
        language: "bash",
        data: [
          "whoami               # Check current user",
          "sudo useradd hacker  # Add a new user",
          "chmod 700 file.txt   # Set file permissions",
        ],
      },
      {
        type: "h6",
        data: "Networking & Security Tools:",
      },
      {
        type: "code",
        language: "bash",
        data: [
          "ifconfig             # Show network configuration",
          "netstat -tulnp       # Show open ports & connections",
          "nmap 192.168.1.1     # Scan a network for vulnerabilities",
        ],
      },
    ],
  },
  {
    name: "Setting Up a Secure OS Environment",
    content: [
      {
        type: "bullet",
        data: [
          "Keep the OS updated with security patches.",
          "Configure firewall rules to allow only necessary connections.",
          "Disable unnecessary services that could be exploited.",
          "Use encryption to protect sensitive files.",
        ],
      },
    ],
  },
];
const tutorial1_chapter2_topics = [
  {
    name: "Introduction to Networking & Security",
    content: [
      {
        type: "paragraph",
        data: "Networking is the backbone of modern computing, enabling communication between systems. Cybersecurity focuses on securing these networks from unauthorized access, attacks, and vulnerabilities.",
      },
    ],
  },
  {
    name: "TCP/IP Model & Networking Basics",
    content: [
      {
        type: "paragraph",
        data: "The TCP/IP (Transmission Control Protocol/Internet Protocol) model is the foundation of internet communication.",
      },
      {
        type: "h6",
        data: "Layers of TCP/IP Model:",
      },
      {
        type: "bullet",
        data: [
          "Application Layer – HTTP, HTTPS, DNS, SSH",
          "Transport Layer – TCP (reliable), UDP (faster but less reliable)",
          "Internet Layer – IP addressing, routing (IPv4, IPv6)",
          "Network Access Layer – Physical network communication",
        ],
      },
      {
        type: "h6",
        data: "IP Addressing:",
      },
      {
        type: "bullet",
        data: [
          "Private IPs: Used within local networks (e.g., 192.168.x.x).",
          "Public IPs: Assigned by ISPs for internet communication.",
        ],
      },
    ],
  },
  {
    name: "DNS (Domain Name System)",
    content: [
      {
        type: "paragraph",
        data: "DNS (Domain Name System) is a hierarchical system that translates human-readable domain names (e.g., google.com) into machine-readable IP addresses (e.g., 142.250.190.14).",
      },
      {
        type: "h6",
        data: "How DNS Works?",
      },
      {
        type: "numbered",
        data: [
          "User enters a domain name (e.g., google.com) in the browser.",
          "DNS Resolver (ISP’s DNS server) checks its cache.",
          "If not found, it queries the Root Server.",
          "The Root Server directs it to the TLD Server (e.g., .com server).",
          "The TLD Server points to the Authoritative Name Server.",
          "The Authoritative Server returns the IP address of the website.",
          "The browser connects to the IP address and loads the website.",
        ],
      },
      {
        type: "h6",
        data: "Common DNS Attacks",
      },
      {
        type: "numbered",
        data: [
          "DNS Spoofing (DNS Cache Poisoning) – Injects false DNS records to redirect users to malicious websites.",
          "DNS Tunneling – Uses DNS queries to transfer data and bypass network restrictions.",
          "DNS Hijacking – Alters DNS settings to redirect traffic to fraudulent servers.",
          "Cache Poisoning – Inserts fake DNS entries into a resolver’s cache, leading users to the wrong sites.",
          "Man-in-the-Middle (MITM) Attack on DNS – Intercepts DNS queries and manipulates responses.",
        ],
      },
    ],
  },
  {
    name: "VPN (Virtual Private Network)",
    content: [
      {
        type: "bullet",
        data: [
          "A VPN encrypts internet traffic, ensuring privacy and security.",
        ],
      },
      {
        type: "h6",
        data: "Types of VPNs:",
      },
      {
        type: "bullet",
        data: [
          "Remote Access VPN: Securely connects users to corporate networks.",
          "Site-to-Site VPN: Connects multiple offices over the internet.",
        ],
      },
      {
        type: "h6",
        data: "Security Benefits:",
      },
      {
        type: "bullet",
        data: [
          "Masks IP address to enhance privacy.",
          "Protects data from interception on public Wi-Fi.",
        ],
      },
      {
        type: "h6",
        data: "Common VPN Protocols:",
      },
      {
        type: "bullet",
        data: ["OpenVPN", "IPSec", "WireGuard"],
      },
    ],
  },
  {
    name: "Proxy Servers",
    content: [
      {
        type: "paragraph",
        data: "Proxies act as intermediaries between users and the internet.",
      },
      {
        type: "h6",
        data: "Types of Proxies:",
      },
      {
        type: "bullet",
        data: [
          "Forward Proxy: Used by clients to access external resources.",
          "Reverse Proxy: Protects and balances traffic for web servers.",
        ],
      },
      {
        type: "h6",
        data: "Security Benefits:",
      },
      {
        type: "bullet",
        data: [
          "Hides IP addresses from websites.",
          "Filters malicious traffic before reaching the destination.",
          "Improves performance with caching.",
        ],
      },
    ],
  },
  {
    name: "Firewalls",
    content: [
      {
        type: "paragraph",
        data: "A firewall monitors and controls incoming/outgoing network traffic based on security rules.",
      },
      {
        type: "h6",
        data: "Types of Firewalls:",
      },
      {
        type: "bullet",
        data: [
          "Packet Filtering Firewall: Blocks or allows packets based on rules.",
          "Stateful Firewall: Tracks active connections for enhanced security.",
          "Next-Gen Firewall (NGFW): Includes intrusion prevention and deep packet inspection.",
        ],
      },
      {
        type: "h6",
        data: "Configuration Example:",
      },
      {
        type: "code",
        language: "bash",
        data: [
          "sudo ufw enable              # Enable firewall (Ubuntu)",
          "sudo ufw allow 22/tcp        # Allow SSH traffic",
          "sudo ufw deny 80/tcp         # Block HTTP traffic",
        ],
      },
    ],
  },
  {
    name: "SSH (Secure Shell)",
    content: [
      {
        type: "paragraph",
        data: "SSH is used for secure remote login and file transfers.",
      },
      {
        type: "h6",
        data: "Key Features:",
      },
      {
        type: "bullet",
        data: [
          "Encrypts communication over insecure networks.",
          "Supports password-based or key-based authentication.",
        ],
      },
      {
        type: "h6",
        data: "Basic SSH Commands:",
      },
      {
        type: "code",
        language: "bash",
        data: [
          "ssh user@remote_server          # Connect to a remote server",
          "scp file.txt user@server:/path  # Securely copy a file via SSH",
        ],
      },
    ],
  },
  {
    name: "Best Practices for Network Security",
    content: [
      {
        type: "bullet",
        data: [
          "Use encrypted connections (HTTPS, SSH, VPN).",
          "Restrict open ports to prevent unauthorized access.",
          "Implement strong firewall rules to block malicious traffic.",
          "Monitor network activity using tools like Wireshark.",
          "Regularly update networking software to patch vulnerabilities.",
        ],
      },
    ],
  },
];
const tutorial1_chapter3_topics = [
  {
    name: "Why Learn These Languages?",
    content: [
      {
        type: "paragraph",
        data: "For a Cybersecurity Specialist, scripting and automation are essential skills. These languages help in automating security tasks, penetration testing, log analysis, incident response, and vulnerability scanning.",
      },
    ],
  },
  {
    name: "Python for Cybersecurity",
    content: [
      {
        type: "bullet",
        data: [
          "Used in penetration testing, malware analysis, and network security.",
          "Rich libraries like Scapy (network scanning), Impacket (SMB attacks), and Requests (HTTP testing).",
        ],
      },
      {
        type: "h6",
        data: "Common Security Tasks:",
      },
      {
        type: "bullet",
        data: [
          "Writing network scanners (socket, scapy).",
          "Automating password cracking (hashlib, bcrypt).",
          "Developing malware analysis tools (pefile for PE file analysis).",
          "Web security testing with Selenium, BeautifulSoup.",
        ],
      },
      {
        type: "h6",
        data: "Example: Basic Port Scanner in Python",
      },
      {
        type: "code",
        language: "python",
        data: [
          "import socket",
          'ip = "192.168.1.1"',
          "for port in range(20, 1025):",
          "    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)",
          "    s.settimeout(1)",
          "    result = s.connect_ex((ip, port))",
          "    if result == 0:",
          '        print(f"Port {port} is open")',
          "    s.close()",
        ],
      },
    ],
  },
  {
    name: "Bash for Cybersecurity",
    content: [
      {
        type: "bullet",
        data: [
          "Essential for Linux security tasks, automation, and scripting.",
          "Used in log monitoring, system hardening, and penetration testing.",
        ],
      },
      {
        type: "h6",
        data: "Common Security Tasks:",
      },
      {
        type: "bullet",
        data: [
          "Automating log analysis (grep, awk, sed).",
          "Finding vulnerabilities in Linux systems.",
          "Running penetration testing scripts (nmap, whois, curl).",
        ],
      },
      {
        type: "h6",
        data: "Example: Checking Failed SSH Logins",
      },
      {
        type: "code",
        language: "bash",
        data: ['cat /var/log/auth.log | grep "Failed password"'],
      },
    ],
  },
  {
    name: "PowerShell for Cybersecurity",
    content: [
      {
        type: "bullet",
        data: [
          "Powerful scripting tool for Windows security automation.",
          "Used in Active Directory security, malware detection, and incident response.",
        ],
      },
      {
        type: "h6",
        data: "Common Security Tasks:",
      },
      {
        type: "bullet",
        data: [
          "Monitoring event logs for security threats.",
          "Extracting network information (Get-NetTCPConnection).",
          "Privilege escalation testing (Invoke-Mimikatz).",
        ],
      },
      {
        type: "h6",
        data: "Example: Get Active Network Connections",
      },
      {
        type: "code",
        language: "powershell",
        data: [
          "Get-NetTCPConnection | Select-Object LocalAddress, LocalPort, RemoteAddress, RemotePort, State",
        ],
      },
    ],
  },
  {
    name: "Key Takeaways",
    content: [
      {
        type: "bullet",
        data: [
          "Python: Best for penetration testing, malware analysis, and network security.",
          "Bash: Best for Linux automation, log analysis, and security hardening.",
          "PowerShell: Best for Windows security monitoring and Active Directory management.",
        ],
      },
    ],
  },
];
const tutorial1_chapter4_topics = [
  // Previous sections already defined...
  {
    name: "HTTP & HTTPS – The Foundation of Web Security",
    content: [
      {
        type: "paragraph",
        data: "HTTP (HyperText Transfer Protocol) and HTTPS (HTTP Secure) are the primary communication protocols for web browsing.",
      },
      {
        type: "h6",
        data: "Key Differences Between HTTP & HTTPS",
      },
      {
        type: "bullet",
        data: [
          "HTTP transfers data in plaintext, making it vulnerable to eavesdropping and interception.",
          "HTTPS encrypts data using SSL/TLS, ensuring confidentiality and integrity.",
          "HTTP operates on port 80, while HTTPS uses port 443.",
          "HTTPS is mandatory for login pages, banking, and e-commerce transactions.",
        ],
      },
    ],
  },
  {
    name: "Cookies – Storing Session Data in Browsers",
    content: [
      {
        type: "paragraph",
        data: "Cookies are small pieces of data stored by the browser for session tracking, authentication, and personalization.",
      },
      {
        type: "h6",
        data: "Types of Cookies",
      },
      {
        type: "bullet",
        data: [
          "Session Cookies: Temporary, deleted after the session ends.",
          "Persistent Cookies: Stored for a longer duration, used for remembering login credentials.",
          "Secure Cookies: Transmitted only over HTTPS to prevent interception.",
          "Third-party Cookies: Used for tracking and advertising purposes.",
        ],
      },
      {
        type: "h6",
        data: "Security Risks & Solutions",
      },
      {
        type: "bullet",
        data: [
          "Session Hijacking: Attackers steal session cookies. Solution: Use HttpOnly and Secure flags to prevent JavaScript access and ensure transmission only over HTTPS.",
          "Cross-Site Scripting (XSS): Malicious scripts steal cookies. Solution: Implement Content Security Policy (CSP) to restrict script execution.",
          "Cross-Site Request Forgery (CSRF): Attackers exploit active sessions. Solution: Use CSRF tokens to verify requests.",
        ],
      },
      {
        type: "h6",
        data: "Example: Secure Cookie Implementation (HTTP Headers)",
      },
      {
        type: "code",
        language: "http",
        data: [
          "Set-Cookie: session_id=abc123; HttpOnly; Secure; SameSite=Strict",
        ],
      },
    ],
  },
  {
    name: "HTTP Headers – Enhancing Web Security",
    content: [
      {
        type: "paragraph",
        data: "HTTP headers provide instructions to the browser on handling security policies.",
      },
      {
        type: "h6",
        data: "Important Security Headers",
      },
      {
        type: "bullet",
        data: [
          "Strict-Transport-Security (HSTS): Forces browsers to always use HTTPS, preventing downgrade attacks.",
          "Content-Security-Policy (CSP): Restricts the execution of scripts to prevent XSS attacks.",
          "X-Frame-Options: Prevents Clickjacking by blocking website embedding in iframes.",
          "X-XSS-Protection: Stops reflected XSS attacks by blocking malicious scripts.",
        ],
      },
      {
        type: "h6",
        data: "Example: Secure HTTP Headers in a Response",
      },
      {
        type: "code",
        language: "http",
        data: [
          "Strict-Transport-Security: max-age=31536000; includeSubDomains",
          "Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'",
          "X-Frame-Options: DENY",
        ],
      },
    ],
  },
  {
    name: "API Security – Protecting Web Services",
    content: [
      {
        type: "paragraph",
        data: "APIs allow applications to communicate, but they are common attack targets.",
      },
      {
        type: "h6",
        data: "Common API Security Risks & Solutions",
      },
      {
        type: "bullet",
        data: [
          "Broken Authentication: Weak API keys or tokens allow unauthorized access. Solution: Use OAuth2, JWT (JSON Web Tokens), and API Keys for authentication.",
          "Excessive Data Exposure: APIs return too much sensitive data. Solution: Implement data filtering and access control mechanisms.",
          "Injection Attacks (SQLi, XSS): Malicious input modifies API queries. Solution: Validate and sanitize user input to prevent exploitation.",
        ],
      },
    ],
  },
];
const tutorial1_chapter5_topics = [
  // Previous sections already defined...
  {
    name: "Virtualization Overview",
    content: [
      {
        type: "paragraph",
        data: "Virtualization is the process of creating virtual instances of computing resources (such as servers, storage, or networks) on a single physical machine.",
      },
      {
        type: "bullet",
        data: [
          "Hypervisors manage virtual machines (VMs) and ensure efficient resource allocation.",
          "Types of Virtualization:",
        ],
      },
      {
        type: "bullet",
        data: [
          "Server Virtualization: Running multiple OS instances on a single physical server.",
          "Network Virtualization: Creating virtual networks independent of physical hardware.",
          "Storage Virtualization: Pooling multiple storage devices into a single resource.",
        ],
      },
      {
        type: "h6",
        data: "Popular Virtualization Tools",
      },
      {
        type: "bullet",
        data: [
          "VMware ESXi & Workstation (for enterprise & desktop virtualization)",
          "VirtualBox (open-source virtualization)",
          "Hyper-V (Microsoft’s virtualization solution)",
        ],
      },
    ],
  },
  {
    name: "Cloud Security Fundamentals",
    content: [
      {
        type: "paragraph",
        data: "Cloud computing provides on-demand computing resources over the internet, but security is a critical concern.",
      },
      {
        type: "h6",
        data: "Cloud Service Models",
      },
      {
        type: "bullet",
        data: [
          "Infrastructure as a Service (IaaS): Provides virtual machines, storage, and networks. (e.g., AWS EC2, Google Compute Engine, Azure VM)",
          "Platform as a Service (PaaS): Offers a development environment with pre-configured platforms. (e.g., AWS Elastic Beanstalk, Google App Engine, Azure App Services)",
          "Software as a Service (SaaS): Delivers fully managed applications. (e.g., Gmail, Microsoft 365, Dropbox)",
        ],
      },
      {
        type: "h6",
        data: "Cloud Deployment Models",
      },
      {
        type: "bullet",
        data: [
          "Public Cloud: Resources shared across multiple users (AWS, Azure, GCP).",
          "Private Cloud: Dedicated infrastructure for a single organization (VMware vSphere, OpenStack).",
          "Hybrid Cloud: A mix of private and public clouds for flexibility.",
        ],
      },
    ],
  },
  {
    name: "Cloud Security Risks",
    content: [
      {
        type: "bullet",
        data: [
          "Data Breaches: Unauthorized access to sensitive cloud data.",
          "Misconfigurations: Improper security settings lead to vulnerabilities.",
          "DDoS Attacks: Attackers overwhelm cloud services, causing downtime.",
          "Insecure APIs: Poorly secured APIs can expose cloud resources.",
        ],
      },
    ],
  },
  {
    name: "Cloud Security Best Practices",
    content: [
      {
        type: "bullet",
        data: [
          "Use Strong Authentication & Authorization: Implement Multi-Factor Authentication (MFA) and Role-Based Access Control (RBAC).",
          "Encrypt Data: Protect data at rest and in transit using AES-256 encryption.",
          "Regular Security Audits: Monitor logs and use SIEM (Security Information and Event Management) tools.",
          "Implement Firewalls & Intrusion Detection Systems: Use Web Application Firewalls (WAFs) and Intrusion Prevention Systems (IPS) to prevent attacks.",
          "Backup & Disaster Recovery: Maintain regular backups and test disaster recovery plans.",
        ],
      },
    ],
  },
  {
    name: "Leading Cloud Security Tools & Solutions",
    content: [
      {
        type: "bullet",
        data: [
          "AWS Security Services: AWS Shield (DDoS Protection), AWS IAM (Identity & Access Management), AWS WAF",
          "Azure Security Solutions: Azure Security Center, Azure Sentinel, Azure Defender",
          "Google Cloud Security Tools: Google Chronicle, Security Command Center",
        ],
      },
    ],
  },
];

const tutorial1_chapters = [
  {
    name: "Operating Systems Essentials for Cybersecurity",
    topics: tutorial1_chapter1_topics,
    description:
      "This chapter explores the fundamental concepts of operating systems in the context of cybersecurity, covering Windows and Linux operating systems, their security features, and challenges. It also introduces basic Linux commands for cybersecurity tasks and best practices for setting up a secure OS environment.",
  },
  {
    name: "Networking & Security Basics",
    topics: tutorial1_chapter2_topics,
    description:
      "This chapter covers essential networking and security concepts, including the TCP/IP model, DNS, VPNs, proxy servers, firewalls, SSH, and best practices for network security. It provides a comprehensive overview of the tools and strategies used to protect and manage network infrastructures effectively.",
  },
  {
    name: "Scripting for Cybersecurity",
    topics: tutorial1_chapter3_topics,
    description:
      "This chapter explores the essential role of scripting languages in cybersecurity, focusing on Python, Bash, and PowerShell. It covers their applications in penetration testing, malware analysis, network security, log analysis, and automation, providing practical examples and key takeaways for effective security tasks.",
  },
  {
    name: "Web Communication & Security Essentials",
    topics: tutorial1_chapter4_topics,
    description:
      "This chapter covers foundational web security topics, including HTTP/HTTPS, cookies, HTTP headers, and API security. It emphasizes protecting user data and preventing attacks through secure protocols and practices.",
  },
  {
    name: "Cloud Security Fundamentals",
    topics: tutorial1_chapter5_topics,
    description:
      "This chapter covers essential concepts in virtualization and cloud security, including service models and deployment types. It addresses key security risks and provides best practices for safeguarding cloud environments, along with an overview of leading security tools.",
  },
];

const tutorial2_chapter1_cybersecurity_topics = [
  {
    name: "OSI Model (Open Systems Interconnection Model)",
    content: [
      {
        type: "paragraph",
        data: "The OSI model is a conceptual framework that standardizes network communication into 7 layers, each serving a distinct function.",
      },
      {
        type: "h6",
        data: "✅ Layers of the OSI Model:",
      },
      {
        type: "bullet",
        data: [
          "1. Physical Layer – Handles raw bit transmission over physical media (Cables, Wireless, Hubs).",
          "2. Data Link Layer – Ensures reliable node-to-node data transfer (MAC Addresses, Switches).",
          "3. Network Layer – Handles logical addressing and routing (IP Addresses, Routers).",
          "4. Transport Layer – Provides end-to-end communication (TCP, UDP).",
          "5. Session Layer – Manages sessions and connections (NetBIOS, RPC).",
          "6. Presentation Layer – Translates data formats (Encryption, Compression, JPEG, ASCII).",
          "7. Application Layer – Interfaces with user applications (HTTP, FTP, DNS, SMTP).",
        ],
      },
    ],
  },
  {
    name: "TCP/IP Model (Transmission Control Protocol/Internet Protocol)",
    content: [
      {
        type: "paragraph",
        data: "A practical model that maps directly to real-world networking, simplifying communication into 4 layers:",
      },
      {
        type: "h6",
        data: " Layers of the TCP/IP Model:",
      },
      {
        type: "bullet",
        data: [
          "1. Network Access Layer – Equivalent to OSI’s Physical + Data Link layers (Ethernet, Wi-Fi).",
          "2. Internet Layer – Handles addressing and routing (IP, ICMP).",
          "3. Transport Layer – Ensures reliable communication (TCP, UDP).",
          "4. Application Layer – Includes high-level protocols (HTTP, DNS, FTP, SMTP).",
        ],
      },
    ],
  },
  {
    name: "Key Protocols in Networking",
    content: [
      {
        type: "h6",
        data: "Common Protocols and Their Functions:",
      },
      {
        type: "bullet",
        data: [
          "TCP (Transmission Control Protocol) – Ensures reliable, ordered communication.",
          "UDP (User Datagram Protocol) – Faster but less reliable, used for streaming.",
          "HTTP/HTTPS (Hypertext Transfer Protocol) – Manages web communication, HTTPS is encrypted.",
          "DNS (Domain Name System) – Resolves domain names to IP addresses.",
          "FTP (File Transfer Protocol) – Transfers files between systems.",
          "SMTP (Simple Mail Transfer Protocol) – Sends emails across networks.",
        ],
      },
    ],
  },
  {
    name: "Security Concerns & Attacks on Network Layers",
    content: [
      {
        type: "h6",
        data: "Common Attacks in OSI Layers:",
      },
      {
        type: "bullet",
        data: [
          "Physical Layer – Wiretapping, Jamming, Signal Interference.",
          "Data Link Layer – MAC Spoofing, ARP Poisoning.",
          "Network Layer – IP Spoofing, DDoS Attacks.",
          "Transport Layer – SYN Flooding (TCP Attacks).",
          "Application Layer – HTTP Flood, SQL Injection, Cross-Site Scripting (XSS).",
        ],
      },
    ],
  },
];
const tutorial2_chapter2_cybersecurity_topics = [
  {
    name: "Firewalls",
    content: [
      {
        type: "paragraph",
        data: "A firewall is a security system that monitors and controls incoming and outgoing network traffic based on predetermined rules.",
      },
      {
        type: "h6",
        data: "Types of Firewalls",
      },
      {
        type: "bullet",
        data: [
          "Packet Filtering Firewall",
          "Stateful Inspection Firewall",
          "Proxy Firewall",
          "Next-Generation Firewall (NGFW)",
        ],
      },
    ],
  },
  {
    name: "Virtual Private Networks (VPNs)",
    content: [
      {
        type: "paragraph",
        data: "VPNs create secure, encrypted tunnels between devices and networks over the internet, protecting data from interception.",
      },
      {
        type: "h6",
        data: "Types of VPNs",
      },
      {
        type: "bullet",
        data: [
          "Remote Access VPN – Used by individuals to securely connect to a private network.",
          "Site-to-Site VPN – Connects entire networks securely.",
        ],
      },
      {
        type: "h6",
        data: "VPN Protocols",
      },
      {
        type: "bullet",
        data: ["OpenVPN", "IPSec", "L2TP"],
      },
    ],
  },
  {
    name: "Intrusion Detection & Prevention Systems (IDS/IPS)",
    content: [
      {
        type: "paragraph",
        data: "These systems monitor network traffic to detect and prevent malicious activities.",
      },
      {
        type: "bullet",
        data: [
          "IDS (Intrusion Detection System): Monitors and alerts but does not block traffic.",
          "IPS (Intrusion Prevention System): Actively blocks detected threats.",
        ],
      },
      {
        type: "h6",
        data: "Types of IDS/IPS",
      },
      {
        type: "bullet",
        data: ["Network-based IDS/IPS", "Host-based IDS/IPS"],
      },
    ],
  },
  {
    name: "Proxy Servers",
    content: [
      {
        type: "paragraph",
        data: "A proxy server acts as an intermediary between users and the internet, enhancing privacy, security, and performance.",
      },
      {
        type: "h6",
        data: "Types of Proxy Servers",
      },
      {
        type: "bullet",
        data: [
          "Forward Proxy: Used by clients to access external content securely.",
          "Reverse Proxy: Used by servers to protect internal resources.",
        ],
      },
      {
        type: "h6",
        data: "Benefits of Proxy Servers",
      },
      {
        type: "bullet",
        data: [
          "Hides client IP addresses",
          "Enhances security by filtering content",
          "Improves performance via caching",
        ],
      },
    ],
  },
];
const tutorial2_chapter3_cybersecurity_tools = [
  {
    name: "Wireshark – Packet Analysis Tool",
    content: [
      {
        type: "paragraph",
        data: "Wireshark is a widely used network protocol analyzer that captures and inspects packets in real time.",
      },
      {
        type: "h6",
        data: "Key Features",
      },
      {
        type: "bullet",
        data: [
          "Captures network packets and displays them in a human-readable format.",
          "Supports filtering and deep packet inspection.",
          "Identifies network anomalies, security threats, and protocol issues.",
        ],
      },
      {
        type: "h6",
        data: "Usage Example",
      },
      {
        type: "bullet",
        data: [
          "Capture network traffic: wireshark & (Linux)",
          "Apply filters: tcp.port == 443 (to monitor HTTPS traffic)",
        ],
      },
    ],
  },
  {
    name: "Nmap – Network Scanning Tool",
    content: [
      {
        type: "paragraph",
        data: "Nmap (Network Mapper) is a powerful tool used for network discovery and security auditing.",
      },
      {
        type: "h6",
        data: "Key Features",
      },
      {
        type: "bullet",
        data: [
          "Identifies live hosts on a network.",
          "Scans open ports and running services.",
          "Detects vulnerabilities and security risks.",
        ],
      },
      {
        type: "h6",
        data: "Common Nmap Scans",
      },
      {
        type: "bullet",
        data: [
          "Basic Host Discovery: nmap -sn 192.168.1.0/24",
          "Port Scanning: nmap -p 1-65535 192.168.1.1",
          "Service and OS Detection: nmap -A 192.168.1.1",
        ],
      },
    ],
  },
  {
    name: "Netcat – Network Utility Tool",
    content: [
      {
        type: "paragraph",
        data: "Netcat (nc) is a simple but powerful command-line tool used for network communication and security testing.",
      },
      {
        type: "h6",
        data: "Key Features",
      },
      {
        type: "bullet",
        data: [
          "Sends and receives raw data over TCP/UDP connections.",
          "Can be used for port scanning, file transfer, and creating backdoors.",
          "Supports both server and client modes.",
        ],
      },
      {
        type: "h6",
        data: "Common Netcat Commands",
      },
      {
        type: "bullet",
        data: [
          "Listen on a port: nc -lvp 4444",
          "Connect to a remote host: nc 192.168.1.10 4444",
          "Transfer files: nc -lvp 5555 > received_file.txt",
        ],
      },
    ],
  },
];
const tutorial2_chapter4_wireless_security = [
  {
    name: "Common Wireless Security Threats",
    content: [
      {
        type: "numbered",
        data: [
          "Evil Twin Attack – An attacker sets up a rogue Wi-Fi network that mimics a legitimate one to steal user credentials.",
          "Man-in-the-Middle (MITM) Attack – Hackers intercept communication between devices on an unsecured network.",
          "Packet Sniffing – Attackers capture unencrypted Wi-Fi traffic using tools like Wireshark.",
          "Deauthentication Attack – Forces devices to disconnect from a Wi-Fi network, making them reconnect to a malicious one.",
          "Weak Encryption Exploits – Using outdated encryption (WEP) allows attackers to crack passwords easily.",
        ],
      },
    ],
  },
  {
    name: "Wireless Security Best Practices",
    content: [
      {
        type: "bullet",
        data: [
          " Use Strong Encryption (WPA3) – Avoid WEP and WPA; use WPA3 for better security.",
          "Change Default SSID & Credentials – Rename your Wi-Fi and set a strong, unique password.",
          "Disable WPS (Wi-Fi Protected Setup) – WPS can be exploited by brute-force attacks.",
          "Enable MAC Address Filtering – Restricts devices that can connect to the network.",
          "Use VPN on Public Wi-Fi – Encrypts your traffic, preventing packet sniffing.",
          " Regular Firmware Updates – Keeps router security patches up to date.",
        ],
      },
    ],
  },
  {
    name: "Wireless Attack Prevention Techniques",
    content: [
      {
        type: "bullet",
        data: [
          " Intrusion Detection & Prevention Systems (IDS/IPS): Monitors and blocks unauthorized access attempts.",
          "RF Jamming Detection: Identifies interference or signal jamming attacks.",
          " Hidden SSID: Prevents casual attackers from detecting the network.",
          "Network Segmentation: Keep IoT devices on a separate network from critical systems.",
        ],
      },
    ],
  },
];
const tutorial2_chapter5_secure_network_architecture = [
  {
    name: "Principles of Secure Network Architecture",
    content: [
      {
        type: "bullet",
        data: [
          "Defense in Depth – Implement multiple security layers (firewalls, IDS/IPS, encryption).",
          "Least Privilege Access – Restrict users and devices to only necessary resources.",
          "Network Segmentation – Separate sensitive systems from public-facing services.",
          "Zero Trust Model – Verify every user and device before granting access.",
          "Redundancy & Failover – Ensure uptime using backup systems and load balancers.",
        ],
      },
    ],
  },
  {
    name: "Secure Network Design Strategies",
    content: [
      {
        type: "bullet",
        data: [
          "✅ Perimeter Security: Firewalls, IDS/IPS, and DMZ to filter traffic.",
          "✅ Internal Network Security: VLANs, endpoint security, and access control.",
          "✅ Cloud Security: Secure APIs, IAM policies, and encryption for cloud workloads.",
          "✅ Endpoint Security: Antivirus, EDR (Endpoint Detection & Response), and patch management.",
        ],
      },
    ],
  },
  {
    name: "Common Network Security Architectures",
    content: [
      {
        type: "bullet",
        data: [
          " Flat vs. Segmented Networks – Flat networks lack segmentation, while segmented networks improve security by isolating critical assets.",
          "DMZ (Demilitarized Zone) – A buffer zone between external and internal networks for hosting public-facing services securely.",
          " Micro-Segmentation – Limits lateral movement within a network using granular access control.",
          "Software-Defined Networking (SDN) – Enhances security by dynamically controlling traffic flow.",
        ],
      },
    ],
  },
  {
    name: "Network Security Hardening Techniques",
    content: [
      {
        type: "bullet",
        data: [
          " Network Access Control (NAC): Restricts unauthorized devices from connecting.",
          "Traffic Monitoring & Logging: Uses SIEM solutions (Splunk, ELK) for anomaly detection.",
          "DDoS Mitigation: Deploys rate-limiting, firewalls, and cloud-based protection (Cloudflare, AWS Shield).",
          "Encryption (TLS/IPSec): Secures data in transit between endpoints.",
        ],
      },
    ],
  },
];

const tutorial2_chapters = [
  {
    name: "Networking Fundamentals & Security",
    topics: tutorial2_chapter1_cybersecurity_topics,
    description:
      "This chapter provides a comprehensive overview of networking fundamentals, covering the OSI and TCP/IP models, key protocols, and security concerns across different network layers. It explores the structure and functionality of network communication while addressing potential security threats and attacks.",
  },
  {
    name: "Network Security Tools and Technologies",
    topics: tutorial2_chapter2_cybersecurity_topics,
    description:
      "This chapter explores foundational cybersecurity components, including firewalls for network traffic control, VPNs for secure data connections, IDS/IPS systems for threat detection and prevention, and proxy servers for enhanced privacy and performance. Each topic covers various types, functionalities, and benefits, providing a comprehensive understanding of network security measures.",
  },
  {
    name: "Network Analysis & Scanning Tools",
    topics: tutorial2_chapter3_cybersecurity_tools,
    description:
      "This chapter explores essential cybersecurity tools, including Wireshark for packet analysis, Nmap for network scanning, and Netcat for network utility tasks. These tools are fundamental for network security testing, diagnostics, and maintaining secure communication channels.",
  },
  {
    name: "Wireless Security Threats & Prevention",
    topics: tutorial2_chapter4_wireless_security,
    description:
      "This chapter covers essential concepts in wireless security, including common threats like Evil Twin and Man-in-the-Middle attacks, best practices for securing wireless networks, and prevention techniques such as intrusion detection systems and network segmentation.",
  },
  {
    name: "Secure Network Architecture & Hardening",
    topics: tutorial2_chapter5_secure_network_architecture,
    description:
      "This chapter explores secure network architecture by covering principles, design strategies, common security architectures, and hardening techniques. It provides a comprehensive overview of implementing robust security measures in network design and maintenance.",
  },
];

const tutorial3_chapter1_windows_security_basics = [
  {
    name: "1.1 Active Directory (AD)",
    content: [
      {
        type: "paragraph",
        data: "Active Directory (AD) is a Microsoft directory service used for identity and access management in Windows environments. It allows administrators to manage users, computers, and security policies in a centralized manner.",
      },
      {
        type: "h6",
        data: "Key Features:",
      },
      {
        type: "bullet",
        data: [
          "User and Group Management: Enables administrators to create, manage, and control user accounts and groups.",
          "Authentication and Authorization: Provides Single Sign-On (SSO) for network resources.",
          "Domain Controllers (DCs): Servers that store and manage AD data.",
          "Organizational Units (OUs): Logical containers for users, groups, and devices to apply policies efficiently.",
          "LDAP & Kerberos Integration: Uses Lightweight Directory Access Protocol (LDAP) and Kerberos for secure authentication.",
        ],
      },
      {
        type: "h6",
        data: "Benefits of Active Directory:",
      },
      {
        type: "bullet",
        data: [
          " Centralized security and management",
          " Improved access control and resource sharing",
          " Scalability for enterprise environments",
        ],
      },
    ],
  },
  {
    name: "1.2 Group Policies (GPO)",
    content: [
      {
        type: "paragraph",
        data: "Group Policy is a feature of Windows that allows administrators to define security settings, configure software, and enforce rules across a network of computers.",
      },
      {
        type: "h6",
        data: "Key Features:",
      },
      {
        type: "bullet",
        data: [
          "Security Policies: Enforce password complexity, account lockout, and user privileges.",
          "Software Deployment: Automate software installation and updates.",
          "Device and Application Control: Restrict USB access, limit software execution, and configure firewall rules.",
          "User and Computer Configuration: Customize desktop settings, enforce network configurations, and manage printer access.",
        ],
      },
      {
        type: "h6",
        data: "Benefits of Group Policies:",
      },
      {
        type: "bullet",
        data: [
          "Centralized control over system settings",
          "Enhanced security and compliance",
          "Automation of system configurations",
        ],
      },
    ],
  },
  {
    name: "1.3 Windows Defender",
    content: [
      {
        type: "paragraph",
        data: "Windows Defender is Microsoft’s built-in antivirus and anti-malware solution for Windows operating systems. It provides real-time protection against viruses, malware, and other threats.",
      },
      {
        type: "h6",
        data: "Key Features:",
      },
      {
        type: "bullet",
        data: [
          "Real-time Protection: Continuously scans and protects against threats.",
          "Firewall and Network Protection: Prevents unauthorized access and cyber threats.",
          "Cloud-Based Threat Analysis: Uses AI-powered detection for advanced threat protection.",
          "Ransomware Protection: Offers controlled folder access to prevent unauthorized modifications.",
          "Automatic Updates: Ensures up-to-date protection against the latest threats.",
        ],
      },
      {
        type: "h6",
        data: "Benefits of Windows Defender:",
      },
      {
        type: "bullet",
        data: [
          "Free and built-in security solution",
          "Minimal impact on system performance",
          "Regular updates and cloud-driven threat intelligence",
        ],
      },
    ],
  },
];
const tutorial3_chapter2_linux_security_basics = [
  {
    name: "2.1 File Permissions",
    content: [
      {
        type: "paragraph",
        data: "Linux file permissions control access to files and directories, ensuring data security and integrity.",
      },
      {
        type: "h6",
        data: "Key Features:",
      },
      {
        type: "bullet",
        data: [
          "Read (r), Write (w), Execute (x): Defines user, group, and others' access levels.",
          "Ownership: Assigned to a user and group, determining access rights.",
          "chmod, chown, chgrp: Commands for modifying permissions and ownership.",
          "Sticky Bit, SUID, SGID: Special permissions for enhanced security.",
        ],
      },
      {
        type: "h6",
        data: "Benefits:",
      },
      {
        type: "bullet",
        data: [
          "Prevents unauthorized access",
          "Enhances data security",
          "Ensures system integrity",
        ],
      },
    ],
  },
  {
    name: "2.2 SELinux (Security-Enhanced Linux)",
    content: [
      {
        type: "paragraph",
        data: "SELinux is a security module for enforcing mandatory access controls in Linux.",
      },
      {
        type: "h6",
        data: "Key Features:",
      },
      {
        type: "bullet",
        data: [
          "Enforces strict access policies",
          "Prevents unauthorized modifications",
          "Uses security contexts for process isolation",
          "Modes: Enforcing, Permissive, Disabled",
        ],
      },
      {
        type: "h6",
        data: "Benefits:",
      },
      {
        type: "bullet",
        data: [
          "Stronger security policies",
          "Protection against root exploits",
          "Reduced attack surface",
        ],
      },
    ],
  },
  {
    name: "2.3 AppArmor",
    content: [
      {
        type: "paragraph",
        data: "AppArmor is an alternative to SELinux that confines applications using profile-based security policies.",
      },
      {
        type: "h6",
        data: "Key Features:",
      },
      {
        type: "bullet",
        data: [
          "Easy to configure",
          "Profile-based security model",
          "Restricts file and network access for applications",
        ],
      },
      {
        type: "h6",
        data: "Benefits:",
      },
      {
        type: "bullet",
        data: [
          "Lightweight and efficient",
          "Simplifies security management",
          "Prevents application-level threats",
        ],
      },
    ],
  },
  {
    name: "2.4 Log Analysis",
    content: [
      {
        type: "paragraph",
        data: "Log analysis helps in monitoring and identifying security incidents in Linux environments.",
      },
      {
        type: "h6",
        data: "Key Features:",
      },
      {
        type: "bullet",
        data: [
          "Syslog and Journalctl: Centralized logging system.",
          "Auditd: Advanced auditing framework.",
          "Logwatch and Logrotate: Tools for log monitoring and management.",
        ],
      },
      {
        type: "h6",
        data: "Benefits:",
      },
      {
        type: "bullet",
        data: [
          "Detects security breaches",
          "Ensures compliance with security policies",
          "Aids in troubleshooting and forensic analysis",
        ],
      },
    ],
  },
];
const tutorial3_chapter3_log_management_and_monitoring = [
  {
    name: "3.1 System Log Management",
    content: [
      {
        type: "paragraph",
        data: "System logs are essential for tracking system activities, diagnosing issues, and identifying security threats.",
      },
      {
        type: "h6",
        data: "Key Features:",
      },
      {
        type: "bullet",
        data: [
          "Syslog and Rsyslog: Centralized logging mechanisms.",
          "Journalctl: Logs systemd-based services and applications.",
          "Log Rotation: Prevents excessive log growth using tools like logrotate.",
          "Remote Logging: Sends logs to a central server for security monitoring.",
        ],
      },
      {
        type: "h6",
        data: "Benefits:",
      },
      {
        type: "bullet",
        data: [
          "Improves system troubleshooting",
          "Helps in auditing and compliance",
          "Enables proactive security monitoring",
        ],
      },
    ],
  },
  {
    name: "3.2 Monitoring Suspicious Activity",
    content: [
      {
        type: "paragraph",
        data: "Monitoring and analyzing system activities help in detecting security breaches and mitigating threats.",
      },
      {
        type: "h6",
        data: "Key Features:",
      },
      {
        type: "bullet",
        data: [
          "Intrusion Detection Systems (IDS): Tools like Snort and Suricata for detecting malicious activity.",
          "Fail2Ban: Protects against brute-force attacks.",
          "Auditd and AIDE: Provides real-time monitoring of file changes.",
          "SIEM (Security Information and Event Management): Centralized security event analysis.",
        ],
      },
      {
        type: "h6",
        data: "Benefits:",
      },
      {
        type: "bullet",
        data: [
          "Detects unauthorized access and malware",
          "Improves system security posture",
          "Reduces risk of data breaches",
        ],
      },
    ],
  },
];
const tutorial3_chapter4_automation_and_scripting = [
  {
    name: "4.1 Introduction to Automation",
    content: [
      {
        type: "paragraph",
        data: "Security automation helps streamline and enhance system protection by reducing manual effort, minimizing human error, and ensuring consistency in security policies. PowerShell (Windows) and Bash (Linux) are two powerful scripting languages used for automating security tasks, including log analysis, user management, firewall configuration, and malware detection.",
      },
      {
        type: "h6",
        data: "Key Features:",
      },
      {
        type: "bullet",
        data: [
          "Task Scheduling: Automates routine security checks at predefined intervals.",
          "Log Monitoring: Analyzes system logs to detect anomalies and potential threats.",
          "User Management: Automatically creates, modifies, or disables user accounts and permissions.",
          "Firewall Configuration: Implements security rules dynamically to prevent unauthorized access.",
          "Malware Scanning: Uses automation to scan and remove potential threats.",
        ],
      },
      {
        type: "h6",
        data: "Benefits:",
      },
      {
        type: "bullet",
        data: [
          "Reduces manual workload for administrators.",
          "Enhances security response time and consistency.",
          "Automates threat detection and mitigation.",
        ],
      },
    ],
  },
  {
    name: "4.2 Automating Windows Security with PowerShell",
    content: [
      {
        type: "paragraph",
        data: "PowerShell is a powerful scripting tool used in Windows environments for system administration and security automation.",
      },
    ],
  },
  {
    name: "4.2.1 Automating Security Audits",
    content: [
      {
        type: "paragraph",
        data: "Using PowerShell, administrators can automate security audits to check system vulnerabilities.",
      },
      {
        type: "h6",
        data: "Example: Checking User Login History",
      },
      {
        type: "code",
        language: "powershell",
        code: "Get-EventLog -LogName Security -InstanceId 4624 | Select-Object TimeGenerated, ReplacementStrings",
      },
      {
        type: "h6",
        data: "Example: Listing Inactive User Accounts",
      },
      {
        type: "code",
        language: "powershell",
        code: "Search-ADAccount -AccountInactive -TimeSpan 30.00:00:00 | Select-Object Name, LastLogonDate",
      },
    ],
  },
  {
    name: "4.2.2 Automating Log Analysis",
    content: [
      {
        type: "paragraph",
        data: "PowerShell can parse and analyze security logs to detect potential threats.",
      },
      {
        type: "h6",
        data: "Example: Filtering Failed Login Attempts",
      },
      {
        type: "code",
        language: "powershell",
        code: "Get-WinEvent -LogName Security | Where-Object { $_.Id -eq 4625 } | Select-Object TimeCreated, Message",
      },
    ],
  },
  {
    name: "4.2.3 Automating Windows Defender Scans",
    content: [
      {
        type: "paragraph",
        data: "Windows Defender can be controlled using PowerShell for scheduled security scans.",
      },
      {
        type: "h6",
        data: "Example: Running a Quick Scan",
      },
      {
        type: "code",
        language: "powershell",
        code: "Start-MpScan -ScanType QuickScan",
      },
      {
        type: "h6",
        data: "Example: Running a Full Scan",
      },
      {
        type: "code",
        language: "powershell",
        code: "Start-MpScan -ScanType FullScan",
      },
    ],
  },
  {
    name: "4.3 Automating Linux Security with Bash Scripts",
    content: [
      {
        type: "paragraph",
        data: "Bash scripting is widely used in Linux environments for automating security tasks such as monitoring logs, managing users, and configuring firewalls.",
      },
    ],
  },
  {
    name: "4.3.1 Automating Log Analysis",
    content: [
      {
        type: "paragraph",
        data: "Linux logs are essential for detecting suspicious activities.",
      },
      {
        type: "h6",
        data: "Example: Monitoring Failed SSH Login Attempts",
      },
      {
        type: "code",
        language: "bash",
        code: `#!/bin/bash
grep "Failed password" /var/log/auth.log | awk '{print $1, $2, $3, $11}' | sort | uniq -c`,
      },
    ],
  },
  {
    name: "4.3.2 Automating User Management",
    content: [
      {
        type: "paragraph",
        data: "Bash scripts can simplify user account management.",
      },
      {
        type: "h6",
        data: "Example: Creating a New User with Default Permissions",
      },
      {
        type: "code",
        language: "bash",
        code: `#!/bin/bash
read -p "Enter username: " user
sudo adduser $user
echo "User $user created successfully!"`,
      },
      {
        type: "h6",
        data: "Example: Disabling Inactive Users",
      },
      {
        type: "code",
        language: "bash",
        code: `#!/bin/bash
for user in $(lastlog -b 30 | awk '{print $1}' | tail -n +2); do
  sudo usermod -L $user
done
echo "Inactive users disabled."`,
      },
    ],
  },
  {
    name: "4.3.3 Automating Firewall Configuration",
    content: [
      {
        type: "paragraph",
        data: "Bash can automate firewall settings to enhance security.",
      },
      {
        type: "h6",
        data: "Example: Blocking an IP Address Using iptables",
      },
      {
        type: "code",
        language: "bash",
        code: `#!/bin/bash
read -p "Enter IP to block: " ip
sudo iptables -A INPUT -s $ip -j DROP
echo "Blocked IP: $ip"`,
      },
    ],
  },
  {
    name: "4.4 Automating Security Updates",
    content: [
      {
        type: "paragraph",
        data: "Keeping systems updated is critical for security. PowerShell and Bash can automate updates.",
      },
    ],
  },
  {
    name: "4.4.1 Automating Windows Updates with PowerShell",
    content: [
      {
        type: "h6",
        data: "Example: Installing Windows Updates",
      },
      {
        type: "code",
        language: "powershell",
        code: `Install-Module PSWindowsUpdate
Get-WindowsUpdate -Install -AcceptAll -AutoReboot`,
      },
    ],
  },
  {
    name: "4.4.2 Automating Linux Updates with Bash",
    content: [
      {
        type: "h6",
        data: "Example: Updating Linux System",
      },
      {
        type: "code",
        language: "bash",
        code: `#!/bin/bash
sudo apt update && sudo apt upgrade -y
echo "System updated successfully!"`,
      },
    ],
  },
];
const tutorial3_chapter5_malware_basics = [
  {
    name: "5.1 Introduction to Malware",
    content: [
      {
        type: "paragraph",
        data: "Malware (malicious software) refers to any software designed to harm, exploit, or compromise devices, networks, and users. Common types include viruses, worms, trojans, ransomware, spyware, and rootkits.",
      },
      {
        type: "h6",
        data: "Key Threats",
      },
      {
        type: "bullet",
        data: [
          "Viruses: Self-replicating programs that infect files and spread.",
          "Worms: Standalone malware that spreads across networks.",
          "Trojans: Disguised as legitimate software but execute malicious actions.",
          "Ransomware: Encrypts data and demands payment for decryption.",
          "Spyware: Stealth software that collects user data without consent.",
          "Rootkits: Deeply embedded malware that evades detection.",
        ],
      },
    ],
  },
  {
    name: "5.2 Malware Detection Techniques",
    content: [
      {
        type: "h6",
        data: "Signature-Based Detection",
      },
      {
        type: "bullet",
        data: [
          "Uses predefined malware signatures for detection.",
          "Example tools: Windows Defender, ClamAV.",
        ],
      },
      {
        type: "h6",
        data: "Sample ClamAV Scan (Linux)",
      },
      {
        type: "code",
        data: {
          language: "bash",
          code: `sudo apt install clamav -y
sudo freshclam  # Update database
clamscan -r /home/user  # Scan home directory`,
        },
      },
      {
        type: "h6",
        data: "Heuristic Analysis",
      },
      {
        type: "bullet",
        data: [
          "Identifies malware based on behavior rather than known signatures.",
          "Utilizes rule-based engines and machine learning.",
        ],
      },
      {
        type: "h6",
        data: "Behavioral Analysis",
      },
      {
        type: "bullet",
        data: [
          "Monitors real-time system activity for unusual or suspicious behavior.",
          "Example: Windows Event Viewer logs abnormal system actions.",
        ],
      },
      {
        type: "h6",
        data: "Sandbox Execution",
      },
      {
        type: "bullet",
        data: [
          "Executes suspected files in isolated environments to observe behavior.",
          "Popular tool: Cuckoo Sandbox.",
        ],
      },
      {
        type: "h6",
        data: "Cuckoo Sandbox Setup (Linux)",
      },
      {
        type: "code",
        data: {
          language: "bash",
          code: `sudo apt install python3-pip -y
pip3 install cuckoo
cuckoo init
cuckoo -d  # Start analysis in debug mode`,
        },
      },
    ],
  },
  {
    name: "5.3 Prevention Strategies",
    content: [
      {
        type: "h6",
        data: "Keeping Systems Updated",
      },
      {
        type: "bullet",
        data: [
          "Regular OS and software updates patch vulnerabilities.",
          "Enable and automate system updates when possible.",
        ],
      },
      {
        type: "h6",
        data: "Enable Auto-Updates (Windows PowerShell)",
      },
      {
        type: "code",
        data: {
          language: "powershell",
          code: `Get-WindowsUpdate
Install-WindowsUpdate -AcceptAll -AutoReboot`,
        },
      },
      {
        type: "h6",
        data: "Using Antivirus and Endpoint Security",
      },
      {
        type: "bullet",
        data: [
          "Install antivirus tools like Windows Defender, ClamAV, or Sophos.",
          "Ensure real-time protection is active.",
        ],
      },
      {
        type: "h6",
        data: "Network Security Measures",
      },
      {
        type: "bullet",
        data: [
          "Use firewalls and intrusion detection systems (IDS).",
          "Implement IP filtering and deep packet inspection.",
        ],
      },
      {
        type: "h6",
        data: "Simple Firewall Rule (Linux UFW)",
      },
      {
        type: "code",
        data: {
          language: "bash",
          code: `sudo ufw enable
sudo ufw default deny incoming
sudo ufw allow 22/tcp  # Allow SSH`,
        },
      },
      {
        type: "h6",
        data: "User Awareness & Best Practices",
      },
      {
        type: "bullet",
        data: [
          "Avoid opening unknown email attachments or clicking suspicious links.",
          "Install software only from trusted sources.",
          "Use strong passwords and enable multi-factor authentication (MFA).",
        ],
      },
    ],
  },
  {
    name: "5.4 Incident Response & Recovery",
    content: [
      {
        type: "h6",
        data: "Isolating the Infected System",
      },
      {
        type: "bullet",
        data: [
          "Disconnect the affected device from networks to stop malware spread.",
          "Boot into Safe Mode to limit background processes during troubleshooting.",
        ],
      },
      {
        type: "h6",
        data: "Scanning and Removing Malware",
      },
      {
        type: "bullet",
        data: [
          "Use antivirus tools for full system scans.",
          "Specialized tools like Malwarebytes or Windows Defender Offline Scan are effective.",
        ],
      },
      {
        type: "h6",
        data: "Windows Defender Offline Scan (PowerShell)",
      },
      {
        type: "code",
        data: {
          language: "powershell",
          code: `Start-MpWDOScan`,
        },
      },
      {
        type: "h6",
        data: "Restoring from Backups",
      },
      {
        type: "bullet",
        data: [
          "Keep regular backups both locally and on the cloud.",
          "Use backup snapshots to restore systems to a clean state.",
        ],
      },
    ],
  },
];

const tutorial3_chapters = [
  {
    name: "Windows Security Basics",
    topics: tutorial3_chapter1_windows_security_basics,
    description:
      "This chapter covers essential Windows security features, including Active Directory for identity management, Group Policies for centralized system control, and Windows Defender for antivirus protection. It provides a comprehensive overview of these critical components for securing Windows environments.",
  },
  {
    name: "Linux Security Basics",
    topics: tutorial3_chapter2_linux_security_basics,
    description:
      "This chapter covers essential Linux security concepts, including file permissions, SELinux, AppArmor, and log analysis. It explores access control mechanisms, security policies, and monitoring tools to enhance system security and integrity.",
  },
  {
    name: "Log Management and Monitoring",
    topics: tutorial3_chapter3_log_management_and_monitoring,
    description:
      "This chapter covers system log management and monitoring suspicious activity. It explores tools and techniques for tracking system activities, detecting security breaches, and enhancing security monitoring.",
  },
  {
    name: "Automation and Scripting",
    topics: tutorial3_chapter4_automation_and_scripting,
    description:
      "This chapter explores the fundamentals of automation and scripting in security, focusing on tools like PowerShell and Bash. It covers various security tasks such as log analysis, user management, firewall configuration, and automated updates, providing practical examples to enhance system security and efficiency.",
  },
  {
    name: "Malware: Detection, Prevention, and Response",
    topics: tutorial3_chapter5_malware_basics,
    description:
      "This chapter covers the fundamentals of malware, including its types and detection techniques. It also explores prevention strategies, network security measures, and incident response methods to combat malicious software.",
  },
];

const tutorial4_chapter1_Cybersecurity = [
  {
    name: "1.1 Overview",
    content: [
      {
        type: "paragraph",
        data: "Penetration testing, also known as ethical hacking, is a structured approach to identifying and mitigating security vulnerabilities in systems and networks.",
      },
    ],
  },
  {
    name: "1.2 Stages of Penetration Testing",
    content: [
      {
        type: "bullet",
        data: [
          "Planning & Reconnaissance – Define scope, gather information.",
          "Scanning & Enumeration – Identify live hosts and vulnerabilities.",
          "Exploitation – Attempt to exploit vulnerabilities.",
          "Post-Exploitation – Maintain access, privilege escalation.",
          "Reporting & Remediation – Document findings, suggest fixes.",
        ],
      },
    ],
  },
  {
    name: "1.3 Benefits of Penetration Testing",
    content: [
      {
        type: "bullet",
        data: [
          "Identifies security weaknesses",
          "Improves overall security posture",
          "Helps in regulatory compliance",
        ],
      },
    ],
  },
];
const tutorial4_chapter2_Cybersecurity = [
  {
    name: "2.1 Overview",
    content: [
      {
        type: "paragraph",
        data: "Reconnaissance is the initial phase where attackers gather information about a target.",
      },
    ],
  },
  {
    name: "2.2 Tools & Techniques",
    content: [
      {
        type: "bullet",
        data: [
          "Google Dorking – Using advanced Google search queries to find sensitive information.",
          "Maltego – A tool for OSINT (Open Source Intelligence) gathering and network mapping.",
        ],
      },
    ],
  },
  {
    name: "2.3 Example",
    content: [
      {
        type: "paragraph",
        data: "Using Google Dorking to find exposed login pages:",
      },
      {
        type: "code",
        data: {
          language: "plaintext",
          code: `intitle:"Admin Login" site:example.com`,
        },
      },
    ],
  },
  {
    name: "2.4 Benefits",
    content: [
      {
        type: "bullet",
        data: [
          "Helps in identifying exposed assets",
          "Provides insight into security misconfigurations",
        ],
      },
    ],
  },
];
const tutorial4_chapter3_Cybersecurity = [
  {
    name: "3.1 Overview",
    content: [
      {
        type: "paragraph",
        data: "This phase involves scanning systems for known vulnerabilities and attempting to exploit them.",
      },
    ],
  },
  {
    name: "3.2 Tools",
    content: [
      {
        type: "bullet",
        data: [
          "Metasploit – A powerful penetration testing framework.",
          "SQLmap – Automated SQL injection tool.",
          "Burp Suite – Web vulnerability scanner.",
        ],
      },
    ],
  },
  {
    name: "3.3 Example",
    content: [
      {
        type: "paragraph",
        data: "Scanning a target for SQL injection vulnerabilities using SQLmap:",
      },
      {
        type: "code",
        data: {
          language: "bash",
          code: `sqlmap -u "http://example.com/login.php?id=1" --dbs`,
        },
      },
    ],
  },
  {
    name: "3.4 Benefits",
    content: [
      {
        type: "bullet",
        data: ["Identifies security flaws", "Simulates real-world attacks"],
      },
    ],
  },
];
const tutorial4_chapter4_Cybersecurity = [
  {
    name: "4.1 Overview",
    content: [
      {
        type: "paragraph",
        data: "Password cracking is the process of recovering passwords from stored hashes.",
      },
    ],
  },
  {
    name: "4.2 Tools",
    content: [
      {
        type: "bullet",
        data: [
          "John the Ripper – Fast password cracker.",
          "Hashcat – GPU-accelerated password recovery tool.",
        ],
      },
    ],
  },
  {
    name: "4.3 Example",
    content: [
      {
        type: "paragraph",
        data: "Cracking a password hash using Hashcat:",
      },
      {
        type: "code",
        data: {
          language: "bash",
          code: `hashcat -m 0 -a 3 hash.txt ?a?a?a?a?a`,
        },
      },
    ],
  },
  {
    name: "4.4 Benefits",
    content: [
      {
        type: "bullet",
        data: [
          "Tests password strength",
          "Identifies weak authentication mechanisms",
        ],
      },
    ],
  },
];
const tutorial4_chapter5_Cybersecurity = [
  {
    name: "5.1 Overview",
    content: [
      {
        type: "paragraph",
        data: "Once access is gained, attackers aim to escalate privileges and maintain persistence.",
      },
    ],
  },
  {
    name: "5.2 Techniques",
    content: [
      {
        type: "bullet",
        data: [
          "Privilege Escalation – Exploiting misconfigurations to gain higher access.",
          "Persistence – Creating backdoors for continued access.",
        ],
      },
    ],
  },
  {
    name: "5.3 Example",
    content: [
      {
        type: "paragraph",
        data: "Enumerating privilege escalation opportunities in Linux:",
      },
      {
        type: "code",
        data: {
          language: "bash",
          code: `sudo -l\nfind / -perm -u=s -type f 2>/dev/null`,
        },
      },
    ],
  },
  {
    name: "5.4 Benefits",
    content: [
      {
        type: "bullet",
        data: [
          "Helps in understanding attack persistence",
          "Improves incident response capabilities",
        ],
      },
    ],
  },
  {
    name: "5.5 Conclusion",
    content: [
      {
        type: "paragraph",
        data: "Ethical hacking and penetration testing are crucial for securing IT infrastructure. By understanding reconnaissance, vulnerability scanning, exploitation, and post-exploitation techniques, security professionals can proactively safeguard systems against threats.",
      },
    ],
  },
];

const tutorial4_chapters = [
  {
    name: "Penetration Testing Fundamentals",
    topics: tutorial4_chapter1_Cybersecurity,
    description:
      "This chapter provides an introduction to penetration testing, covering its overview, the various stages involved in the process, and the benefits it offers in improving security and ensuring regulatory compliance.",
  },
  {
    name: "Reconnaissance Overview, Tools & Techniques, Example, and Benefits",
    topics: tutorial4_chapter2_Cybersecurity,
    description:
      "This chapter covers the fundamentals of reconnaissance in cybersecurity, including tools, techniques, examples, and benefits for identifying exposed assets and security misconfigurations.",
  },
  {
    name: "Scanning & Exploitation",
    topics: tutorial4_chapter3_Cybersecurity,
    description:
      "This chapter covers cybersecurity testing concepts, including an overview of vulnerability scanning, key tools like Metasploit and SQLmap, practical examples of their use, and the benefits of identifying security flaws and simulating attacks to improve system security.",
  },
  {
    name: "Password Cracking Overview, Tools, Example, and Benefits",
    topics: tutorial4_chapter4_Cybersecurity,
    description:
      "This chapter covers the fundamentals of password cracking, including essential tools like John the Ripper and Hashcat, and demonstrates how to crack password hashes. It also explores the benefits of password cracking for testing password strength and identifying vulnerabilities in authentication mechanisms.",
  },
  {
    name: "Post-Exploitation Techniques",
    topics: tutorial4_chapter5_Cybersecurity,
    description:
      "This chapter covers post-exploitation techniques in cybersecurity, including privilege escalation, persistence, and real-world examples. It emphasizes the importance of understanding these concepts for improving incident response and securing IT infrastructure.",
  },
];

const tutorial5_chapter1_CyberSerurity = [
  {
    name: "1.1 Overview",
    content: [
      {
        type: "paragraph",
        data: "Web security is essential to protect applications from vulnerabilities that could compromise user data and system integrity. Understanding HTTP, cookies, and headers is fundamental to securing web applications.",
      },
    ],
  },
  {
    name: "1.2 Key Concepts",
    content: [
      {
        type: "bullet",
        data: [
          "HTTP Protocol: The foundation of web communication, ensuring data transmission.",
          "Cookies: Store user data and session information, requiring secure handling.",
          "Headers: Control security policies, such as Content Security Policy (CSP) and Strict-Transport-Security.",
        ],
      },
    ],
  },
  {
    name: "1.3 Benefits",
    content: [
      {
        type: "bullet",
        data: [
          "Enhances web application integrity",
          "Prevents unauthorized data access",
          "Ensures secure session management",
        ],
      },
    ],
  },
];
const tutorial5_chapter2_CyberSerurity = [
  {
    name: "2.1 Overview",
    content: [
      {
        type: "paragraph",
        data: "The OWASP Top 10 is a list of the most critical web application security risks. Understanding these vulnerabilities helps developers build secure applications.",
      },
    ],
  },
  {
    name: "2.2 Key Vulnerabilities",
    content: [
      {
        type: "bullet",
        data: [
          "SQL Injection (SQLi): Exploiting database queries to gain unauthorized access.",
          "Cross-Site Scripting (XSS): Injecting malicious scripts into web pages.",
          "Cross-Site Request Forgery (CSRF): Forcing users to perform unintended actions.",
        ],
      },
    ],
  },
  {
    name: "2.3 Prevention Techniques",
    content: [
      {
        type: "bullet",
        data: [
          "Input validation and parameterized queries",
          "Secure session management",
          "Implementing Content Security Policy (CSP)",
        ],
      },
    ],
  },
];
const tutorial5_chapter3_CyberSerurity = [
  {
    name: "3.1 Overview",
    content: [
      {
        type: "paragraph",
        data: "APIs are a major attack surface; securing them is critical to prevent data breaches and unauthorized access.",
      },
    ],
  },
  {
    name: "3.2 Key Tools",
    content: [
      {
        type: "bullet",
        data: [
          "Postman: API testing and security validation.",
          "Burp Suite: Web security testing and vulnerability assessment.",
        ],
      },
    ],
  },
  {
    name: "3.3 Best Practices",
    content: [
      {
        type: "bullet",
        data: [
          "Implement authentication (OAuth, JWT)",
          "Use HTTPS and secure headers",
          "Rate limiting and API gateway protection",
        ],
      },
    ],
  },
];
const tutorial5_chapter4_CyberSerurity = [
  {
    name: "4.1 Overview",
    content: [
      {
        type: "paragraph",
        data: "Automated tools help in identifying security weaknesses in web applications.",
      },
    ],
  },
  {
    name: "4.2 Key Tools",
    content: [
      {
        type: "bullet",
        data: [
          "OWASP ZAP: Open-source web application security scanner.",
          "Burp Suite: Intercepts and manipulates HTTP requests for testing.",
        ],
      },
    ],
  },
  {
    name: "4.3 Security Testing Approaches",
    content: [
      {
        type: "bullet",
        data: [
          "Active and passive scanning",
          "Manual testing with proxy tools",
          "Automated attack simulations",
        ],
      },
    ],
  },
];
const tutorial5_chapter5_CyberSerurity = [
  {
    name: "5.1 Overview",
    content: [
      {
        type: "paragraph",
        data: "Secure coding minimizes vulnerabilities and strengthens application defenses.",
      },
    ],
  },
  {
    name: "5.2 Best Practices",
    content: [
      {
        type: "bullet",
        data: [
          "Input Validation: Prevents injection attacks.",
          "Secure Authentication: Enforces strong password policies and multi-factor authentication.",
          "Error Handling: Avoids revealing system details in error messages.",
        ],
      },
    ],
  },
  {
    name: "5.3 Code Example (Input Validation in JavaScript)",
    content: [
      {
        type: "code",
        data: {
          language: "javascript",
          code: `function validateInput(input) {
  const regex = /^[a-zA-Z0-9_]{3,20}$/;
  return regex.test(input);
}`,
        },
      },
    ],
  },
  {
    name: "5.4 Benefits",
    content: [
      {
        type: "bullet",
        data: [
          "Reduces risk of security breaches",
          "Improves overall application resilience",
          "Enhances user trust and compliance",
        ],
      },
    ],
  },
  {
    name: "5.5 Conclusion",
    content: [
      {
        type: "paragraph",
        data: "Understanding web security, mastering OWASP vulnerabilities, securing APIs, and implementing secure coding practices are essential for building robust and resilient web applications. Proper testing using tools like ZAP and Burp Suite further strengthens web security defenses.",
      },
    ],
  },
];

const tutorial5_chapters = [
  {
    name: "Fundamentals of Web Application Security",
    topics: tutorial5_chapter1_CyberSerurity,
    description:
      "This chapter covers the fundamentals of web security, including key concepts like HTTP protocol, cookies, and headers, and their importance in securing web applications. It also highlights the benefits of implementing robust security measures to protect user data and ensure system integrity.",
  },
  {
    name: "OWASP Top 10 & Web Vulnerability Prevention",
    topics: tutorial5_chapter2_CyberSerurity,
    description:
      "This chapter provides an overview of the OWASP Top 10 web application security risks, key vulnerabilities such as SQL Injection, Cross-Site Scripting, and Cross-Site Request Forgery. It also covers essential prevention techniques, including input validation, secure session management, and Content Security Policy implementation.",
  },
  {
    name: "API Security Essentials & Testing Tools",
    topics: tutorial5_chapter3_CyberSerurity,
    description:
      "This chapter covers the essential aspects of securing APIs, including key tools like Postman and Burp Suite for testing and vulnerability assessment. It also outlines best practices such as implementing authentication, using HTTPS, and rate limiting to protect against attacks and ensure API security.",
  },
  {
    name: "Cybersecurity Tools & Testing Techniques for Web",
    topics: tutorial5_chapter4_CyberSerurity,
    description:
      "This chapter covers cybersecurity tools and techniques, introducing key tools like OWASP ZAP and Burp Suite, and exploring various security testing approaches such as active/passive scanning and automated attack simulations.",
  },
  {
    name: "Secure Coding & Web Application Security",
    topics: tutorial5_chapter5_CyberSerurity,
    description:
      "This chapter covers secure coding practices, including input validation, authentication, and error handling, while emphasizing the benefits of enhanced security and application resilience. It also explores web security fundamentals, OWASP vulnerabilities, API security, and the use of testing tools to ensure robust web applications.",
  },
];

const tutorial6__chapter1_CyberSecurity = [
  {
    name: "1.1 Overview",
    content: [
      {
        type: "paragraph",
        data: "The Cyber Kill Chain is a framework developed by Lockheed Martin to understand cyber attack stages, while the Incident Response Process outlines systematic steps to mitigate security incidents.",
      },
    ],
  },
  {
    name: "1.2 Key Concepts",
    content: [
      {
        type: "bullet",
        data: [
          "Cyber Kill Chain Phases: Reconnaissance, Weaponization, Delivery, Exploitation, Installation, Command & Control, and Actions on Objectives.",
          "Incident Response Phases: Preparation, Detection & Analysis, Containment, Eradication, Recovery, and Post-Incident Review.",
        ],
      },
    ],
  },
  {
    name: "1.3 Benefits",
    content: [
      {
        type: "bullet",
        data: [
          "Enhances understanding of attack progression",
          "Strengthens organizational response to security breaches",
          "Improves threat mitigation strategies",
        ],
      },
    ],
  },
];
const tutorial6__chapter2_CyberSecurity = {
  name: "2.1 Memory Forensics & Malware Analysis",
  content: [
    {
      type: "paragraph",
      data: "Memory forensics is crucial in identifying malicious activity, while malware analysis dissects malware behavior.",
    },
    {
      type: "h6",
      data: "Key Tools & Techniques:",
    },
    {
      type: "bullet",
      data: [
        "Volatility: Open-source memory forensics framework.",
        "volatility -f memory.dmp --profile=Win7SP1x64 pslist",
        "Autopsy: Digital forensics tool for file recovery and malware analysis.",
      ],
    },
    {
      type: "h6",
      data: "Benefits:",
    },
    {
      type: "bullet",
      data: [
        "Identifies hidden malware processes",
        "Recovers artifacts from volatile memory",
        "Aids in understanding attack patterns",
      ],
    },
  ],
};
const tutorial6__chapter3_CyberSecurity = {
  name: "3.1 Disk & Network Forensics",
  content: [
    {
      type: "paragraph",
      data: "Disk forensics recovers evidence from storage media, while network forensics analyzes network traffic for suspicious activity.",
    },
    {
      type: "h6",
      data: "Key Tools & Techniques:",
    },
    {
      type: "bullet",
      data: [
        "Wireshark: Captures and analyzes network packets.",
        "tshark -r capture.pcap -Y 'http.request'",
        "FTK Imager: Captures forensic images of storage devices.",
      ],
    },
    {
      type: "h6",
      data: "Benefits: ",
    },
    {
      type: "bullet",
      data: [
        "Helps in detecting unauthorized data exfiltration",
        "Provides evidence of network intrusions",
        "Aids in digital evidence preservation",
      ],
    },
  ],
};
const tutorial6__chapter4_CyberSecurity = {
  name: "4.1 Log Analysis & Threat Intelligence",
  content: [
    {
      type: "paragraph",
      data: "Analyzing system logs helps detect security incidents, while threat intelligence provides insights into emerging threats.",
    },
    {
      type: "h6",
      data: "Key Tools & Techniques:",
    },
    {
      type: "bullet",
      data: [
        "Splunk: Analyzes and visualizes security logs.",
        "index=main sourcetype=access_combined | stats count by src_ip",
        "ELK Stack: Elasticsearch, Logstash, and Kibana for centralized log management.",
      ],
    },
    {
      type: "h6",
      data: "Benefits: ",
    },
    {
      type: "bullet",
      data: [
        "Detects anomalies in system and network logs",
        "Correlates security events for better threat detection",
        "Enhances proactive security measures",
      ],
    },
  ],
};
const tutorial6__chapter5_CyberSecurity = {
  name: "5.1 Reporting & Documentation of Security Incidents",
  content: [
    {
      type: "paragraph",
      data: "Proper documentation ensures a structured approach to forensic investigations and incident response.",
    },
    {
      type: "h6",
      data: "Best Practices:",
    },
    {
      type: "bullet",
      data: [
        "Incident Timeline: Document events in chronological order.",
        "Forensic Reports: Include evidence, analysis findings, and response actions.",
        "Compliance & Legal Considerations: Ensure adherence to cybersecurity regulations.",
      ],
    },
    {
      type: "h6",
      data: "Benefits:",
    },
    {
      type: "bullet",
      data: [
        "Strengthens legal proceedings",
        "Provides insights for future threat mitigation",
        "Enhances organizational security policies",
      ],
    },
  ],
};

const tutorial6_chapters = [
  {
    name: "Cyber Kill Chain & Incident Response",
    topics: tutorial6__chapter1_CyberSecurity,
    description:
      "This chapter introduces cybersecurity fundamentals, covering the Cyber Kill Chain and Incident Response Process. It explores their phases and benefits, such as understanding attack progression and improving threat mitigation strategies.",
  },

  {
    name: "Memory Forensics & Malware Analysis",
    topics: tutorial6__chapter2_CyberSecurity,
    description:
      "This chapter covers memory forensics and malware analysis, focusing on identifying malicious activity and understanding malware behavior. It explores key tools like Volatility and Autopsy, and highlights benefits such as identifying hidden malware, recovering memory artifacts, and understanding attack patterns.",
  },
  {
    name: "Disk & Network Forensics",
    topics: tutorial6__chapter3_CyberSecurity,
    description:
      "This chapter covers disk and network forensics, essential techniques in cybersecurity for recovering evidence from storage media and analyzing network traffic. It explores key tools like Wireshark and FTK Imager, and highlights benefits such as detecting unauthorized data exfiltration and preserving digital evidence.",
  },
  {
    name: "Log Analysis & Threat Intelligence",
    topics: tutorial6__chapter4_CyberSecurity,
    description:
      "This topic explores log analysis and threat intelligence, covering essential tools like Splunk and ELK Stack. It highlights benefits such as anomaly detection, security event correlation, and enhanced proactive security measures.",
  },
  {
    name: "Reporting & Documentation of Security Incidents",
    topics: tutorial6__chapter5_CyberSecurity,
    description:
      "This topic covers the importance of proper reporting and documentation of security incidents, including best practices for forensic investigations and incident response. It also highlights the benefits of maintaining detailed records for legal proceedings, future threat mitigation, and enhancing organizational security policies.",
  },
];

const tutorial7_chapter1_topics = {
  name: "1. Setting Up & Managing Security Operations Center (SOC)",
  content: [
    {
      type: "paragraph",
      data: "A Security Operations Center (SOC) is a centralized unit that monitors, detects, and responds to cybersecurity threats in real-time.",
    },
    {
      type: "h6",
      data: "Key Features: ",
    },
    {
      type: "bullet",
      data: [
        "24/7 Monitoring: Continuous surveillance of network traffic and security events.",
        "Incident Response: Immediate actions against detected security threats.",
        "Threat Intelligence Integration: Uses external and internal intelligence feeds for proactive defense.",
        "Compliance & Reporting: Ensures adherence to security regulations and policies.",
      ],
    },
    {
      type: "h6",
      data: "Benefits ",
    },
    {
      type: "bullet",
      data: [
        "Enhances threat detection and response time.",
        "Reduces attack surface and minimizes security risks.",
        "Provides centralized security visibility.",
      ],
    },
  ],
};

const tutorial7_chapter2_topics = {
  name: "2. Mastering SIEM Tools (Splunk, Wazuh, ELK Stack)",
  content: [
    {
      type: "paragraph",
      data: "SIEM tools aggregate, analyze, and correlate security event logs to detect and respond to security threats effectively.",
    },
    {
      type: "h6",
      data: "Key SIEM Tools: ",
    },
    {
      type: "bullet",
      data: [
        "Splunk: Advanced log analysis and real-time monitoring, AI-driven threat detection, supports custom alerting and dashboards.",
        "Wazuh: Open-source SIEM and security monitoring tool, provides file integrity monitoring and log analysis, integrates with Elastic Stack for visualization.",
        "ELK Stack (Elasticsearch, Logstash, Kibana): Centralized logging, searching, and visualization, real-time security analytics and event correlation.",
      ],
    },
    {
      type: "h6",
      data: "Benefits: ",
    },
    {
      type: "bullet",
      data: [
        "Improves security visibility.",
        "Automates threat detection.",
        "Enhances incident response capabilities.",
      ],
    },
    {
      type: "h6",
      data: "Example: Setting up Wazuh on Ubuntu ",
    },
    {
      type: "code",
      data: "curl -sO https://packages.wazuh.com/4.x/wazuh-install.sh\nsudo bash wazuh-install.sh --server",
    },
  ],
};

const tutorial7_chapter3_topics = {
  name: "3. Threat Hunting & Cyber Threat Intelligence (MITRE ATT&CK)",
  content: [
    {
      type: "paragraph",
      data: "Threat hunting proactively searches for indicators of compromise (IoCs) and vulnerabilities before an attack occurs.",
    },
    {
      type: "h6",
      data: "Techniques and Tools:  ",
    },
    {
      type: "bullet",
      data: [
        "MITRE ATT&CK Framework: Provides tactics, techniques, and procedures (TTPs) used by attackers.",
        "YARA Rules: Pattern-matching rules for malware identification.",
        "Threat Intelligence Platforms: MISP, Anomali, and OpenCTI for sharing threat information.",
      ],
    },
    {
      type: "h6",
      data: "Benefits: ",
    },
    {
      type: "bullet",
      data: [
        "Detects hidden threats proactively.",
        "Improves security posture and incident response.",
        "Reduces the impact of cyberattacks.",
      ],
    },
    {
      type: "h6",
      data: "Example: Using python to query MITRE ATT&CK API",
    },
    {
      type: "code",
      data: "import requests\nurl = 'https://cti-taxii.mitre.org/api/'\nresponse = requests.get(url)\nprint(response.json())",
    },
  ],
};

const tutorial7_chapter4_topics = {
  name: "4. Implementing Endpoint Detection & Response (EDR)",
  content: [
    {
      type: "paragraph",
      data: "EDR solutions monitor, detect, and respond to security threats at the endpoint level.",
    },
    {
      type: "h6",
      data: "Key Features: ",
    },
    {
      type: "bullet",
      data: [
        "Behavior-based Detection: Identifies unusual activities on endpoints.",
        "Threat Containment: Isolates compromised devices to prevent lateral movement.",
        "Forensic Analysis: Captures endpoint logs for investigation.",
      ],
    },
    {
      type: "h6",
      data: "Popular EDR Solution: ",
    },
    {
      type: "bullet",
      data: [
        "Microsoft Defender for Endpoint",
        "CrowdStrike Falcon",
        "SentinelOne",
      ],
    },
    {
      type: "h6",
      data: "Benefits: ",
    },
    {
      type: "bullet",
      data: [
        "Improves endpoint visibility and security.",
        "Reduces dwell time of attacks.",
        "Automates response to endpoint threats.",
      ],
    },
    {
      type: "h6",
      data: "Example: Using PowerShell to check endpoint security status ",
    },
    {
      type: "code",
      data: "Get-MpComputerStatus | Select-Object -Property *",
    },
  ],
};

const tutorial7_chapter5_topics = {
  name: "5. Real-time Log Monitoring & Alerting",
  content: [
    {
      type: "paragraph",
      data: "Real-time log monitoring detects security incidents as they occur, enabling rapid response.",
    },
    {
      type: "h6",
      data: "Techniques and Tools: ",
    },
    {
      type: "bullet",
      data: [
        "SIEM-based Alerts: Automated alerts triggered by suspicious log patterns.",
        "Custom Log Queries: Search logs for specific security events.",
        "Integration with Incident Response: Automates notifications and remediation actions.",
      ],
    },
    {
      type: "h6",
      data: "Example SIEM Query: ",
    },
    {
      type: "code",
      data: "index=security_logs | search 'failed login attempts' | stats count by user",
    },
    {
      type: "h6",
      data: "Benefits: ",
    },
    {
      type: "bullet",
      data: [
        "Early threat detection and mitigation.",
        "Reduces manual log analysis workload.",
        "Improves compliance with security regulations.",
      ],
    },
  ],
};

const tutorial7_chapters = [
  {
    name: "Setting Up & Managing Security Operations Center (SOC)",
    topics: tutorial7_chapter1_topics,
    description:
      "This chapter covers the essential aspects of setting up and managing a Security Operations Center (SOC), including its key features like 24/7 monitoring, incident response, and compliance reporting. It also highlights the benefits of a SOC, such as enhanced threat detection, reduced security risks, and centralized security visibility.",
  },
  {
    name: "Mastering SIEM Tools (Splunk, Wazuh, ELK Stack)",
    topics: tutorial7_chapter2_topics,
    description:
      "This chapter explores the essential concepts and tools for Security Information and Event Management (SIEM), focusing on Splunk, Wazuh, and the ELK Stack. It covers their functionalities, benefits, and provides a practical example of setting up Wazuh on Ubuntu.",
  },
  {
    name: "Threat Hunting & Cyber Threat Intelligence (MITRE ATT&CK)",
    topics: tutorial7_chapter3_topics,
    description:
      "This chapter covers proactive threat detection through threat hunting and cyber threat intelligence, utilizing frameworks like MITRE ATT&CK and tools such as YARA rules and threat intelligence platforms. It highlights the benefits of improved security posture and incident response, with a practical example of querying the MITRE ATT&CK API using Python.",
  },
  {
    name: "Implementing Endpoint Detection & Response (EDR)",
    topics: tutorial7_chapter4_topics,
    description:
      "This chapter covers the implementation of Endpoint Detection & Response (EDR) solutions, detailing their key features, popular tools, and benefits. It also provides a practical example of using PowerShell for endpoint security status checks.",
  },
  {
    name: "Real-time Log Monitoring & Alerting",
    topics: tutorial7_chapter5_topics,
    description:
      "This chapter covers real-time log monitoring and alerting, focusing on techniques like SIEM-based alerts, custom log queries, and incident response integration. It also highlights benefits such as early threat detection and improved compliance.",
  },
];

const tutorial8_chapter1_topics = {
  name: "1. Understanding Cloud Security Best Practices",
  content: [
    {
      type: "paragraph",
      data: "Cloud security involves implementing measures to protect cloud environments, workloads, and data. Best practices ensure confidentiality, integrity, and availability of cloud resources.",
    },
    {
      type: "h6",
      data: "Key Concepts: ",
    },
    {
      type: "bullet",
      data: [
        "AWS IAM (Identity and Access Management): Manages permissions and access controls.",
        "Security Groups: Acts as a virtual firewall for cloud instances.",
        "Shared Responsibility Model: Defines security responsibilities between the cloud provider and the user.",
        "Cloud Security Posture Management (CSPM): Identifies misconfigurations and compliance risks.",
      ],
    },
    {
      type: "h6",
      data: "Benefits: ",
    },
    {
      type: "bullet",
      data: [
        "Enhances data protection",
        "Reduces attack surface",
        "Ensures regulatory compliance",
      ],
    },
  ],
};

const tutorial8_chapter2_topics = {
  name: "2. Securing Cloud Workloads & Data",
  content: [
    {
      type: "paragraph",
      data: "Securing workloads and data in the cloud requires encryption, logging, and compliance with security standards.",
    },
    {
      type: "h6",
      data: "Key Techniques: ",
    },
    {
      type: "bullet",
      data: [
        "Data Encryption: Encrypt data at rest and in transit (e.g., AWS KMS, Azure Key Vault).",
        "Logging & Monitoring: Use CloudTrail, CloudWatch, and SIEM tools for activity tracking.",
        "Compliance Frameworks: Implement GDPR, HIPAA, and NIST standards.",
        "Zero Trust Model: Apply strict access controls and identity verification.",
      ],
    },
    {
      type: "h6",
      data: "Benefits: ",
    },
    {
      type: "bullet",
      data: [
        "Prevents unauthorized access",
        "Enhances visibility into cloud activities",
        "Supports compliance with security policies",
      ],
    },
  ],
};

const tutorial8_chapter3_topics = {
  name: "3. Implementing DevSecOps in CI/CD Pipelines",
  content: [
    {
      type: "paragraph",
      data: "DevSecOps integrates security practices into the CI/CD pipeline, ensuring secure software development and deployment.",
    },
    {
      type: "h6",
      data: "Key Tools & Techniques: ",
    },
    {
      type: "bullet",
      data: [
        "Jenkins & GitHub Actions: Automate security testing and deployment.",
        "Static & Dynamic Application Security Testing (SAST & DAST): Identify vulnerabilities early in development.",
        "Infrastructure as Code (IaC) Security: Scan Terraform and CloudFormation scripts for misconfigurations.",
        "Secrets Management: Store sensitive information securely using HashiCorp Vault or AWS Secrets Manager.",
      ],
    },
    {
      type: "h6",
      data: "Benefits: ",
    },
    {
      type: "bullet",
      data: [
        "Early vulnerability detection",
        "Streamlined security testing",
        "Improved software reliability",
      ],
    },
  ],
};

const tutorial8_chapter4_topics = {
  name: "4. Container Security & Kubernetes Hardening",
  content: [
    {
      type: "paragraph",
      data: "Securing containerized applications and Kubernetes environments is essential to prevent breaches and misconfigurations.",
    },
    {
      type: "h6",
      data: "Key Concept: ",
    },
    {
      type: "bullet",
      data: [
        "Docker Security: Implement best practices for secure image creation and runtime security.",
        "Kubernetes Hardening: Enable Role-Based Access Control (RBAC), use network policies to restrict communication, and enable audit logging and monitoring.",
        "Security Tools: Trivy (scans container images for vulnerabilities), Aqua Security (provides runtime protection and compliance enforcement).",
      ],
    },
    {
      type: "h6",
      data: "Benefits:",
    },
    {
      type: "bullet",
      data: [
        "Reduces container attack surface",
        "Protects Kubernetes clusters from threats",
        "Ensures compliance with security standards",
      ],
    },
  ],
};

const tutorial8_chapter5_topics = {
  name: "5. Identity & Access Management (IAM) Policies & Security",
  content: [
    {
      type: "paragraph",
      data: "Identity & Access Management (IAM) ensures that only authorized users and services can access cloud resources.",
    },
    {
      type: "h6",
      data: "Key Techniques: ",
    },
    {
      type: "bullet",
      data: [
        "Principle of Least Privilege (PoLP): Grant only the necessary permissions to users and services.",
        "Multi-Factor Authentication (MFA): Adds an extra layer of security for logins.",
        "Role-Based Access Control (RBAC) & Attribute-Based Access Control (ABAC): Restrict access based on user roles and attributes.",
        "Identity Federation: Use SSO (Single Sign-On) with external identity providers (Okta, Azure AD).",
      ],
    },
    {
      type: "h6",
      data: "Benefits:",
    },
    {
      type: "bullet",
      data: [
        "Prevents unauthorized access",
        "Enhances authentication security",
        "Improves user access visibility",
      ],
    },
  ],
};

const tutorial8_chapters = [
  {
    name: "Understanding Cloud Security Best Practices",
    topics: tutorial8_chapter1_topics,
    description:
      "This chapter covers cloud security best practices, including key concepts like AWS IAM, Security Groups, and the Shared Responsibility Model. It also highlights benefits such as enhanced data protection, reduced attack surface, and ensuring regulatory compliance.",
  },
  {
    name: "Securing Cloud Workloads & Data",
    topics: tutorial8_chapter2_topics,
    description:
      "This chapter covers essential strategies for securing cloud workloads and data, including encryption, logging, monitoring, and compliance frameworks. It also introduces the zero trust model and its benefits in enhancing cloud security.",
  },
  {
    name: "Implementing DevSecOps in CI/CD Pipelines",
    topics: tutorial8_chapter3_topics,
    description:
      "This topic covers the implementation of DevSecOps in CI/CD pipelines, discussing key tools and techniques such as Jenkins, GitHub Actions, SAST, DAST, and Infrastructure as Code security. It highlights benefits including early vulnerability detection, streamlined security testing, and improved software reliability.",
  },
  {
    name: "Container Security & Kubernetes Hardening",
    topics: tutorial8_chapter4_topics,
    description:
      "This chapter covers container security and Kubernetes hardening, focusing on securing containerized applications and Kubernetes environments. It explores best practices for Docker security, Kubernetes hardening measures, and the use of security tools like Trivy and Aqua Security to ensure compliance and protect against threats.",
  },
  {
    name: "Identity & Access Management (IAM) Policies & Security",
    topics: tutorial8_chapter5_topics,
    description:
      "This chapter covers Identity & Access Management (IAM) policies and security, focusing on key techniques like the Principle of Least Privilege, Multi-Factor Authentication, and Role-Based Access Control. It also explores the benefits of these security measures in preventing unauthorized access and enhancing authentication security.",
  },
];

const tutorial9_beginner_level_certifications = [
  {
    name: "CompTIA Security+",
    content: [
      {
        type: "paragraph",
        data: "CompTIA Security+ is a globally recognized certification that serves as an excellent starting point for individuals looking to break into the cybersecurity field. It covers the fundamental concepts necessary for understanding the basics of network security and risk management.",
      },
      {
        type: "h6",
        data: "Key Area: ",
      },
      {
        type: "bullet",
        data: [
          "Security Fundamentals: Learn the foundational principles of cybersecurity, including confidentiality, integrity, and availability (CIA Triad).",
          "Risk Management: Understand risk mitigation techniques, risk assessments, and how to manage security threats.",
          "Cryptography: Gain a solid understanding of encryption algorithms, hashing, and how cryptographic techniques protect data.",
          "Network Security: Covers securing networks, including firewalls, VPNs, and intrusion detection systems (IDS).",
          "Identity Management: Learn how to authenticate and authorize users using techniques such as biometrics, multi-factor authentication (MFA), and identity and access management (IAM) systems.",
          "Compliance and Governance: Covers industry regulations like GDPR, HIPAA, and PCI DSS.",
        ],
      },
      {
        type: "h6",
        data: "Ideal For",
      },
      {
        type: "paragraph",
        data: "This certification is ideal for those new to cybersecurity, helping them gain the foundational knowledge needed to pursue roles in network security, IT security, and risk management.",
      },
      {
        type: "h6",
        data: "Benefits",
      },
      {
        type: "bullet",
        data: [
          "Provides a vendor-neutral understanding of cybersecurity principles.",
          "Acts as a prerequisite for many government and corporate security roles.",
          "Recognized by organizations worldwide, increasing job prospects in the IT industry.",
        ],
      },
      {
        type: "h6",
        data: "Certification Exam",
      },
      {
        type: "paragraph",
        data: "Typically a multiple-choice exam covering the above topics. Preparation usually includes practical labs and study materials.",
      },
    ],
  },
  {
    name: "CEH (Certified Ethical Hacker)",
    content: [
      {
        type: "paragraph",
        data: "The CEH certification is offered by EC-Council and provides professionals with a thorough understanding of ethical hacking techniques. It focuses on how to ethically assess the security of computer systems and networks by identifying vulnerabilities.",
      },
      {
        type: "h6",
        data: "Key Areas: ",
      },
      {
        type: "bullet",
        data: [
          "Penetration Testing Basics: Learn how to conduct penetration tests, identifying system vulnerabilities.",
          "Reconnaissance: Study how to gather information about a target system or network using open-source intelligence (OSINT).",
          "Scanning and Enumeration: Techniques to scan and map systems, discovering network services, and identifying vulnerabilities.",
          "Exploitation: Learn the methods used by hackers to exploit system vulnerabilities.",
          "Post-Exploitation: Covers the activities performed after an attacker gains access to a system, such as maintaining access and covering their tracks.",
          "Tools: CEH also focuses on the tools used by ethical hackers, including Metasploit, Wireshark, and Nmap.",
        ],
      },
      {
        type: "h6",
        data: "Ideal For",
      },
      {
        type: "paragraph",
        data: "The CEH is ideal for individuals who want to become penetration testers or security analysts. It provides the practical knowledge and hands-on experience needed to effectively test security systems.",
      },
      {
        type: "h6",
        data: "Benefits",
      },
      {
        type: "bullet",
        data: [
          "Highly regarded in the cybersecurity industry as a credential for ethical hacking.",
          "Provides practical, hands-on knowledge of real-world hacking techniques.",
          "Open doors to roles such as penetration tester, ethical hacker, and security consultant.",
        ],
      },
      {
        type: "h6",
        data: "Certification Exam",
      },
      {
        type: "paragraph",
        data: "Includes multiple-choice questions and practical hacking scenarios that require a deep understanding of penetration testing.",
      },
    ],
  },
];

const tutorial9_intermediate_level_certifications = [
  {
    name: "OSCP (Offensive Security Certified Professional)",
    content: [
      {
        type: "paragraph",
        data: "The OSCP is a hands-on penetration testing certification offered by Offensive Security. It is one of the most highly respected certifications in the cybersecurity field, known for its challenging practical exam.",
      },
      {
        type: "h6",
        data: "Key Areas: ",
      },
      {
        type: "bullet",
        data: [
          "Penetration Testing: Involves performing hands-on penetration testing tasks against live machines and networks.",
          "Vulnerability Assessment: Learn how to assess systems for vulnerabilities and plan effective exploits.",
          "Ethical Hacking: OSCP emphasizes ethical hacking and requires professionals to conduct security assessments in an ethical and controlled manner.",
          "Exploit Development: Learn how to create and modify exploits to compromise systems and services.",
        ],
      },
      {
        type: "h6",
        data: "Ideal For",
      },
      {
        type: "paragraph",
        data: "OSCP is ideal for cybersecurity professionals looking to specialize in penetration testing and vulnerability assessment. It is a challenging and practical certification that demonstrates your ability to attack and defend systems effectively.",
      },
      {
        type: "h6",
        data: "Benefits",
      },
      {
        type: "bullet",
        data: [
          "Demonstrates advanced penetration testing skills, valued by employers in red team and ethical hacking roles.",
          "Provides hands-on experience with real-world hacking scenarios.",
          "Highly regarded for those pursuing a career in offensive security, vulnerability assessment, or penetration testing.",
        ],
      },
      {
        type: "h6",
        data: "Certification Exam",
      },
      {
        type: "paragraph",
        data: "The exam involves compromising several live machines in a 24-hour period, providing a rigorous test of penetration testing skills.",
      },
    ],
  },
  {
    name: "GIAC (GSEC, GPEN, GCIH)",
    content: [
      {
        type: "paragraph",
        data: "GIAC offers multiple certifications that cover various areas of cybersecurity, including security essentials, penetration testing, and incident handling. These certifications are offered by the Global Information Assurance Certification (GIAC) and are highly respected in the industry.",
      },
      {
        type: "h6",
        data: "Key Areas:",
      },
      {
        type: "bullet",
        data: [
          "GSEC (GIAC Security Essentials): Focuses on general cybersecurity skills, including network security, access control, and basic security practices.",
          "GPEN (GIAC Penetration Tester): Concentrates on advanced penetration testing techniques, including web application testing, network penetration, and exploit development.",
          "GCIH (GIAC Certified Incident Handler): Provides expertise in identifying, managing, and responding to cybersecurity incidents.",
        ],
      },
      {
        type: "h6",
        data: "Ideal For",
      },
      {
        type: "paragraph",
        data: "GIAC certifications are ideal for professionals looking to build a specialized career in cybersecurity. GSEC is good for beginners, while GPEN and GCIH are suitable for those with more experience who wish to advance their skills.",
      },
      {
        type: "h6",
        data: "Benefits",
      },
      {
        type: "bullet",
        data: [
          "GIAC certifications are highly regarded for validating deep technical expertise in specialized cybersecurity domains.",
          "Offers a broad understanding of the cybersecurity field, allowing professionals to focus on specific areas such as penetration testing or incident handling.",
          "Widely recognized and trusted by organizations across the globe.",
        ],
      },
      {
        type: "h6",
        data: "Certification Exam",
      },
      {
        type: "paragraph",
        data: "GIAC exams typically consist of multiple-choice questions and practical assessments, depending on the certification.",
      },
    ],
  },
];

const tutorial9_networking_security_topics = [
  {
    name: "CISSP (Certified Information Systems Security Professional)",
    content: [
      {
        type: "paragraph",
        data: "The CISSP certification, offered by (ISC)², is one of the most prestigious certifications in the cybersecurity field. It is designed for experienced professionals who want to demonstrate their deep knowledge of security management, operations, and architecture.",
      },
      {
        type: "h6",
        data: "Key Areas: ",
      },
      {
        type: "bullet",
        data: [
          "Security Architecture: Learn how to design secure systems and networks, applying security principles in system architecture.",
          "Risk Management: Understand the importance of risk management processes and strategies for assessing and mitigating risks.",
          "Security Operations: Learn how to manage and operate security programs, including security monitoring and incident response.",
          "Governance and Compliance: Study how to develop and enforce security policies, ensuring that systems comply with regulatory and governance requirements.",
          "Cryptography: Deepen your knowledge of encryption algorithms, key management, and cryptographic protocols.",
        ],
      },
      {
        type: "h6",
        data: "Ideal For",
      },
      {
        type: "paragraph",
        data: "CISM is perfect for individuals pursuing careers in security management and IT auditing, particularly those in leadership roles.",
      },
      {
        type: "h6",
        data: "Ideal For: ",
      },
      {
        type: "paragraph",
        data: "CISSP is ideal for senior security professionals who are involved in strategic decision-making and security leadership. It is required for many high-level roles such as Chief Information Security Officer (CISO), security manager, and security architect.",
      },
      {
        type: "h6",
        data: "Benefits:",
      },
      {
        type: "bullet",
        data: [
          "One of the most respected certifications for cybersecurity professionals.	",
          "Provides expertise in security management, strategy, and governance.",
          "Often a requirement for senior security roles in large organizations.",
        ],
      },
      {
        type: "h6",
        data: "Certification Exam Details",
      },
      {
        type: "paragraph",
        data: "The CISSP exam is a comprehensive, multiple-choice exam that tests knowledge across all eight domains of the certification.",
      },
    ],
  },
  {
    name: "CISM (Certified Information Security Manager)",
    content: [
      {
        type: "paragraph",
        data: "CISM, offered by ISACA, is a certification aimed at information security management professionals. It focuses on security governance, risk management, and incident response strategies.",
      },
      {
        type: "h6",
        data: "Key Areas: ",
      },
      {
        type: "bullet",
        data: [
          "Information Security Governance: Learn how to manage security programs and align them with business objectives.",
          "Risk Management: Develop strategies for identifying, assessing, and managing risks in an organization’s IT infrastructure.",
          "Incident Management: Learn how to detect, respond to, and recover from cybersecurity incidents.",
          "Compliance and Legal: Understand the regulatory requirements for information security and how to maintain compliance.",
        ],
      },
      {
        type: "h6",
        data: "Ideal For",
      },
      {
        type: "paragraph",
        data: "CISM is perfect for individuals pursuing careers in security management and IT auditing, particularly those in leadership roles.",
      },
      {
        type: "h6",
        data: "Benefits:",
      },
      {
        type: "bullet",
        data: [
          "	Provides a strong foundation in security governance and risk management.",
          "Enhances career prospects for those looking to advance into management or leadership roles.",
          "	Highly recognized certification in the field of information security management.",
        ],
      },
      {
        type: "h6",
        data: "Certification Exam Details",
      },
      {
        type: "paragraph",
        data: "The CISM exam consists of multiple-choice questions, focusing on four key areas: governance, risk management, incident response, and program development.",
      },
    ],
  },
];

const tutorial9_chapters = [
  {
    name: "CompTIA Security+, CEH (Certified Ethical Hacker)",
    topics: tutorial9_beginner_level_certifications,
    description:
      "This chapter covers beginner-level cybersecurity certifications, focusing on foundational knowledge with CompTIA Security+ and ethical hacking techniques with CEH. It provides pathways for those new to cybersecurity and aspiring penetration testers or security analysts.",
  },
  {
    name: "OSCP & GIAC",
    topics: tutorial9_intermediate_level_certifications,
    description:
      "This chapter covers intermediate-level cybersecurity certifications, including OSCP for penetration testing and GIAC certifications such as GSEC, GPEN, and GCIH, which focus on security essentials, penetration testing, and incident handling. These certifications are highly regarded for validating specialized skills in cybersecurity domains, offering practical experience and advanced expertise for professionals seeking to enhance their careers in the field.",
  },
  {
    name: "CISSP (Certified Information Systems Security Professional), CISM (Certified Information Security Manager)",
    topics: tutorial9_networking_security_topics,
    description:
      "This chapter explores two prominent cybersecurity certifications: CISSP and CISM. It covers key areas such as security architecture, risk management, governance, and incident response, while highlighting the importance of these certifications for career advancement in cybersecurity roles.",
  },
];

export const CyberSecurityTutorials = [
  {
    title: "Introduction to Cybersecurity",
    description:
      "Explore essential cybersecurity concepts, including operating systems security, networking fundamentals, scripting for security tasks, web communication protocols, and cloud security principles. This section provides a comprehensive overview of the tools and practices necessary for safeguarding digital environments.",
    thumbnail:
      "https://wdxmgntwmtjnelhaaxhj.supabase.co/storage/v1/object/public/skillCraft%20Image/CourseImages/CyberSecurity1.png",
    category: "Cyber Security",
    chapters: tutorial1_chapters,
    quiz: [
      {
        question: "What is the primary goal of cybersecurity?",
        options: [
          "To develop new software applications",
          "To protect systems and data from cyber threats",
          "To increase internet speed",
          "To build network hardware",
        ],
        answer: "To protect systems and data from cyber threats",
      },
      {
        question: "What is a common type of cyber attack?",
        options: [
          "Phishing",
          "Data compression",
          "File copying",
          "Network installation",
        ],
        answer: "Phishing",
      },
      {
        question: "What does a firewall do?",
        options: [
          "Protects a network by filtering incoming and outgoing traffic",
          "Increases the speed of a computer",
          "Encrypts all stored files",
          "Detects hardware failures",
        ],
        answer: "Protects a network by filtering incoming and outgoing traffic",
      },
      {
        question: "What is multi-factor authentication (MFA)?",
        options: [
          "A single password authentication system",
          "A security measure requiring multiple forms of verification",
          "A method of storing backup data",
          "A system for compressing network traffic",
        ],
        answer: "A security measure requiring multiple forms of verification",
      },
      {
        question: "What does VPN stand for?",
        options: [
          "Virtual Private Network",
          "Verified Protection Node",
          "Virtual Protocol Name",
          "Variable Port Number",
        ],
        answer: "Virtual Private Network",
      },
    ],
  },
  {
    title: "Network Security Fundamentals",
    description:
      "Understand networking fundamentals, security tools, and analysis techniques. Learn to address wireless security threats and design robust network architectures for secure communication.",
    thumbnail:
      "https://wdxmgntwmtjnelhaaxhj.supabase.co/storage/v1/object/public/skillCraft%20Image/CourseImages/CyberSecurity2.png",
    category: "Cyber Security",
    chapters: tutorial2_chapters,
    quiz: [
      {
        question:
          "What is the primary function of an Intrusion Detection System (IDS)?",
        options: [
          "To physically block cyber threats",
          "To detect and alert on suspicious network activity",
          "To repair broken network cables",
          "To store user credentials",
        ],
        answer: "To detect and alert on suspicious network activity",
      },
      {
        question: "What is an example of a strong password practice?",
        options: [
          "Using 'password123' as a password",
          "Using a mix of letters, numbers, and symbols",
          "Using the same password for all accounts",
          "Writing the password on a sticky note",
        ],
        answer: "Using a mix of letters, numbers, and symbols",
      },
      {
        question: "What does SSL/TLS encryption do?",
        options: [
          "Protects data during transmission over a network",
          "Speeds up website loading times",
          "Compresses large files",
          "Stores login credentials",
        ],
        answer: "Protects data during transmission over a network",
      },
      {
        question: "What is the role of a VPN in network security?",
        options: [
          "Encrypts internet connections to protect privacy",
          "Increases download speeds",
          "Replaces a firewall",
          "Scans for computer viruses",
        ],
        answer: "Encrypts internet connections to protect privacy",
      },
      {
        question:
          "Which type of attack involves overwhelming a network with traffic?",
        options: [
          "DDoS attack",
          "Phishing attack",
          "SQL injection",
          "Spyware infection",
        ],
        answer: "DDoS attack",
      },
    ],
  },
  {
    title: "Comprehensive System Security Fundamentals",
    description:
      "Explore the fundamentals of system security across Windows and Linux, including essential tools and techniques for system protection, monitoring, and incident response. Learn about log management, automation scripting, and strategies for detecting, preventing, and responding to malware threats.",
    thumbnail:
      "https://wdxmgntwmtjnelhaaxhj.supabase.co/storage/v1/object/public/skillCraft%20Image/CourseImages/CyberSecurity3.png",
    category: "Cyber Security",
    chapters: tutorial3_chapters,
    quiz: [
      {
        question: "What is malware?",
        options: [
          "A type of hardware used for security",
          "A malicious software designed to harm systems",
          "A cybersecurity best practice",
          "A secure encryption method",
        ],
        answer: "A malicious software designed to harm systems",
      },
      {
        question: "What is phishing?",
        options: [
          "A cyber attack that tricks users into revealing personal information",
          "A method of securing emails",
          "A type of firewall",
          "A secure authentication process",
        ],
        answer:
          "A cyber attack that tricks users into revealing personal information",
      },
      {
        question: "What is ransomware?",
        options: [
          "A type of malware that encrypts files and demands payment",
          "A software update to improve security",
          "A type of secure network protocol",
          "A method of securing passwords",
        ],
        answer: "A type of malware that encrypts files and demands payment",
      },
      {
        question: "What is a botnet?",
        options: [
          "A network of infected computers controlled by an attacker",
          "A secure method of online communication",
          "A software used to clean malware",
          "A cybersecurity certification",
        ],
        answer: "A network of infected computers controlled by an attacker",
      },
      {
        question: "What is social engineering in cybersecurity?",
        options: [
          "Manipulating people into revealing confidential information",
          "Building security software",
          "Encrypting sensitive data",
          "Setting up firewalls",
        ],
        answer: "Manipulating people into revealing confidential information",
      },
    ],
  },
  {
    title: "Penetration Testing Fundamentals",
    description:
      "This section covers the fundamentals of penetration testing, including reconnaissance, scanning, exploitation, and post-exploitation techniques. It explores essential tools and methods for identifying security flaws, testing password strength, and improving system security through simulated attacks and incident response strategies.",
    thumbnail:
      "https://wdxmgntwmtjnelhaaxhj.supabase.co/storage/v1/object/public/skillCraft%20Image/CourseImages/CyberSecurity4.png",
    category: "Cyber Security",
    chapters: tutorial4_chapters,
    quiz: [
      {
        question: "What is ethical hacking?",
        options: [
          "Hacking with permission to find security weaknesses",
          "Hacking to steal data",
          "A type of malware attack",
          "A method of securing passwords",
        ],
        answer: "Hacking with permission to find security weaknesses",
      },
      {
        question: "What is penetration testing?",
        options: [
          "Simulating cyber attacks to identify vulnerabilities",
          "A type of firewall",
          "Encrypting files for protection",
          "Creating complex passwords",
        ],
        answer: "Simulating cyber attacks to identify vulnerabilities",
      },
      {
        question: "What is a common tool used in penetration testing?",
        options: [
          "Metasploit",
          "Microsoft Word",
          "VLC Media Player",
          "Adobe Photoshop",
        ],
        answer: "Metasploit",
      },
      {
        question: "What is the main goal of an ethical hacker?",
        options: [
          "To improve security by identifying weaknesses",
          "To steal confidential data",
          "To disable firewalls",
          "To spread malware",
        ],
        answer: "To improve security by identifying weaknesses",
      },
      {
        question: "Which of the following is an ethical hacking certification?",
        options: [
          "CEH (Certified Ethical Hacker)",
          "PMP",
          "AWS Certified Developer",
          "CCNA",
        ],
        answer: "CEH (Certified Ethical Hacker)",
      },
    ],
  },
  {
    title: "Introduction to Web Application Security",
    description:
      "Understand the fundamentals of web application security, including the OWASP Top 10 vulnerabilities and API security best practices. Learn about essential cybersecurity tools, testing techniques, and secure coding practices to build robust and secure web applications.",
    thumbnail:
      "https://wdxmgntwmtjnelhaaxhj.supabase.co/storage/v1/object/public/skillCraft%20Image/CourseImages/CyberSecurity5.png",
    category: "Cyber Security",
    chapters: tutorial5_chapters,
    quiz: [
      {
        question: "What is encryption?",
        options: [
          "Converting data into a secure format to prevent unauthorized access",
          "Deleting unnecessary files",
          "Scanning for viruses",
          "Compressing large files",
        ],
        answer:
          "Converting data into a secure format to prevent unauthorized access",
      },
      {
        question: "What is the purpose of hashing?",
        options: [
          "To ensure data integrity",
          "To encrypt and decrypt emails",
          "To store large amounts of data",
          "To scan networks for threats",
        ],
        answer: "To ensure data integrity",
      },
      {
        question:
          "What type of encryption uses the same key for both encryption and decryption?",
        options: [
          "Symmetric encryption",
          "Asymmetric encryption",
          "Hashing",
          "Digital signatures",
        ],
        answer: "Symmetric encryption",
      },
      {
        question: "What is a digital signature used for?",
        options: [
          "To verify the authenticity of a message or document",
          "To encrypt passwords",
          "To increase internet speeds",
          "To store backup data",
        ],
        answer: "To verify the authenticity of a message or document",
      },
      {
        question: "What is the advantage of asymmetric encryption?",
        options: [
          "Uses separate keys for encryption and decryption, enhancing security",
          "Requires fewer computational resources",
          "Works only on small data files",
          "Encrypts data permanently",
        ],
        answer:
          "Uses separate keys for encryption and decryption, enhancing security",
      },
    ],
  },
  {
    title: "Cybersecurity Investigations and Incident Response",
    description:
      "Understand the Cyber Kill Chain, incident response processes, memory and disk forensics, network analysis, log analysis, and threat intelligence. Learn to identify malicious activities and properly document security incidents.",
    thumbnail:
      "https://wdxmgntwmtjnelhaaxhj.supabase.co/storage/v1/object/public/skillCraft%20Image/CourseImages/CyberSecurity6.png",
    category: "Cyber Security",
    chapters: tutorial6_chapters,
    quiz: [
      {
        question: "What is the first step in incident response?",
        options: [
          "Erasing logs",
          "Identifying the incident",
          "Reporting the issue",
          "Restoring the system",
        ],
        answer: "Identifying the incident",
      },
      {
        question: "What tool is commonly used in digital forensics?",
        options: ["Autopsy", "Nmap", "Wireshark", "Aircrack-ng"],
        answer: "Autopsy",
      },
      {
        question: "What is the purpose of a forensic image?",
        options: [
          "To delete evidence",
          "To create an exact copy of a storage device",
          "To encrypt data",
          "To speed up forensic analysis",
        ],
        answer: "To create an exact copy of a storage device",
      },
      {
        question: "What is chain of custody in forensics?",
        options: [
          "The process of collecting and preserving evidence",
          "A list of known cybercriminals",
          "A password management technique",
          "A security policy",
        ],
        answer: "The process of collecting and preserving evidence",
      },
      {
        question: "Which of these helps in malware analysis?",
        options: [
          "Sandboxing",
          "Disabling antivirus",
          "Formatting hard drives",
          "Avoiding updates",
        ],
        answer: "Sandboxing",
      },
    ],
  },
  {
    title:
      "Advanced Security Operations: SIEM, Threat Intelligence, EDR, and Log Monitoring",
    description:
      "Learn how to set up and manage a Security Operations Center (SOC), master SIEM tools like Splunk and ELK Stack, implement EDR solutions, and conduct threat hunting using MITRE ATT&CK. This section covers real-time log monitoring, incident response, and improving overall security posture.",
    thumbnail:
      "https://wdxmgntwmtjnelhaaxhj.supabase.co/storage/v1/object/public/skillCraft%20Image/CourseImages/CyberSecurity7.png",
    category: "Cyber Security",
    chapters: tutorial7_chapters,
    quiz: [
      {
        question: "What is the primary purpose of cryptography?",
        options: [
          "Encrypting files only",
          "Protecting data from unauthorized access",
          "Speeding up internet connections",
          "None of the above",
        ],
        answer: "Protecting data from unauthorized access",
      },
      {
        question: "Which encryption method is used in HTTPS?",
        options: ["AES", "RSA", "SHA-256", "MD5"],
        answer: "RSA",
      },
      {
        question: "What does hashing do?",
        options: [
          "Encrypts data",
          "Converts data into a fixed-length string",
          "Compresses files",
          "Hides IP addresses",
        ],
        answer: "Converts data into a fixed-length string",
      },
      {
        question: "Which algorithm is used in digital signatures?",
        options: ["DES", "RSA", "Blowfish", "MD5"],
        answer: "RSA",
      },
      {
        question: "What is a common use of public-key cryptography?",
        options: [
          "Secure login authentication",
          "Encrypting entire hard drives",
          "Hiding malware",
          "None of the above",
        ],
        answer: "Secure login authentication",
      },
    ],
  },
  {
    title:
      "Mastering Cloud Security: Best Practices, DevSecOps, and Compliance",
    description:
      "Master cloud security with best practices, DevSecOps, and compliance. Covering IAM, encryption, workload security, container hardening, and zero trust models.",
    thumbnail:
      "https://wdxmgntwmtjnelhaaxhj.supabase.co/storage/v1/object/public/skillCraft%20Image/CourseImages/CyberSecurity8.png",
    category: "Cyber Security",
    chapters: tutorial8_chapters,
    quiz: [
      {
        question: "What is the biggest security concern in cloud computing?",
        options: [
          "Internet speed",
          "Data breaches",
          "Server cooling",
          "Hardware failure",
        ],
        answer: "Data breaches",
      },
      {
        question: "What does IAM stand for in cloud security?",
        options: [
          "Internet Access Module",
          "Identity and Access Management",
          "Information Access Method",
          "Internal Application Monitoring",
        ],
        answer: "Identity and Access Management",
      },
      {
        question:
          "Which cloud service model provides full control over virtual machines?",
        options: ["SaaS", "PaaS", "IaaS", "DaaS"],
        answer: "IaaS",
      },
      {
        question: "What is multi-tenancy in cloud computing?",
        options: [
          "A security vulnerability",
          "A method to share resources among multiple users",
          "A type of encryption",
          "A firewall mechanism",
        ],
        answer: "A method to share resources among multiple users",
      },
      {
        question: "Which of the following helps secure cloud applications?",
        options: [
          "MFA (Multi-Factor Authentication)",
          "Weak passwords",
          "Open database access",
          "Disabling logs",
        ],
        answer: "MFA (Multi-Factor Authentication)",
      },
    ],
  },
  {
    title: "Cybersecurity Certifications: From Beginner to Advanced",
    description:
      "This section covers cybersecurity certifications from beginner to advanced levels, including CompTIA Security+, CEH, OSCP, GIAC, CISSP, and CISM. It provides pathways for those new to cybersecurity and advanced expertise for career growth in the field.",
    thumbnail:
      "https://wdxmgntwmtjnelhaaxhj.supabase.co/storage/v1/object/public/skillCraft%20Image/CourseImages/CyberSecurity9.png",
    category: "Cyber Security",
    chapters: tutorial9_chapters,
    quiz: [
      {
        question: "What does GDPR stand for?",
        options: [
          "General Data Protection Regulation",
          "Global Digital Privacy Rights",
          "Government Data Privacy Rules",
          "General Digital Protection Review",
        ],
        answer: "General Data Protection Regulation",
      },
      {
        question: "Which standard is used for information security management?",
        options: ["ISO 27001", "PCI DSS", "HIPAA", "NIST"],
        answer: "ISO 27001",
      },
      {
        question: "What is the goal of risk assessment?",
        options: [
          "To eliminate all security risks",
          "To identify and mitigate potential threats",
          "To monitor internet traffic",
          "To block all external connections",
        ],
        answer: "To identify and mitigate potential threats",
      },
      {
        question: "Which of the following is a common cybersecurity framework?",
        options: ["NIST", "GDPR", "WHO", "None of the above"],
        answer: "NIST",
      },
      {
        question: "What is an acceptable use policy (AUP)?",
        options: [
          "A guideline on how IT resources should be used",
          "A type of encryption protocol",
          "A firewall rule",
          "A password policy",
        ],
        answer: "A guideline on how IT resources should be used",
      },
    ],
  },
];

export const CyberSecurityCourse = {
  title: "Cyber Security",
  description:
    "This comprehensive cybersecurity course is designed to build both foundational and advanced skills essential for protecting digital systems and networks. It begins with core concepts in system and network security, operating systems protection, and cloud security fundamentals. Learners will delve into hands-on practices like penetration testing, secure coding, and defending against the OWASP Top 10 vulnerabilities. The course also explores the critical areas of incident response, forensics, and threat intelligence through real-world simulations and log analysis. As students progress, they’ll gain expertise in advanced security operations such as SIEM, EDR, and threat hunting, and develop a deep understanding of cloud security practices including IAM, DevSecOps, and compliance. Finally, the course provides a roadmap to top cybersecurity certifications like Security+, CEH, OSCP, and CISSP, helping learners at any level advance their careers in the cybersecurity domain.",
  thumbnail:
    "https://wdxmgntwmtjnelhaaxhj.supabase.co/storage/v1/object/public/skillCraft%20Image/CourseImages/CyberSecurity.png",
  category: "Cyber Security",
  path: [],
  tutorials: CyberSecurityTutorials,
};
