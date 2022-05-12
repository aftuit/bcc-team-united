import React from 'react';
import "./style.scss";
const Title = ({title, desc}) => {
    return (
        <div className='title-wrap'>
            <h3 className="text-orange font-400">{title}</h3>
            <h1 className="text-blue mt-3 font-400">{desc}</h1>
        </div>
    )
}

export default Title;