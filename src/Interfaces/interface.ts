// Data and View
export interface ViewInterface {

    /**
     * Updates our webpage with book data
     *
     * @param {BookInterface} book a book to update in HTML view
     */
    updateBookView(book: BookInterface): void

    /**
     * Refreshes  the view we need
     */
    refreshView(section: string, DOMElement: HTMLDivElement): void

}

export interface DataStoreInterface {

}

// "Things" interacting in app
export interface UserInterface {

    /**
     * Adds a new user to a Datastore
     *
     * @param {Object} user
     * @param {DataStoreInterface} datastore
     */
    addUser(user: { firstName: string, lastName: string, email: string }, datastore: DataStoreInterface): boolean;

    /**
     * Get user by their ID
     * @param {number} id user id in the system
     */
    getUserByID(id: number): UserInterface
}

export interface StaffInterface {

    /**
     * Remove a patron by the ID
     *
     * @param id
     */
    removePatronById(id: number): boolean | Error
}

export interface PatronInterface {

    /**
     * Help patron to donate
     *
     * @param amount
     */
    donate(amount: number): boolean | Error
}

export interface LibraryInterface {

    getFullName(): string;

    getFullAddress(): string;

    getPatronCount(): number;

}

export interface BookInterface {

    /**
     * Get a description of a book
     */
    getFullDescription(): string;
}
