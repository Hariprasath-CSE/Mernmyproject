// import React, { useState } from "react";

// export default function Quiz() {
//   const questions = [
//     {
//       question: "Which team won the most matches in IPL history?",
//       options: ["MI", "CSK", "RCB", "KKR"],
//       answer: 0
//     },
//     {
//       question: "Who has the highest individual score in IPL?",
//       options: ["Rohit", "Kohli", "Gayle", "Buttler"],
//       answer: 2
//     },
//     {
//       question: "Which team has won the most IPL titles?",
//       options: ["CSK", "MI", "SRH", "RR"],
//       answer: 1
//     }
//   ];

//   const [index, setIndex] = useState(0);
//   const [selected, setSelected] = useState(null);
//   const [score, setScore] = useState(0);
//   const [finished, setFinished] = useState(false);

//   function handleSelect(optionIndex) {
//     setSelected(optionIndex);
//   }

//   function nextQuestion() {
//     if (selected === questions[index].answer) {
//       setScore(score + 1);
//     }

//     if (index + 1 < questions.length) {
//       setIndex(index + 1);
//       setSelected(null);
//     } else {
//       setFinished(true);
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
//       <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-xl">

//         {finished ? (
//           <div className="text-center">
//             <h1 className="text-2xl font-bold">Quiz Completed 🎉</h1>
//             <p className="text-lg mt-3">Your Score: {score}/{questions.length}</p>
//           </div>
//         ) : (
//           <>
//             <h2 className="text-xl font-bold mb-4">{questions[index].question}</h2>

//             <div className="flex flex-col gap-3">
//               {questions[index].options.map((opt, i) => (
//                 <button
//                   key={i}
//                   onClick={() => handleSelect(i)}
//                   className={`p-3 border rounded-lg text-left ${
//                     selected === i ? "bg-blue-500 text-white" : "bg-gray-100"
//                   }`}
//                 >
//                   {opt}
//                 </button>
//               ))}
//             </div>

//             <button
//               onClick={nextQuestion}
//               disabled={selected === null}
//               className={`mt-5 p-3 w-full rounded-lg font-bold ${
//                 selected === null
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-blue-600 text-white hover:bg-blue-700"
//               }`}
//             >
//               Next
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
