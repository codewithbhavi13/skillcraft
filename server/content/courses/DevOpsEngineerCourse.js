const tutorial1_chapter1_topics = [
  {
    name: "Linux Basics",
    content: [
      {
        type: "paragraph",
        data: "Linux is a multi-user, multitasking operating system that forms the backbone of most servers used in DevOps environments. Understanding Linux means familiarizing yourself with basic concepts like:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "File Systems",
            body: "Learn how Linux manages files using hierarchical file systems. Understand directories like /etc, /bin, /var, and /home and their significance.",
          },
          {
            title: "Users and Permissions",
            body: "Learn about the Linux user model. Understand how users and groups interact, how to manage permissions (r, w, x), and the role of file ownership.",
          },
          {
            title: "Package Management",
            body: "Linux distributions manage software installations using package managers like apt (for Ubuntu/Debian) or yum (for CentOS/Fedora). Learn how to install, update, and remove software efficiently.",
          },
        ],
      },
    ],
  },
  {
    name: "Linux Command Line",
    content: [
      {
        type: "paragraph",
        data: "The command line is a powerful tool that allows you to interact with the OS. DevOps engineers use the command line for:",
      },
      {
        type: "bullet",
        data: [
          "Navigating the filesystem using commands like cd, ls, cp, mv, and rm.",
          "Searching and filtering files using tools like grep for finding content in files, and find for locating files within the filesystem.",
          "System monitoring with commands like top for processes, df for disk space, and ps for checking running processes.",
        ],
      },
    ],
  },
  {
    name: "Shell Scripting",
    content: [
      {
        type: "paragraph",
        data: "Shell scripting is essential for automating tasks, making your workflow more efficient. Here's a deeper dive:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Variables",
            body: "Learn how to declare and use variables in bash scripts.",
          },
          {
            title: "Control Structures",
            body: "Learn conditional statements (if, else, elif) and looping constructs (for, while, until) to create logical workflows.",
          },
          {
            title: "Functions",
            body: "Functions help organize and reuse code, making your scripts cleaner and more maintainable.",
          },
          {
            title: "Best Practices",
            body: "Writing clear, maintainable, and efficient shell scripts, including how to debug, handle errors, and use comments.",
          },
        ],
      },
    ],
  },
  {
    name: "Key Tools",
    content: [
      {
        type: "paragraph",
        data: "Familiarity with tools like:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "curl",
            body: " For making network requests and interacting with REST APIs.",
          },
          {
            title: "awk and sed",
            body: "For powerful text processing.",
          },
          {
            title: "ssh",
            body: "Securely access remote servers.  ",
          },
        ],
      },
    ],
  },
];
const tutorial1_chapter2_topics = [
  {
    name: "TCP/IP Protocols",
    content: [
      {
        type: "paragraph",
        data: "The Transmission Control Protocol (TCP) and Internet Protocol (IP) are the foundational communication protocols of the internet. Learn how these protocols break down and reassemble packets for efficient communication over a network. Key concepts include:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "IP Addressing",
            body: "Understanding IPv4 vs IPv6, private vs public IPs, and how subnetting works.",
          },
          {
            title: "Ports",
            body: "Learning about port numbers and their associated services (e.g., HTTP runs on port 80, HTTPS on 443, etc.)",
          },
          {
            title: "Pa,ckets",
            body: " How data is broken into packets for transmission, and how TCP ensures that packets are delivered reliably.",
          },
        ],
      },
    ],
  },
  {
    name: "DNS (Domain Name System)",
    content: [
      {
        type: "paragraph",
        data: "The DNS converts human-readable domain names (like www.example.com) into machine-readable IP addresses (like 192.0.2.1). ",
      },
      {
        type: "paragraph",
        data: "Key concepts:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Name Resolution",
            body: "Understand how DNS resolution works by querying DNS servers for an IP address corresponding to a domain name.",
          },
          {
            title: "DNS Records",
            body: "Learn about different DNS record types like A (Address), CNAME (Canonical Name), and MX (Mail Exchanger).",
          },
        ],
      },
    ],
  },
  {
    name: "Firewalls & VPNs",
    content: [
      {
        type: "paragraph",
        data: "Firewalls protect networks by controlling incoming and outgoing network traffic based on security rules. Learn how to:",
      },
      {
        type: "bullet",
        data: [
          "Configure firewall rules to block or allow traffic based on IP address, port, or protocol.",
          "Implement security groups in cloud environments (e.g., AWS security groups).",
        ],
      },
      {
        type: "paragraph",
        data: "VPNs (Virtual Private Networks) help secure internet traffic, providing encryption for communication between devices across untrusted networks. Key points to cover:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "VPN Types",
            body: "Site-to-site vs client-to-site.",
          },
          {
            title: "Protocols",
            body: "PPTP, L2TP, OpenVPN, and IPsec.",
          },
        ],
      },
    ],
  },
  {
    name: "SSH (Secure Shell)",
    content: [
      {
        type: "paragraph",
        data: "SSH is a protocol that allows secure access to remote systems. DevOps engineers use it to interact with remote servers securely:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Key-based Authentication",
            body: "Set up SSH keys for secure login, avoiding the need for passwords.",
          },
          {
            title: "SSH Tunneling",
            body: "Set up SSH keys for secure login, avoiding the need for passwords.",
          },
        ],
      },
    ],
  },
];

const tutorial1_chapter3_topics = [
  {
    name: "Python",
    content: [
      {
        type: "paragraph",
        data: "Python is widely used in the DevOps world due to its simplicity and versatility. In this chapter, you'll learn:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Automation",
            body: "Write Python scripts to automate repetitive tasks, such as backups, database migrations, or server configuration.",
          },
          {
            title: "APIs",
            body: "Write Python scripts to automate repetitive tasks, such as backups, database migrations, or server configuration.",
          },
          {
            title: "Libraries",
            body: "Use libraries like requests (for HTTP requests), paramiko (for SSH operations), and os (for interacting with the system).",
          },
        ],
      },
    ],
  },
  {
    name: "Bash",
    content: [
      {
        type: "paragraph",
        data: "As the default shell on many Linux systems, Bash scripting is an essential skill for DevOps engineers:",
      },
      {
        type: "bullet",
        data: [
          "Write simple yet powerful scripts to automate tasks, manage configurations, and deploy software.",
          "Learn how to handle input/output, use loops and conditionals, and manage system processes.",
        ],
      },
    ],
  },
  {
    name: "Go (Golang)",
    content: [
      {
        type: "paragraph",
        data: "Go, developed by Google, is gaining popularity in the DevOps world for its high performance and support for concurrent operations. Here’s why Go is useful:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Concurrency",
            body: " Go’s goroutines and channels provide a simple way to handle concurrent tasks, making it ideal for building scalable systems.",
          },
          {
            title: "Performance",
            body: " Go compiles to machine code, ensuring fast execution, which is crucial for DevOps tools and services.",
          },
          {
            title: "Building Tools",
            body: "Many DevOps tools (e.g., Docker, Kubernetes) are written in Go, making it a valuable language to learn.",
          },
        ],
      },
    ],
  },
];

