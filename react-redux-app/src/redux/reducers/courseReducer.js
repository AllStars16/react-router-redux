export default function courseReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_COURSE":
            return [...state, { ...action.course }];
        //if the reducer receives an action that it doesn't care about, it should return the unchanged state
        default:
            return state;
    }
}