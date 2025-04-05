const APIDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

//Fetch all properties
async function getProperties() {
  try {
    //Handle the case where domain is not available yet
    if (!APIDomain) {
      return [];
    }

    //This should help when we deploy the website and we don't really know the domain yet.

    const res = await fetch(`${APIDomain}/properties`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

//Fetch single property
async function getProperty(id) {
  try {
    //Handle the case where domain is not available yet
    if (!APIDomain) {
      return null;
    }

    //This should help when we deploy the website and we don't really know the domain yet.

    const res = await fetch(`${APIDomain}/properties/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { getProperties, getProperty };
