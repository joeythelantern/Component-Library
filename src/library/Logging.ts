const DEBUG = 'DEBUG';
const INFO = 'INFO';
const WARN = 'WARN';
const ERROR = 'ERROR';

export class Logging {
    private namespace = 'Default';

    constructor(namespace?: string) {
        if (namespace) this.namespace = namespace;
    }

    public log = (key: string, obj: any, ...objs: any[]) => {
        console.info(`[${this.getDate()}] [${this.namespace}] [${key}] %c${obj}`, ...objs);
    };

    public debug = (obj: any, ...objs: any[]) => this.log(DEBUG, obj, objs);
    public info = (obj: any, ...objs: any[]) => this.log(INFO, obj, objs);
    public warn = (obj: any, ...objs: any[]) => this.log(WARN, obj, objs);
    public error = (obj: any, ...objs: any[]) => this.log(ERROR, obj, objs);

    public getDate = () => {
        return new Date().toISOString();
    };

    public setNamespace = (namespace: string) => {
        this.namespace = namespace;
    };
}

export default Logging;
