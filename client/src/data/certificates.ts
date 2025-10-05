// Define the Certificate type
export interface Certificate {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate: string;
  credentialId: string;
  image: string;
  verificationUrl: string;
  skills: string[];
  status: string;
  type: "certificate" | "badge"; // restricts values
}

// Now use it
const certificatesData: Certificate[] = [
    {
      title: "Introduction to Frontend",
      issuer: "Coursera",
      issueDate: "2023",
      expiryDate: "N/A",
      credentialId: "Cert1",
      image: "/assets/coursera/introtofrontend.png",
      verificationUrl: "https://www.coursera.org/account/accomplishments/certificate/L6APDXC8RQEU",
      skills: ["HTML", "CSS", "JavaScript", "Frontend Basics"],
      status: "Active",
      type: "certificate"
    },
    {
      title: "Introduction to Backend",
      issuer: "Coursera",
      issueDate: "2023",
      expiryDate: "N/A",
      credentialId: "Cert2",
      image: "/assets/coursera/introtobackend.png",
      verificationUrl: "https://www.coursera.org/account/accomplishments/certificate/XVQT4K249B43",
      skills: ["Node.js", "Express", "Databases", "Backend Basics"],
      status: "Active",
      type: "certificate"
    },
    {
      title: "Programming with JavaScript",
      issuer: "Coursera",
      issueDate: "2023",
      expiryDate: "N/A",
      credentialId: "Cert3",
      image: "/assets/coursera/programmingwithjavascript.png",
      verificationUrl: "https://www.coursera.org/account/accomplishments/verify/QCXPVKEW4K7B",
      skills: ["JavaScript", "DOM Manipulation", "ES6+", "Web Development"],
      status: "Active",
      type: "certificate"
    },
    {
      title: "Document Processing Solution with Azure AI Document Intelligence",
      issuer: "Microsoft",
      issueDate: "2023",
      expiryDate: "N/A",
      credentialId: "Cert4",
      image: "/assets/Microsoft/azureaiskill.png",
      verificationUrl: "https://learn.microsoft.com/api/credentials/share/en-us/PankajMehra-1611/AC841F2CF5A7064D?sharingId=D0D1E9A62D8BA788",
      skills: ["Azure AI", "Document Intelligence", "Cloud Solutions"],
      status: "Active",
      type: "certificate"
    },
    {
      title: "Sage Winter School In C Programming",
      issuer: "Sage",
      issueDate: "2023",
      expiryDate: "N/A",
      credentialId: "Cert5",
      image: "/assets/svg/download.jpeg",
      verificationUrl: "",
      skills: ["C Programming", "Algorithms", "Problem Solving"],
      status: "Active",
      type: "certificate"
    },
    {
      title: "The Basics of Google Cloud Compute",
      issuer: "Google",
      issueDate: "2023",
      expiryDate: "N/A",
      credentialId: "Cert6",
      image: "/assets/GenAI/Thebasicofcloudcompute.png",
      verificationUrl: "https://www.credly.com/badges/9e304752-7aa0-4207-9816-04a9629975c8",
      skills: ["Google Cloud", "Compute Services", "Cloud Basics"],
      status: "Active",
      type: "badge"
    },
    {
      title: "Get Started with Cloud Storage",
      issuer: "Google",
      issueDate: "2023",
      expiryDate: "N/A",
      credentialId: "Cert7",
      image: "/assets/GenAI/Startwithcloud.png",
      verificationUrl: "https://www.credly.com/badges/493061c7-41bd-451b-b6c3-04567d412f23",
      skills: ["Google Cloud Storage", "Data Management"],
      status: "Active",
      type: "badge"
    },
    {
      title: "Get Started with API Gateway",
      issuer: "Google",
      issueDate: "2023",
      expiryDate: "N/A",
      credentialId: "Cert8",
      image: "/assets/GenAI/apigateway.png",
      verificationUrl: "https://www.credly.com/badges/6285ea4e-9db6-4843-8b8f-e426d77ff879",
      skills: ["API Gateway", "Cloud Integration"],
      status: "Active",
      type: "badge"
    },
    {
      title: "Get Started with Looker",
      issuer: "Google",
      issueDate: "2023",
      expiryDate: "N/A",
      credentialId: "Cert9",
      image: "/assets/GenAI/looker.png",
      verificationUrl: "https://www.credly.com/badges/2ef4a55e-ebec-4b20-8cad-2bdbeda1b4ab",
      skills: ["Looker", "Data Analysis", "Data Visualization"],
      status: "Active",
      type: "badge"
    },
    {
      title: "Get Started with Dataplex",
      issuer: "Google",
      issueDate: "2023",
      expiryDate: "N/A",
      credentialId: "Cert10",
      image: "/assets/GenAI/dataplex.png",
      verificationUrl: "https://www.credly.com/badges/9393783a-6b53-49de-b553-cbecfed48553",
      skills: ["Dataplex", "Data Management", "Cloud Data Solutions"],
      status: "Active",
      type: "badge"
    },
    {
      title: "Get Started with Google Workspace Tools",
      issuer: "Google",
      issueDate: "2023",
      expiryDate: "N/A",
      credentialId: "Cert11",
      image: "/assets/GenAI/workspacetool.png",
      verificationUrl: "https://www.credly.com/badges/9c3fde9b-17d7-46bf-a540-50bf7c032484",
      skills: ["Google Workspace", "Productivity Tools"],
      status: "Active",
      type: "badge"
    },
    {
      title: "Cloud Functions: 3 Ways",
      issuer: "Google",
      issueDate: "2023",
      expiryDate: "N/A",
      credentialId: "Cert12",
      image: "/assets/GenAI/cloudfunction.png",
      verificationUrl: "https://www.credly.com/badges/6e98c773-fbde-43e3-a3ec-103832593a87",
      skills: ["Cloud Functions", "Serverless", "Cloud Computing"],
      status: "Active",
      type: "badge"
    },
    {
      title: "App Engine: 3 Ways",
      issuer: "Google",
      issueDate: "2023",
      expiryDate: "N/A",
      credentialId: "Cert13",
      image: "/assets/GenAI/appengine.png",
      verificationUrl: "https://www.credly.com/badges/21baecd7-77e0-434a-97ce-108422d2a197",
      skills: ["App Engine", "Cloud Deployment", "Serverless Apps"],
      status: "Active",
      type: "badge"
    },
    {
      title: "Cloud Speech API: 3 Ways",
      issuer: "Google",
      issueDate: "2023",
      expiryDate: "N/A",
      credentialId: "Cert14",
      image: "/assets/GenAI/cloudapi.png",
      verificationUrl: "https://www.credly.com/badges/bbde825b-04b9-42bc-a887-b229691e946c",
      skills: ["Cloud Speech API", "Voice Recognition", "AI"],
      status: "Active",
      type: "badge"
    },
    {
      title: "Monitoring in Google Cloud",
      issuer: "Google",
      issueDate: "2023",
      expiryDate: "N/A",
      credentialId: "Cert15",
      image: "/assets/GenAI/monitoring.png",
      verificationUrl: "https://www.credly.com/badges/7c9e0972-33d9-43f5-a709-edf48db3a2dd",
      skills: ["Cloud Monitoring", "Observability", "Google Cloud"],
      status: "Active",
      type: "badge"
    },
    {
      title: "Networking Fundamentals on Google Cloud",
      issuer: "Google",
      issueDate: "2023",
      expiryDate: "N/A",
      credentialId: "Cert16",
      image: "/assets/GenAI/networkingfundamental.png",
      verificationUrl: "https://www.credly.com/badges/754a6d3c-6092-49be-9ea5-281d1248cbd5",
      skills: ["Networking", "Cloud Networking", "Google Cloud"],
      status: "Active",
      type: "badge"
    },
    {
      title: "Prompt Design in Vertex AI",
      issuer: "Google",
      issueDate: "2023",
      expiryDate: "N/A",
      credentialId: "Cert17",
      image: "/assets/GenAI/vertexai.png",
      verificationUrl: "https://www.credly.com/badges/3fe0b693-fca6-4039-969c-c9afd813275e",
      skills: ["Vertex AI", "Prompt Engineering", "AI"],
      status: "Active",
      type: "badge"
    },
    {
      title: "Analyze Images with the Cloud Vision API",
      issuer: "Google",
      issueDate: "2023",
      expiryDate: "N/A",
      credentialId: "Cert18",
      image: "/assets/GenAI/Analyzeimages.png",
      verificationUrl: "https://www.credly.com/badges/0e9a7414-a72e-4189-90a9-ca161f7db58f",
      skills: ["Cloud Vision API", "Image Analysis", "AI"],
      status: "Active",
      type: "badge"
    },
    // --- NEW ENTRIES BASED ON SCREENSHOT ---
    {
        title: "AWS Certified Developer - Associate",
        issuer: "AWS",
        issueDate: "2023",
        expiryDate: "N/A",
        credentialId: "Cert19",
        image: "/assets/AWS/DEVOPS.png",
        verificationUrl: "",
        skills: ["AWS", "DevOps", "Cloud Computing"],
        status: "Active",
        type: "certificate"
    },
    {
        title: "Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
        issueDate: "2023",
        expiryDate: "N/A",
        credentialId: "Cert20",
        image: "/assets/Microsoft/AZUREfundamental.png",
        verificationUrl: "",
        skills: ["Azure", "Cloud Computing", "Cloud Fundamentals"],
        status: "Active",
        type: "certificate"
    },
    {
        title: "Web Development Bootcamp",
        issuer: "IBM",
        issueDate: "2023",
        expiryDate: "N/A",
        credentialId: "Cert21",
        image: "/assets/IBM/WEBDEVIBM.png",
        verificationUrl: "",
        skills: ["Web Development", "IBM", "Full Stack"],
        status: "Active",
        type: "certificate"
    },
    {
        title: "MongoDB Basics",
        issuer: "GFG",
        issueDate: "2023",
        expiryDate: "N/A",
        credentialId: "Cert22",
        image: "/assets/GFG/MONGODB.png",
        verificationUrl: "",
        skills: ["MongoDB", "NoSQL", "Database"],
        status: "Active",
        type: "certificate"
    },
    {
        title: "Data Structures and Algorithms Basic",
        issuer: "HackerRank",
        issueDate: "2023",
        expiryDate: "N/A",
        credentialId: "Cert23",
        image: "/assets/HACKERRANK/DSABASIC.png",
        verificationUrl: "",
        skills: ["Data Structures", "Algorithms", "Problem Solving"],
        status: "Active",
        type: "certificate"
    },
    {
        title: "Data Structures and Algorithms Intermediate",
        issuer: "HackerRank",
        issueDate: "2023",
        expiryDate: "N/A",
        credentialId: "Cert24",
        image: "/assets/HACKERRANK/DSAINTER.png",
        verificationUrl: "",
        skills: ["Advanced Data Structures", "Algorithms", "Intermediate DSA"],
        status: "Active",
        type: "certificate"
    },
    {
        title: "JavaScript Basic",
        issuer: "HackerRank",
        issueDate: "2023",
        expiryDate: "N/A",
        credentialId: "Cert25",
        image: "/assets/HACKERRANK/JSBASIC.png",
        verificationUrl: "",
        skills: ["JavaScript", "Programming Fundamentals"],
        status: "Active",
        type: "certificate"
    },
    {
        title: "React Basic",
        issuer: "HackerRank",
        issueDate: "2023",
        expiryDate: "N/A",
        credentialId: "Cert26",
        image: "/assets/HACKERRANK/REACTBASIC.png",
        verificationUrl: "",
        skills: ["React", "Frontend", "JavaScript"],
        status: "Active",
        type: "certificate"
    },
    {
        title: "SQL Basic",
        issuer: "HackerRank",
        issueDate: "2023",
        expiryDate: "N/A",
        credentialId: "Cert27",
        image: "/assets/HACKERRANK/SQLBAS.png",
        verificationUrl: "",
        skills: ["SQL", "Database Queries", "Relational Databases"],
        status: "Active",
        type: "certificate"
    },
    {
        title: "SQL Intermediate",
        issuer: "HackerRank",
        issueDate: "2023",
        expiryDate: "N/A",
        credentialId: "Cert28",
        image: "/assets/HACKERRANK/SQLINTER.png",
        verificationUrl: "",
        skills: ["Advanced SQL", "Complex Queries", "Database Management"],
        status: "Active",
        type: "certificate"
    }
  ];

export default certificatesData;