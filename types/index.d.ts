export declare type DiffResult = {
    count: number;
    difference: any;
    raw: any;
};
export default function (oldData: any, newData: any): DiffResult;
