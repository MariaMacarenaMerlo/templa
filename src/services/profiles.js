import supabase from "./supabase";

//export async function createProfile() {}

export async function updateUserProfile(id, data) {
  const { error } = await supabase.from("profiles").update(data).eq("id", id);
  if (error) {
    console.error(
      "[profiles.js updateUserProfile] Error al actualizar el perfil del usuario.",
    );
    throw new Error(error.message);
  }
}

export async function fetchProfileById(id) {
  const { data, error } = await supabase
    .from("profiles")
    .select()
    //Condicion:
    .eq("id", id);

  if (error) {
    console.error(
      "[profiles.js fetchProfileById] Error al traer el perfil del ususario porsu id.",
    );
    throw new Error(error.message);
  }
  return data[0]; //ponemos 0 ya que el id es unico y el array va estar con uno solo id, por lo teanto va 0.
}
