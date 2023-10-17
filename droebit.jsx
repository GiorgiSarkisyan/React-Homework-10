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
