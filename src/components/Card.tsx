import { useState} from "react";
export default function Card({imgSrc, title, author, desc}){
    const [show, setShow] = useState(false);

    return <div className=" flex flex-col justify-center items-center shadow-xl rounded-xl gap-4 hover:rotate-3 transition-transform duration-300 cursor-pointer">
        <img className="size-95 rounded-t-xl" src={imgSrc} alt ="Currents"/>
        <div className="w-full flex flex-col gap-2 px-4 py-2 min-w-0">
            <header text={title} />
            <span>{author}</span>
            <p className={`max-w-[30ch] ${show ? "" : "truncate"}`}>{desc}</p>
            <button onClick={() => setShow((prev) => !prev)}>
                {show ? "Hide Details" : "Show Details"}
            </button>
        </div>
    </div>
}