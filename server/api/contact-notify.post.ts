import { defineEventHandler, readBody } from 'h3'
import { z } from 'zod'

const ContactBodySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(5),
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const validation = ContactBodySchema.safeParse(body)

  if (!validation.success) {
    setResponseStatus(event, 400)
    return { error: 'Invalid contact form payload', details: validation.error.format() }
  }

  const config = useRuntimeConfig(event)

  // In Phase 3: Send email notification to Doni using Resend SDK / REST API
  return {
    success: true,
    message: 'Notification queued',
  }
})
