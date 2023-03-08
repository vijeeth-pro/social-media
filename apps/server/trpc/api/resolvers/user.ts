import { router, userProcedure } from "trpc/trpc";
import { z } from 'zod';

export const auth = router({
    Login: userProcedure.input(z.object({

        userName: z.string(),
        password: z.string(),

        })).mutation(({input}) => {
            return {name: input.userName}
        }
    )
})