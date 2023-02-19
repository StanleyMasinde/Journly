/**
 * Create journal interface
 */
interface CreateJournal {
    body: string,
    dateTime: Date
}

/**
 * Journal interface
 */
interface Journal extends CreateJournal {
    id: number
}