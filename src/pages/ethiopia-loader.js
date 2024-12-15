export async function loader({ params }) {
  const id = params.ethiopiaDetail;

  const response = await fetch(
    `https://african-recipe-c6fe5-default-rtdb.firebaseio.com/food/ethiopia/${id}.json`,
  );
  if (!response.ok) {
    throw new Error('something went wrong');
  }
  const data = await response.json();

  return data;
}
