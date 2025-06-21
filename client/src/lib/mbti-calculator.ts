import { MbtiAnswer, MbtiResult } from "@shared/schema";

export function calculateMbtiResult(answers: MbtiAnswer[]): MbtiResult {
  // Initialize scores
  const scores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  // Calculate scores based on answers
  answers.forEach(answer => {
    scores[answer.value as keyof typeof scores] += answer.weight;
  });

  // Determine personality type
  const type = 
    (scores.E >= scores.I ? "E" : "I") +
    (scores.S >= scores.N ? "S" : "N") +
    (scores.T >= scores.F ? "T" : "F") +
    (scores.J >= scores.P ? "J" : "P");

  // Calculate percentages for each dimension
  const percentages = {
    EI: Math.round((scores.E / (scores.E + scores.I)) * 100),
    SN: Math.round((scores.S / (scores.S + scores.N)) * 100),
    TF: Math.round((scores.T / (scores.T + scores.F)) * 100),
    JP: Math.round((scores.J / (scores.J + scores.P)) * 100)
  };

  return {
    type,
    scores,
    percentages
  };
}
