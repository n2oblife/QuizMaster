import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

function ViewScores() {
  const { id } = useParams();
  const [scores, setScores] = useState([]);

  useEffect(() => {
    async function fetchScores() {
      const res = await api.get(`/score/${id}`);
      setScores(res.data);
    }
    fetchScores();
  }, [id]);

  return (
    <table>
      <thead>
        <tr>
          <th>User</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {scores.map(score => (
          <tr key={score._id}>
            <td>{score.user.username}</td>
            <td>{score.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ViewScores;
