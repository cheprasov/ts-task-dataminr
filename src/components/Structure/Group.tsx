import React from 'react';

import './Group.scss';

interface GroupProps {
    children: React.ReactNode;
}

const Group: React.FC<GroupProps> = ({ children }) => {
    return (
        <div className="Group">
            {children}
        </div>
    );
}

export default Group;