import { client } from './client';


export async function createProfile(email) {
  const { body } = await client.from('users').insert({ email });
  return body;
}

export async function signUp(email, password) {
  const { user } = await client.auth.signUp({ email, password });
  await createProfile(email);
  return user;
  
}

export async function signIn(email, password) {
  const { user } = await client.auth.signIn({ email, password });
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

export async function fetchUnoFish(name) {
  const rawData = await fetch(`/.netlify/functions/unoFish?uno=${name}`);
  const data = await rawData.json();
  return data;
}
// Make function to get single fish
