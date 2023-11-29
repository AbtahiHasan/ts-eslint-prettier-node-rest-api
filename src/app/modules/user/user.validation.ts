import { z } from 'zod';

const createUserValidationSchema = z.object({
  body: z.object({
    password: z
      .string({ invalid_type_error: 'password must be string' })
      .max(20, { message: 'Password can not be more than 20 characters' })
      .optional(),
  }),
});

const userValidationSchemas = {
  createUserValidationSchema,
};

export default userValidationSchemas;
