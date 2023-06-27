import {useEffect, useState} from "react";

export type Answer = string | number;
export type Choices = Answer[];

export type Question = {
  question: string;
  choices: Choices;
  answer: Answer;
};

const defaultQuestions: Question[] = [
  {
    question: "How many months are in a year?",
    choices: [25, 365, 100, 12],
    answer: 12,
  },
  {
    question: "2+2=",
    choices: [5, 7, 8, 4],
    answer: 4,
  },
  {
    question: "Which is a greeting?",
    choices: [
      "Hello",
      "Today is a good day",
      "Food is good",
      "None of the above",
    ],
    answer: "Hello",
  },
  {
    question: "How many days are in October?",
    choices: [28, 29, 30, 31],
    answer: 31,
  },
  {
    question: "Purple can be created from combining: ",
    choices: [
      "yellow and blue",
      "black and white",
      "blue and orange",
      "red and blue",
    ],
    answer: "red and blue",
  },
];

export default function useQuestions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  useEffect(() => {
    //store questions online and fetch them here
    setQuestions(defaultQuestions);
  }, []);
  return questions;
}
