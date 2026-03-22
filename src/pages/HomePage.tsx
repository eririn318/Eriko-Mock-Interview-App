import { technicalQuestions, behaviorQuestions, comboQuestions } from "../util/questions";
import { useState, useEffect } from "react";
import { IoMdArrowForward } from "react-icons/io";




// Define the type for our question objects
interface QuestionItem { 
  question: string;
  answer: string;
}

function HomePage() {

	//current question
	const [currentQuestion, setCurrentQuestion] = useState<QuestionItem | string>("");

	// //combineQuestion
	// const [comboQuestions] = useState< QuestionItem[] | string[]> ([
	// 	...technicalQuestions,
	// 	...behaviorQuestions,
	// ]);
	const [showResource, setShowResource] = useState(false);

	//q&a capability
	const [showAnswerButton, setShowAnswerButton] = useState(false)
	const [showAnswer, setShowAnswer] = useState(false)

	//get a random question
	const getRandomQuestionNumber = (arr: (string | QuestionItem)[]) => {
		//clear the show button for next question
		setShowAnswerButton(false)
		//get the random number from array length
		const getNumber = Math.floor(Math.random() * arr.length);
		console.log(getNumber, arr[getNumber]);
		//check type of arr question
		if (typeof arr[getNumber] !=="string") {
			setShowAnswerButton(true)
		}
		//set the question to currentQuestion state
		setCurrentQuestion(arr[getNumber]);
		//hide the answer for the next question
		setShowAnswer(false)
	};



	useEffect(() => {
		getRandomQuestionNumber(comboQuestions);
		  // eslint-disable-next-line react-hooks/exhaustive-deps


	}, []);

	const handleNext = () => {
		getRandomQuestionNumber(comboQuestions);
	};
	const technicalNext = () => {
		getRandomQuestionNumber(technicalQuestions);
	};
	const behaviorNext = () => {
		getRandomQuestionNumber(behaviorQuestions);
	};

	return (
		<main className="min-h-screen dark:bg-zinc-800 dark:text-white flex flex-col  border border-t-0 px-10">
			<section className="w-full max-w-[35rem]  grow mx-auto flex flex-col gap-y-8 justify-center items-center p-4 border rounded-sm my-10 dark:bg-[#B0A4A4] bg-[#FAF3F0] shadow-xl">
				<h1 className="text-2xl font-bold text-center">{typeof currentQuestion !== "string" ? currentQuestion.question : currentQuestion}</h1>
				{showAnswer && <p className="w-3/5">{typeof currentQuestion !== "string" ? currentQuestion.answer : ''}</p>}
                
                {showAnswerButton && <button 
					className="flex gap-1 px-3 py-1 border-1 rounded-sm bg-[#FFFBE9] text-black cursor-pointer"
					onClick={() =>setShowAnswer(prev=>!prev)}>
					{!showAnswer ? "Show Answer" : "Hide Answer"} 
                   <IoMdArrowForward className="mt-1" /> 
                

				</button>
				}
				
				<section className="flex flex-col md:flex-row md:gap-x-4 gap-y-4">
					<button
						className="px-4 py-2 border-1 rounded-sm bg-[#AD8B73] cursor-pointer"
						onClick={technicalNext}>
						Technical
					</button>

					<button
						className="px-4 py-2 border-1 rounded-sm bg-[#CEAB93] cursor-pointer"
						onClick={behaviorNext}>
						Behavior
					</button>
					<button
						className="px-4 py-2 border-1 rounded-sm bg-[#E3CAA5] cursor-pointer"
						onClick={handleNext}>
						Random
					</button>
				</section>
			</section>
			<footer className="border-t dark:border-white border-black pt-2 pb-4 px-4">
				<div className="max-w-[85rem] mx-auto">
					<p
						className="flex gap-x-2 items-center cursor-pointer"
						onClick={() => setShowResource((prev) => !prev)}>
						{!showResource ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="size-6">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 4.5v15m7.5-7.5h-15"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="size-6">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M5 12h14"
								/>
							</svg>
						)}
						Resource
					</p>
					{showResource && (
						<div>
							<ul className="ps-8">
								<li>
									<a
										href="https://www.frontendinterviewhandbook.com/trivia"
										target="_blank"
										className="underline text-blue-500">
										Technical Questions
									</a>
								</li>
								<li>
									<a
										href="https://docs.google.com/document/d/1FOFw3xZ2ZvBcMgUUW7Co17lEixwKvATfjSjZl-MiThc/edit?usp=sharing"
										target="_blank"
										className="underline text-blue-500">
										Behavior Questions
									</a>
								</li>
								<li>
									<a
										href="https://docs.google.com/document/d/1p7DhCsLOMMybYfePWLlD1-_8KU20zkBoArH4pnW1o3c/edit?usp=sharing"
										target="_blank"
										className="underline text-blue-500">
										100Devs Interview Questions
									</a>
								</li>
							</ul>
						</div>
					)}
				</div>
			</footer>
		</main>
	);
}

export default HomePage
