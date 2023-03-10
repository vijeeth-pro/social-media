import { string, z } from 'zod';
import { router, userProcedure } from "../../trpc";


const login = z.object({
    userName: string(),
    password: string(),
})


export const auth = router({
    Login: userProcedure.input(login).mutation((req) => {
        const { input } =  req
        
        return {Name: input.userName}
        
        }
    )
})