import { createStore } from "redux";


const initialState = {
    vacationsData : [] , 
    userId : null ,
    userRole : null,
    name : "",
    currentVacation:{},
    currentTab : 0
}
const store = createStore(mainReducer);

function mainReducer(state = initialState, action) {

    switch (action.type) {

        case "vacations data": {
            return { ...state, vacationsData: action.payload };
        }
        case "user id": {
            return { ...state, userId: action.payload };
        }
        case "user role": {
            return { ...state, userRole: action.payload };
        }
        case "name of user": {
            return { ...state, name: action.payload };
        }
        case "current vacation": {
            return { ...state, currentVacation: action.payload };
        }
        case "current Tab": {
            return { ...state, currentTab: action.payload };
        }

        default: {
            return state;
        }

    }

}



export default store;