import { Query, Resolver } from "type-graphql";

import { HelloURL } from "./models/HelloURL";

@Resolver(HelloURL)
export class HelloURLResolver {
  @Query(() => HelloURL)
  public helloURL(): HelloURL {
    return new HelloURL({ url: "https://www.google.com", hello: "Hello" });
  }
}
