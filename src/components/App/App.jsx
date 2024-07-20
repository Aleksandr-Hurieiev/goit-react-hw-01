import "./App.css";
import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import userData from "../../userData.json";
import friends from "../../friendList.json";

function App() {
  return (
    <div>
      <Profile
        key={userData.tag}
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
