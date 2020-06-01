/* export function createCourse(course) {
    return { type: "CREATE_COURSE", course: course }
} */

//the following is a shortened version of the upper one - 
// course: course can be replaced by course only because the left side and the rigth side are the same

export function createCourse(course) {
    return { type: "CREATE_COURSE", course }
}