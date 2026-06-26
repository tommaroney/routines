import Container from "@mui/material/Container";
import RoutineActionCard from "../../components/RoutineActionCard"
import { useFetch } from "../../hooks/useFetch"
import type { Routine } from "../../types/Routine"

import AddIcon from '@mui/icons-material/Add';
import Divider from "@mui/material/Divider";
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import { useContext, useEffect, useState } from "react";
import RoutineFormDialog from "./components/RoutineFormDialog";
import { UserContext } from "../../contexts/UserContext";


export default function Routines() {
    const user = useContext(UserContext)

    const [data, loading, error] = useFetch<Routine[]>(`/routines/user/${user!.id}`);
    const [open, setOpen] = useState(false);
    const [routines, setRoutines] = useState<Routine[] | null>(null);

    useEffect(() => {
        setRoutines(data);
    }, [data])
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    function onClose(routine?: Routine) {
        if (routine && routines) setRoutines([...routines, routine]);
    }

    return (
        <Paper>
            <Typography variant="h1" gutterBottom sx={{ flexGrow: 1 }}>Routines</Typography>
            <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
                <AddIcon />
            </Fab>
            <RoutineFormDialog open={open} onClose={onClose}/>
            <Divider variant="middle" />
            <Container>
                {loading && <p>Loading...</p>}
                {error instanceof Error && <p>Error: {error.message}</p>}
                {routines && routines.map(({name, description}: Routine, index: number) => (
                    <RoutineActionCard key={index} name={name} description={description} />
                ))}
            </Container>
        </Paper>
    );


}
