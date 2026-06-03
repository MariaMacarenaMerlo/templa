import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://rilvwqyjcygzpwuegeil.supabase.co";
const SUPABASE_KEY = "sb_publishable_Q2xp8m7bC-OGEK_yyar0yQ_VsT6UHI2";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
