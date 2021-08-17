export default async function getItem(id) {
	return await fetch(`https://fakestoreapi.com/products/${id}`).then(
		(response) => response.json()
	);
}
