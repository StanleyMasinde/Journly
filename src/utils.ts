import { Journal } from "./interfaces"

/**
 * Get all journals
 * @returns 
 */
export function getAllJournals(): Promise<Journal[]> {
    return new Promise((resolve, reject) => {
        const idbRequest = indexedDB.open('journly', 1)
        idbRequest.onsuccess = () => {
            const transaction = idbRequest.result.transaction('journals', 'readonly')
            const query = transaction.objectStore('journals')
                .getAll()
            query.addEventListener('success', () => {
                resolve(query.result)
            })
            query.addEventListener('error', (ev) => {
                reject(ev)
            })
        }
        idbRequest.onerror = (err) => {
            reject(err)
        }
    })
}

/**
 * Date formatter
 */
export function formatDate(date: Date) {
    return Intl.DateTimeFormat('default', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(date)
}
