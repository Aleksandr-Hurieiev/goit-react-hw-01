import css from "./FriendListItem.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <img className={css.item_img} src={avatar} width="50" />
      <p className={css.item_name}>{name}</p>
      {isOnline === true ? (
        <p className={css.item_on}>Online</p>
      ) : (
        <p className={css.item_off}>Offline</p>
      )}
    </li>
  );
};
export default FriendListItem;
