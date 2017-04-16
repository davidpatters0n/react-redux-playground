import React from 'react';

const Footer = (props) => {
  return (
    <footer>
      <ul className="list-inline">
        <li data-visibility="SHOW_ALL" onClick={props.handleVisibility}>Show All</li>
        <li data-visibility="SHOW_COMPLETED" onClick={props.handleVisibility}>Show Completed</li>
        <li data-visibility="SHOW_UNCOMPLETED" onClick={props.handleVisibility}>Show Uncompleted</li>
      </ul>
    </footer>
  );
}

export default Footer;
