import { Context, Middleware, MiddlewareTarget } from "alosaur/mod.ts";

@Middleware(new RegExp("/"))
export class Increment0Middleware implements MiddlewareTarget<number> {
  onPreRequest(context: Context<number>) {
    // @ts-ignore
    context.state *= 4;
  }

  onPostRequest(context: Context<number>) {
  }
}