const tutorial2_chapter1_topics = [
  {
    name: "Introduction to Git",
    content: [
      {
        type: "paragraph",
        data: "Git is a distributed version control system that allows teams to track changes, revert to previous stages, and branch and merge code efficiently. It works locally on your machine and can sync changes to remote repositories.",
      },
      {
        type: "h3",
        data: "Why Use Git?",
      },
      {
        type: "bullet",
        data: [
          "Track changes to files.",
          "Collaborate with others without overwriting work.",
          "Roll back changes and revert to older versions of files.",
          "Merge changes from multiple contributors.",
        ],
      },
      {
        type: "h3",
        data: "Git Terminology:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Repository (Repo)",
            body: "A storage space where your project resides, either locally or remotely.",
          },
          {
            title: "Commit",
            body: "A snapshot of your code at a particular point in time.",
          },
          {
            title: "Clone",
            body: "A copy of a repository from a remote server to your local machine.",
          },
          {
            title: "Push",
            body: "Upload changes from your local machine to a remote repository.",
          },
          {
            title: "Pull",
            body: "Download the latest changes from a remote repository to your local machine.",
          },
          {
            title: "Branch",
            body: "A separate line of development in Git that allows you to work on different features independently.",
          },
        ],
      },
    ],
  },
  {
    name: "GitHub, GitLab, and Bitbucket",
    content: [
      {
        type: "paragraph",
        data: "These are popular platforms that use Git for hosting repositories remotely. They also add additional features like issue tracking, pull requests, CI/CD integration, and collaboration tools.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "GitHub",
            body: "Focuses on open-source projects and offers powerful collaboration features.",
          },
          {
            title: "GitLab",
            body: "Similar to GitHub but allows private repositories for free, and has integrated CI/CD.",
          },
          {
            title: "Bitbucket",
            body: "Known for supporting both Git and Mercurial, and integrates well with Jira.",
          },
        ],
      },
    ],
  },
];

const tutorial2_chapter2_topics = [
  {
    name: "Branching",
    content: [
      {
        type: "paragraph",
        data: "Branching in Git allows you to diverge from the main project line (master or main) and work on something independently without affecting the main codebase.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Creating a Branch",
            body: "Use 'git checkout -b new-feature' to create a new branch called new-feature and switch to it.",
          },
          {
            title: "List all Branches",
            body: "Use 'git branch' to see all branches in your repository.",
          },
          {
            title: "Switching between Branches",
            body: "Use 'git checkout branch-name' to switch to a different branch.",
          },
        ],
      },
    ],
  },
  {
    name: "Merging",
    content: [
      {
        type: "paragraph",
        data: "Merging combines two branches together. If you've been working on a feature in a separate branch and want to bring those changes into the main branch, you merge the branches.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Merge a Branch into the Main Branch",
            body: "Use 'git checkout main' followed by 'git merge new-feature' to merge your feature branch into main.",
          },
        ],
      },
    ],
  },
  {
    name: "Rebasing",
    content: [
      {
        type: "paragraph",
        data: 'Rebasing is another way of integrating changes from one branch into another. Instead of merging, rebasing "replays" your changes on top of the other branch. This can help keep a cleaner history.',
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Rebase a Branch onto Another Branch",
            body: "Use 'git checkout feature-branch' followed by 'git rebase main' to rebase your feature branch onto main.",
          },
        ],
      },
    ],
  },
  {
    name: "Pull Requests (PR)",
    content: [
      {
        type: "paragraph",
        data: "Pull requests are used to propose changes from one branch to another, typically from a feature branch to the main branch. In a PR, collaborators can review your changes before they're merged into the main project.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Creating a Pull Request",
            body: 'Push your branch to the remote repository. Navigate to your repository on GitHub/GitLab/Bitbucket. Click on "Create Pull Request" and select your branch and target branch.',
          },
        ],
      },
    ],
  },
];

const tutorial2_chapter3_topics = [
  {
    name: "Continuous Integration (CI)",
    content: [
      {
        type: "paragraph",
        data: "CI involves automatically building and testing the code every time a change is made. This ensures that new code integrates well with the existing project and that bugs are caught early.",
      },
      {
        type: "h3",
        data: "Example CI Process:",
      },
      {
        type: "bullet",
        data: [
          "Developer pushes code to a Git repository.",
          "A build system (e.g., Jenkins, Travis CI, GitHub Actions) runs automated tests.",
          "If the tests pass, the changes are integrated into the main branch.",
        ],
      },
      {
        type: "h3",
        data: "CI Tools:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Jenkins",
            body: "Open-source automation server that supports building and testing.",
          },
          {
            title: "Travis CI",
            body: "A cloud-based CI tool tightly integrated with GitHub.",
          },
          {
            title: "GitHub Actions",
            body: "Automate workflows directly from GitHub repositories.",
          },
        ],
      },
    ],
  },
  {
    name: "Continuous Deployment (CD)",
    content: [
      {
        type: "paragraph",
        data: "CD refers to automatically deploying code changes to production after they pass CI testing. It's the next step of CI, ensuring that the code is always deployable.",
      },
      {
        type: "h3",
        data: "CD Process:",
      },
      {
        type: "bullet",
        data: [
          "CI builds and tests the code.",
          "Upon passing tests, the code is automatically deployed to a staging or production environment.",
          "The deployment process can be configured for zero-downtime deployment, meaning new code is released with minimal disruption.",
        ],
      },
    ],
  },
  {
    name: "Benefits of CI/CD",
    content: [
      {
        type: "paragraph",
        data: "CI/CD practices offer numerous advantages for development teams and organizations.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Reduced integration problems",
            body: "Changes are integrated continuously, leading to fewer conflicts.",
          },
          {
            title: "Faster delivery of features",
            body: "Automated testing and deployment allow for faster delivery.",
          },
          {
            title: "Improved code quality",
            body: "Automated tests help identify bugs early in the process.",
          },
        ],
      },
    ],
  },
];

const tutorial3_chapter1_topics = [
  {
    name: "Introduction to CI/CD Tools",
    content: [
      {
        type: "paragraph",
        data: "Various CI/CD tools automate building, testing, and deploying applications. Let's explore some popular CI/CD tools:",
      },
    ],
  },
  {
    name: "Jenkins",
    content: [
      {
        type: "paragraph",
        data: "Jenkins is an open-source automation server that supports building, deploying, and automating tasks related to software development. It is highly extensible through plugins and can be integrated with various version control systems, including Git.",
      },
      {
        type: "h3",
        data: "Key Features of Jenkins:",
      },
      {
        type: "bullet",
        data: [
          "Supports integration with multiple build tools.",
          "Extensive plugin ecosystem.",
          "Provides detailed logs and reporting.",
          "Automated pipeline configuration using DSL (Domain Specific Language).",
        ],
      },
      {
        type: "h3",
        data: "Example Jenkins Pipeline:",
      },
      {
        type: "paragraph",
        data: "Jenkins allows you to define pipelines using a file called Jenkinsfile, which specifies the build, test, and deploy stages.",
      },
      {
        type: "code",
        data: {
          language: "groovy",
          code: `pipeline {
      agent any
      stages {
          stage('Build') {
              steps {
                  echo 'Building the application...'
              }
          }
          stage('Test') {
              steps {
                  echo 'Running tests...'
              }
          }
          stage('Deploy') {
              steps {
                  echo 'Deploying application...'
              }
          }
      }
  }`,
        },
      },
    ],
  },
  {
    name: "GitHub Actions",
    content: [
      {
        type: "paragraph",
        data: "GitHub Actions is GitHub's native CI/CD tool. It integrates directly with GitHub repositories and allows you to automate workflows like building, testing, and deploying your code. Actions can be triggered by events like pushing to a branch, creating a pull request, or creating a release.",
      },
      {
        type: "h3",
        data: "Key Features of GitHub Actions:",
      },
      {
        type: "bullet",
        data: [
          "First-class integration with GitHub repositories.",
          "Flexibility to define workflows with YAML files.",
          "Supports Docker and matrix builds.",
          "Wide range of pre-built actions available in the GitHub marketplace.",
        ],
      },
      {
        type: "h3",
        data: "Example GitHub Action Workflow:",
      },
      {
        type: "paragraph",
        data: "GitHub Actions workflows are defined in .github/workflows in YAML format.",
      },
      {
        type: "code",
        data: {
          language: "yaml",
          code: `name: CI Workflow
  
  on: [push]
  
  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - name: Checkout code
          uses: actions/checkout@v2
        - name: Set up Node.js
          uses: actions/setup-node@v2
        - name: Install dependencies
          run: npm install
        - name: Run tests
          run: npm test`,
        },
      },
    ],
  },
  {
    name: "GitLab CI/CD",
    content: [
      {
        type: "paragraph",
        data: "GitLab CI/CD is a robust, integrated CI/CD pipeline built into GitLab. It allows you to define build, test, and deploy steps directly in a GitLab project using .gitlab-ci.yml files.",
      },
      {
        type: "h3",
        data: "Key Features of GitLab CI/CD:",
      },
      {
        type: "bullet",
        data: [
          "Native integration with GitLab repositories.",
          "Simple YAML configuration for CI/CD pipelines.",
          "Parallel execution of jobs.",
          "Easy-to-use auto-deploy and rollback capabilities.",
        ],
      },
      {
        type: "h3",
        data: "Example GitLab CI/CD Pipeline:",
      },
      {
        type: "code",
        data: {
          language: "yaml",
          code: `stages:
    - build
    - test
    - deploy
  
  build:
    stage: build
    script:
      - echo "Building the project"
  
  test:
    stage: test
    script:
      - echo "Running tests"
  
  deploy:
    stage: deploy
    script:
      - echo "Deploying to production"`,
        },
      },
    ],
  },
  {
    name: "CircleCI",
    content: [
      {
        type: "paragraph",
        data: "CircleCI is a cloud-based CI/CD tool that focuses on fast and reliable automation for modern development workflows. It supports integration with popular version control systems and offers advanced configuration features like workflows and orbs (reusable packages of CircleCI config).",
      },
      {
        type: "h3",
        data: "Key Features of CircleCI:",
      },
      {
        type: "bullet",
        data: [
          "Fast, parallel builds with caching and optimization.",
          "Integration with GitHub, GitLab, and Bitbucket.",
          "Customizable workflows and jobs.",
        ],
      },
      {
        type: "h3",
        data: "Example CircleCI Configuration:",
      },
      {
        type: "paragraph",
        data: "CircleCI configuration is defined in .circleci/config.yml.",
      },
      {
        type: "code",
        data: {
          language: "yaml",
          code: `version: 2.1
  jobs:
    build:
      docker:
        - image: circleci/python:3.7
      steps:
        - checkout
        - run:
            name: Install dependencies
            command: pip install -r requirements.txt
        - run:
            name: Run tests
            command: pytest
  workflows:
    version: 2
    build_and_test:
      jobs:
        - build`,
        },
      },
    ],
  },
];

