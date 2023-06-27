import { useEffect, useState } from "react";

import { shuffle } from "../helpers/array";

import type { Question } from "./useQuestions";

export default function useAnswer(question: Question) {
  const [selectionIndex, setSelectionIndex] = useState(-1);
  const [isCorrect, setIsCorrect] = useState(false);
  const [choices, setChoices] = useState(question.choices);
  const [answerIndex, setAnswerIndex] = useState(-1);
  // shuffle choices
  useEffect(() => {
    const newChoices = shuffle(question.choices);
    const newAnswerIndex = newChoices.findIndex(
      choice => choice === question.answer,
    );
    setChoices(newChoices);
    setAnswerIndex(newAnswerIndex);
  }, [question.choices, question.answer]);
  useEffect(() => {
    if (selectionIndex > -1) {
      setIsCorrect(selectionIndex === answerIndex);
    }
  }, [selectionIndex, answerIndex]);
  return {
    choices,
    isCorrect,
    selectionIndex,
    setSelectionIndex,
    answerIndex,
  };
}
