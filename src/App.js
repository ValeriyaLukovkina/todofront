import './App.scss';
import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignIn from './components/login/signIn/SignIn';
import SignUp from './components/login/signUp/SignUp';
import ToDoContainer from './components/toDo/ToDoContainer';
import NavbarContainer from './components/navbar/NavbarContainer';
import ToDoWeekContainer from './components/toDo/toDoWeek/ToDoWeekContainer';
import ToDoDayContainer from './components/toDo/toDoDay/ToDoDayContainer';
import CalendarContainer from './components/calendar/CalendarContainer';
import ToDoCategoryContainer from './components/toDo/toDoCategory/ToDoCategoryContainer';

const App = ({ isAuth, setAuthUserData, initializedSuccess, getAllTasks, setCategories, }) => {
debugger
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData'))
    const dataCategories = JSON.parse(localStorage.getItem('userCategories'));
    if (data && data.token && dataCategories) {
      setAuthUserData(data.userId, data.userFirstName, data.userLastName, data.token, true);
      setCategories(dataCategories.categories);
      getAllTasks(data.userId);
      initializedSuccess();
    }
  }, [])

  return (
    <div className='fixed'>
      <div className={isAuth ? 'app_wrapper' : ''}>
        <BrowserRouter>
          {isAuth && <NavbarContainer />}
          <div className={isAuth ? 'app_wrapper_content' : ''}>
            <Routes>
              <Route path='/todofront/' element={!isAuth && <SignIn />} />
              <Route path='/todofront/signin' element={isAuth ? <Navigate replace to={'/todofront/'} /> : <SignIn />} />
              <Route path='/todofront/signup' element={isAuth ? <Navigate replace to={'/todofront/'} /> : <SignUp />} />
              <Route path='/todofront/tasks' element={<ToDoContainer />} />
              <Route path='/todofront/week' element={<ToDoWeekContainer />} />
              <Route path='/todofront/day' element={<ToDoDayContainer />} />
              <Route path='/todofront/category/:name' element={<ToDoCategoryContainer />} />
              <Route path='/todofront/calendar' element={<CalendarContainer />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;


// !isAuth ? <Navigate replace to={'/'} /> : 