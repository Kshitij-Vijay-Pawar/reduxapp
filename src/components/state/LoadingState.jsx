const LoadingState = () => {
  return (
    <div className="p-10 flex flex-col gap-4 animate-pulse">
      <div className="h-6 w-1/3 rounded bg-(--border)" />
      <div className="h-4 w-full rounded bg-(--border)" />
      <div className="h-4 w-5/6 rounded bg-(--border)" />
      <div className="h-4 w-2/3 rounded bg-(--border)" />
    </div>
  );
};

export default LoadingState;
