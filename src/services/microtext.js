import supabase from "./supabase";

/**
 * Obtiene todos los microtextos almacenados en la base de datos.
 *
 * @returns {Promise<Array>} Lista de microtextos.
 */
export async function getMicrotexts() {
  const { data, error } = await supabase.from("microtexts").select("*");

  if (error) throw error;

  return data;
}

/**
 * Obtiene un microtexto aleatorio de la base de datos.
 *
 * @returns {Promise<Object|null>} Un microtexto aleatorio o null si no existen registros.
 */
export async function getRandomMicrotext() {
  const microtexts = await getMicrotexts();

  if (!microtexts.length) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * microtexts.length);

  return microtexts[randomIndex];
}
