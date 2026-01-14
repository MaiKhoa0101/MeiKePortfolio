import type { Book } from '../../domain/user/Service'
import { BookRepositoryHttp } from '../../infrastreucture/user/ServiceRepoHttp'

export class GetBooksUseCase {
    private repo = new BookRepositoryHttp()

    async execute(): Promise<Book[]> {
        return await this.repo.getBooks()
    }
}
