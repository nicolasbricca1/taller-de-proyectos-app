import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Divider,
} from '@mui/material';

const TaskList: React.FC = () => {
  const { tasks } = useTaskContext();

  return (
    <Box sx={{ maxWidth: 600, margin: '40px auto' }}>
      <Typography variant="h6" component="h3" gutterBottom>
        📌 Tareas asignadas
      </Typography>

      {tasks.length === 0 ? (
        <Typography color="text.secondary">No hay tareas asignadas aún.</Typography>
      ) : (
        <Stack spacing={3}>
          {tasks.map((task) => (
            <Card key={task.id} variant="outlined">
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {task.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {task.description}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="primary">
                    👤 {task.assignee}
                  </Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  📅 {task.deadline}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default TaskList;
