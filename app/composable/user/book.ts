import { ref } from 'vue'
import { GetBooksUseCase } from '~/service/application/user/GetServiceUseCase'
import type { Book } from '~/service/domain/user/Service'

export function useBook() {
  const book = ref<Array<Book>>([])
  const loading = ref(false)

  const useCase = new GetBooksUseCase()

  async function load() {
    loading.value = true
    book.value = await useCase.execute()
    loading.value = false
  }

  return { book, loading, load }
}

export function showApiAddress() {
  const config = useRuntimeConfig()
  return config.public.apiBase
}
