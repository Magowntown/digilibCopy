import {DataStoreInterface, UserInterface} from "../Interfaces/interface.ts";

class User implements UserInterface {
    addUser(
        user: { firstName: string; lastName: string; email: string },
        datastore: DataStoreInterface): boolean {
        this.user = user;
        this.datastore = datastore;
        return true;
    }

    getUserByID(id: number): UserInterface {
        this.id = id;
        // const dummyId = id;
        return new User();
    }

}

export default;
