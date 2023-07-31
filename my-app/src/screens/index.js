import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat : "26.21710000349892",
          tr_latitude: bl_lng ? bl_lng : "51.71440006361076",
          bl_longitude: tr_lat ? tr_lat : "24.4711180214628",
          tr_longitude: tr_lng ? tr_lng : "50.72110005967814",
          limit: "30",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "7474ec42f7msh3cdd827b2ac8b3ap102958jsn65fc1de303ac",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
