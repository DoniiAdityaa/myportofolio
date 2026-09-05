import { describe, it, expect } from 'vitest'
import { ProjectSchema, MessageSchema } from '../app/types'

describe('Domain Schemas Validation', () => {
  it('validates a valid project payload', () => {
    const validProject = {
      slug: 'laundriin',
      title: 'Laundriin POS',
      summary: 'Laundry management app',
      body: '# Case Study',
      category: 'mobile' as const,
      techStack: ['Flutter', 'Firebase'],
      coverImageUrl: 'https://example.com/cover.jpg',
      status: 'published' as const,
      featured: true,
      order: 1,
    }

    const result = ProjectSchema.safeParse(validProject)
    expect(result.success).toBe(true)
  })

  it('rejects invalid email in contact message', () => {
    const invalidMessage = {
      name: 'Tester',
      email: 'not-an-email',
      message: 'Hello',
    }

    const result = MessageSchema.safeParse(invalidMessage)
    expect(result.success).toBe(false)
  })
})
