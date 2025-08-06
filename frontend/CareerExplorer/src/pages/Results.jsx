import React from 'react'
import { useLocation } from 'react-router-dom'

const Results = () => {
    const location = useLocation();

    console.log(location.state);
    const { recommendations } = location.state || { recommendations: [] };

    console.log(Object.values(recommendations));
    return (
        <div>
            <h2>Top Careers:</h2>
            <ul>
                {Object.values(recommendations).map((job, index) => <li key={index}>{job}</li>)}
            </ul>
        </div>
    )
}

export default Results