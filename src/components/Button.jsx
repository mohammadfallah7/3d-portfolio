const Button = ({ children, className, id }) => {
  return (
    <a href={`#${id}`} className={`${className ?? ""} cta-wrapper`}>
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
