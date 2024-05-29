import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Query } from 'appwrite'
import { ReactNode } from 'react'

const queryClient = new QueryClient();

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

