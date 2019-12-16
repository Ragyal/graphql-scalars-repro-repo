import { Field, ObjectType } from "type-graphql";
import { URLResolver } from "graphql-scalars";

@ObjectType()
export class HelloURL {
  @Field(() => URLResolver, { nullable: true })
  url: string | undefined;

  @Field(() => String)
  hello: string;

  constructor(args: { url: string | undefined; hello: string }) {
    this.url = args.url;
    this.hello = args.hello;
  }
}
