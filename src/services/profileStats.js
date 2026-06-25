import supabase from "./supabase";

export async function fetchProfileStatsById(id) {
  const { count: moodsCount, error: moodsError } = await supabase //se le puede asignar nombre asi es mas facil de leer
    .from("moods_entries")
    .select("*", { count: "exact", head: true }) //cantidad exacta de registros y head para que solo traiga el nro y no los datos
    .eq("user_id", id);

  const { count: breathsCount, error: breathsError } = await supabase
    .from("sessions_exercises")
    .select("*", { count: "exact", head: true })
    .eq("user_id", id);

  const { data: sosSessions, error: sosError } = await supabase
    .from("sessions_sos")
    .select("feedback")
    .eq("user_id", id);

  if (sosError) {
    console.error("Error al obtener las sesiones de SOS:", sosError);
    throw sosError;
  }

  const totalSosUses = sosSessions.length; //devuelve en array
  const sosSiAyudo = sosSessions.filter(
    (session) => session.feedback === "si",
  ).length;
  const sosPocoAyudo = sosSessions.filter(
    (session) => session.feedback === "poco",
  ).length;
  const sosNoAyudo = sosSessions.filter(
    (session) => session.feedback === "no",
  ).length;

  const porcentajeSiAyudo =
    totalSosUses > 0 ? Math.round((sosSiAyudo / totalSosUses) * 100) : 0;

  return {
    moodsCount,
    breathsCount,
    practiceDays: 0, // TODO: cambiar el valor fijo por uno dinamico y resolver con un a funcion para que cuente los dias de practica distintos

    sos: {
      totalUses: totalSosUses,
      siAyudo: sosSiAyudo,
      pocoAyudo: sosPocoAyudo,
      noAyudo: sosNoAyudo,
      porcentajeSiAyudo: porcentajeSiAyudo,
    },
  };
}

//TODO: mejorar el delay al traer los datos.
