import {LibraryInterface} from "../Interfaces/interface.ts";

class Library implements LibraryInterface {
    getFullAddress(): string {
        return "88 Rox Nubian Sq."
    }

    getFullName(): string {
        return "";
    }

    getPatronCount(): number {
        return 0;
    }

}

export default Library;
