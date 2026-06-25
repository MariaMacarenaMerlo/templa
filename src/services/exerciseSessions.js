import supabase from "./supabase";

export async function saveExerciseSession(sessionData) {
  const { data, error } = await supabase.from("sessions_exercises").insert({
    user_id: sessionData.userId,
    exercise_id: sessionData.exerciseId,
    //TODO: agregar feedback a la tabla
  });

  if (error) throw error;

  return data;
}
