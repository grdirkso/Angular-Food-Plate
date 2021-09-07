export interface Food {
    id: number;
    description: string;
    tag: Array<string>;
    manufacturer: string;
    group: string;
    nutrients: Array<object>;
    portions: Array<object>;

}
