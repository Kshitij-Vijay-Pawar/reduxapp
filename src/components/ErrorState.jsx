const ErrorState = ({ message }) => {
  return (
    <div className="p-10 flex justify-center">
      <div className="px-6 py-4 rounded border-2 border-(--danger)
        bg-(--surface) text-(--danger)
        animate-[shake_0.4s_ease-in-out]">
        ❌ Error: {message}
      </div>
    </div>
  );
};

export default ErrorState;
