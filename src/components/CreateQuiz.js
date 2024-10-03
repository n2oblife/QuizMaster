import React, { useState } from 'react';
import api from '../services/api';
import axios from 'axios';

function CreateQuiz() {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleFileUpload = async (event, questionIndex) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    const res = await axios.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    const newQuestions = [...questions];
    newQuestions[questionIndex].file = res.data.fileUrl;
    setQuestions(newQuestions);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await api.post('/quiz', { title, questions });
    // ... handle response
  };

  // ... rest of component code
}
