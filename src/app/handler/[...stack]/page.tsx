import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "../../../stack";

export const dynamic = 'force-dynamic';

export function generateStaticParams() { 
  return [
    { stack: ['sign-in'] },
    { stack: ['sign-out'] },
    { stack: ['sign-up'] },
  ]
}

export default function Handler(props: unknown) {

  return <StackHandler fullPage app={stackServerApp} routeProps={props} />;
}
