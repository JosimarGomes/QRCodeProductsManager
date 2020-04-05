export default interface ServerInterface {
    port: number;
    setup: (...args: any) => void;
    serverUp: () => Promise<void>;
}