import supabase from "./supabase";

export async function saveSosSession(data) {
  const { error } = await supabase.from("sessions_sos").insert({
    user_id: data.userId,
    feedback: data.feedback,
  });

  if (error) {
    console.error("Error al guardar la sesión de SOS:", error);
    throw error;
  }
}
