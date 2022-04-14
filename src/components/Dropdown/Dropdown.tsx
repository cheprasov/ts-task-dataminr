import React, { ChangeEvent, useCallback, useMemo } from 'react';

import './Dropdown.scss';

export interface DropdownProps {
    value: number;
    values: number[];
    name: string;
    disabled: boolean;
    onChange: (value: number) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ name, value, values, onChange, disabled = false }) => {

    const onSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        onChange(+e.target.value);
    }, [onChange])

    const options = useMemo(() => {
        return values.map((value) => {
            return (
                <option key={value} value={value}>
                    {value}
                </option>
            );
        })
    }, [values]);

    return (
        <select
            defaultValue={value}
            name={name}
            onChange={onSelect}
            disabled={disabled}
        >
            {options}
        </select>
    );
}

export default Dropdown;