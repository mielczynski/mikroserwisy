export interface IApplicationConfig {
    NODE_PORT: number;
    DB: {
        HOST: string,
        PORT: number,
        USERNAME: string,
        PASSWORD: string,
        NAME: string,
    }
}
