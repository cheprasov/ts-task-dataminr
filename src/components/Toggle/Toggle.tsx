import React, { useCallback, useMemo, useState } from 'react';
import { ToggleInf } from '../../types/Scheme';
import Dropdown from '../Dropdown/Dropdown';
import Switch from '../Switch/Switch';

import './Toggle.scss';

interface ToggleProps extends Omit<ToggleInf, 'element'> {
    onChange: (name: string, value: boolean | number) => void;
    disabled?: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ title, name, values, defaultValue, onChange, items, disabled = false }) => {
    const hasDropdown = Array.isArray(values);

    const [isOn, setIsOn] = useState<boolean>(!!defaultValue);
    const [value, setValue] = useState<number>(() => {
        if (!hasDropdown) {
            return 0;
        }
        return Number.isInteger(defaultValue) ? defaultValue as number : values[0];
    });

    const onChangeSwitch = useCallback((on: boolean) => {
        setIsOn(on);
        onChange(name, hasDropdown ? (on ? value: false) : on);
    }, [name, onChange, hasDropdown, value])

    const onChangeValue = useCallback((v: number) => {
        setValue(v);
        onChange(name, isOn ? v : false);
    }, [name, onChange, hasDropdown, isOn])

    const subToggles = useMemo(() => {
        if (!Array.isArray(items)) {
            return null;
        }
        return items.map((item) => {
            return (
                <Toggle
                    key={item.name}
                    name={item.name}
                    title={item.title}
                    defaultValue={item.defaultValue}
                    values={item.values}
                    onChange={onChange}
                    disabled={!isOn}
                />
            );
        });
    }, [items, isOn])

    const hasSubtoggles = Array.isArray(subToggles);

    return (
        <>
            <div className="Toggle">
                <span className="Toggle__title">{ title }</span>
                { hasDropdown && (
                    <Dropdown
                        name={name}
                        value={value}
                        values={values}
                        onChange={onChangeValue}
                        disabled={disabled || !isOn}
                    />
                )}
                <Switch
                    name={name}
                    isOn={!!defaultValue}
                    onChange={onChangeSwitch}
                    disabled={disabled}
                />
                { hasSubtoggles && (
                    <div>
                        { isOn ? 'v': '^' }
                    </div>
                )}
            </div>
            { hasSubtoggles && (
                <div className={`Toggle__subToggles ${isOn ? 'Toggle__subToggles--visible': ''}`}>
                    {subToggles}
                </div>
            )}
        </>
    );
}

export default Toggle;