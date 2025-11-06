export default defineEventHandler(async (event) => {
    const query = getQuery(event).s || "";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

    try {
        const data = await $fetch(url);
        return data;
    } catch (err) {
        return { error: true, message: err.message };
    }
});
