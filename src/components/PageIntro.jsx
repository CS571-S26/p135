function PageIntro({ title, subtitle, className = '' }) {
  return (
    <div className={className}>
      <h2 className="page-heading reveal">{title}</h2>
      <p className="page-sub reveal reveal-delay-1">{subtitle}</p>
    </div>
  );
}

export default PageIntro;
