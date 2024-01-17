const UserList = ({ loading, error, data }) => {
	if (loading && !error) {
		return <p>Loading........</p>;
	}
	if (error) {
		return console.log(error);
	}
	return (
		<div>
			{data.map((item) => (
				<p>{item.firstname} </p>
			))}
		</div>
	);
};

export default UserList;
