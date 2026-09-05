import { z } from 'zod'

// --- Project Types & Schemas ---
export const ProjectCategoryEnum = z.enum(['mobile', 'web', 'freelance'])
export type ProjectCategory = z.infer<typeof ProjectCategoryEnum>

export const ProjectStatusEnum = z.enum(['draft', 'published'])
export type ProjectStatus = z.infer<typeof ProjectStatusEnum>

export const ProjectSchema = z.object({
  id: z.string().optional(),
  slug: z.string().min(1, 'Slug is required'),
  title: z.string().min(1, 'Title is required'),
  summary: z.string().min(1, 'Summary is required'),
  body: z.string().min(1, 'Case study body is required'),
  role: z.string().default('Solo Developer'),
  category: ProjectCategoryEnum.default('mobile'),
  techStack: z.array(z.string()).min(1, 'At least one tech stack tag is required'),
  coverImageUrl: z.string().url('Must be a valid URL'),
  gallery: z.array(z.string()).default([]),
  liveUrl: z.string().url().optional().or(z.literal('')),
  repoUrl: z.string().url().optional().or(z.literal('')),
  featured: z.boolean().default(false),
  order: z.number().default(0),
  status: ProjectStatusEnum.default('draft'),
  createdAt: z.any().optional(),
  updatedAt: z.any().optional(),
})

export type Project = z.infer<typeof ProjectSchema>

// --- Certificate Types & Schemas ---
export const CertificateSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Certificate title is required'),
  issuer: z.string().min(1, 'Issuer is required'),
  issueDate: z.any(),
  expiryDate: z.any().optional(),
  credentialId: z.string().optional(),
  credentialUrl: z.string().url().optional().or(z.literal('')),
  fileUrl: z.string().url('File/Image URL is required'),
  category: z.string().default('Course'),
  order: z.number().default(0),
  createdAt: z.any().optional(),
})

export type Certificate = z.infer<typeof CertificateSchema>

// --- Skill Types & Schemas ---
export const SkillCategoryEnum = z.enum(['mobile', 'web', 'backend', 'tools'])
export type SkillCategory = z.infer<typeof SkillCategoryEnum>

export const SkillSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Skill name is required'),
  category: SkillCategoryEnum.default('mobile'),
  level: z.number().min(1).max(5).optional(),
  icon: z.string().default('code'),
  order: z.number().default(0),
})

export type Skill = z.infer<typeof SkillSchema>

// --- Message Types & Schemas ---
export const MessageSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(5, 'Message must be at least 5 characters'),
  read: z.boolean().default(false),
  createdAt: z.any().optional(),
})

export type Message = z.infer<typeof MessageSchema>

// --- Profile & Site Settings Types ---
export interface EducationItem {
  institution: string
  degree: string
  period: string
  description?: string
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  description?: string
}

export interface Profile {
  name: string
  role: string
  tagline: string
  bio: string
  avatarUrl: string
  resumeUrl: string
  email: string
  location: string
  socials: {
    github?: string
    linkedin?: string
    instagram?: string
    whatsapp?: string
  }
  education: EducationItem[]
  experience: ExperienceItem[]
  updatedAt?: any
}

export interface SiteSettings {
  seoDefaultTitle: string
  seoDefaultDescription: string
  ogImageUrl: string
  themeDefault: 'dark' | 'light'
}
