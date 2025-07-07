import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { v4 as uuidv4 } from 'uuid';
import type { Task } from '../types/Task';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Stack,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';

const collaborators = ['Lucía Gómez', 'Tomás Herrera', 'Micaela Sosa', 'Juan Pérez'];

const TaskForm: React.FC = () => {
  const { addTask } = useTaskContext();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [assignee, setAssignee] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !deadline || !assignee) return;

    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      deadline,
      assignee,
    };

    addTask(newTask);
    setTitle('');
    setDescription('');
    setDeadline('');
    setAssignee('');
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom textAlign="center">
            📝 Asignar tarea
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <TextField
                label="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                multiline
                rows={3}
                required
              />
              <TextField
                label="Fecha límite"
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                InputLabelProps={{ shrink: true }}
                required
              />

              <FormControl fullWidth required>
                <InputLabel>Colaborador</InputLabel>
                <Select
                  value={assignee}
                  label="Colaborador"
                  onChange={(e) => setAssignee(e.target.value)}
                >
                  {collaborators.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Button type="submit" variant="contained" color="primary" fullWidth>
                Asignar tarea
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TaskForm;
