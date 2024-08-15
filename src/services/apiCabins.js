/* eslint-disable no-unused-vars */
import supabase, { supabaseUrl } from "./supabase";

export async function getCabins(params) {
  const { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins talbe can't be loaded");
  }

  return cabins;
}

export async function createEditCabin(newCabin, id) {
  console.log(newCabin);
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePatch = hasImagePath
    ? newCabin.imagePatch
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Creating/editing cabin
  let query = supabase.from("cabins");

  // A) Create
  if (!id)
    query = query
      .insert({ ...newCabin, image: imagePatch })
      .select()
      .single();

  // B) Edit
  if (id) query = query.update({ ...newCabin, image: imagePatch }).eq("id", id);

  const { data, error } = await query;

  if (error) {
    console.log(error);
    throw new Error("Error occupted while creating cabin");
  }

  // 2. Uploading image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin if some errors was occuped while uploading
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error("Image could not be uploaded. Cabin wasn't created.");
  }

  console.log(data);
  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Error occupted while deleting cabin");
  }
}
