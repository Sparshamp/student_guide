📚 Student Guide Web App

This is a React-based web application designed to serve as a student guide platform.

Vercel-app link: https://student-guide-psi.vercel.app/

📁 Project Structure
my-app/
├── public/
├── src/
│   └── project/
│       ├── [All components, images, and frontend logic]
│   ├── App.js
│   ├── index.js
├── server/
│   └── server.js
├── package.json

- All UI components and related assets are inside the src/project/ folder.
- The backend logic is handled in the server/server.js file.

🚀 How to Run the Project Locally

You’ll need two terminals to run the frontend and backend simultaneously.

1. Start the Server

In the first terminal, navigate to the project root and run:

node server/server.js

2. Start the React Frontend
   
In the second terminal, run:

npm start

This will launch the React development server on http://localhost:3000.

⚙️ Prerequisites
- Node.js installed
- npm installed (node -v and npm -v to check)

🛠️ Installation

Clone the repo and install dependencies:

git clone https://github.com/Sparshamp/student_guide.git
cd student_guide
npm install
