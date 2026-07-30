import { z } from 'zod'

export const userSchema = z.object({
  id: z.number(),
  name: z.string().min(1),
  email: z.string().email(),
})

export function parseUser(value) {
  const result = userSchema.safeParse(value)

  if (!result.success) {
    console.error('User validation issues:', result.error.issues)
    return null
  }

  return result.data
}