const tutorial3_chapter2_topics = [
  {
    name: "Build Pipelines",
    content: [
      {
        type: "paragraph",
        data: "A build pipeline is a series of automated processes that allow you to compile, test, and deploy your code. A typical pipeline consists of several stages: build, test, and deploy.",
      },
      {
        type: "h3",
        data: "Key Stages in a Pipeline:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Build",
            body: "This step compiles the code and prepares it for testing or deployment.",
          },
          {
            title: "Test",
            body: "Runs automated tests to ensure the code works as expected.",
          },
          {
            title: "Deploy",
            body: "Deploys the tested code to a staging or production environment.",
          },
        ],
      },
    ],
  },
  {
    name: "Automated Testing",
    content: [
      {
        type: "paragraph",
        data: "Automated testing is a crucial part of any CI/CD pipeline. It ensures that code changes do not break existing functionality and verifies that new features are working as intended.",
      },
      {
        type: "h3",
        data: "Types of Automated Tests:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Unit Tests",
            body: "Test individual functions or components of your application.",
          },
          {
            title: "Integration Tests",
            body: "Test the interactions between different components.",
          },
          {
            title: "End-to-End (E2E) Tests",
            body: "Test the application as a whole from the user's perspective.",
          },
          {
            title: "Regression Tests",
            body: "Ensure that new code does not introduce bugs into existing functionality.",
          },
        ],
      },
      {
        type: "h3",
        data: "Testing Tools:",
      },
      {
        type: "bullet",
        data: [
          "JUnit (Java)",
          "Mocha (JavaScript)",
          "RSpec (Ruby)",
          "PyTest (Python)",
        ],
      },
    ],
  },
  {
    name: "Deployment Strategies",
    content: [
      {
        type: "paragraph",
        data: "Deployment strategies define how new code is rolled out to production. Some popular deployment strategies include:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Rolling Deployment",
            body: "Gradually replaces the old version with the new one, ensuring there's no downtime.",
          },
          {
            title: "Blue/Green Deployment",
            body: "Runs two identical production environments (blue and green). One environment (e.g., blue) is live, while the other (e.g., green) receives the update. After testing the green environment, traffic is switched to it.",
          },
          {
            title: "Canary Deployment",
            body: "Releases the new version to a small subset of users before rolling it out to everyone. This allows you to monitor the system and catch any issues early.",
          },
        ],
      },
    ],
  },
];

const tutorial3_chapter3_topics = [
  {
    name: "Blue/Green Deployment",
    content: [
      {
        type: "paragraph",
        data: "Blue/Green deployment is a strategy that minimizes downtime and risk by running two identical production environments.",
      },
      {
        type: "h3",
        data: "How it Works:",
      },
      {
        type: "bullet",
        data: [
          'The "blue" environment is the live environment where all user traffic is directed.',
          'The "green" environment is a clone of the blue environment, and it receives the new application version.',
          "Once the new version in the green environment is tested and deemed stable, traffic is switched from blue to green.",
          "The blue environment is now idle and can be used for the next release.",
        ],
      },
      {
        type: "h3",
        data: "Advantages of Blue/Green:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Minimal downtime",
            body: "Switchovers are almost instantaneous.",
          },
          {
            title: "Easy rollback",
            body: "If there are issues with the green environment, you can switch back to the blue environment.",
          },
          {
            title: "Reduced risk",
            body: "The green environment is fully tested before going live.",
          },
        ],
      },
    ],
  },
  {
    name: "Canary Deployment",
    content: [
      {
        type: "paragraph",
        data: "Canary deployment involves releasing a new version of the application to a small subset of users before rolling it out to the entire user base.",
      },
      {
        type: "h3",
        data: "How it Works:",
      },
      {
        type: "bullet",
        data: [
          'A small percentage of users are directed to the new version of the application (the "canary" group).',
          "Monitor the performance and user feedback to ensure there are no critical issues.",
          "If the new version is stable, it is gradually rolled out to the remaining users.",
        ],
      },
      {
        type: "h3",
        data: "Advantages of Canary Deployment:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Gradual rollouts",
            body: "Reduces the risk of widespread issues.",
          },
          {
            title: "Real-world testing",
            body: "Provides feedback from actual users.",
          },
          {
            title: "Easy rollback",
            body: "If problems occur, you can quickly revert changes for the canary group.",
          },
        ],
      },
    ],
  },
];

