import { useContext, useEffect, useState } from "react";
import type { Task } from "../../types/Task";
import { UserContext } from "../../contexts/UserContext";
import { useFetch } from "../../hooks/useFetch";

import AddIcon from '@mui/icons-material/Add';
import Divider from "@mui/material/Divider";
import Fab from '@mui/material/Fab';
import Typography from "@mui/material/Typography";
import TaskFormDialog from "./components/TaskFormDialog";
import Container from "@mui/material/Container";
import TaskActionCard from "../../components/TaskActionCard";
import Page from "../../components/Page";
import Grid from "@mui/material/Grid";

export default function Task() {
        const user = useContext(UserContext)
    
        const [data, loading, error] = useFetch<Task[]>(`/api/user/${user!.id}/tasks`);
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
            setOpen(false);
        }
    
        return (
            <Page>
                <Grid sx={{ alignItems: "center", justifyContent: "center"}} container spacing={2}>
                    <Grid size={8} offset={2}>
                        <Typography variant="h1" sx={{ flexGrow: 1 }}>Tasks</Typography>
                    </Grid>
                    <Grid size={2}>
                        <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
                            <AddIcon />
                        </Fab>
                    </Grid>
                </Grid>
                <TaskFormDialog open={open} onClose={onClose}/>
                <Divider variant="middle" />
                <Grid sx={{ padding: "20px 20px" }} container spacing={2}>
                    {loading && <p>Loading...</p>}
                    {error instanceof Error && <p>Error: {error.message}</p>}
                    {tasks && tasks.map(({name, description}: Task, index: number) => (
                        <Grid size={{ sm: 12, md: 6, lg: 4 }}>
                            <TaskActionCard key={index} name={name} description={description} />
                        </Grid>
                    ))}
                </Grid>
            </Page>
        );
}