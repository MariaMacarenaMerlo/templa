import supabase from "./supabase";
import { fetchProfileById, updateUserProfile } from "./profiles";

let userData = null;
let observers = [];

supabase.auth.onAuthStateChange((event, session) => {
  if (session) {
    userData = {
      ...userData,
      id: session.user.id,
      email: session.user.email,
      // todo: profileFullyLoaded: false,
    };

    //cargamos de forma asincronica el resto de los datos:
    fetchProfileById(userData.id).then((profile) => {
      userData = {
        ...userData,
        ...profile,
        // todo: profileFullyLoaded: true,
      };
      notifyAll();
    });
  } else {
    userData = null;
  }

  notifyAll();
});

// async function loadDataForProfile() {

// }

export async function registerUser({ email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data.user;
}

export async function loginUser({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }

  return data.user;
}

export async function logoutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data.user;
}

export function subscribeToUserStateChanges(observer) {
  observers.push(observer);
  notify(observer);

  return () => {
    observers = observers.filter((item) => item !== observer);
  };
}

function notify(observer) {
  observer(userData ? { ...userData } : null);
}

function notifyAll() {
  observers.forEach((observer) => notify(observer));
}

export async function updateAuthUserProfile(data) {
  //actualizo la data del usuario
  await updateUserProfile(userData.id, data);

  userData = {
    ...userData,
    ...data,
  };

  notifyAll();
}
