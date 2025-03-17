import { validate } from "class-validator";
import { Type } from "class-transformer";
import { headers } from "next/headers";

export const validateDtoMiddleware = async (dto: any, req: Request) => {
  try {
    const body = await req.json();
    const dtoInstance = new dto(body);

    const errors = await validate(dtoInstance);

    if (errors?.length > 0) {
      return new Response(
        JSON.stringify({
          errors: errors.map((error) => ({
            field: error.property,
            message: Object.values(error?.constraints!),
          })),
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return dtoInstance;
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Validation failed: Invalid Input" }),
      { status: 400 }
    );
  }
};
