export const fileContents = {
  "about.txt": `
    <div class="font-mono text-sm">
      <div class="border-b border-gray-200 pb-4 mb-4">
        <h2 class="text-xl font-bold text-gray-800">About Bishal Khadka</h2>
        <p class="text-gray-600 mt-2">Computer Science & Mathematics Student | Software Engineer</p>
      </div>
      <div class="space-y-4 text-gray-700">
        <p>Hello! I'm a passionate Computer Science and Mathematics student at Colby College with a 3.9 GPA, currently pursuing my Bachelor of Arts degree (graduating January 2026).</p>
        <p>I'm currently a Visiting Student at the University of Oxford studying Computer Science & Mathematics, expanding my knowledge in advanced algorithms, networks, and mathematical foundations.</p>
        <p>I specialize in building distributed systems, cloud-native applications, and high-performance software solutions. My experience spans from firmware development to full-stack web applications.</p>
      </div>
      <div class="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 class="font-semibold text-gray-800 mb-2">Quick Stats:</h3>
        <ul class="text-sm text-gray-600 space-y-1">
          <li>• 3.9/4.0 GPA at Colby College</li>
          <li>• Currently at Oxford University (Visiting Student)</li>
          <li>• Software Engineer Intern at Samsara</li>
          <li>• Multiple hackathon wins (Davis AI, Oxford Hackathon)</li>
        </ul>
      </div>
    </div>
  `,
  projects: `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
        <div class="w-full h-32 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg mb-3 flex items-center justify-center">
          <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12a1 1 0 01-.707-.293l-2-2a1 1 0 111.414-1.414L9 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 019 12z"/>
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
          </svg>
        </div>
        <h3 class="font-semibold text-gray-800 mb-2">Secure VPN | Rust</h3>
        <p class="text-sm text-gray-600 mb-3">Cross-platform VPN with ChaCha20-Poly1305 encryption, Diffie-Hellman key exchange, and custom TUN interfaces optimized for low-latency data flow.</p>
        <div class="flex flex-wrap gap-2 mb-3">
          <span class="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Rust</span>
          <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Network Protocols</span>
          <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">System Programming</span>
        </div>
        <button class="text-blue-600 text-sm hover:underline">View Project →</button>
      </div>

      <div class="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
        <div class="w-full h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg mb-3 flex items-center justify-center">
          <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h3 class="font-semibold text-gray-800 mb-2">IngreDetect | MERN Stack</h3>
        <p class="text-sm text-gray-600 mb-3">Automated dining menu data ingestion via serverless AWS Lambda workflows with daily updates for 2000+ users. Sub-200ms menu load latency.</p>
        <div class="flex flex-wrap gap-2 mb-3">
          <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">MongoDB</span>
          <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">ReactJS</span>
          <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">AWS Lambda</span>
        </div>
        <button class="text-blue-600 text-sm hover:underline">View Project →</button>
      </div>

      <div class="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
        <div class="w-full h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg mb-3 flex items-center justify-center">
          <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
          </svg>
        </div>
        <h3 class="font-semibold text-gray-800 mb-2">Soccerboard | Django</h3>
        <p class="text-sm text-gray-600 mb-3">Responsive web application featuring soccer quizzes, match scores, and league tables with REST API implementation and 14% improved data collection efficiency.</p>
        <div class="flex flex-wrap gap-2 mb-3">
          <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Django</span>
          <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">REST API</span>
          <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">PostgreSQL</span>
        </div>
        <button class="text-blue-600 text-sm hover:underline">View Project →</button>
      </div>

      <div class="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
        <div class="w-full h-32 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg mb-3 flex items-center justify-center">
          <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
          </svg>
        </div>
        <h3 class="font-semibold text-gray-800 mb-2">Hackathon Projects</h3>
        <p class="text-sm text-gray-600 mb-3">Multiple award-winning hackathon projects including Davis AI Hackathon (Winner), Oxford Hackathon (2nd Place), and ETH Oxford Hackathon participant.</p>
        <div class="flex flex-wrap gap-2 mb-3">
          <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">AI/ML</span>
          <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Blockchain</span>
          <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Full-Stack</span>
        </div>
        <button class="text-blue-600 text-sm hover:underline">View Project →</button>
      </div>
    </div>
  `,
  "skills.sh": `
    <div class="font-mono text-sm bg-gray-900 text-green-400 p-4 rounded-lg">
      <div class="mb-4">
        <span class="text-yellow-400">#!/bin/bash</span><br>
        <span class="text-gray-400"># Technical Skills</span><br><br>
      </div>
      <div class="space-y-3">
        <div>
          <span class="text-blue-400">echo</span> <span class="text-red-400">"=== Technical Skills ==="</span><br>
          <span class="text-white">Front End:</span> <span class="text-gray-300">JavaScript, TypeScript, ReactJS, NodeJS, HTML5, CSS</span><br>
          <span class="text-white">Back End:</span> <span class="text-gray-300">Golang, Python (Django, Django REST Framework), ExpressJS, GraphQL, gRPC, Java</span><br>
          <span class="text-white">Databases:</span> <span class="text-gray-300">PostgreSQL, MongoDB, DynamoDB, CouchDB</span><br>
          <span class="text-white">Testing/Deployment:</span> <span class="text-gray-300">Postman, Jest, AWS (EC2, ECS), Terraform, Regression Testing, TDD</span><br>
          <span class="text-white">Developer Tools:</span> <span class="text-gray-300">Git, Docker, UNIX/Linux, Agile Methodology, SDLC</span>
        </div>
      </div>
      <div class="mt-4 text-gray-400">
        <span class="text-blue-400">exit</span> 0
      </div>
    </div>
  `,
  "experience.pdf": `
    <div class="bg-white p-8 max-w-4xl mx-auto" style="font-family: 'Times New Roman', serif;">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">Bishal Khadka</h1>
        <p class="text-gray-600">Computer Science & Mathematics Student | Software Engineer</p>
        <p class="text-sm text-gray-500 mt-2"><a href="mailto:khadkabishal00@gmail.com" class="text-blue-600 hover:underline">khadkabishal00@gmail.com</a> | <a href="tel:+12073139427" class="text-blue-600 hover:underline">+1 (207) 313-9427</a> | <a href="https://www.linkedin.com/in/khadka-bishal/" target="_blank" class="text-blue-600 hover:underline">LinkedIn</a> | <a href="https://github.com/Khadka-Bishal" target="_blank" class="text-blue-600 hover:underline">GitHub</a></p>
      </div>

      <div class="mb-8">
        <h2 class="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">Professional Experience</h2>
        
        <div class="mb-6">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-lg font-semibold text-gray-800">Software Engineer Intern</h3>
            <span class="text-sm text-gray-600">June 2025 - Present</span>
          </div>
          <p class="text-gray-700 font-medium mb-2">Samsara | San Francisco, CA</p>
          <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Develop and maintain distributed, cloud-native backend systems using Golang, GraphQL, and AWS Cloud</li>
            <li>Implement telemetry and monitoring to improve data-driven observability and fault tolerance</li>
            <li>Work cross-functionally with product teams to deliver scalable solutions aligned with modern cloud architecture</li>
          </ul>
        </div>

        <div class="mb-6">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-lg font-semibold text-gray-800">Engineering Research Assistant</h3>
            <span class="text-sm text-gray-600">May 2024 - Aug 2024</span>
          </div>
          <p class="text-gray-700 font-medium mb-2">Colby College | Waterville, ME</p>
          <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Created a Python toolkit to streamline geospatial polygon processing, significantly speeding up the workflow by automating the node removal and polygon splitting processes</li>
            <li>Automated simulation workflows using Bash scripts and high-performance computing (HPC) resources, improving the efficiency and accuracy of large-scale model simulations</li>
            <li>Developed and validated numerical models to simulate hydrodynamic and morphodynamic responses at bridge sites, collaborating with North Carolina State University and N.C. Department of Transportation</li>
          </ul>
        </div>

        <div class="mb-6">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-lg font-semibold text-gray-800">Software Developer Intern</h3>
            <span class="text-sm text-gray-600">Nov 2023 - Jan 2024</span>
          </div>
          <p class="text-gray-700 font-medium mb-2">National Innovation Center Nepal | Kathmandu, Nepal</p>
          <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Contributed to the development of a health toolkit to improve healthcare access in remote areas and underserved communities</li>
          </ul>
        </div>

        <div class="mb-6">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-lg font-semibold text-gray-800">Computer Science Research Assistant</h3>
            <span class="text-sm text-gray-600">Feb 2023 - May 2023</span>
          </div>
          <p class="text-gray-700 font-medium mb-2">Software Engineering and Human Factors Lab | Colby College</p>
          <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Worked on research focused on large language models</li>
          </ul>
        </div>

        <div class="mb-6">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-lg font-semibold text-gray-800">Data Intern</h3>
            <span class="text-sm text-gray-600">Feb 2022 - Apr 2022</span>
          </div>
          <p class="text-gray-700 font-medium mb-2">Global Forest Watch | Remote</p>
          <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Created interactive choropleth maps to analyze tree cover loss, pinpointing areas of deforestation</li>
            <li>Designed engaging bar plot races to visualize deforestation trends across countries and years. These visualizations culminated in a comprehensive dashboard</li>
            <li>Collaborated closely with 4 remote colleagues and ensured the data and visualizations were informative and impactful</li>
          </ul>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">Education</h2>
        <div class="mb-4">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-lg font-semibold text-gray-800">Bachelor of Arts in Computer Science & Mathematics</h3>
            <span class="text-sm text-gray-600">Sept 2021 - Jan 2026</span>
          </div>
          <p class="text-gray-700 font-medium">Colby College, USA | GPA: 3.9/4.0</p>
          <p class="text-sm text-gray-600 mt-1">Relevant Courses: Computer Networks, Databases, Algorithm Design, Linear Algebra, Number Theory, Probability, Software Engineering, Computer Architecture</p>
        </div>
        <div class="mb-4">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-lg font-semibold text-gray-800">Visiting Student in Computer Science & Mathematics</h3>
            <span class="text-sm text-gray-600">Oct 2024 - Jun 2025</span>
          </div>
          <p class="text-gray-700 font-medium">University of Oxford, UK</p>
        </div>
      </div>


      <div>
        <h2 class="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">Achievements & Honors</h2>
        <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>Davis AI Hackathon - Winner</li>
          <li>Samsara Intern Hackathon - Winner</li>
          <li>Oxford Hackathon - 2nd Place</li>
          <li>ETH Oxford Hackathon - Participant</li>
        </ul>
      </div>
    </div>
  `,
  "contact.url": `
    <div class="max-w-2xl mx-auto">
      <div class="text-center mb-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
        <p class="text-gray-600">Feel free to reach out through any of these channels.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a href="mailto:khadkabishal00@gmail.com" class="bg-blue-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow cursor-pointer block">
          <svg class="w-8 h-8 text-blue-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
          <h3 class="font-semibold text-gray-800 mb-2">Email</h3>
          <p class="text-gray-600 text-sm">khadkabishal00@gmail.com</p>
        </a>

        <a href="https://www.linkedin.com/in/khadka-bishal/" target="_blank" class="bg-blue-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow cursor-pointer block">
          <svg class="w-8 h-8 text-blue-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
          </svg>
          <h3 class="font-semibold text-gray-800 mb-2">LinkedIn</h3>
          <p class="text-gray-600 text-sm">LinkedIn Profile</p>
        </a>

        <a href="https://github.com/Khadka-Bishal" target="_blank" class="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow cursor-pointer block">
          <svg class="w-8 h-8 text-gray-800 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
          </svg>
          <h3 class="font-semibold text-gray-800 mb-2">GitHub</h3>
          <p class="text-gray-600 text-sm">github.com/Khadka-Bishal</p>
        </a>

        <a href="tel:+12073139427" class="bg-green-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow cursor-pointer block">
          <svg class="w-8 h-8 text-green-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          <h3 class="font-semibold text-gray-800 mb-2">Phone</h3>
          <p class="text-gray-600 text-sm">+1 (207) 313-9427</p>
        </a>
      </div>
    </div>
  `,
};

