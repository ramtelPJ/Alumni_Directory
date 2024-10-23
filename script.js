// Sample alumni data
const alumniData = [
  {
    name: "John Doe",
    phone: "(123) 456-7890",
    description: "Technology",
    id: "101",
    email: "john.doe@example.com",
    gender: "male",
  },
  {
    name: "Jane Smith",
    phone: "(987) 654-3210",
    description: "Marketing",
    id: "102",
    email: "jane.smith@example.com",
    gender: "female",
  },
  {
    name: "Mike Brown",
    phone: "(212) 555-1234",
    description: "Architecture",
    id: "103",
    email: "mike.brown@example.com",
    gender: "male",
  },
  {
    name: "Sarah Wilson",
    phone: "(305) 555-6789",
    description: "Consulting",
    id: "104",
    email: "sara.lee@example.com",
    gender: "female",
  },
  {
    name: "Robert Davis",
    phone: "(512) 555-1234",
    description: "CEO",
    id: "105",
    email: "ceo@davisinnovations.com",
  },
  {
    name: "Emily Clark",
    phone: "(312) 555-6789",
    description: "HR Manager",
    id: "106",
    email: "hr@clarkhr.com",
  },
  {
    name: "Daniel Lee",
    phone: "(617) 555-1234",
    description: "Data Analyst",
    id: "107",
    email: "data@leeanalytics.com",
  },
  {
    name: "Chloe Martinez",
    phone: "(206) 555-9876",
    description: "Web Developer",
    id: "108",
    email: "web@martinezwebdev.com",
  },
  {
    name: "Oliver White",
    phone: "(908) 555-1234",
    description: "Financial Advisor",
    id: "109",
    email: "advisor@whitefinance.com",
  },
  {
    name: "Grace Thompson",
    phone: "(213) 555-9012",
    description: "Corporate law and legal consultation",
    id: "110",
    email: "grace.thompson@email.com",
    gender: "female",
  },
  {
    name: "Ethan Garcia",
    phone: "(602) 555-5678",
    description: "Event planning and coordination services",
    id: "111",
    email: "ethan.garcia@email.com",
    gender: "male",
  },
  {
    name: "Ava Harris",
    phone: "(503) 555-7890",
    description: "Graphic design and creative branding",
    id: "112",
    email: "ava.harris@email.com",
    gender: "female",
  },
  {
    name: "Liam Cooper",
    phone: "(214) 555-1234",
    description: "Logistics and supply chain management",
    id: "113",
    email: "liam.cooper@email.com",
    gender: "male",
  },
  {
    name: "Mia Gonzalez",
    phone: "(415) 555-5678",
    description: "Marketing research and campaign analytics",
    id: "114",
    email: "mia.gonzalez@email.com",
    gender: "female",
  },
];

// Placeholder image URLs
const malePhotos = [
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/men/6.jpg",
  "https://randomuser.me/api/portraits/men/7.jpg",
];

const femalePhotos = [
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/women/3.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
  "https://randomuser.me/api/portraits/women/13.jpg",
  "https://randomuser.me/api/portraits/women/6.jpg",
  "https://randomuser.me/api/portraits/women/9.jpg",
  "https://randomuser.me/api/portraits/women/8.jpg",
];

// Hash function to create a number from the alumni ID
function hashString(str) {
  return str
    .split("")
    .reduce((hash, char) => char.charCodeAt(0) + ((hash << 5) - hash), 0);
}

function getPhotoForAlumni(alumni) {
  const hashValue = Math.abs(hashString(alumni.id));
  const photoArray = alumni.gender === "male" ? malePhotos : femalePhotos;
  return photoArray[hashValue % photoArray.length]; // Return photo based on hash
}

const itemsPerPage = 4;
let currentPage = 1;

function displayAlumni(page) {
  const start = (page - 1) * itemsPerPage;
  const alumniToShow = alumniData.slice(start, start + itemsPerPage);
  const alumniContainer = document.getElementById("alumni-container");

  alumniContainer.innerHTML = alumniToShow
    .map((alumni) => {
      const photoUrl = getPhotoForAlumni(alumni); // Get consistent photo
      return `
      <div class="alumni-card p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out">
        <img src="${photoUrl}" alt="Alumni Photo" class="rounded-full w-20 h-20 mx-auto mb-4" />
        <h3 class="text-white text-xl font-semibold text-center mb-2">
          ${alumni.name}
          <span class="block text-indigo-500 text-sm font-normal">${alumni.description}</span>
        </h3>
        <p class="text-gray-400 text-center"><i class="fas fa-phone"></i> ${alumni.phone}</p>
        <p class="text-gray-400 text-center"><i class="fas fa-envelope"></i> ${alumni.email}</p>
        <p class="text-gray-400 text-center">ID: ${alumni.id}</p>
      </div>
    `;
    })
    .join("");
}

function changePage(page) {
  currentPage = page;
  displayAlumni(currentPage);
}

// Initially display the first page
displayAlumni(currentPage);

function toggleSearchButton(input) {
  const searchButton = document.getElementById("search-button");
  searchButton.disabled = input.value.trim() === "";
}
