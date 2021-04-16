import React from 'react';
import Column from './components/Column';
import Task from './components/Task';
import NewTask from './components/NewTask';

function App() {
  return (
    <div>

      <div className="title">
        <h1>Pensieve Kanban</h1>
      </div>

      <div>
        <NewTask />
      </div>

      <div className="flexbox">
        <Column 
          id="column-1"
          className="column"
          url=""
          status="To Do">
          <Task
            id="task-1"
            className="task"
            draggable="true">
          </Task>
        </Column>

        <Column
          id="column-2" 
          className="column"
          url=""
          status="In Progress">
          <Task
            id="task-2"
            className="task"
            draggable="true">
          </Task>
        </Column>

        <Column
          id="column-3"
          className="column"
          url=""
          status="Completed">
          <Task
            id="task-3"
            className="task"
            draggable="true">
          </Task>
        </Column>
      </div>

    </div>
  );
}

export default App;
