import {StaffInterface} from "../Interfaces/interface.ts";
import User from "./User.ts";

class Staff extends User implements StaffInterface {

    removePatronById(id: number): boolean | Error {
        this._id = id;
        return true;
    }
}

export default Staff;
