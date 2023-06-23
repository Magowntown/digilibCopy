import {DataStoreInterface} from "../Interfaces/interface.ts";


export interface AuthInterface {

    /**
     * Logs a user into our application
     *
     * @param {Object} user the user we're logging in
     * @param  {DataStoreInterface} dataStore where we persist the data we get from the object
     * @returns boolean
     */
    login(user: { email: string, password: string }, dataStore: DataStoreInterface): boolean;

    /**
     * Registers a user
     *
     * @param {Object} user the user we're registering
     * @param { DataStoreInterface} dataStore the persistent layer we're registering the user through
     * @returns boolean
     */
    register(user:
                 { email: string, password: string, username: string },
             dataStore: DataStoreInterface
    ): boolean;
}
