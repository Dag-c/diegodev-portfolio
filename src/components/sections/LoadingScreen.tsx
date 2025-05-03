import { useEffect, useState } from "react";


type LoadingScreenProps = {
    onComplete: () => void;
  };
  
 export const LoadingScreen = ({onComplete}: LoadingScreenProps) => {
    const fullText = "<Hello word />";
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() =>{
            if(!isDeleting){
                setText(fullText.substring(0, index + 1));
                setIndex(prev => prev + 1);

                if(index + 1 === fullText.length){
                    setIsDeleting(true);
                }
            } else{
                setText(fullText.substring(0, index - 1));
                setIndex(prev => prev -1);

                if (index === 0){
                    setIsDeleting(false);

                    setTimeout(() =>{
                        onComplete();
                    }, 1000);
                }
            }
        }, 100);

        return () => clearTimeout(timeout);
    }, [index, isDeleting, fullText, onComplete]);
    
    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text}<span className="animate-blink ml-1">| </span>
            </div>
            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                    {" "}
                </div>
            </div>
        </div>
    );
    
 }