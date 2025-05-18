const Button = ({ children, className, id }) => {
  const handleClick = (e) => {
    e.preventDefault();

    const target = document.getElementById(id);
    if (target) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: "smooth" });
    }
  };

  return (
    <a onClick={handleClick} className={`${className ?? ""} cta-wrapper`}>
      <div className="group cta-button">
        <div className="bg-circle"></div>
        <p className="text">{children}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};
export default Button;
