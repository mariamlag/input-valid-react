import { FirstComponentCont, FirstLearnDiv } from '../themes/Input';
import ValidInput from './ValidInput';


function textComp (){
    return(
        <FirstComponentCont>   
            <FirstLearnDiv>
                <h1>
                    Learn to code by watching others
                </h1>
                <p>
                    See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. 
                </p>
            </FirstLearnDiv>
           
            <div>
                <ValidInput/>
            </div>
        </FirstComponentCont>
    )
};
// const styles = {
//     FirstDiv: {
//         display: "flex",
//         flexDirection: "column" as const,
//         alignItems: "center",
//         justifyContent: "center",
//     }
    

// }
export default textComp;