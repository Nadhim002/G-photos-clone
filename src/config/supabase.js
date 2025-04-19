import { createClient } from "@supabase/supabase-js"
import { config } from "dotenv"
config({ path: ".env" })
const supabaseUrl = "https://mdpsgkkdyrqnwuqofdcv.supabase.co"
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
