import type { SubmitEvent } from 'react';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import type { Routine } from '../../../types/Routine';

export default function RoutineFormDialog({ open, onClose }: { open: boolean; onClose: (routine?: Routine) => void }) {

    function handleClose() {
        onClose();
    }
    
    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries()) as Routine;
        fetch('/routines', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formJson),
        }).then((response) => {
            if(response.status === 200) onClose(formJson);
        }).catch((err) => {
            console.error(err);
            onClose();
        });
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>New Routine</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit} id="routine-form">
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="name"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="description"
                    name="description"
                    label="Description"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="imageURL"
                    name="imageURL"
                    label="Image URL"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit" form="routine-form">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    )
}