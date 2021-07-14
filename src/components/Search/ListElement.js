import React from 'react'
import './Search.css';

function ListElement(props) {
  const styledInfo = props.name.replace(props.searchText, '</b>' + props.searchText + '<b>') + '</b> (' + props.id + ')<b>'
  const createMarkup = () => {
    return { __html: "<b>" + styledInfo + "</b>" };
  }

  return (
    <div className="ListElement">
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
}

export default ListElement;