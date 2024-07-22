import "./App.css";
import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import userData from "../Profile/userData.json";
import friends from "../FriendList/friendList.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../TransactionHistory/transactionHistory.json";

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
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
