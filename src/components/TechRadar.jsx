import { useMemo, useState } from 'react';
import skills from '../data/skills';

const RINGS = [
  { label: 'Core', min: 86, max: 100 },
  { label: 'Strong', min: 76, max: 85 },
  { label: 'Learning', min: 0, max: 75 },
];

function ringForLevel(level) {
  return RINGS.find((ring) => level >= ring.min && level <= ring.max)?.label ?? 'Learning';
}

function TechRadar() {
  const [activeSkill, setActiveSkill] = useState(skills[0]);

  const plottedSkills = useMemo(() => {
    const slice = (Math.PI * 2) / skills.length;

    return skills.map((skill, index) => {
      const angle = index * slice - Math.PI / 2;
      const normalized = 0.2 + ((100 - skill.level) / 100) * 0.72;
      const x = 50 + Math.cos(angle) * normalized * 44;
      const y = 50 + Math.sin(angle) * normalized * 44;
      return {
        ...skill,
        x,
        y,
        ring: ringForLevel(skill.level),
      };
    });
  }, []);

  return (
    <section className="tech-radar reveal reveal-delay-1" aria-labelledby="tech-radar-heading">
      <h2 id="tech-radar-heading" className="page-heading">
        Tech Radar
      </h2>
      <p className="page-sub">
        Live capability map. Select any node to inspect depth and current confidence.
      </p>

      <div className="radar-layout">
        <div className="radar-board" role="img" aria-label="Circular technology radar with skill points">
          <div className="radar-ring ring-outer" />
          <div className="radar-ring ring-mid" />
          <div className="radar-ring ring-inner" />
          <div className="radar-axis axis-x" />
          <div className="radar-axis axis-y" />

          {plottedSkills.map((skill) => (
            <button
              key={skill.name}
              type="button"
              className={`radar-node ${activeSkill.name === skill.name ? 'active' : ''}`}
              style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
              onClick={() => setActiveSkill(skill)}
              aria-label={`${skill.name} at ${skill.level}% confidence`}
            >
              <span className="radar-node-dot" />
            </button>
          ))}
        </div>

        <div className="radar-detail">
          <p className="radar-ring-label">{activeSkill.ring} Ring</p>
          <h3 className="radar-skill-name">{activeSkill.name}</h3>
          <p className="radar-skill-level">Confidence: {activeSkill.level}%</p>
          <p className="radar-skill-copy">
            This skill currently sits in the <strong>{activeSkill.ring}</strong> zone based on recent
            project and research usage.
          </p>
        </div>
      </div>

      <div className="radar-list">
        {plottedSkills.map((skill) => (
          <button
            key={`${skill.name}-list`}
            type="button"
            className={`radar-list-item ${activeSkill.name === skill.name ? 'active' : ''}`}
            onClick={() => setActiveSkill(skill)}
          >
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default TechRadar;
