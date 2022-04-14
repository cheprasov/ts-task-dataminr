import React from 'react';

interface StructureProps {
    children: React.ReactElement[];
}

const Structure: React.FC<StructureProps> = ({ children }) => {
    return (
        <div className="Structure">
            {children}
        </div>
    );
}

export default Structure;