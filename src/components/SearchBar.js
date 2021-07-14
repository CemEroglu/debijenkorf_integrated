import './SearchBar.css';
import search from '../images/search.svg'
import close from '../images/close.svg'
import  React, { useState, useEffect } from 'react'
import List from './List'

function SearchBar(props) {
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState([])
    useEffect(() => {
        let newFilteredData = []
        if(searchText){
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
            <div className="Parent">
                <input value={searchText} onChange={whenInputChange} className="SearchBar" />
                
                <button className={searchText ? "Icon Close" : "Icon Close Hide"} onClick={() => {
                    setSearchText("")
                }}>
                    <img
                        src={close}
                        alt="del"
                    />
                </button>
                <button className="Icon Magnifier">
                    <img
                        src={search}
                        alt="srch"
                    />
                </button>
            </div>

            <List searchText={searchText} list={filteredData} maxElement={props.maxElement} />
        </div>
    );
}

export default SearchBar;