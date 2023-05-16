import React, {Component, useState} from "react";

import Form from "./from";

// class App extends Component {
//     render() {

//         return(
//             <div id="main">
//                {/* Do not remove the main div */}

//             </div>
//         )
//     }
// }

const App = () => {
    const [answer, setAnswer] = useState("");

    return(
        <div id="main">
          
           <Form 
                setAnswer = {setAnswer}
           />
           <h3 data-testid="answer">{answer}</h3>
        </div>
    )
}


export default App;
