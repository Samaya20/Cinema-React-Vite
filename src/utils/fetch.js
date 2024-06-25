export const fetchCinemas = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/Samaya20/Fake-Films-API/main/films.json"
    );
    const data = await response.json();
    return data.cinemas;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
