export declare class SQLResult {
    data: any;
    container: {};
    selectBuffers: any;
    insertBuffer: SQLResult;
    flagRows: Array<number>;
    static READ: number;
    static UPDATE: number;
    static INSERT: number;
    static DELETE: number;
    static RESTORE: number;
    constructor();
    content: any;
    get(prop: any): any;
    set(prop: string, value: any): any;
    clone(): SQLResult;
    cloneRow(row: number): SQLResult;
    insertRow(result: any): void;
    getRowData(row: number): any;
    row: number;
    setRow(row: number): void;
    getRow(): number;
    count: number;
    getCount(): number;
    setFirstRow(): void;
    next(): boolean;
    setFlagRow(flag: number, row?: number): void;
    getFlagRow(row?: number): number;
}
