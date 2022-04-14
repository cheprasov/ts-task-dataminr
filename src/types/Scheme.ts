
export enum ElementType {
    Toggle = 'Toggle',
    ToggleGroup = 'ToggleGroup',
}

export interface ElementInf {
    element: ElementType;
    name: 'string';
    defaultValue?: any;
}

export interface ToggleInf extends ElementInf {
    element: ElementType.Toggle;
    title: 'string';
    defaultValue: boolean | number;
    values?: number[];
    items?: Pick<ToggleInf, 'name' | 'title' | 'defaultValue' | 'values'>[];
}

export interface ColumnInf {
    title?: string;
    items: ElementInf[]|ElementInf[][];
};

export type StructureRowInf = ColumnInf[];
export type SchemeInf = StructureRowInf[];