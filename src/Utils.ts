import * as Bunyan from 'bunyan';

export const log = Bunyan.createLogger({
    name: 'overwatch-simulator',
    level: 'debug'
});