export const terminalCommands = {
  help: `Available commands:
  about - About information
  projects - Show projects
  skills - Technical skills
  experience - Work experience
  contact - Contact information
  ls - List files
  pwd - Current directory
  whoami - Current user
  date - Current date/time
  clear - Clear terminal
  cat [file] - View file contents
  open [file] - Open files

Available files:
  about.txt, projects, skills.sh, experience.pdf, contact.url

Type any command to get started!`,

  about: `About Bishal Khadka
====================

Computer Science & Mathematics Student | Software Engineer

Hello! I'm a passionate Computer Science and Mathematics student at Colby College with a 3.9 GPA, currently pursuing my Bachelor of Arts degree (graduating January 2026).

I'm currently a Visiting Student at the University of Oxford studying Computer Science & Mathematics, expanding my knowledge in advanced algorithms, networks, and mathematical foundations.

I specialize in building distributed systems, cloud-native applications, and high-performance software solutions. My experience spans from firmware development to full-stack web applications.

Quick Stats:
• 3.9/4.0 GPA at Colby College
• Currently at Oxford University (Visiting Student)
• Software Engineer Intern at Samsara
• Multiple hackathon wins (Davis AI, Oxford Hackathon)`,

  projects: `Projects
=========

1. Secure VPN | Rust
   Cross-platform VPN with ChaCha20-Poly1305 encryption, Diffie-Hellman key exchange, and custom TUN interfaces optimized for low-latency data flow.
   Tech: Rust, Network Protocols, System Programming

2. IngreDetect | MERN Stack
   Automated dining menu data ingestion via serverless AWS Lambda workflows with daily updates for 2000+ users. Sub-200ms menu load latency.
   Tech: MongoDB, ReactJS, AWS Lambda

3. Soccerboard | Django
   Responsive web application featuring soccer quizzes, match scores, and league tables with REST API implementation and 14% improved data collection efficiency.
   Tech: Django, REST API, PostgreSQL

4. Hackathon Projects
   Multiple award-winning hackathon projects including Davis AI Hackathon (Winner), Oxford Hackathon (2nd Place), and ETH Oxford Hackathon participant.
   Tech: AI/ML, Blockchain, Full-Stack`,

  skills: `#!/bin/bash
# Technical Skills

echo "=== Technical Skills ==="
Front End: JavaScript, TypeScript, ReactJS, NodeJS, HTML5, CSS
Back End: Golang, Python (Django, Django REST Framework), ExpressJS, GraphQL, gRPC, Java
Databases: PostgreSQL, MongoDB, DynamoDB, CouchDB
Testing/Deployment: Postman, Jest, AWS (EC2, ECS), Terraform, Regression Testing, TDD
Developer Tools: Git, Docker, UNIX/Linux, Agile Methodology, SDLC

exit 0`,

  experience: `Professional Experience
=======================

Software Engineer Intern
June 2025 - Present
Samsara | San Francisco, CA
• Develop and maintain distributed, cloud-native backend systems using Golang, GraphQL, and AWS Cloud
• Implement telemetry and monitoring to improve data-driven observability and fault tolerance
• Work cross-functionally with product teams to deliver scalable solutions aligned with modern cloud architecture

Engineering Research Assistant
May 2024 - Aug 2024
Colby College | Waterville, ME
• Created a Python toolkit to streamline geospatial polygon processing, significantly speeding up the workflow by automating the node removal and polygon splitting processes
• Automated simulation workflows using Bash scripts and high-performance computing (HPC) resources, improving the efficiency and accuracy of large-scale model simulations
• Developed and validated numerical models to simulate hydrodynamic and morphodynamic responses at bridge sites, collaborating with North Carolina State University and N.C. Department of Transportation

Software Developer Intern
Nov 2023 - Jan 2024
National Innovation Center Nepal | Kathmandu, Nepal
• Contributed to the development of a health toolkit to improve healthcare access in remote areas and underserved communities

Computer Science Research Assistant
Feb 2023 - May 2023
Software Engineering and Human Factors Lab | Colby College
• Worked on research focused on large language models

Data Intern
Feb 2022 - Apr 2022
Global Forest Watch | Remote
• Created interactive choropleth maps to analyze tree cover loss, pinpointing areas of deforestation
• Designed engaging bar plot races to visualize deforestation trends across countries and years. These visualizations culminated in a comprehensive dashboard
• Collaborated closely with 4 remote colleagues and ensured the data and visualizations were informative and impactful`,

  contact: `Contact Information
===================

Email: khadkabishal00@gmail.com
Phone: +1 (207) 313-9427
LinkedIn: linkedin.com/in/khadka-bishal
GitHub: github.com/Khadka-Bishal

About Me:
I'm a Computer Science & Mathematics student at Colby College with a 3.9 GPA, currently studying as a Visiting Student at the University of Oxford. I specialize in building distributed systems, cloud-native applications, and high-performance software solutions.

Currently working as a Software Engineer Intern at Samsara, I'm passionate about creating innovative solutions and exploring new technologies. I love collaborating on interesting projects and contributing to open-source development.`,

  ls: `Files in current directory:
  about.txt
  projects
  skills.sh
  experience.pdf
  contact.url
  Games/
  Documents/`,

  pwd: `/home/user/portfolio`,

  whoami: `user`,

  date: () => new Date().toLocaleString(),

  "cat about": () => fileContents["about.txt"],
  "cat projects": () => fileContents["projects"],
  "cat skills": () => fileContents["skills.sh"],
  "cat experience": () => fileContents["experience.pdf"],
  "cat contact": () => fileContents["contact.url"],

  "open about": "Opening about.txt...",
  "open projects": "Opening projects...",
  "open skills": "Opening skills.sh...",
  "open experience": "Opening experience.pdf...",
  "open contact": "Opening contact.url...",

  fortune: () => {
    const fortunes = [
      "A bug in the hand is better than one as yet undetected.",
      "The best code is no code at all.",
      "Programmers are tools for converting caffeine into code.",
      "There are 10 types of people: those who understand binary and those who don't.",
      "Why do programmers prefer dark mode? Because light attracts bugs!",
      "The only way to learn a new programming language is by writing programs in it.",
      "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      "First, solve the problem. Then, write the code.",
      "Code is like humor. When you have to explain it, it's bad.",
    ];
    return fortunes[Math.floor(Math.random() * fortunes.length)];
  },

  neofetch: `Portfolio Desktop v1.0
  ========================
  
  OS: Portfolio Desktop Environment
  Kernel: React 18.2.0
  Shell: Custom Terminal
  Terminal: Portfolio Terminal
  CPU: Intel i7-12700K
  Memory: 16GB DDR4
  Disk: 1TB NVMe SSD
  Resolution: 1920x1080
  Theme: Dark Mode
  Icons: Custom Desktop Icons
  Font: JetBrains Mono`,

  top: `Portfolio Desktop - System Monitor
  =====================================
  
  PID  USER     CPU%  MEM%  COMMAND
  1001 user     15.2  12.3  Portfolio Desktop
  1002 user      8.7   5.1  Terminal
  1003 user      3.2   2.8  Window Manager
  1004 user      1.5   1.2  Menu Bar
  1005 user      0.8   0.9  Desktop Icons
  
  Total: 29.4% CPU, 22.3% Memory`,

  ps: `PID  TTY  TIME  CMD
  1001  pts/0  00:01:23  Portfolio Desktop
  1002  pts/1  00:00:45  Terminal
  1003  pts/2  00:00:12  Window Manager
  1004  pts/3  00:00:08  Menu Bar
  1005  pts/4  00:00:05  Desktop Icons`,
};
