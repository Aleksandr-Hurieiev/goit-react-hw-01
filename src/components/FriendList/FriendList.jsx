import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem.jsx";
const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map((friend) => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};
export default FriendList;
