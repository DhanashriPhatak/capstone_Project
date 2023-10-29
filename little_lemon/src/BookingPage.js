import { useReducer } from 'react';
import BookingForm from './BookingForm';

function BookingPage(){

    function initializeTimes(){
        const currentDate = new Date();
        let availableTimes = [];
        fetch("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js/fetchAPI?date="+currentDate)
        .then((res) => res.json())
        .then((json) => {
            availableTimes=json;
        });
        return  availableTimes;
    }
    

      const updateTimes  = (state, action) => {
        console.log("Inside udpate time");
        // switch (action.type) {
        //   case "COMPLETE":
        //     return state.map((time) => {
        //       if (todo.id === action.id) {
        //         return { ...todo, complete: !todo.complete };
        //       } else {
        //         return todo;
        //       }
        //     });
        //   default:
        //     return state;
        // }
        return state;
      };
      
        
      const [time, dispatch] = useReducer(updateTimes, initializeTimes());

    return(
        <BookingForm availableTimes={time} dispatch={dispatch}></BookingForm>
    );
}

export default BookingPage;