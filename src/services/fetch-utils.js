import { checkError, client } from './client';


export async function createProfile(email) {
  const { body } = await client.from('fish-lists').insert({ email });
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
  const response = await client.from('fish-lists').insert(Species);
  return checkError(response);
  // we might have a problem with this
}

export async function removeFromFishList(Species) {
  const response = await client.from('fish-lists').delete().match({ 'Species Name': Species['Species Name'] });
  return checkError(response);
}

export async function getFishList(){
  const { data } = await client.from('fish-lists')
    .select('*');
  return data;
}

export async function getAllFish(from = 0, to = 25) {
  const rawData = await fetch(`/.netlify/functions/fish`);
  const data = await rawData.json();
  return data.slice(from, to);
}

export async function fetchUnoFish(name) {
  const rawData = await fetch(`/.netlify/functions/unoFish?uno=${name}`);
  const data = await rawData.json();
  return data;
}

export function getUser() {
  return client.auth.user();
}

export async function signOut() {
  await client.auth.signOut();
}
// Make function to get single fish