const tutorial4_chapter1_topics = [
  {
    name: "What is Infrastructure as Code (IaC)?",
    content: [
      {
        type: "paragraph",
        data: "Infrastructure as Code (IaC) is the practice of managing and provisioning computing infrastructure through machine-readable script files, rather than through physical hardware or interactive configuration tools. IaC enables the automation of infrastructure management and makes it easier to maintain, scale, and replicate environments.",
      },
    ],
  },
  {
    name: "Introduction to IaC Tools",
    content: [
      {
        type: "paragraph",
        data: "There are several tools available for managing infrastructure as code. Some of the most popular ones are Terraform and AWS CloudFormation.",
      },
    ],
  },
  {
    name: "Terraform",
    content: [
      {
        type: "paragraph",
        data: "Terraform is an open-source IaC tool that enables you to define and provision infrastructure using a high-level configuration language known as HashiCorp Configuration Language (HCL). It works across multiple cloud providers and on-premise environments, providing a consistent workflow for deploying infrastructure.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Key Features of Terraform",
            body: "Supports a wide range of providers such as AWS, Google Cloud, Azure, and others. Uses declarative configuration to define the desired state of the infrastructure. Automates resource management, including creation, modification, and destruction. Ensures that the infrastructure is always in the desired state with state management.",
          },
          {
            title: "Example Terraform Code",
            body: "A simple Terraform configuration to create an AWS EC2 instance.",
          },
        ],
      },
      {
        type: "code",
        data: {
          language: "hcl",
          code: `provider "aws" {
    region = "us-west-2"
  }
  
  resource "aws_instance" "example" {
    ami           = "ami-0c55b159cbfafe1f0"
    instance_type = "t2.micro"
  }`,
        },
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Terraform Workflow",
            body: "1. Write configuration files. 2. Initialize Terraform using terraform init. 3. Plan the changes with terraform plan. 4. Apply the configuration with terraform apply.",
          },
        ],
      },
    ],
  },
  {
    name: "AWS CloudFormation",
    content: [
      {
        type: "paragraph",
        data: "AWS CloudFormation is a service provided by Amazon Web Services (AWS) that allows you to define and provision AWS infrastructure using code. CloudFormation uses templates, written in JSON or YAML, to define resources.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Key Features of AWS CloudFormation",
            body: "Deep integration with AWS services. Allows you to automate infrastructure provisioning for complex setups. Supports both JSON and YAML templates. Provides rollback capabilities in case of failures.",
          },
          {
            title: "Example AWS CloudFormation Template",
            body: "A simple CloudFormation template in YAML to create an EC2 instance.",
          },
        ],
      },
      {
        type: "code",
        data: {
          language: "yaml",
          code: `AWSTemplateFormatVersion: "2010-09-09"
  Resources:
    MyEC2Instance:
      Type: "AWS::EC2::Instance"
      Properties:
        InstanceType: "t2.micro"
        ImageId: "ami-0c55b159cbfafe1f0"`,
        },
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "CloudFormation Workflow",
            body: "1. Write a CloudFormation template. 2. Create a stack in AWS using the CloudFormation console or CLI. 3. CloudFormation provisions the resources defined in the template.",
          },
        ],
      },
    ],
  },
];

const tutorial4_chapter2_topics = [
  {
    name: "What is Configuration Management?",
    content: [
      {
        type: "paragraph",
        data: "Configuration management involves automating the setup and maintenance of software and systems on infrastructure. It ensures that systems are configured consistently and securely and makes it easier to scale and manage large environments.",
      },
    ],
  },
  {
    name: "Configuration Management Tools",
    content: [
      {
        type: "paragraph",
        data: "There are several tools used for configuration management, including Ansible, Puppet, and Chef. Let's take a closer look at each of them.",
      },
    ],
  },
  {
    name: "Ansible",
    content: [
      {
        type: "paragraph",
        data: "Ansible is an open-source automation tool used for configuration management, application deployment, and task automation. It uses YAML-based playbooks to describe automation tasks.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Key Features of Ansible",
            body: "Agentless: No need to install agents on target machines. Easy to learn and use, thanks to simple YAML syntax. Uses SSH for communication, making it easy to integrate into existing infrastructure. Works across multiple platforms and cloud providers.",
          },
          {
            title: "Example Ansible Playbook",
            body: "A simple Ansible playbook to install Nginx on a remote server.",
          },
        ],
      },
      {
        type: "code",
        data: {
          language: "yaml",
          code: `---
  - name: Install Nginx
    hosts: webservers
    become: yes
    tasks:
      - name: Install Nginx
        apt:
          name: nginx
          state: present`,
        },
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Ansible Workflow",
            body: "1. Write playbooks in YAML format. 2. Run playbooks using the ansible-playbook command. 3. Ansible connects to the target systems and applies the defined tasks.",
          },
        ],
      },
    ],
  },
  {
    name: "Puppet",
    content: [
      {
        type: "paragraph",
        data: "Puppet is an open-source configuration management tool that uses a declarative language to describe system configurations. It is often used for automating repetitive administrative tasks across large infrastructure.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Key Features of Puppet",
            body: "Declarative language for system configuration. Can manage a wide variety of systems and software. Requires an agent to be installed on the target machines. Scalable and highly customizable.",
          },
          {
            title: "Example Puppet Code",
            body: "A simple Puppet manifest to install Nginx.",
          },
        ],
      },
      {
        type: "code",
        data: {
          language: "puppet",
          code: `package { 'nginx':
    ensure => 'installed',
  }
  
  service { 'nginx':
    ensure => 'running',
    enable => true,
  }`,
        },
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Puppet Workflow",
            body: "1. Write Puppet manifests to define configurations. 2. Apply the configurations using puppet apply or through a Puppet master. 3. Puppet ensures that the target systems match the desired state.",
          },
        ],
      },
    ],
  },
  {
    name: "Chef",
    content: [
      {
        type: "paragraph",
        data: "Chef is another configuration management tool that automates infrastructure provisioning and application deployment. It uses Ruby-based DSL (domain-specific language) for defining system configurations.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Key Features of Chef",
            body: "Uses Ruby for writing configurations. Can be run either as a standalone tool or with a central Chef server. Scalable and flexible, allowing complex automation workflows. Supports cloud environments and virtualized infrastructure.",
          },
          {
            title: "Example Chef Recipe",
            body: "A simple Chef recipe to install and start Nginx.",
          },
        ],
      },
      {
        type: "code",
        data: {
          language: "ruby",
          code: `package 'nginx' do
    action :install
  end
  
  service 'nginx' do
    action [:enable, :start]
  end`,
        },
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Chef Workflow",
            body: "1. Write Chef recipes or cookbooks in Ruby. 2. Run the recipes using chef-client or through a Chef server. 3. Chef ensures that the infrastructure is configured according to the recipes.",
          },
        ],
      },
    ],
  },
];

const tutorial4_chapter3_topics = [
  {
    name: "What is Containerization?",
    content: [
      {
        type: "paragraph",
        data: "Containerization is a method of packaging and running software in isolated environments called containers. Containers are lightweight and portable, making it easier to run applications in various environments without conflicts.",
      },
    ],
  },
  {
    name: "Docker",
    content: [
      {
        type: "paragraph",
        data: "Docker is a platform for developing, shipping, and running applications in containers. It simplifies the process of building, deploying, and managing applications by packaging everything the application needs to run into a single container.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Key Features of Docker",
            body: "Provides isolation for applications. Lightweight compared to traditional virtual machines. Uses Docker images to create containers, which can be shared and reused. Easily integrates with CI/CD pipelines.",
          },
          {
            title: "Example Dockerfile",
            body: "A simple Dockerfile to build a Node.js application.",
          },
        ],
      },
      {
        type: "code",
        data: {
          language: "Dockerfile",
          code: `# Use an official Node.js image
  FROM node:14
  
  # Set the working directory
  WORKDIR /usr/src/app
  
  # Copy package.json and install dependencies
  COPY package*.json ./
  RUN npm install
  
  # Copy the application code
  COPY . .
  
  # Expose the app port
  EXPOSE 8080
  
  # Run the application
  CMD ["node", "app.js"]`,
        },
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Docker Workflow",
            body: "1. Write a Dockerfile to define the application environment. 2. Build the Docker image with docker build. 3. Run the container using docker run.",
          },
        ],
      },
    ],
  },
  {
    name: "Kubernetes",
    content: [
      {
        type: "paragraph",
        data: "Kubernetes is a container orchestration platform that automates the deployment, scaling, and management of containerized applications. It allows you to manage containers across clusters of machines.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Key Features of Kubernetes",
            body: "Provides automated deployment, scaling, and management of containerized applications. Supports multiple container runtimes, including Docker and containerd. Manages clusters of containers for high availability and fault tolerance. Provides service discovery, load balancing, and storage orchestration.",
          },
          {
            title: "Example Kubernetes YAML for Deploying an Application",
            body: "A simple Kubernetes deployment configuration to deploy a containerized application.",
          },
        ],
      },
      {
        type: "code",
        data: {
          language: "yaml",
          code: `apiVersion: apps/v1
  kind: Deployment
  metadata:
    name: my-app
  spec:
    replicas: 3
    selector:
      matchLabels:
        app: my-app
    template:
      metadata:
        labels:
          app: my-app
      spec:
        containers:
        - name: my-app-container
          image: my-app-image:latest
          ports:
          - containerPort: 8080`,
        },
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Kubernetes Workflow",
            body: "1. Write YAML files to define Kubernetes deployments, services, and configurations. 2. Apply the configurations using kubectl apply. 3. Kubernetes automatically schedules containers and ensures the application is running correctly.",
          },
        ],
      },
    ],
  },
];

