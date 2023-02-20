/**
 * Create journal interface
 */
export interface CreateJournal {
    body: string,
    dateTime: Date
}

/**
 * Journal interface
 */
export interface Journal extends CreateJournal {
    id: number
}