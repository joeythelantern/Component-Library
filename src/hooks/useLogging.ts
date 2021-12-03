import { useRef } from 'react';

class Logging {
    private namespace = 'Client';

    constructor(namespace?: string) {
        if (namespace) this.namespace = namespace;
    }

    public info = (message: any) => {
        if (typeof message === 'string') {
            console.log(`[${this.getDate()}] [${this.namespace}] [INFO] ${message}`);
        } else {
            console.log(`[${this.getDate()}] [${this.namespace}] [INFO]`, message);
        }
    };

    public warn = (message: any) => {
        if (typeof message === 'string') {
            console.log(`[${this.getDate()}] [${this.namespace}] [WARN] ${message}`);
        } else {
            console.log(`[${this.getDate()}] [${this.namespace}] [WARN]`, message);
        }
    };

    public error = (message: any) => {
        if (typeof message === 'string') {
            console.log(`[${this.getDate()}] [${this.namespace}] [ERROR] ${message}`);
        } else {
            console.log(`[${this.getDate()}] [${this.namespace}] [ERROR]`, message);
        }
    };

    public getDate = () => {
        return new Date().toISOString();
    };

    public setNamespace = (namespace: string) => {
        this.namespace = namespace;
    };
}

export const useLogging = (namespace?: string): [Logging] => {
    const { current: logging } = useRef(new Logging(namespace));

    return [logging];
};