// Tutorial 5: Cloud Computing & Services

const tutorial5_chapter1_topics = [
  {
    name: "What is Cloud Computing?",
    content: [
      {
        type: "paragraph",
        data: "Cloud computing is the delivery of computing services such as servers, storage, databases, networking, software, and more over the internet (the cloud). These services are hosted by third-party providers, making it easier for businesses and individuals to access powerful computing resources without needing to maintain physical hardware.",
      },
    ],
  },
  {
    name: "Top Cloud Service Providers",
    content: [
      {
        type: "numbered",
        data: [
          "AWS (Amazon Web Services): AWS is a comprehensive and widely adopted cloud platform from Amazon. It provides a vast array of services, including compute, storage, databases, machine learning, and analytics.",
          "Azure (Microsoft Azure): Azure is a cloud computing service from Microsoft. It provides integrated cloud services for building, deploying, and managing applications.",
          "Google Cloud Platform (GCP): GCP provides cloud computing services developed by Google, which is known for its scalable, secure, and high-performance infrastructure.",
        ],
      },
    ],
  },
  {
    name: "AWS (Amazon Web Services)",
    content: [
      {
        type: "paragraph",
        data: "AWS is a comprehensive and widely adopted cloud platform from Amazon. It provides a vast array of services, including compute, storage, databases, machine learning, and analytics.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Key Features of AWS",
            body: "Largest cloud infrastructure with a global reach. Offers a broad range of services across compute, storage, networking, and more. Pay-as-you-go pricing model. Highly secure and compliant with various regulations.",
          },
          {
            title: "Popular AWS Services",
            body: "EC2 (Elastic Compute Cloud) for scalable compute resources. S3 (Simple Storage Service) for scalable object storage. Lambda for serverless computing.",
          },
        ],
      },
    ],
  },
  {
    name: "Azure (Microsoft Azure)",
    content: [
      {
        type: "paragraph",
        data: "Azure is a cloud computing service from Microsoft. It provides integrated cloud services for building, deploying, and managing applications.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Key Features of Azure",
            body: "Integrated with Microsoft products like Windows Server, SQL Server, and Active Directory. Strong support for hybrid cloud setups. Extensive machine learning and AI services. Secure and compliant, offering global data centers.",
          },
          {
            title: "Popular Azure Services",
            body: "Azure Compute (VMs, App Services). Azure Blob Storage for object storage. Azure Functions for serverless computing.",
          },
        ],
      },
    ],
  },
  {
    name: "Google Cloud Platform (GCP)",
    content: [
      {
        type: "paragraph",
        data: "GCP provides cloud computing services developed by Google, which is known for its scalable, secure, and high-performance infrastructure.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Key Features of GCP",
            body: "Excellent for big data, machine learning, and data analytics. Integrates with Google's AI and machine learning tools. Supports multi-cloud and hybrid cloud configurations. Secure, with built-in security features.",
          },
          {
            title: "Popular GCP Services",
            body: "Compute Engine for virtual machines. Cloud Storage for scalable file storage. Google Kubernetes Engine (GKE) for container orchestration.",
          },
        ],
      },
    ],
  },
];

const tutorial5_chapter2_topics = [
  {
    name: "Compute Services",
    content: [
      {
        type: "paragraph",
        data: "Cloud providers offer various compute services to run your applications and workloads:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "EC2 (Elastic Compute Cloud) – AWS",
            body: "EC2 provides scalable virtual servers in the cloud. You can choose the type of instance that best fits your application needs, whether it's CPU-intensive, memory-intensive, or storage-intensive.",
          },
          {
            title: "Lambda – AWS",
            body: "Lambda is a serverless computing service where you upload your code, and AWS takes care of everything required to run and scale your application.",
          },
        ],
      },
    ],
  },
  {
    name: "EC2 (Elastic Compute Cloud)",
    content: [
      {
        type: "titled_bullet",
        data: [
          {
            title: "Key Features of EC2",
            body: "Scalable and flexible compute power. Supports multiple instance types and operating systems. Pay-per-use pricing model. Integrates with other AWS services, like S3 for storage.",
          },
          {
            title: "EC2 Use Case",
            body: "EC2 is typically used for hosting websites, running web applications, and performing compute-heavy tasks such as data analysis and machine learning.",
          },
        ],
      },
    ],
  },
  {
    name: "Lambda",
    content: [
      {
        type: "titled_bullet",
        data: [
          {
            title: "Key Features of Lambda",
            body: "Serverless: No need to manage infrastructure. Scalable: Automatically scales depending on the number of requests. Supports multiple programming languages like Python, Node.js, and Java.",
          },
          {
            title: "Lambda Use Case",
            body: "Lambda is ideal for running small, event-driven applications, such as real-time file processing, webhooks, and microservices.",
          },
        ],
      },
    ],
  },
  {
    name: "Storage Services",
    content: [
      {
        type: "paragraph",
        data: "Cloud storage services provide scalable and durable options for storing various types of data:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "S3 (Simple Storage Service) – AWS",
            body: "S3 is an object storage service used to store and retrieve any amount of data, such as images, videos, documents, and backups.",
          },
          {
            title: "Blob Storage – Azure",
            body: "Blob Storage is an object storage solution for unstructured data, such as text or binary data, in Azure.",
          },
        ],
      },
    ],
  },
  {
    name: "S3 (Simple Storage Service)",
    content: [
      {
        type: "titled_bullet",
        data: [
          {
            title: "Key Features of S3",
            body: "Highly durable and scalable object storage. Version control and lifecycle policies. Supports encryption for data security. Pay-as-you-go pricing based on storage usage and data transfer.",
          },
          {
            title: "S3 Use Case",
            body: "S3 is used for storing website assets, backups, big data, and media files.",
          },
        ],
      },
    ],
  },
  {
    name: "Blob Storage",
    content: [
      {
        type: "titled_bullet",
        data: [
          {
            title: "Key Features of Blob Storage",
            body: "Scalable storage for a wide variety of data types. Can store large amounts of data like videos, backups, or log files. Provides multiple access tiers: Hot, Cool, and Archive. Built-in security features like encryption.",
          },
          {
            title: "Blob Storage Use Case",
            body: "Blob storage is used for storing unstructured data, such as images, videos, and large datasets in the cloud.",
          },
        ],
      },
    ],
  },
  {
    name: "Networking Services",
    content: [
      {
        type: "paragraph",
        data: "Cloud networking services enable secure and efficient communication between resources:",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "VPC (Virtual Private Cloud) – AWS",
            body: "VPC allows you to create a private network within AWS to launch resources such as EC2 instances, RDS databases, and more. You can control your network configuration, including subnets, routing, and security settings.",
          },
        ],
      },
    ],
  },
  {
    name: "VPC (Virtual Private Cloud)",
    content: [
      {
        type: "titled_bullet",
        data: [
          {
            title: "Key Features of VPC",
            body: "Provides complete control over your network environment. Can create isolated networks and connect to your on-premises infrastructure. Supports multiple layers of security with network ACLs and security groups.",
          },
          {
            title: "VPC Use Case",
            body: "VPC is used to securely connect cloud resources, create isolated environments, and ensure communication between cloud services.",
          },
        ],
      },
    ],
  },
];

