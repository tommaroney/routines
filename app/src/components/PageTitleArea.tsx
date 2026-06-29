import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

type Props = {
    onNewClick?: () => void,
    pageTitle: String
}

export default function PageTitleArea({ onNewClick, pageTitle }: Props) {
    return (
        <Grid sx={{ alignItems: "center", justifyContent: "center"}} container spacing={2}>
            <Grid size={8} offset={2}>
                <Typography variant="h1" sx={{ flexGrow: 1 }}>{pageTitle}</Typography>
            </Grid>
            { onNewClick &&
                <Grid size={2}>
                    <Fab color="primary" aria-label="add" onClick={onNewClick}>
                        <AddIcon />
                    </Fab>
                </Grid>
            }
        </Grid>
    )
}