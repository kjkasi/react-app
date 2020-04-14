import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {

  const items = ['Learn React', 'Build Awesome App'];

  return (
    <ul>
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
    </ul>
  )
}

const AppHeader = () => {
  return (
    <h1>My Todo List</h1>
  )
}

const SearchPanel = () => {
  const searchText = 'Type here to search';
  const searchStyle = {
    fontSize: '25px'
  }
  return <input placeholder={ searchText }
                className="foo"
                htmlFor=""
                style={searchStyle} />
}

const App = () => {

  /* const isLoggedIn = false;
  const loginBox = <span>Log in please</span>;
  const nullBox = null;
  const welcomeBox = <span>Welcome Back</span>; */

  return (
    <div>
      {/* <span>{ (new Date()).toString() }</span>
      { loginBox }
      { nullBox } 
      { isLoggedIn ? null : loginBox }
      { isLoggedIn ? welcomeBox : loginBox }
      { true } 
      { false } */}
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));