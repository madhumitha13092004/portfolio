// All portfolio content lives here. Replace the "[Add …]" placeholders when the details are ready.
window.PORTFOLIO = {
  name: "Madhumitha B",
  roles: ["Java Full Stack Developer", "Software Developer", "Tech Enthusiast"],
  tagline: "Building Meaningful Digital Experiences Through Code.",
  status: "Recent Graduate · Fresher · Open to Job Opportunities",
  photo: "", // e.g. "img/madhumitha.jpg"
  resume: "", // e.g. "resume/Madhumitha_B_Resume.pdf"

  objective:
    "Aspiring Java Full Stack Developer passionate about building responsive web applications and developing practical software solutions. Interested in Java, Spring Boot, React.js, database management, and emerging AI technologies. Eager to learn new technologies, solve real-world problems, and contribute to innovative development teams.",

  about: [
    "I'm a motivated and enthusiastic Information Technology graduate from Panimalar Engineering College with a strong interest in software development.",
    "I work across frontend and backend development, database management, Java programming and modern web technologies. I enjoy learning new tools, solving programming challenges and building projects that address real-world problems.",
    "I'm quick to adapt, I approach problems methodically, and I'm committed to improving a little every day. I'm looking for a team where I can contribute, learn fast and grow into a skilled full stack engineer."
  ],
  traits: ["Willing to learn", "Adaptable", "Problem-solving mindset", "Continuous improvement"],

  stats: [
    { value: "30+", label: "LeetCode problems solved" },
    { value: "8.1", label: "B.Tech CGPA" },
    { value: "3", label: "Major projects" },
    { value: "1", label: "Conference paper accepted" }
  ],

  skills: [
    { group: "Programming Languages", items: [["Java", "java"], ["JavaScript", "javascript"], ["JSON", "json"]] },
    { group: "Frontend", items: [["HTML5", "html5"], ["CSS3", "css3"], ["React.js", "react"]] },
    { group: "Backend", items: [["Java", "java"], ["Spring Boot", "spring"], ["Node.js", "nodejs"]] },
    { group: "Databases", items: [["MySQL", "mysql"], ["MongoDB", "mongodb"], ["SQL", null]] },
    { group: "Tools", items: [["Git", "git"], ["GitHub", "github"], ["VS Code", "vscode"], ["Eclipse IDE", "eclipse"], ["Maven", "maven"]] },
    { group: "Additional Knowledge", items: [["OOP", null], ["Artificial Intelligence", null], ["Prompt Engineering", null], ["Deep Learning", null], ["TensorFlow", "tensorflow"], ["CNN", null]] }
  ],

  projects: [
    {
      no: "01",
      domain: "GOV-TECH / CIVIC PLATFORM",
      metrics: [["Platform","Web Application"],["Frontend","React.js"],["Backend","Node.js"],["Database","SQL"]],
      title: "Civic Issue Management System",
      kind: "Full Stack Web Application",
      summary:
        "A web platform where citizens report everyday civic problems online, with no need to visit a government office in person. It makes reporting easier and more accessible, and helps issues reach the right authority faster.",
      points: ["Report road damage, water leakage, garbage and drainage problems", "Simple, user-friendly reporting flow", "Built around a real public problem"],
      stack: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "SQL"],
      github: "", demo: ""
    },
    {
      no: "02",
      domain: "AI / HEALTH-TECH RESEARCH",
      metrics: [["Model","CNN"],["Framework","TensorFlow"],["Language","Python"],["Scope","Academic project"]],
      title: "AI-Driven Diagnosis of Foot Ulcer Disease",
      kind: "Academic AI / ML Project",
      summary:
        "A deep learning system that analyses foot images with a Convolutional Neural Network (CNN) and classifies them into ulcer categories. Built as an academic project; it is not a clinically validated diagnostic tool.",
      points: ["Image upload and preprocessing", "CNN-based classification", "Result visualisation", "User login and landing pages"],
      stack: ["Python", "TensorFlow", "CNN", "Deep Learning"],
      github: "", demo: ""
    },
    {
      no: "03",
      domain: "IOT / SOCIAL IMPACT",
      metrics: [["Device","Smartwatch"],["Signals","Heart rate · GPS"],["Alerts","5 emergency contacts"],["Status","Conference accepted"]],
      title: "Women Safety Analytics Using Smartwatch",
      kind: "Social Impact · IoT Concept",
      badge: "Accepted at an International Conference · Sri Manakula Vinayagar Engineering College · 27 Dec 2024",
      summary:
        "A women safety application concept integrated with smartwatch technology to speed up emergency response, combining health signals, location and instant alerts.",
      points: ["Heart-rate monitoring", "Emergency alerts and calling", "GPS location sharing", "Image and voice recording", "Alerts to five nearby emergency contacts"],
      stack: ["Smartwatch", "GPS", "Health Monitoring", "Mobile App"],
      github: "", demo: ""
    }
  ],

  internship: {
    org: "Webcode / WebCodes",
    role: "Web Development Intern",
    duration: "3 Months",
    text:
      "Gained hands-on exposure to real web development: how applications are planned, built and shipped. I worked with frontend and backend fundamentals, learned the development workflow end to end and sharpened my technical skills on practical tasks.",
    stack: ["HTML", "CSS", "JavaScript", "AngularJS", "MongoDB", "Node.js"]
  },

  certifications: [
    { title: "OCI 2024 Generative AI Certified Professional", issuer: "Oracle University", date: "17 Jul 2024", credId: "100724939OCI2024GAIOCP", badge: "PROFESSIONAL", image: "certs/oracle-oci-genai.jpg", link: "" },
    { title: "UiPath Automation Developer Associate", issuer: "NASSCOM · FutureSkills Prime", date: "30 Jun 2025", credId: "FSP/2025/6/10236882", badge: "GOLD", image: "certs/nasscom-uipath.jpg", link: "" },
    { title: "Data Science for Beginners", issuer: "NASSCOM · FutureSkills Prime", date: "13 Dec 2023", credId: "FSP/2023/12/5419146", badge: "GOLD", image: "certs/nasscom-data-science.jpg", link: "" },
    { title: "Java Developer Certification", issuer: "Infosys Springboard", date: "12 Aug 2025", badge: "JAVA", image: "certs/java-developer.jpg", link: "https://verify.onwingspan.com", linkLabel: "VERIFY VIA QR" },
    { title: "Machine Learning Foundation Certification", issuer: "Infosys Springboard", date: "12 Aug 2025", badge: "AI / ML", image: "certs/machine-learning.jpg", link: "https://verify.onwingspan.com", linkLabel: "VERIFY VIA QR" },
    { title: "Front End Web Developer Certification", issuer: "Infosys Springboard", date: "13 Aug 2025", badge: "FRONTEND", image: "certs/front-end.jpg", link: "https://verify.onwingspan.com", linkLabel: "VERIFY VIA QR" },
    { title: "Web Development Workshop", issuer: "Workshop", badge: "WORKSHOP", image: "", link: "" },
    { title: "30-Day Web Development Challenge", issuer: "Challenge", badge: "CHALLENGE", image: "", link: "" }
  ],

  coding: [
    "Solved 30+ problems on LeetCode",
    "Practising Java programming",
    "Learning data structures and algorithms",
    "Improving SQL query writing",
    "Practising aptitude and logical reasoning"
  ],
  codingProfiles: [
    { name: "LeetCode", url: "" },
    { name: "GitHub", url: "" },
    { name: "HackerRank", url: "" }
  ],

  education: [
    { degree: "B.Tech – Information Technology", school: "Panimalar Engineering College", score: "CGPA 8.1" },
    { degree: "Higher Secondary (12th)", school: "Vivekananda Matriculation Higher Secondary School", score: "90.5%" },
    { degree: "Secondary (10th)", school: "Vishweshwara Matriculation School", score: "98.5%" }
  ],

  goals:
    "My goal is to become a skilled Java Full Stack Developer: to strengthen my Java, Spring Boot, React.js, database and software engineering foundations while gaining real industry experience, and to grow into an engineer who ships reliable products that people use.",

  contact: {
    email: "",   // [Add my email]
    phone: "",   // [Add my phone number]
    linkedin: "https://linkedin.com/in/madhumitha-b-658791359",
    github: "",  // [Add my GitHub profile]
    location: "Chennai, Tamil Nadu, India"
  }
};
