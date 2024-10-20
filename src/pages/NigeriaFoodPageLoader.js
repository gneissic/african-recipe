export async function loader() {
    const response = await fetch(
      "https://african-recipe-e04e8-default-rtdb.firebaseio.com/westAfricajson"
    );
    if (!response.ok) {
      throw new Error("something went wrong")
    }
    const data = await response.json()
    const responseData = [];
    for (const key in data) {
      responseData.push({
        id: data[key].id,
        foodOne:data[key].foodOne,
        foodPicOne:data[key].foodPicOne
      })
    }
    return responseData;
  }
  
  