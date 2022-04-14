import React, { ChangeEvent, useCallback } from 'react';

import './Switch.scss';

export interface SwitchProps {
    name: string;
    isOn?: boolean;
    onChange: (value: boolean) => void;
    disabled: boolean;
}

const Switch: React.FC<SwitchProps> = ({ name, isOn, onChange, disabled = false }) => {

    const onChangeCheckbox = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked);
    }, [onChange])

    return (
        <label className="switch">
            <input
                type="checkbox"
                name={name}
                onChange={onChangeCheckbox}
                defaultChecked={isOn}
                disabled={disabled}
            />
            <span className="slider round"></span>
        </label>
    );
}

export default Switch;