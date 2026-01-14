import type { Book  } from './Service'

export interface BookRepository {
  getBooks(): Promise<Book[]>
}
