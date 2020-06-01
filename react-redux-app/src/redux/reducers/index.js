import { combineReducers } from "redux";
//if we use "export default" in courseReducer instead of just "export" we can name the function inside courseReducer.js 
//as we want and thus we named it "courses"
import courses from "./courseReducer";

const rootReducer = combineReducers({
    //instead of courses: courses we can use just courses
    courses
})

export default rootReducer;