import { QueryClient, type QueryFunction } from "@tanstack/react-query";

// Simplified query client for client-only app
// We'll use localStorage instead of API calls

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});
