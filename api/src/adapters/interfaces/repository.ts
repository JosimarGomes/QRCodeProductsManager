export default interface RepositoryInterface {
    persist: (...args: any) => void;
    merge: (...args: any) => void;
    remove: (...args: any) => void;
    getAll: (...args: any) => void;
    getById: (id: number) => void;
}