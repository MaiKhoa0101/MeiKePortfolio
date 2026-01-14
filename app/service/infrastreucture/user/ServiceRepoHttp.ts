import type { Book } from '../../domain/user/Service'
import type { BookRepository } from '../../domain/user/ServiceRepository'

export class BookRepositoryHttp implements BookRepository {

    // For Vite/Nuxt or browser environments, use import.meta.env
    private baseUrl = useRuntimeConfig().public.apiBase;

    async getBooks(): Promise<Book[]> {
        const res = await fetch(`${this.baseUrl}/books`);
        if (!res.ok) {
            throw new Error('Failed to fetch books');
        }
        console.log("Fetch books from: " + res);
        return await res.json();
    }
}
