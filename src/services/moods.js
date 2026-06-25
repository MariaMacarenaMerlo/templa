import supabase from "./supabase";

export async function createMoodUser(userId, moodId) {
  const { error } = await supabase
    .from("moods_entries")
    .insert({ user_id: userId, mood_id: moodId });

  if (error) {
    throw error;
  }
}
