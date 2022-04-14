import React, { useMemo, useCallback } from 'react';
import { ElementInf, ElementType } from '../../types/Scheme';
import Group from '../Structure/Group';
import Toggle from '../Toggle/Toggle';

export type onChangeCallback = (name: string, value: any) => void;

export interface ElementBuilderProps {
    items: ElementInf[] | ElementInf[][];
    onChange: onChangeCallback;
}

const Constructors = new Map([
    [ElementType.Toggle, Toggle],
]);

const isGroup = (item: ElementInf | ElementInf[]): item is ElementInf[] => {
    return Array.isArray(item);
}

const ElementBuilder: React.FC<ElementBuilderProps>  = ({ items, onChange }) => {

    const onChangeElement = useCallback((name: string, value: any) => {
        onChange(name, value);
    }, [onChange])

    const elements = useMemo(() => {
        return items.map((item, index) => {
            if (isGroup(item)) {
                return (
                    <Group key={index}>
                        <ElementBuilder
                            items={item}
                            onChange={onChangeElement}
                        />
                    </Group>
                );
            }

            const ElementConstructor = Constructors.get(item.element);
            if (!ElementConstructor) {
                return 'BAD';
                // Do not forget to add Error Boundaries
                // throw new Error(`Incorrect ElementType ${item.element}`);
            }
            const { element, ...props } = item;
            return (
                <ElementConstructor
                    key={index} {...props as any }
                    onChange={onChangeElement}
                />
            );
        })
    }, [items, onChangeElement]);

    return (
        <>
            {elements}
        </>
    );
}

export default ElementBuilder;