import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem.jsx";
const FriendList = (friends) => {
  return (
    <ul className={css.list}>
      <FriendListItem users={friends} />
    </ul>
  );
};
export default FriendList;
