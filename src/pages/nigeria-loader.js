export async function loader({ params }) {
  const id = params.nigeriaDetail;

  const response = await fetch(
    `https://african-recipe-e04e8-default-rtdb.firebaseio.com/food/nigeria/${id}.json`
  );
  if (!response.ok) {
    throw new Error("something went wrong");
  }
  const data = await response.json();

  return data;
}
