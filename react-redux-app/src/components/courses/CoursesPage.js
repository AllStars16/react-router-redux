import React from "react";

class CoursesPage extends React.Component {

    //  1. First option - the classic approach with the word "this" and standard JS functions

/*     constructor(props) {
        super(props);

        this.state = {
            course: {
                title: ""
            }
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const course = { ...this.state.course, title: event.target.value };
        this.setState({ course: course });
    } */

    //!!!!! We can use arrow function instead of the standard handleChange(event) function + binding!!! 
    //If we use arrow function we don't need to
    //bind it because in arrow functions the word "this" means the context and not the function itself !!!!!!!!!!!


    // 2. Second option - less code with arrow functions and without the word "this"

    state = {
        course: {
            title: ""
        }
    };

    handleChange = event => {
        const course = { ...this.state.course, title: event.target.value };
        this.setState({ course: course });
    }

    handleSubmit = event => {
        event.preventDefault();
        alert(this.state.course.title);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input type="text" onChange={this.handleChange} value={this.state.course.title} />
                <input type="submit" value="Save" />
            </form>
        )
    }
}

export default CoursesPage;