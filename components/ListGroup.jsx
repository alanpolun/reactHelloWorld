import React from 'react';
function ListGroup() {
const hongKongDistricts = ["Central and Western", "Eastern", "Southern", "Wan Chai", "Kowloon City"];
const [hoveredIndex, setHoveredIndex] = React.useState(null);

return (
    <>
        <h1>List Group</h1>
        <ul className="list-group">
            {hongKongDistricts.map((district, index) => (
                <li
                    key={index}
                    className="list-group-item"
                    style={{ backgroundColor: hoveredIndex === index ? 'lightblue' : 'white' }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {district}
                </li>
            ))}
        </ul>
    </>
);
}

export default ListGroup;
