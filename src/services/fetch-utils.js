import { client } from './client';

export async function signUp(email, password) {
  const { user } = await client.from('users').signUp(email, password);
  
  return user;
}

export async function signIn(email, password) {
  const { user } = await client.from('users').signIn(email, password);
  
  return user;
}

export function getUser() {
  return client.auth.user();
}
export async function signOut() {
  await client.auth.signOut();
}

export async function getAllFish() {
  const rawData = await fetch(`/.netlify/functions/fish`);
  const data = await rawData.json();
  return data;
}

// Make function to get single fish
