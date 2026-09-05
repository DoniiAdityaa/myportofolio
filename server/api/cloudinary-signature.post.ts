import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  // In Phase 2: Compute real SHA-1/SHA-256 signature using config.cloudinaryApiSecret
  const timestamp = Math.round(new Date().getTime() / 1000)

  return {
    timestamp,
    apiKey: config.cloudinaryApiKey,
    cloudName: config.public.cloudinaryCloudName,
    signature: 'mock_signature_for_phase_0',
  }
})
