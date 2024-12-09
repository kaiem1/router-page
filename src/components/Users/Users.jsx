import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {

    const users = useLoaderData();

    console.log(users);
    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <h1>Join our growing <br /> community of 5,000+ <br /> users!</h1>
            <div className="users">
                {
                    // users.map(user => <Users key={user.id} user={user}></Users>)
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;