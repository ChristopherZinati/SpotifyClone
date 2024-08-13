import React from 'react'
import './Body.css';
import './Header';
import Header from './Header';
import './SongRow';
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilled from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';

function Body({ spotify }) {
  const [{ daily_mix_2 }, dispatch] = useDataLayerValue();
  return (
    <div className='body'>
        <Header spotify={spotify} />

        <div className='body_info'>
          <img src={daily_mix_2?.images[0].url} alt=''/>
          <div className='body_infoText'>
            <strong>PLAYLIST</strong>
            <h2>Daily Mix 2</h2>
            <p>{daily_mix_2?.description}</p>
          </div>
        </div>
        <div className='body_songs'>
          <div className='body_icons'>
            <PlayCircleFilled className='body_shuffle'/>
            <FavoriteIcon fontSize='large'/>
            <MoreHorizIcon />
          </div>
          {daily_mix_2?.tracks.items.map(item =>
            <SongRow track={item.track} />
          )}
        </div>
    </div>
  )
}

export default Body