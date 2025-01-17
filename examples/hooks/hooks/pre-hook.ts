import { Content, Context, HookTarget, Singleton } from "alosaur/mod.ts";
import { FooService } from "../services/foo.service.ts";

@Singleton()
export class PreHook implements HookTarget<unknown, any> {
  constructor(public readonly foo: FooService) {}

  onPreAction(context: Context<unknown>, payload: any) {
    context.response.result = Content("from pre hook. " + this.foo.getName());
  }
}
