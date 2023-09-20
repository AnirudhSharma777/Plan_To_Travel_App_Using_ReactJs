import { useState } from "react";

function Card({id,name,image,info,price,remove}){
    const [readmore,setreadmore] = useState(false);
    const discription = readmore ? ` ${ info }`:` ${ info.substring(0,200) }.... `;

    function readMorehandler(){
        setreadmore(!readmore);
    }
    return (<div className="w-[400px] h-auto m-[1rem] p-[1rem] flex  flex-col rounded-[10px] shadow-2xl">
        <img src={image} alt="" className="w-[380px] aspect-square"></img>
        <div>
            <div className="ml-[5px] mt-[20px]">
                <h4 className="text-[#1faa59] text-[1.3rem] font-semibold">{price}</h4>
                <h4 className="text-[1.5rem] font-semibold">{name}</h4>
            </div>
            <div className="ml-[5px] font-normal">
                {discription}
                <span onClick={readMorehandler} className="cursor-pointer text-[#12b0e8] font-medium">
                    {readmore ? ` Show Less` : ` Read More`}
                </span>
            </div>
        </div>
        {/* <button  className="border-red-500 border-2 rounded-lg mt-[18px] py-[10px] px-[80px] font-bold bg-[#b4161b21] mx-12 hover:text-white hover:bg-red-600">
            Intrested
        </button> */}
        <button onClick={() =>{remove(id)}} className="border-red-500 border-2 rounded-lg mt-[18px] py-[10px] px-[80px] font-bold bg-[#b4161b21] mx-12 hover:text-white hover:bg-red-600">
            Not Intrested
        </button>
    </div>);
}

export default Card;