import React from 'react';
import { Provider } from 'react-redux'
import store from './store/store'
import './App.css'
import {Container, Typography, Box} from '@mui/material'
import AddHabitForm from './components/add-habit-form'
import HabitList from './components/habit-list'
import HabitStats from './components/habit-stats'
import store from './store/store'

const App: React.FC = () => {
  return (
      <Provider store={store}>
        <Container maxWidth='md'>
          <Typography component='h1' variant='h2' align='center'>
            Habit Tracker
          </Typography>
          <AddHabitForm />
        </Container>
      </Provider>
  )
}

export default App