const tutorial5_chapter3_topics = [
  {
    name: "Serverless Computing",
    content: [
      {
        type: "paragraph",
        data: "Serverless computing allows you to run code without provisioning or managing servers. It automatically scales and manages compute resources for you.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "AWS Lambda",
            body: "Lambda is AWS's primary serverless offering. It is designed for event-driven functions where you pay only for the actual compute time used.",
          },
          {
            title: "Azure Functions",
            body: "Azure Functions provides similar capabilities to AWS Lambda, allowing you to write small pieces of code in response to events without worrying about the underlying infrastructure.",
          },
        ],
      },
    ],
  },
  {
    name: "Serverless Use Cases",
    content: [
      {
        type: "titled_bullet",
        data: [
          {
            title: "Use Cases of Serverless on AWS",
            body: "Real-time data processing. Backend APIs for mobile applications. File processing upon upload to cloud storage.",
          },
          {
            title: "Use Cases of Serverless on Azure",
            body: "Automation tasks triggered by database changes. Serverless APIs. Real-time streaming and event-driven architectures.",
          },
        ],
      },
    ],
  },
  {
    name: "Kubernetes on the Cloud",
    content: [
      {
        type: "paragraph",
        data: "Kubernetes is an open-source container orchestration platform designed to automate the deployment, scaling, and operation of containerized applications.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Key Features of Kubernetes",
            body: "Handles the deployment and management of containerized applications. Provides scaling, load balancing, and self-healing for containers. Works across cloud providers and on-premises environments.",
          },
        ],
      },
    ],
  },
  {
    name: "Kubernetes on Cloud Platforms",
    content: [
      {
        type: "titled_bullet",
        data: [
          {
            title: "Google Kubernetes Engine (GKE) – GCP",
            body: "GKE is a managed Kubernetes service that simplifies running Kubernetes clusters on Google Cloud. It integrates with Google's infrastructure and scaling capabilities.",
          },
          {
            title: "Amazon Elastic Kubernetes Service (EKS) – AWS",
            body: "EKS is AWS's managed Kubernetes service, enabling easy deployment and management of Kubernetes clusters.",
          },
          {
            title: "Azure Kubernetes Service (AKS) – Azure",
            body: "AKS is a fully managed Kubernetes service that simplifies running Kubernetes on Azure. It supports multi-region clusters, auto-scaling, and integrates with Azure monitoring tools.",
          },
        ],
      },
    ],
  },
  {
    name: "Kubernetes Use Cases",
    content: [
      {
        type: "bullet",
        data: [
          "Managing microservices architectures.",
          "Running scalable applications in the cloud.",
          "Handling complex deployments like rolling updates, canary releases, and blue-green deployments.",
        ],
      },
    ],
  },
];

// Tutorial 6: Monitoring & Logging

const tutorial6_chapter1_topics = [
  {
    name: "What is Monitoring?",
    content: [
      {
        type: "paragraph",
        data: "Monitoring involves tracking the performance and health of applications, services, and infrastructure. Effective monitoring helps identify and resolve issues before they affect the end-user experience, ensuring reliability and uptime.",
      },
    ],
  },
  {
    name: "Prometheus",
    content: [
      {
        type: "paragraph",
        data: "Prometheus is an open-source monitoring system designed for reliability and scalability. It collects metrics from configured endpoints at specified intervals, stores them in a time-series database, and provides powerful querying capabilities.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Key Features of Prometheus",
            body: "Time-series data storage for metrics. Multi-dimensional data model with key-value pairs (labels). PromQL (Prometheus Query Language) for querying and analyzing data. Built-in alerting and notification capabilities. Integration with various exporters for application and system-level metrics.",
          },
          {
            title: "Use Case of Prometheus",
            body: "Prometheus is commonly used for monitoring containerized applications, microservices, and infrastructure in real-time. It tracks metrics like CPU usage, memory usage, request rates, and more.",
          },
        ],
      },
    ],
  },
  {
    name: "Grafana",
    content: [
      {
        type: "paragraph",
        data: "Grafana is a powerful open-source tool for visualizing time-series data collected from monitoring systems like Prometheus. It allows users to create dashboards that present metrics and logs in a user-friendly format.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Key Features of Grafana",
            body: "Supports various data sources, including Prometheus, InfluxDB, and Elasticsearch. Rich visualization options: Graphs, tables, heatmaps, and more. Alerting and notification system based on metrics thresholds. User authentication and role-based access control. Highly customizable and plugin extensible.",
          },
          {
            title: "Grafana Use Case",
            body: "Grafana is used to create visually appealing and actionable dashboards for monitoring application performance, system health, and business KPIs in real-time.",
          },
        ],
      },
    ],
  },
  {
    name: "Prometheus + Grafana Integration",
    content: [
      {
        type: "paragraph",
        data: "Prometheus and Grafana work together to provide both data collection and visualization for an end-to-end monitoring solution.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "How it Works",
            body: "Prometheus scrapes and collects data from various sources (like application endpoints and infrastructure). Grafana fetches the data from Prometheus and visualizes it on dashboards. Alerts in Grafana can trigger notifications based on Prometheus metrics, helping teams take action when issues arise.",
          },
        ],
      },
    ],
  },
];

const tutorial6_chapter2_topics = [
  {
    name: "What is the ELK Stack?",
    content: [
      {
        type: "paragraph",
        data: "The ELK stack (Elasticsearch, Logstash, and Kibana) is a powerful suite of tools used for searching, analyzing, and visualizing large volumes of log data in real-time.",
      },
    ],
  },
  {
    name: "Elasticsearch",
    content: [
      {
        type: "paragraph",
        data: "Elasticsearch is a distributed search and analytics engine designed for fast and scalable searches of large volumes of data. It indexes and stores log data for quick querying and retrieval.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Key Features of Elasticsearch",
            body: "Distributed and scalable architecture. Real-time search and analytics. Full-text search capabilities. Integrates with other components like Logstash and Kibana for a complete logging solution.",
          },
          {
            title: "Use Case of Elasticsearch",
            body: "Elasticsearch is widely used to store and index logs, application events, and other time-series data for quick searches and analysis.",
          },
        ],
      },
    ],
  },
  {
    name: "Logstash",
    content: [
      {
        type: "paragraph",
        data: "Logstash is an open-source data processing pipeline that ingests, processes, and transforms log and event data. It sends the processed data to Elasticsearch for indexing.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Key Features of Logstash",
            body: "Supports a wide range of input sources, including logs, databases, and cloud services. Powerful filters for transforming and parsing data. Output to various destinations, including Elasticsearch. Extensible with plugins to enhance functionality.",
          },
          {
            title: "Use Case of Logstash",
            body: "Logstash is used to aggregate and transform logs from various sources, making it easier to process and index logs before they are stored in Elasticsearch.",
          },
        ],
      },
    ],
  },
  {
    name: "Kibana",
    content: [
      {
        type: "paragraph",
        data: "Kibana is a data visualization and exploration tool that works with Elasticsearch. It allows users to create interactive dashboards to analyze and visualize log data stored in Elasticsearch.",
      },
      {
        type: "titled_bullet",
        data: [
          {
            title: "Key Features of Kibana",
            body: "Create and share visualizations like bar charts, pie charts, and time series graphs. Real-time monitoring of logs and metrics. Search and filter log data interactively. Alerts based on log patterns and thresholds.",
          },
          {
            title: "Kibana Use Case",
            body: "Kibana is used for visualizing log data and monitoring applications in real-time. It's ideal for exploring trends, identifying issues, and gaining insights from logs.",
          },
        ],
      },
    ],
  },
  {
    name: "ELK Stack Use Case",
    content: [
      {
        type: "paragraph",
        data: "The ELK stack is often used for centralized logging, where log data from different services and systems are aggregated, indexed, and visualized. This is crucial for debugging and performance monitoring in complex systems.",
      },
    ],
  },
];

