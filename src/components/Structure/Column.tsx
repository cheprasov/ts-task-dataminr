import React from 'react';

import './Column.scss';

interface ColumnProps {
    title?: string
    children: React.ReactNode;
}

const Column: React.FC<ColumnProps> = ({ title = '', children }) => {
    return (
        <div className="Column">
            <div>{ title || <>&nbsp;</> }</div>
            {children}
        </div>
    );
}

export default Column;