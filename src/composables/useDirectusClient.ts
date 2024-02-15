import { createDirectus, graphql } from '@directus/sdk'

export function useDirectusClient (): ReturnType<typeof createDirectus> {
  const CMS_URL = import.meta.env.VITE_CMS_API as string
  return createDirectus(CMS_URL).with(graphql())
}
