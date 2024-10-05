import supabase from "./supabase";

export async function getFoodItems() {
    const { data, error } = await supabase
        .from('FoodItems')
        .select('*')

    if (error) {
        console.error(error)
        throw new Error('FoodItems could not be loaded')
    }
    return data
}
