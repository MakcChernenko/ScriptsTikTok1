import { useState } from 'react';
import './Scenario.css'; 

const Scenario = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="scenario">
            <h2 onClick={toggleOpen} style={{ cursor: 'pointer' }}>
                {data.title}
            </h2>
            <div className={`content ${isOpen ? 'open' : ''}`}>
                <ul dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
        </div>
    );
};

export default Scenario;