import { checkError, client } from './client';


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

export async function addToFishList(Species) {
  const response = await client.from('users').insert(Species);
  return checkError(response);
  // we might have a problem with this
}

export async function getFishList(){
  const response = await client.from('users').select().order('id');
  return checkError(response);
}

export async function searchFish() {

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