const tutorial1_chapters = [
  {
    name: "Operating Systems – Linux &Shell Scripting",
    topics: tutorial1_chapter1_topics,
    description:
      "Operating Systems (OS) form the core of every DevOps engineer's toolbox. For DevOps, the most commonly used OS is Linux, known for its efficiency, flexibility, and open-source nature.",
  },
  {
    name: "Networking & Security – TCP/IP, DNS, Firewalls, VPNs, SSH",
    topics: tutorial1_chapter2_topics,
    description:
      "Networking and security are fundamental in DevOps for managing scalable, distributed, and secure environments. A strong understanding will allow you to troubleshoot network issues and protect systems from vulnerabilities.",
  },
  {
    name: "Programming Basics – Python, Bash, or Go",
    topics: tutorial1_chapter3_topics,
    description:
      "Programming is a key skill for automating tasks and managing infrastructure as code. DevOps engineers should be comfortable with scripting and programming, although they don't need to be experts.",
  },
];

const tutorial2_chapters = [
  {
    name: "Git & GitHub / GitLab / Bitbucket",
    topics: tutorial2_chapter1_topics,
    description:
      "Version control is a system that allows multiple individuals or teams to work on the same project, maintaining a history of all changes made. The system keeps track of all changes to code and files, making collaboration and project management easier.",
  },
  {
    name: "Git Workflow (Branching, Merging, Rebasing, Pull Requests)",
    topics: tutorial2_chapter2_topics,
    description:
      "Learn essential Git workflows including branching strategies, merging changes, rebasing, and creating pull requests for effective team collaboration.",
  },
  {
    name: "Understanding CI/CD Concepts",
    topics: tutorial2_chapter3_topics,
    description:
      "Continuous Integration (CI) and Continuous Deployment (CD) are practices that allow developers to frequently integrate code changes into a shared repository and deploy these changes automatically.",
  },
];

const tutorial3_chapters = [
  {
    name: "Jenkins, GitHub Actions, GitLab CI/CD, CircleCI",
    topics: tutorial3_chapter1_topics,
    description:
      "CI/CD refers to the practices of Continuous Integration and Continuous Deployment. These practices aim to automatically integrate and deploy code changes to production, ensuring faster and more reliable software delivery.",
  },
  {
    name: "Build Pipelines, Automated Testing, Deployment Strategies",
    topics: tutorial3_chapter2_topics,
    description:
      "Understand the key components of CI/CD pipelines including build processes, automated testing, and various deployment strategies to ensure reliable software delivery.",
  },
  {
    name: "Blue/Green & Canary Deployments",
    topics: tutorial3_chapter3_topics,
    description:
      "Explore advanced deployment strategies like Blue/Green and Canary deployments that minimize risk and downtime when releasing new software versions.",
  },
];
const tutorial4_chapters = [
  {
    name: "Terraform, AWS CloudFormation",
    topics: tutorial4_chapter1_topics,
    description:
      "Infrastructure as Code (IaC) is the practice of managing and provisioning computing infrastructure through machine-readable script files, rather than through physical hardware or interactive configuration tools. IaC enables the automation of infrastructure management and makes it easier to maintain, scale, and replicate environments.",
  },
  {
    name: "Ansible, Puppet, Chef for Configuration Management",
    topics: tutorial4_chapter2_topics,
    description:
      "Configuration management involves automating the setup and maintenance of software and systems on infrastructure. It ensures that systems are configured consistently and securely and makes it easier to scale and manage large environments.",
  },
  {
    name: "Docker & Kubernetes for Container Orchestration",
    topics: tutorial4_chapter3_topics,
    description:
      "Containerization is a method of packaging and running software in isolated environments called containers. Containers are lightweight and portable, making it easier to run applications in various environments without conflicts.",
  },
];

const tutorial5_chapters = [
  {
    name: "AWS, Azure, or Google Cloud",
    topics: tutorial5_chapter1_topics,
    description:
      "Cloud computing is the delivery of computing services such as servers, storage, databases, networking, software, and more over the internet (the cloud). These services are hosted by third-party providers, making it easier for businesses and individuals to access powerful computing resources without needing to maintain physical hardware.",
  },
  {
    name: "Compute (EC2, Lambda), Storage (S3, Blob), Networking (VPC)",
    topics: tutorial5_chapter2_topics,
    description:
      "Cloud services provide various compute, storage, and networking options to build and deploy applications efficiently and securely in the cloud.",
  },
  {
    name: "Serverless & Kubernetes on the Cloud",
    topics: tutorial5_chapter3_topics,
    description:
      "Serverless computing and Kubernetes are powerful approaches for deploying and managing applications in the cloud, each with their own benefits and use cases.",
  },
];

const tutorial6_chapters = [
  {
    name: "Prometheus & Grafana for Monitoring",
    topics: tutorial6_chapter1_topics,
    description:
      "Monitoring involves tracking the performance and health of applications, services, and infrastructure. Effective monitoring helps identify and resolve issues before they affect the end-user experience, ensuring reliability and uptime.",
  },
  {
    name: "ELK Stack (Elasticsearch, Logstash, Kibana)",
    topics: tutorial6_chapter2_topics,
    description:
      "The ELK stack (Elasticsearch, Logstash, and Kibana) is a powerful suite of tools used for searching, analyzing, and visualizing large volumes of log data in real-time.",
  },
  // {
  //   name: "Distributed Tracing (Jaeger, OpenTelemetry)",
  //   topics: tutorial6_chapter3_topics,
  //   description:
  //     "Distributed tracing helps to track requests as they move through a distributed system. It allows teams to observe the journey of requests across microservices, making it easier to detect performance bottlenecks and issues in complex applications.",
  // },
];

