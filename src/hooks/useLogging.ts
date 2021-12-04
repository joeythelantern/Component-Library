import { useRef } from 'react';
import Logging, { ILoggingOptions } from '../library/Logging';

/**
 * A hook for a simple logging library.
 * @param options  Options to pass our logger.
 * @returns object of type Logging
 */
export const useLogging = (options?: ILoggingOptions): [Logging] => {
    const { current: logging } = useRef(new Logging(options));

    return [logging];
};
