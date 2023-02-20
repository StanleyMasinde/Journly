import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// IndexedDB
if (window.indexedDB) {
    const request = indexedDB.open('journly', 1)
    request.onerror = (ev) => {
        throw new Error('Error opening idb database')
    }
    request.onupgradeneeded = (ev) => {
        const db = request.result
        const objectStore = db.createObjectStore('journals', {keyPath: 'id', autoIncrement: true})
        objectStore.createIndex('title', 'title')
        objectStore.createIndex('body', 'body')
        objectStore.createIndex('dateTime', 'dateTime')
    }
}

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
