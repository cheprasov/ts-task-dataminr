import React, { useCallback, useEffect, useMemo, useState } from 'react';
import type { SchemeInf } from '../../types/Scheme';
import Column from '../Structure/Column';
import Row from '../Structure/Row';
import Structure from '../Structure/Structure';
import ElementBuilder from './ElementBuilder';

export type onChangeCallback = (obj: Record<string, any>) => void;

export interface SchemeBuilderProps {
    scheme: SchemeInf;
    onChange: onChangeCallback;
}

const SchemeBuilder: React.FC<SchemeBuilderProps>  = ({ scheme, onChange}) => {
    const [ params, setParams ] = useState({});

    const onValueChange = useCallback((name: string, value: any) => {
        setParams((p) => {
            return {
                ...p,
                [name]: value,
            }
        });
    }, [setParams])

    useEffect(() => {
        onChange(params);
    }, [params])

    const rows = useMemo(() => {
        return scheme.map((row, index) => {
            const columns = row.map((column, index)=> {
                return (
                    <Column key={index} title={column.title} >
                        <ElementBuilder
                            items={column.items}
                            onChange={onValueChange}
                        />
                    </Column>
                );
            })
            return (
                <Row key={index}>
                    {columns}
                </Row>
            );
        })
    }, [scheme]);

    return (
        <Structure>
            {rows}
        </Structure>
    );
}

export default SchemeBuilder;