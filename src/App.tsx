import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';
import { Box, Container } from '@mui/material';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <TaskProvider>
      <Header />
      <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', py: 5 }}>
        <Container maxWidth="md">
          <TaskForm />
          <TaskList />
        </Container>
      </Box>
    </TaskProvider>
  );
};

export default App;
