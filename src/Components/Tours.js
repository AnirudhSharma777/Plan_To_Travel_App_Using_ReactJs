import Card from "./Card";
function Tours({Tours,remove}){

    return (<div className="max-w-[1300px] mx-auto flex flex-col justify-center items-center">

    <div>
        <h1 className="font-medium m-[6vh] px-10 border-[7px] border-dashed border-blue-700 text-[3rem] text-center rounded-[20px]">Plan To Travel</h1>
    </div>
    <div className="flex flex-wrap justify-center items-center">
        {
            Tours.map((Tours) =>{
                return <Card {...Tours} remove={remove}></Card>
            })
        }
    </div>
    </div>);
}

export default Tours;