import React from 'react';
function ListGroup({ heading, items }) {
    const [hoveredIndex, setHoveredIndex] = React.useState(null);

    return (
        <>
            <h1>{heading}</h1>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="list-group-item"
                        style={{ backgroundColor: hoveredIndex === index ? 'lightblue' : 'white' }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
