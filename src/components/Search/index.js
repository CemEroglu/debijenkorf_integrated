import './Search.css';
import search from '../../images/search.svg'
import close from '../../images/close.svg'
import React, { useState, useEffect } from 'react'
import List from './List'

function Search(props) {
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        let newFilteredData = []
        if (searchText) {
            props.lookUpData.suggestions.map(item => {
                if (item.searchterm.toLowerCase().includes(searchText.toLowerCase())) {
                    newFilteredData.push(item)
                }
            })
        }
        setFilteredData(newFilteredData)
    }, [searchText])

    const whenInputChange = (e) => {
        setSearchText(e.target.value)
    }

    return (
        <div className="Container">
            <div className="SearchBar">
                <input value={searchText} onChange={whenInputChange} className="SearchInput" />
                <button className={searchText ? "Icon" : "Icon Hide"}
                    onClick={() => { setSearchText("") }}>
                    <img src={close} alt="del" />
                </button>
                <button className="Icon">
                    <img src={search} alt="srch" />
                </button>
            </div>
            <List searchText={searchText} list={filteredData} maxElement={props.maxElement} />
        </div>
    );
}

export default Search;