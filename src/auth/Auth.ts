import {AuthInterface} from "../Interfaces/AuthInterface.ts";
import {DataStoreInterface} from "../Interfaces/interface.ts";

class Auth implements AuthInterface {

    login(user: { email: string; password: string }, dataStore: DataStoreInterface): boolean {
        //@TODO: login a user through a back-end
        return false;
    }

    register(user: { email: string; password: string; username: string }, dataStore: DataStoreInterface): boolean {
        //@TODO: register a user into a backend
        return false;
    }

}

export default Auth;
