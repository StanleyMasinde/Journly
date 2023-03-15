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
        weekday: "short",
        year: "2-digit",
        month: "short",
        day: "numeric",
        dayPeriod: "short"
    }).format(date)
}
