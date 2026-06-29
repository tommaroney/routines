import { useContext, useEffect, useState } from "react";
import type { Task } from "../../types/Task";
import { UserContext } from "../../contexts/UserContext";
import { useFetch } from "../../hooks/useFetch";

import Divider from "@mui/material/Divider";
import TaskFormDialog from "./components/TaskFormDialog";
import TaskActionCard from "../../components/TaskActionCard";
import Page from "../../components/Page";
import Grid from "@mui/material/Grid";
import PageTitleArea from "../../components/PageTitleArea";

export default function Task() {
        const user = useContext(UserContext)
    
        const [data, loading, error] = useFetch<Task[]>(`/api/user/${user!.id}/tasks`);
        const [open, setOpen] = useState(false);
        const [tasks, setTasks] = useState<Task[]>([]);
    
        useEffect(() => {
            if (data) setTasks(data);
        }, [data]);
        
        const openDialog = () => {
            setOpen(true);
        };
    
        function onClose(task?: Task) {
            if (task && tasks) setTasks([...tasks, task]);
            setOpen(false);
        }
    
        return (
            <Page>
                <PageTitleArea onNewClick={openDialog} pageTitle={"Tasks"}></PageTitleArea>
                <TaskFormDialog open={open} onClose={onClose}/>
                <Divider variant="middle" />
                <Grid sx={{ padding: "20px" }} container spacing={2}>
                    {loading && <p>Loading...</p>}
                    {error instanceof Error && <p>Error: {error.message}</p>}
                    {tasks && tasks.map(({name, description}: Task, index: number) => (
                        <Grid key={index} size={{ sm: 12, md: 6, lg: 4 }}>
                            <TaskActionCard name={name} description={description} />
                        </Grid>
                    ))}
                </Grid>
            </Page>
        );
}