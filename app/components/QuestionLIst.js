import React from 'react';
import QuestionListItem from './QuestionListItem';

const QuestionList = (props) => {
  
  const questionListItems = props.objs.map((obj, index) => {
    return <QuestionListItem 
              key={obj._id} 
              info={obj} 
              index={index}
              addInfo={props.addInfo}
              onDeleteList={props.onListDelete}
              onEditList={props.onListEdit}
              onGenerateUUID={props.onUUIDGenerate}
            />
  });

  return (
    <div>
      <h3 className="page-header">Interview Question Lists</h3>
      <table className="table" id="question-list-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Category</th>
            <th>#Quest</th>
            <th>Date</th>
            <th>Unique Link</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {questionListItems}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionList;