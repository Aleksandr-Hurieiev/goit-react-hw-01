import css from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.user}>
        <img className={css.user_img} src={image} alt={name} />
        <p className={css.user_name}>{name}</p>
        <p className={css.user_tag}>@{tag}</p>
        <p className={css.user_location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.item_desc}>Followers</span>
          <span className={css.item_val}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.item_desc}>Views</span>
          <span className={css.item_val}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.item_desc}>Likes</span>
          <span className={css.item_val}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
