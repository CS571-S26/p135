function SkillBadge({ name, level }) {
  return (
    <div className="skill-badge">
      <div className="skill-name">{name}</div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

export default SkillBadge;
