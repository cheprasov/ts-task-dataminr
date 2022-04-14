import React from 'react';

import './Row.scss';

interface RowProps {
    children: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ children }) => {
    return (
        <div className="Row">
            {children}
        </div>
    );
}

export default Row;