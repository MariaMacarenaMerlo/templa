import supabase from "./supabase";

export async function getExerciseById(id) {
  const { data, error } = await supabase
    .from("exercises")
    .select()
    .eq("id", id);

  if (error) {
    console.error(
      "[exercises.js getExercisebyId] Error al traer el ejercicio por su id",
    );
    throw new Error(error.message);
  }
  return data[0];
}
