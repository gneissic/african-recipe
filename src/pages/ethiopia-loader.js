export async function loader({ params }) {
  const id = params.ethiopiaDetail;
  console.log(id);

  const response = await fetch(
    `https://african-recipe-e04e8-default-rtdb.firebaseio.com/food/ethiopia/${id}.json`
  );
  if (!response.ok) {
    throw new Error("something went wrong");
  }
  const data = await response.json();

  return data;
}
