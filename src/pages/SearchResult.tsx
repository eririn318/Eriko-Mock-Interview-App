// 

// 

import { technicalQuestions, behaviorQuestions } from "../util/questions";
import { useSearchParams } from "react-router-dom";
import {useState} from "react"

function SearchResult() {
  const [searchParams] = useSearchParams();
  const [openIndex, setOpenIndex] = useState(null)
  
  //"q" is http://localhost:5173/search?q=java
  const query = searchParams.get("q")?.toLowerCase() || "";
  
 const generateBehaviorQuestions = behaviorQuestions.map((q)=>({
  question:q,
  answer:""
 }))


//map technicalQuestion and behaviorQuestions
const allFilteredItems = [...technicalQuestions, ...generateBehaviorQuestions]

const filter = allFilteredItems.filter((item)=>{
  return item.question.toLowerCase().includes(query)
})


  const toggleAnswer = (index) => {
    // If clicked question is already open, close it, Else, open it
      setOpenIndex(openIndex === index ? null: index)
  }

  return (
    <main className="min-h-screen dark:bg-zinc-800 dark:text-black flex flex-col bg-[#F5E9D8] w-full">
     {/* map filter(line18) and display */}
      <ul className="list-disc">
        {filter.map((item, index) => (
          <li className="flex flex-col justify-center border rounded my-1 mx-10 "
            key={index}
            onClick = { () => toggleAnswer(index)} 
            >
          
             <div className="flex justify-center pl-5 p-3 bg-[#FFFBE9]">
                 <p >{item.question} <span className="cursor-pointer ">{item.answer && (openIndex === index ?  "▲": "▼") }</span> </p>
            </div>

        {openIndex === index && item.answer &&(
      
            <p className="text-center pl-5 p-3 border-y-1 bg-[#B6A28E]">{item.answer}</p> 
           
          
        )
}
          </li>


        ))}
      </ul>
      </main>
  );
}

export default SearchResult;
