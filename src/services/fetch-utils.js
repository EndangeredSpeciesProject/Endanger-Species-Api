import { client } from "./client";

export async function signUp(email, password) {
  const { user } = await client.from('users').signUp(email, password);
  
  return user;
}

export async function signIn(email, password) {
  const { user } = await client.from('users').signIn(email, password);
  
  return user;
}