export const DevOpsTutorials = [
  {
    title: "Prerequisites of DevOps Engineer: Learn the Basics",
    description:
      "In this tutorial, we will cover the fundamental skills and knowledge required to excel in a DevOps Engineer role. These prerequisites will help you gain a solid understanding of key concepts and tools, forming a strong foundation for advanced DevOps practices.",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/gossip-app-62715.appspot.com/o/Skillcraft%20Images%2FDevOps%2FDevOps1.png?alt=media&token=7b43b497-2cf8-4581-aac7-fab452823a46",
    category: "DevOps",
    chapters: tutorial1_chapters,
    quiz: [
      {
        question:
          "What is the primary difference between Linux and Windows operating systems?",
        options: [
          "Linux is open-source, while Windows is proprietary.",
          "Windows is more secure than Linux.",
          "Linux has a graphical user interface (GUI), while Windows does not.",
          "There is no difference.",
        ],
        answer: "Linux is open-source, while Windows is proprietary.",
      },
      {
        question: "What does the TCP/IP protocol enable in networking?",
        options: [
          "Secure data transmission.",
          "File sharing.",
          "Communication between devices on a network.",
          "All of the above.",
        ],
        answer: "Communication between devices on a network.",
      },
      {
        question:
          "Which of the following is NOT a task of a DevOps engineer in shell scripting?",
        options: [
          "Automating system tasks.",
          "Creating web applications.",
          "Managing system resources.",
          "Writing deployment scripts.",
        ],
        answer: "Creating web applications.",
      },
      {
        question:
          "Which of the following is commonly used for version control in DevOps?",
        options: ["Docker", "Git", "Kubernetes", "Terraform"],
        answer: "Git",
      },
      {
        question: "What is the main advantage of using a VPN in networking?",
        options: [
          "Faster internet speeds.",
          "Improved security for data transmission.",
          "Unlimited data usage.",
          "More storage capacity.",
        ],
        answer: "Improved security for data transmission.",
      },
    ],
  },
  {
    title: "Version Control Systems: Master Git and CI-CD",
    description:
      "Learn the fundamentals of version control with Git and understand CI/CD concepts for modern software development workflows.",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/gossip-app-62715.appspot.com/o/Skillcraft%20Images%2FDevOps%2FDevOps2.png?alt=media&token=8a4143cf-0e61-4fad-94c5-907c2092cdd3",
    category: "DevOps",
    chapters: tutorial2_chapters,
    quiz: [
      {
        question: "Which command in Git is used to create a new branch?",
        options: [
          "git merge",
          "git commit",
          "git branch <branch-name>",
          "git push",
        ],
        answer: "git branch <branch-name>",
      },
      {
        question: "What is the purpose of a Pull Request in GitHub?",
        options: [
          "To delete a branch.",
          "To merge changes from one branch into another.",
          "To revert changes made in a repository.",
          "To fetch remote changes to a local branch.",
        ],
        answer: "To merge changes from one branch into another.",
      },
      {
        question:
          "Which of the following is the default branch in a newly created Git repository?",
        options: ["master", "develop", "main", "staging"],
        answer: "main",
      },
      {
        question: "What is the primary purpose of CI/CD?",
        options: [
          "To monitor server health.",
          "To automate the process of building, testing, and deploying software.",
          "To control access to cloud resources.",
          "To backup server data.",
        ],
        answer:
          "To automate the process of building, testing, and deploying software.",
      },
      {
        question: 'What does "rebasing" do in Git?',
        options: [
          "Merges changes from one branch to another.",
          "Deletes a branch.",
          "Rewrites the commit history to make it linear.",
          "Pushes commits to the remote repository.",
        ],
        answer: "Rewrites the commit history to make it linear.",
      },
    ],
  },
  {
    title: "Continuous Integration & Continuous Deployment (CI-CD)",
    description:
      "Learn the tools and practices of CI/CD to automate building, testing, and deploying applications, ensuring faster and more reliable software delivery.",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/gossip-app-62715.appspot.com/o/Skillcraft%20Images%2FDevOps%2FDevOps3.png?alt=media&token=eee52ce7-cbe5-4afd-89b3-548caac8fdfd",
    category: "DevOps",
    chapters: tutorial3_chapters,
    quiz: [
      {
        question: "Which tool is commonly used for CI/CD automation?",
        options: ["Jenkins", "Docker", "Kubernetes", "Terraform"],
        answer: "Jenkins",
      },
      {
        question: "What is the primary function of a build pipeline in CI/CD?",
        options: [
          "Automates code deployment.",
          "Automates code compilation, testing, and deployment.",
          "Manages user authentication.",
          "Manages server resources.",
        ],
        answer: "Automates code compilation, testing, and deployment.",
      },
      {
        question:
          "What is the difference between Blue/Green and Canary deployments?",
        options: [
          "Blue/Green deployments release to all users at once, while Canary releases only to a subset of users.",
          "Blue/Green deployments release only to a subset of users, while Canary releases to all users.",
          "Both Blue/Green and Canary deployments release to all users.",
          "Both Blue/Green and Canary deployments release to no users.",
        ],
        answer:
          "Blue/Green deployments release to all users at once, while Canary releases only to a subset of users.",
      },
      {
        question:
          "Which of the following best describes the concept of Continuous Deployment?",
        options: [
          "Automating the building of the code.",
          "Automatically deploying code changes to production after passing tests.",
          "Manually deploying code to production.",
          "Maintaining a code repository.",
        ],
        answer:
          "Automatically deploying code changes to production after passing tests.",
      },
      {
        question: "What does a CI/CD pipeline typically include?",
        options: [
          "Code compilation, testing, and deployment.",
          "Code compilation and user authentication.",
          "Server configuration and code push.",
          "Only code push and deployment.",
        ],
        answer: "Code compilation, testing, and deployment.",
      },
    ],
  },
  {
    title: "Infrastructure as Code (IaC): Modern DevOps Approach",
    description:
      "Learn how to automate infrastructure provisioning, configuration management, and container orchestration using popular tools like Terraform, Ansible, Docker, and Kubernetes.",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/gossip-app-62715.appspot.com/o/Skillcraft%20Images%2FDevOps%2FDevOps4.png?alt=media&token=5f597e6d-b09c-4528-8d40-fa73600b1806",
    category: "DevOps",
    chapters: tutorial4_chapters,
    quiz: [
      {
        question: "What does Infrastructure as Code (IaC) allow you to do?",
        options: [
          "Manage infrastructure manually.",
          "Automate the provisioning of infrastructure.",
          "Monitor system performance.",
          "Write code without using version control.",
        ],
        answer: "Automate the provisioning of infrastructure.",
      },
      {
        question: "Which tool is used for configuration management in IaC?",
        options: ["Docker", "Ansible", "Kubernetes", "Jenkins"],
        answer: "Ansible",
      },
      {
        question: "What is the purpose of Docker in IaC?",
        options: [
          "Automate infrastructure provisioning.",
          "Package applications and dependencies into containers.",
          "Manage user access to resources.",
          "Monitor system performance.",
        ],
        answer: "Package applications and dependencies into containers.",
      },
      {
        question: "What is Kubernetes primarily used for in DevOps?",
        options: [
          "Managing cloud storage.",
          "Automating container orchestration and management.",
          "Provisioning servers.",
          "Configuring networks.",
        ],
        answer: "Automating container orchestration and management.",
      },
      {
        question:
          "Which of the following is a key benefit of using Terraform for IaC?",
        options: [
          "It is cloud-agnostic, supporting multiple cloud providers.",
          "It only supports AWS.",
          "It is a container orchestration tool.",
          "It does not support version control.",
        ],
        answer: "It is cloud-agnostic, supporting multiple cloud providers.",
      },
    ],
  },
  {
    title: "Cloud Computing & Services",
    description:
      "This tutorial introduces cloud computing and key providers like AWS, Azure, and Google Cloud. It covers compute, storage, networking, serverless computing, and Kubernetes services, highlighting their features and use cases. The guide helps users understand cloud adoption and service selection.",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/gossip-app-62715.appspot.com/o/Skillcraft%20Images%2FDevOps%2FDevOps5.png?alt=media&token=dac951ef-2c78-4c10-801a-bc5e698964f3",
    category: "DevOps",
    chapters: tutorial5_chapters,
    quiz: [
      {
        question:
          "Which cloud service provider offers services like EC2, S3, and Lambda?",
        options: ["AWS", "Azure", "Google Cloud", "IBM Cloud"],
        answer: "AWS",
      },
      {
        question:
          "What does the VPC (Virtual Private Cloud) service allow you to do?",
        options: [
          "Manage and monitor server performance.",
          "Set up a private network within the cloud.",
          "Deploy serverless applications.",
          "Store large datasets.",
        ],
        answer: "Set up a private network within the cloud.",
      },
      {
        question: "What is the primary purpose of serverless computing?",
        options: [
          "To avoid setting up infrastructure manually.",
          "To host virtual machines in the cloud.",
          "To provision cloud resources manually.",
          "To monitor the status of virtual machines.",
        ],
        answer: "To avoid setting up infrastructure manually.",
      },
      {
        question:
          "Which of the following is a key advantage of using Google Cloud's Kubernetes Engine (GKE)?",
        options: [
          "Fully managed container orchestration with Kubernetes.",
          "Unlimited cloud storage.",
          "On-premise server management.",
          "Manual scaling of server instances.",
        ],
        answer: "Fully managed container orchestration with Kubernetes.",
      },
      {
        question: "What is the primary function of AWS Lambda?",
        options: [
          "Store large files.",
          "Run code in response to events without provisioning servers.",
          "Manage server clusters.",
          "Run virtual machines.",
        ],
        answer: "Run code in response to events without provisioning servers.",
      },
    ],
  },
];
export const DevOpsEngineerCourse = {
  title: "DevOps Engineer",
  description: "",
  thumbnail:
    "https://firebasestorage.googleapis.com/v0/b/gossip-app-62715.appspot.com/o/Skillcraft%20Images%2FDevOps%2FDevOps0.png?alt=media&token=777b27d0-7949-4b94-943f-09ed1ecd39fd",
  category: "DevOps",
  path: [],
  tutorials: DevOpsTutorials,
};
