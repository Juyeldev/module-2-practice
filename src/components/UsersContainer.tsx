
import UserList from './UserList';
import useUserHook from '../hooks/useUserHook';

const UsersContainer = () => {
	const {loading, error, data}= useUserHook()

	return < UserList loading={loading} error={error} data={data}  />
};

export default UsersContainer;
