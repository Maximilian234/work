import { useContext } from "react";
import {LogData} from '../../index'

export const Home = () => {

   

    const contexDats = useContext(LogData);

    console.log(contexDats);
 
    return (
        <div>   
            <h1>СТР. HOME</h1>
            <>
                {contexDats.data.map((el,index)=>(
                    <p key={index}>{el}</p>
                ))}
            </>
        </div>
    )
}

export default Home















 // const withLogger = (fn) => {
    //     return function (...args) {
    //         console.log(args);
    //         return fn(...args);
    //     }
    // }
   
    // const foo = (a,b) => a+b;
    // const bar = withLogger(foo);


    //            {/* <div>{bar(1,2)}</div> */}
