import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  const items = ['Drink Coffe', 'Learn React', 'Build Awesome App'];
  return (
    <ul>
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
      <li>{ items[2] }</li>
    </ul>
  );
};

const AppHeader = () => {
  return (
    <h1>My Todo List</h1>
  );
};

const SearchPanel = () => {

  const searchText = "Type here to search";
  const searchStyle = {
    fontSize: '20px'
  };

  return (
    <input placeholder = { searchText }
    className = "foo"
    htmlFor = "id" 
    style = { searchStyle }
    //disabled
    disabled = { false } />
  );
};

const App = () => {

  const isLoggedIn = true;
  const loginBox = <span>Log in please</span>;
  const welcomeBox = <span>Welcome Back</span>;
  const value = '<script>alert("")</script>';

  return (
    <div>
      {/* <span>{ (new Date()).toString() }</span> */}
      { isLoggedIn ? welcomeBox : loginBox }
      { value }
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));