import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/TeamCard.css';
import { IconButton } from '@mui/material';
import ceren from '../assets/ceren.jpeg';
import alp from '../assets/alp.jpeg';
import deniz from '../assets/deniz.jpg';
import aliemir from '../assets/aliemir.jpeg';
import kagan from '../assets/kagan.jpg';

type TeamCardProps = {
    name: string;
    role: string;
    image: string;
    link: string;
}
function TeamCard( {name, role, image, link}: TeamCardProps) {
    return (
        <Card className='team-card'>
            <CardMedia
                sx={{ height: 250 }}
                component="img"
                src={image === 'ceren' ? ceren : image === 'alp' ? alp : image === 'deniz' ? deniz : image === 'aliemir' ? aliemir : kagan}
                title={name}
            />
            <CardContent>
            <Typography variant="body1" className='team-name-txt' >
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" className='team-role-txt'>
                    {role}
                </Typography>
            </CardContent>
            <CardActions className='team-card-icon-holder'>
                <IconButton href={link} target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon fontSize='large'/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default TeamCard;