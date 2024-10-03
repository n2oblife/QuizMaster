# My Quiz App

A web application for creating and taking quizzes.

## Features

* Create quizzes with multiple-choice questions and file uploads
* Take quizzes and submit scores
* View scores for a quiz
* User authentication with JWT

## Technologies Used

* Front-end: React, HTML, CSS
* Back-end: Node.js, Express, MongoDB

## Getting Started

1. Clone the repository: `git clone https://github.com/n2oblife/QuizMaster.git`
2. Install dependencies: `cd my-quiz-app && npm install`
3. Set up environment variables: create a `.env` file with the following variables:
   * `MONGO_URI`: the URI for your MongoDB database
   * `JWT_SECRET`: a secret string for signing JWT tokens
4. Start the server: `npm start`
5. Open the app in your browser: `http://localhost:3000`
