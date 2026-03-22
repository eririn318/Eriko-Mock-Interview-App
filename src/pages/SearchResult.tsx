import { technicalQuestions, behaviorQuestions } from "../util/questions";
import { useSearchParams } from "react-router-dom";
import {useState} from "react"
// import { LiaNeos } from "react-icons/lia";

function SearchResult() {
  const [searchParams] = useSearchParams();
  const [openIndex, setOpenIndex] = useState<number |null> (null)
  
  //"q" is http://localhost:5173/search?q=java
  const query = searchParams.get("q")?.toLowerCase() || "";
  
 const generateBehaviorQuestions = behaviorQuestions.map((q)=>({
  question:q,
  answer:""
 }))


//map technicalQuestion and behaviorQuestions
const allFilteredItems = [...technicalQuestions, ...generateBehaviorQuestions]

const filter = allFilteredItems.filter((item)=>{

    
 if (query === "") {
  // return ==>stop continue(do not go to next line)/do not display anything
  return
}
  return item.question.toLowerCase().includes(query)
})


  const toggleAnswer = (index:number) => {
    // If clicked question is already open, close it, Else, open it
      setOpenIndex(openIndex === index ? null: index)
  }

  return (
    <main className="min-h-screen dark:bg-zinc-800 dark:text-black flex flex-col  w-full border border-t-0 px-10 dark:border-white">
      <h1 className="text-3xl text-center text-bold mt-10 mb-5 dark:text-white">Search Result</h1>
     {/* map filter(line18) and display */}
      {/* <ul className="list-disc"> */}
     <section className="w-full max-w-[50rem] grow mx-auto flex flex-col gap-y-1  p-4">
         {/* <ul className="w-full max-w-2xl mx-auto min-h-90 py-5 border dark:border-white rounded-sm my-10 dark:bg-[#B0A4A4] shadow-2xl"> */}
       {/* if user type, show "Please enter a search question" */}
        {query === "" && <p className="text-center dark:text-white" >Please enter search a question</p>}

        {filter.map((item, index) => (
          <li className="flex flex-col justify-center border rounded dark:bg-[#B0A4A4] bg-[#FAF3F0] dark:text-white "
            key={index}
           
            >
          
             <div className="flex flex-col justify-center pl-5 p-3 ">
                 <p className="flex justify-between">{item.question} <span  onClick = { () => toggleAnswer(index)}  className="cursor-pointer pl-15">{item.answer && (openIndex === index ?  "▲": "▼") }</span> </p>
            </div>

        {openIndex === index && item.answer &&(
      
            <p className="pl-5 p-3 border-t-1 ">{item.answer}</p> 
           
          
        )
}
          </li>
        ))}
      {/* </ul> */}
      </section>
      </main>
  );
}

export default SearchResult;
