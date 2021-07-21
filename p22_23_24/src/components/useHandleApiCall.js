import { useCallback } from "react";

export function useHandleApiCall(url, setImageUrl, setBoxTextArr, setLoading) {
	const callAPI = useCallback(
		async (queryArray) => {
			let boxQuery = "";
			for (let i = 0; i < queryArray.length; ++i) {
				boxQuery += `&boxes[${i}][text]=${queryArray[i]}`;
			}
			setLoading(true);
			const updatedImage = await fetch(url + boxQuery).then((res) =>
				res.json()
			);
			setLoading(false);
			setImageUrl(updatedImage.data.url);
			setBoxTextArr(queryArray);
		},
		[url, setImageUrl, setBoxTextArr, setLoading]
	);

	return callAPI;
}
