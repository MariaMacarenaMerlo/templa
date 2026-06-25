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

export async function getExercisesByCategory(category) {
  const { data, error } = await supabase
    .from("exercises")
    .select()
    .eq("category_id", category);

  if (error) {
    console.error(
      "[exercises.js getExercisesByCategory] Error al traer los ejercicios por categoría",
    );
    throw new Error(error.message);
  }
  return data;
}
