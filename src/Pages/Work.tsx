import React, {useReducer} from "react";

interface CounterState {
    count: number
  }
  
  type Actions = 'increment' | 'decrement'
  
  interface Action {
    type: Actions
  }

const Work:React.FC = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})

   
      function reducer(state: CounterState, action: Action): CounterState {
        switch (action.type) {
          case 'increment':
            return {count: state.count + 1};
          case 'decrement':
            return {count: state.count - 1};
        }
      }
   
   
  
  


    return(

        <>
            <h1>Work</h1>
                 <h1>Count {state.count}</h1>
                <button onClick={() => dispatch({type: 'increment'})}>Plus</button>
                 <button onClick={() => dispatch({type: 'decrement'})}>Minus</button>

       

        </>
    )
} 


export default Work