import React from "react"
import Header from "./Header";
import Footer from "./Footer";
import QuestionForm from "./QuestionForm";

class CreateQuizPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <QuestionForm/>
        <Footer/>
      </ React.Fragment >
    )
  }
}
export default CreateQuizPage
