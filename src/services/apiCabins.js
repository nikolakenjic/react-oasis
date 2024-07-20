import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  let { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}

// https://unnujrcjhfqgwmrnqnqw.supabase.co/storage/v1/object/public/cabin-images/cabin_001.jpg

export async function createEditCabin(newCabin, id) {
  // Check in edit if image starts with URL
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create edit cabin
  let query = supabase.from('cabins');

  // Create new cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // edit cabin
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be created');
  }

  // 2.Upload Image
  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin if there was an error uploading image
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error('Cabin image could not be uploaded');
  }

  return data;
}

// export async function createCabin(newCabin) {
//   const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
//     '/',
//     ''
//   );
//   const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

//   // 1. Create cabin
//   const { data, error } = await supabase
//     .from('cabins')
//     .insert([{ ...newCabin, image: imagePath }])
//     .select();

//   if (error) {
//     console.error(error);
//     throw new Error('Cabins could not be created');
//   }

//   // 2.Upload Image
//   const { error: storageError } = await supabase.storage
//     .from('cabin-images')
//     .upload(imageName, newCabin.image);

//   // 3. Delete the cabin if there was an error uploading image
//   if (storageError) {
//     await supabase.from('cabins').delete().eq('id', data.id);
//     console.error(storageError);
//     throw new Error('Cabin image could not be uploaded');
//   }

//   return data;
// }

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be deleted');
  }

  return data;
}
