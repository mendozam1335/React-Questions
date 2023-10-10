import React from "react";
import SingleQuestion from "./SingleQuestion";
const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <article className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </article>
  );
};

export default Questions;
