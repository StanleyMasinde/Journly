/**
 * Create journal interface
 */
export interface CreateJournal {
    title: string,
    body: string,
}

/**
 * Journal interface
 */
export interface Journal extends CreateJournal {
    id: number
}