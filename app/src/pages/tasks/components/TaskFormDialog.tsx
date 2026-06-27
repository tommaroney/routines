import { useContext, type SubmitEvent } from 'react';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import type { Task } from '../../../types/Task';
import { UserContext } from '../../../contexts/UserContext';

export default function TaskFormDialog({ open, onClose }: { open: boolean; onClose: (task?: Task) => void }) {

    const user = useContext(UserContext)!;

    function handleClose() {
        onClose();
    }
    
    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries()) as Task;
        fetch(`/api/user/${user.id}/tasks`, {
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
            <DialogTitle>New Task</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit} id="task-form">
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
                    margin="dense"
                    id="description"
                    name="description"
                    label="Description"
                    multiline
                    rows={4}
                    fullWidth
                    variant="standard"
                />
                {/* <TextField
                    margin="dense"
                    id="imageURL"
                    name="imageURL"
                    label="Image URL"
                    type="text"
                    fullWidth
                    variant="standard"
                /> */}
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit" form="task-form">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    )
}