import './SocialCard.css';
import Button from './Button';
import LetteredAvatar from 'react-lettered-avatar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
   } from "react-router-dom";

const SocialCard = ({ userData }) => {
    let name = userData.name;

    const handleClick = () => {
        console.log('click');
    }
    let initial = name.charAt(0);

    return (
        <div className='card'>
            <div className='avatar'><LetteredAvatar name={initial} size={80} backgroundColor='rgb(173,216,230)'/></div>
            <div className='card-name'><p>{userData.name}</p></div>
            <div className='card-nickname'><p>@{userData.username}</p></div>
            <div className='card-website'><a href={userData.website}>{userData.website}</a></div>
            <Button onClick={handleClick} text='more details'/>
        </div>
    );
};

export default SocialCard