import type { inferAsyncReturnType } from "@trpc/server";
import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import type { Application } from "express";

import { mergeRouters } from "../trpc";

import { auth } from "./resolvers/user";

const appRouter = mergeRouters(auth)

const createContext = ({ req, res }: CreateExpressContextOptions) => ({
  req,
  res,
});

export const initializeTrpc = async (app: Application) => {
  app.use(
    "/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
    );
  };
  
  export type Context = inferAsyncReturnType<typeof createContext>;
  export type AppRouter = typeof appRouter;