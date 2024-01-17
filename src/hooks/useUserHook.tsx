import { useEffect, useState } from 'react';

const useUserHook = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [data, setData] = useState([]);
	const controller = new AbortController();
	const url = 'https://jsonplaceholder.org/users';

	const getUser = async () => {
		setLoading(true);
		try {
			const res = await fetch(url);
			const data = await res.json();
			setLoading(false);
			setData(data);
            console.log(data);
		} catch (error) {
			setError(true);
		}
	};

	useEffect(() => {
		getUser();
		
	}, []);

	return { loading, error, data };
};

export default useUserHook;
