import css from "./FriendListItem.module.css";
import clsx from "clsx";
const FriendListItem = (users) => {
  const item = users.users.friends.map((user) => {
    return (
      <li className={css.item} key={user.id}>
        <img
          className={css.item_img}
          src={user.avatar}
          alt={user.name}
          width="50"
        />
        <p className={css.item_name}>{user.name}</p>
        <p className={clsx(css.item_on, user.isOnline && css.isOnline)}>
          {user.isOnline}Online
        </p>
        <p className={clsx(css.item_off, !user.isOnline && css.isOffline)}>
          {user.isOnline}OffLine
        </p>
      </li>
    );
  });
  return <>{item}</>;
};
export default FriendListItem;
