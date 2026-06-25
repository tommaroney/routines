import { useContext, useEffect, useState } from "react";
import type { Task } from "../../types/Task";
import { UserContext } from "../../contexts/UserContext";
import { useFetch } from "../../hooks/useFetch";

import AddIcon from '@mui/icons-material/Add';
import Divider from "@mui/material/Divider";
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import TaskFormDialog from "./components/TaskFormDialog";
import Container from "@mui/material/Container";

export default function Task() {
        const user = useContext(UserContext)
    
        const [data, loading, error] = useFetch<Task[]>(`/tasks/user/${user!.id}`);
        const [open, setOpen] = useState(false);
        const [tasks, setTasks] = useState<Task[] | null>(null);
    
        useEffect(() => {
            setTasks(data);
        }, [data])
        
        const handleClickOpen = () => {
            setOpen(true);
        };
    
        function onClose(task?: Task) {
            if (task && tasks) setTasks([...tasks, task]);
        }
    
        return (
            <Paper>
                <Typography variant="h1" gutterBottom sx={{ flexGrow: 1 }}>Tasks</Typography>
                <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
                    <AddIcon />
                </Fab>
                <TaskFormDialog open={open} onClose={onClose}/>
                <Divider variant="middle" />
                <Container>
                    {loading && <p>Loading...</p>}
                    {error instanceof Error && <p>Error: {error.message}</p>}
                    {tasks && tasks.map(({name, description}: Task, index: number) => (
                        <TaskActionAreaCard key={index} name={name} description={description} />
                    ))}
                </Container>
            </Paper>
        );
}