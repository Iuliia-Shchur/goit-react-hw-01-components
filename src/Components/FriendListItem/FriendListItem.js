import PropTypes from "prop-types";
import s from "../FriendList/FriendList.module.css";
import defaultImg from "../icon.png";
function FriendListItem({ avatar = defaultImg, name, isOnline }) {
  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={{ backgroundColor: isOnline ? "green" : "red" }}
      >
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
