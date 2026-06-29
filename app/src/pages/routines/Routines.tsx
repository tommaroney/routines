import RoutineActionCard from "../../components/RoutineActionCard"
import { useFetch } from "../../hooks/useFetch"
import type { Routine } from "../../types/Routine"

import Divider from "@mui/material/Divider";
import { useContext, useEffect, useState } from "react";
import RoutineFormDialog from "./components/RoutineFormDialog";
import { UserContext } from "../../contexts/UserContext";
import Page from "../../components/Page";
import PageTitleArea from "../../components/PageTitleArea";
import Grid from "@mui/material/Grid";


export default function Routines() {
    const user = useContext(UserContext)

    const [data, loading, error] = useFetch<Routine[]>(`/api/user/${user!.id}/routines`);
    const [open, setOpen] = useState(false);
    const [routines, setRoutines] = useState<Routine[]>([]);

    useEffect(() => {
        if (data) setRoutines(data);
    }, [data]);
    
    const openDialog = () => {
        setOpen(true);
    };

    function onClose(routine?: Routine) {
        if (routine && routines) setRoutines([...routines, routine]);
        setOpen(false);
    }

    return (
        <Page>
            <PageTitleArea onNewClick={openDialog} pageTitle={"Routines"}/>
            <RoutineFormDialog open={open} onClose={onClose}/>
            <Divider variant="middle" />
            <Grid sx={{ padding: "20px" }} container spacing={2}>
                {loading && <p>Loading...</p>}
                {error instanceof Error && <p>Error: {error.message}</p>}
                {routines.map(({name, description, imageUrl}: Routine, index: number) => (
                    <Grid key={index} size={{ sm: 12, md: 6, lg: 4 }}>
                        <RoutineActionCard name={name} description={description} imageUrl={imageUrl}/>
                    </Grid>
                ))}
            </Grid>
        </Page>
    );


}
