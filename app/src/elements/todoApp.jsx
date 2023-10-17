import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [inputText, setInputText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const [hoveredTodoId, setHoveredTodoId] = useState(null);

  const addTodo = (text) => {
    if (text.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: text,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputText('');
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo(inputText);
    }
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const clearCompleted = () => {
    const filteredTodos = todos.filter((todo) => !todo.completed);
    setTodos(filteredTodos);
  };

  const handleMouseEnter = (id) => {
    setHoveredTodoId(id);
  };

  const handleMouseLeave = () => {
    setHoveredTodoId(null);
  };

  const filterTodos = (filter) => {
    setFilter(filter);
  };

  const getCheckboxImage = (completed) => {
    return completed
      ? <img src={require("../img/completed.png")} alt="completed" />
      : <img src={require("../img/completedhover.png")} alt="completed" style={{ width: "24px" }} />;
  };
  const darkModeCheckboxImage = (completed) => {
    return completed
      ? <img src={require("../img/completed.png")} alt="completed" />
      : <img src={require("../img/circle.png")} />
  }
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') {
      return !todo.completed;
    } else if (filter === 'completed') {
      return todo.completed;
    }
    return true;
  });

  return (
    <div className={`todo-app ${darkMode ? 'dark-mode' : ''}`}>
      <div className="todo-app-content">
        <div className="todo-app-title-mode">
          <div className="todo-app-title">
            <h2>TODO</h2>
          </div>
          <div className="todo-app-mode">
            {darkMode ? ( 
              <img 
              src={require("../img/sun.png")} 
              alt="sun svg" 
              onClick={() => setDarkMode(!darkMode)}
              />
            ) : (
              <img
                src={require("../img/moon.png")}
                alt="moon svg"
                onClick={() => setDarkMode(!darkMode)}
              />
            )}
          </div>
        </div>
        <div className="todo-app-main">
          <div className= {`todo-app-input ${darkMode ? 'dark-mode' : ''}`}>
            <input
              type="text"
              placeholder="Create a new todo..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleInputKeyPress}
            />
          </div>
          {window.innerWidth > 540 ? (
            <div className={`todo-app-list ${darkMode ? 'dark-mode' : ''}`}>
            <div className="todo-list">
              {filteredTodos.map((todo) => (
                <div
                  key={todo.id}
                  className={`todo-item  ${darkMode ? 'dark-mode' : ''}`}
                  onMouseEnter={() => handleMouseEnter(todo.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="todo-item-main">
                    <div
                      onClick={() => toggleComplete(todo.id)}
                      className="todo-app-complete-button"
                      style={{ userSelect: "none" }}
                    >
                      {darkMode ? darkModeCheckboxImage(todo.completed) : getCheckboxImage(todo.completed)}
                    </div>
                    <div className={`todo-app-item-paragraph ${darkMode ? 'dark-mode' : ''}`}>
                      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
                    </div>
                  </div>
                  <div className="todo-app-item-remove">
                    {hoveredTodoId === todo.id && (
                      <img
                        src={require("../img/x.png")}
                        onClick={() => deleteTodo(todo.id)}
                        className="delete-button"
                        style={{ userSelect: "none" }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="todo-bottom">
              <div className="todo-filter">
                <div className="todo-items-counter">
                  {todos.length - todos.filter((todo) => todo.completed).length} items left
                </div>
              </div>
              <div className="todo-items-filter">
                <ul>
                  <li onClick={() => filterTodos('all')} className={`todo-items-filter-list ${filter === 'all' ? 'active' : ''} ${darkMode ? 'dark-mode' : ''}`}>All</li>
                  <li onClick={() => filterTodos('active')} className={`todo-items-filter-list ${filter === 'active' ? 'active' : ''} ${darkMode ? 'dark-mode' : ''}`}>Active</li>
                  <li onClick={() => filterTodos('completed')} className={`todo-items-filter-list ${filter === 'completed' ? 'active' : ''} ${darkMode ? 'dark-mode' : ''}`}>Completed</li>
                </ul>
              </div>
              <div className={`todo-items-clearer ${darkMode ? 'dark-mode' : ''}`}>
                <span onClick={clearCompleted}>Clear Completed</span>
              </div>
            </div>
          </div>
          ) : (
            <div className={`todo-app-list ${darkMode ? 'dark-mode' : ''}`}>
            <div className="todo-list">
              {filteredTodos.map((todo) => (
                <div
                  key={todo.id}
                  className={`todo-item  ${darkMode ? 'dark-mode' : ''}`}
                  onMouseEnter={() => handleMouseEnter(todo.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="todo-item-main">
                    <div
                      onClick={() => toggleComplete(todo.id)}
                      className="todo-app-complete-button"
                      style={{ userSelect: "none" }}
                    >
                      {darkMode ? darkModeCheckboxImage(todo.completed) : getCheckboxImage(todo.completed)}
                    </div>
                    <div className={`todo-app-item-paragraph ${darkMode ? 'dark-mode' : ''}`}>
                      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
                    </div>
                  </div>
                  <div className="todo-app-item-remove">
                    {hoveredTodoId === todo.id && (
                      <img
                        src={require("../img/x.png")}
                        onClick={() => deleteTodo(todo.id)}
                        className="delete-button"
                        style={{ userSelect: "none" }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="todo-bottom">
              <div className="todo-filter">
                <div className="todo-items-counter">
                  {todos.length - todos.filter((todo) => todo.completed).length} items left
                </div>
              </div>
              <div className={`todo-items-clearer ${darkMode ? 'dark-mode' : ''}`}>
                <span onClick={clearCompleted}>Clear Completed</span>
              </div>
            </div>
            <div className="todo-items-filter-responsive">
                <ul>
                  <li onClick={() => filterTodos('all')} className={`todo-items-filter-list ${filter === 'all' ? 'active' : ''} ${darkMode ? 'dark-mode' : ''}`}>All</li>
                  <li onClick={() => filterTodos('active')} className={`todo-items-filter-list ${filter === 'active' ? 'active' : ''} ${darkMode ? 'dark-mode' : ''}`}>Active</li>
                  <li onClick={() => filterTodos('completed')} className={`todo-items-filter-list ${filter === 'completed' ? 'active' : ''} ${darkMode ? 'dark-mode' : ''}`}>Completed</li>
                </ul>
              </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
