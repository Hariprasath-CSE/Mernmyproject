import { useEffect, useState } from "react";
const Counter = () => {

//useEffect is a hook used to handle side effects in react
//Arguements:1.Callback function 2.Dependency Array
//3 Scenarios
//1.Empty depndency array:Runs only once after the component is mounted
//2.Non-empty dependency arry:Runs after the component is mounted
//and when the dependency array changes
//3.no dependency aray: runs after the componenet is mounted
// and whenever any state variable changes
const[count, setCount]=useState(0)
    useEffect(()=>{
        console.log('Outside useEffect')
    },[count])
    // const[count, setCount]=useState(0)
    // const[count2,setCount2]=useState(0);
    const Increment=()=>{
        console.log("Increment button Clicked");
        setCount(count+1);
    };
    const Decrement=()=>{
        console.log("Decrement Button Clicked");
        setCount(count-1);

    };
    // const Increment2=()=>{
    //     console.log("Increment button Clicked");
    //     setCount(count2+1);
    // };
    // const Decrement2=()=>{
    //     console.log("Decrement Button Clicked");
    //     setCount(count2-1);

    // };
    return (<>
        <div className="w-[400px] text-3xl mx-auto flex flex-col justify-center items-center p-4 rounded-md shadow-md border-2">
            <h1 className="text-2xl mb-2">Counter</h1>
            <p className="text-5xl font-bold">{count}</p>
            <div className="flex gap-3">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={Increment}>Increment</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={Decrement}>Decrement</button>
                    
            </div>

        </div>
    </>
    );
}
export default Counter;
