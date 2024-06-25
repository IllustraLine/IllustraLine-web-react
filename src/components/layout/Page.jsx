function Page({ children, customClass }) {
  return (
    <div
      className={`mx-auto h-auto min-h-screen w-screen max-w-screen-xl pb-20 pt-20 ${customClass}`}
    >
      {children}
    </div>
  );
}

export default Page;
