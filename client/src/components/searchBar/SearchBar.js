import React from 'react'
import './SearchBar.css';
import searchIcon from './search__icon.png';
export default function SearchBar() {
    return (
        <div className='search'>
            <form action="#" class="search__form">
                <input type="text" class="search__input" placeholder="חיפוש משימה"></input>
                <button class="search__button">
                    <img className="search__icon" src={searchIcon}></img>
                </button>
            </form>
        </div>
    )
}
