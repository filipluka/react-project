import React from 'react';
import MapImg from '../../images/stockholm_map.jpg';

function Map() {
    return (
        <div className='map'>
            <img className="map-img" src={MapImg} alt="sthlm-map-img" />
        </div>
    );
}

export default Map;