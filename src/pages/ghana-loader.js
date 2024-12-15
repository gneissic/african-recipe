export async function loader({ params }) {
  const id = params.ghanaDetail;

  const response = await fetch(
    `https://african-recipe-c6fe5-default-rtdb.firebaseio.com/food/ghana/${id}.json`,
  );
  if (!response.ok) {
    throw new Error('something went wrong');
  }
  const data = await response.json();

  return data;
}
