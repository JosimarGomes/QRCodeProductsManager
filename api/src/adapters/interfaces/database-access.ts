export default interface DataBaseAccessInterface {
    create: (args: any) => void;
    update: (args: any) => void;
    delete: (args: any) => void;
    getById: (id: number) => void;
    getAll: (args?: any) => void;
}