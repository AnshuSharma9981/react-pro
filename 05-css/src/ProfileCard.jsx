const ProfileCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="status">available</span>
        <span className="price">$55/hr</span>
      </div>

      <div className="profile-img">
        <img
          src="https://www.shutterstock.com/image-vector/deadpool-icon-logo-sign-symbol-600nw-2394182337.jpg"
          alt="profile"
        />
      </div>

      <h2>Wade Wilson</h2>
      <p className="role">UI/UX designer</p>

      <p className="company">Epic Coders</p>

      <div className="tags">
        <span>UI</span>
        <span>UX</span>
        <span>photoshop</span>
        <span className="more">+4</span>
      </div>

      <p className="description">
        Wade is a 32 year old UI/UX designer, with an impressive
        portfolio behind him.
      </p>

      <button className="btn">VIEW PROFILE</button>
    </div>
  );
};

export default ProfileCard;


