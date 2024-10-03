import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

function TakeQuiz() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    async function fetchQuiz() {
      const res = await api.get(`/quiz/${id}`);
      setQuiz(res.data);
    }
    fetchQuiz();
  }, [id]);

  useEffect(() => {
    if (quiz) {
      // Shuffle questions array
      const shuffledQuestions = [...quiz.questions].sort(() => Math.random() - 0.5);
      setQuiz({ ...quiz, questions: shuffledQuestions });
    }
  }, [quiz]);

  // ... rest of component code
}
