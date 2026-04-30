function SkillBadge({ name, level }) {
  return (
    <div className="skill-badge reveal reveal-delay-1">
      <div className="skill-name">{name}</div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: `${level}%` }} />
      </div>
      <div className="skill-level">{level}%</div>
    </div>
  );
}

export default SkillBadge;
