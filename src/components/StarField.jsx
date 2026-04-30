import { useMemo } from 'react';

function StarField() {
  const [farStars, midStars, nearStars] = useMemo(() => {
    const makeStars = (count, minSize, maxSize, speedFloor, speedRange, prefix) =>
      Array.from({ length: count }, (_, i) => ({
        id: `${prefix}-${i}`,
        left: Math.random() * 110 - 5,
        top: Math.random() * 110 - 5,
        size: Math.random() * (maxSize - minSize) + minSize,
        delay: Math.random() * 6,
        duration: Math.random() * speedRange + speedFloor,
      }));

    const compactMode = window.matchMedia('(max-width: 767px)').matches;
    const density = compactMode ? 0.65 : 1;

    return [
      makeStars(Math.floor(70 * density), 0.7, 1.7, 3, 5, 'far'),
      makeStars(Math.floor(45 * density), 1.1, 2.3, 2.2, 3.7, 'mid'),
      makeStars(Math.floor(30 * density), 1.5, 2.9, 1.8, 3.4, 'near'),
    ];
  }, []);

  const renderLayer = (stars, layerName) =>
    stars.map((s) => (
      <div
        key={s.id}
        className="star"
        style={{
          left: `${s.left}%`,
          top: `${s.top}%`,
          width: `${s.size}px`,
          height: `${s.size}px`,
          animationDelay: `${s.delay}s`,
          animationDuration: `${s.duration}s`,
          opacity: layerName === 'layer-near' ? 0.95 : 0.75,
        }}
      />
    ));

  return (
    <div className="starfield" aria-hidden="true">
      <div className="nebula nebula-one" />
      <div className="nebula nebula-two" />
      <div className="starfield-layer layer-far">{renderLayer(farStars, 'layer-far')}</div>
      <div className="starfield-layer layer-mid">{renderLayer(midStars, 'layer-mid')}</div>
      <div className="starfield-layer layer-near">{renderLayer(nearStars, 'layer-near')}</div>
      <div className="comet" />
    </div>
  );
}

export default StarField;
