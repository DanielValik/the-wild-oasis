import supabase from "./supabase";

export async function getCabins(params) {
  const { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins talbe can't be loaded");
  }

  return cabins;
}
