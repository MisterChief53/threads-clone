import * as z from 'zod'

export const UserValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(3, {message: 'MINIMUM 3 CHARACTERS'}).max(30),
    username: z.string().min(3).max(3),
    bio: z.string().min(3).max(1000)
})