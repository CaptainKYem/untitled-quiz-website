import React from "react"
import ReactDOM from 'react-dom';

// This is for multiple choice quizzes specifically
// Need way to select question type
// Need to add points for questions
// Need to potentially stylize the page

class QuestionForm extends React.Component {
constructor(props) {
  super(props);
  this.state = {
      question: 'This is a question',
      incorrectAnswer1: "Wrong",
      incorrectAnswer2: "Wrong",
      incorrectAnswer3: "Wrong",
      correctAnswer: "Correct",
      count: 1,
    };
  // For implementation later on this.state = {points: "0"};
  // To keep track of number of questions
}
myClickHandler = (event) => {
  let nam = event.target.name;
  let val = event.target.value;
  this.setState({[nam]: val});
}
updateCount = () => {
  let nam = 'count';
  let val = this.state.count + 1;
  this.setState({[nam]: val});
}
render() {
  return (
    <div>
    <form >
    <h1>Create a Quiz</h1>
    <p>Question {this.state.count}</p>
    <input type='text' name = 'question'/>
    <p>Correct Answer:</p>
    <input type='text'name = 'correctAnswer'/>
    <p>Incorrect Answer:</p>
    <input type='text'name = 'incorrectAnswer1'/>
    <p>Incorrect Answer:</p>
    <input type='text'name = 'incorrectAnswer2'/>
    <p>Incorrect Answer:</p>
    <input type='text'name = 'incorrectAnswer3'/>
    <input type="button" onClick={this.myClickHandler,this.updateCount} value="Next Question"/>
    <input type="Submit" onSubmit={this.mySubmitHandler} value="Finish Quiz"/>

    </form>
    </div>
  );
}
}

export default QuestionForm
