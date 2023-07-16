import React from "react";

interface QuestionProps {
  question: string;
  answer: string;
  toggleAnswer: (arg: string) => void;
  activeAnswer: string;
  half: boolean;
}
const Question: React.FC<QuestionProps> = ({question, answer, toggleAnswer, activeAnswer, half}) =>
{
    /** const handleClick = (event) => {
        toggleAnswer(event.target.value); // Pass the selected option to the parent component
    }; **/
    return <div className={`my-4 flex flex-col ${half === true ? 'items-center justify-center' : ''}`}>
        <button
          className={`${half === true ? 'w-3/4 lg:w-1/2' : 'w-full'} flex items-center justify-between bg-white hover:bg-gray-200 text-blue-950 font-semibold py-2 px-4 rounded relative`}
          onClick={() => toggleAnswer(`${answer}`)}
        >
          <span className="flex-1 text-left">{question}</span>
          <span className="flex items-center text-xl text-right">
            {activeAnswer === `${answer}` ? '\u25B2' : '\u25BC'}
          </span>
          <div className="h-1 bg-blue-950 absolute bottom-0 left-0 right-0"></div>
        </button>
        <div
          className={`bg-white shadow-sm p-4 ${half === true ? 'w-3/4 lg:w-1/2' : 'w-full'} ${activeAnswer === `${answer}` ? '' : 'hidden'}`}
        >
          <p>{answer}</p>
        </div>
      </div>;
}

export default Question;