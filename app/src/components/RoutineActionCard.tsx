import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

type Props = {
    imageUrl?: string;
    name: string;
    description: string;
}

export default function RoutineActionCard({imageUrl, name, description}: Props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                {imageUrl && 
                    <CardMedia
                    component="img"
                    height="140"
                    src={imageUrl}
                    />
                }
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}