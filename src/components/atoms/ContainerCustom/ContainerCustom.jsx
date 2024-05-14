function ContainerCustom({ children }) {
  return (
    <div className="container mx-auto">
      <div className="m-2">{children}</div>
    </div>
  );
}

export default ContainerCustom;
