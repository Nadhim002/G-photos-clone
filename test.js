import supabase from "./src/config/supabase.js"

export async function signInUserModel(email, password) {
  return await supabase.auth.signInWithPassword({
    email: email ,
    password: password ,
  })
}

signInUserModel("aamnadhim@gmail.com", "4230453")
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

  