function MenuToggle({ handleClick, children, className }) {
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
}

export default MenuToggle;
