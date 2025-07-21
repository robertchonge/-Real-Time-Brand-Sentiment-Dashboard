📊 Real-Time Brand Sentiment Dashboard

A full-stack AI-powered tool for monitoring brand mentions across Twitter and news feeds, providing:

Real-time sentiment analysis,

AI-generated summaries,

Alerts on negative trends,

Word clouds and sentiment charts.



---

🛠️ Tech Stack

Layer	Technologies

Frontend	React.js (Next.js), Tailwind CSS, Chart.js, Socket.io Client
Backend API	Node.js (Express), Socket.IO, MongoDB, Axios, OpenAI API
AI Processing	OpenAI GPT-4o API (sentiment & summaries)
Deployment	Docker (both frontend & backend)



---

📁 Project Structure

project/
├── backend/                   # Express backend
└── frontend/                  # React frontend


---

⚙️ Backend Setup

Prerequisites:

Node.js

MongoDB (local or remote)

OpenAI API key


Setup:

cd backend
cp .env.example .env   # Set your MongoDB URI and OpenAI API key
npm install
npm start

Backend API + WebSocket server will run on:


http://localhost:8000

WebSocket Events:

new_mention: real-time mention object

alert: real-time risk alert




---

🎨 Frontend Setup

Prerequisites:

Node.js 18+


Setup:

cd frontend
npm install
npm run dev

Frontend will be available at:

http://localhost:3000

Features:

Real-time dashboard.

Sentiment doughnut chart.

Mock word cloud display.

Mention feed with AI summaries.

Real-time alerts when negative mentions spike.



---

🐳 Docker Deployment

Backend:

cd backend
docker build -t sentiment-backend .
docker run -p 8000:8000 sentiment-backend

Frontend:

cd frontend
docker build -t sentiment-frontend .
docker run -p 3000:3000 sentiment-frontend


---

🚀 Future Improvements

Replace mock streams with live Twitter API.

Real word cloud generation.

Multi-brand tracking support.

Admin interface for managing brands.

Mobile-optimized frontend (PWA).

WhatsApp alert integration.



---

📌 Author

Robert Chonge
📧 robertchonge07@gmail.com
