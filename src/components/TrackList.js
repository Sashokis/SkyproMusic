import React from 'react';
import Tracks from './Tracks';
// import './../App.css';
import '../style/TrackList.css';


export default function TrackList() {
    return ( 
        <div class="main__centerblock centerblock">
    <div class="centerblock__search search">
        <svg class="search__svg">
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
        class="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
        />
    </div>
    <h2 class="centerblock__h2">Треки</h2>
    <div class="centerblock__filter filter">
        <div class="filter__title">Искать по:</div>
        <div class="filter__button button-author _btn-text">
        исполнителю
        </div>
        <div class="filter__button button-year _btn-text">
        году выпуска
        </div>
        <div class="filter__button button-genre _btn-text">жанру</div>
    </div>
    <Tracks />
        </div>
    
    );
}
