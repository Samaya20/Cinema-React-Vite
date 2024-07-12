export const fetchCinemas = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/Samaya20/Fake-Datas/master/films.json"
    );
    const data = await response.json();
    return data.cinemas;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
