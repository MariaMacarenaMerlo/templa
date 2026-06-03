import supabase from "./supabase";

let userData = null;
let observers = [];

supabase.auth.onAuthStateChange((event, session) => {
  if (session) {
    userData = {
      id: session.user.id,
      email: session.user.email,
    };
  } else {
    userData = null;
  }

  notifyAll();
});

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

  if (error) throw new Error(error.message);

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
