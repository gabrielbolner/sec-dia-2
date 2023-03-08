import "./index.css";

export function RequestRow({ friend, onClick }) {

  return (
    <li>
      <div className="request-row">
        <img src={friend.profileImage} alt={friend.fullName} />
        <p>{friend.fullName}</p>
      </div>
    </li>
  );
}
