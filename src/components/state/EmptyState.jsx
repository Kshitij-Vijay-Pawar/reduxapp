const EmptyState = () => {
  return (
    <div className="p-10 flex flex-col items-center gap-3
      text-(--text-muted)
      animate-[fadeIn_0.4s_ease-out]">
      
      <div className="text-5xl">🔍</div>
      <p className="text-lg font-medium">No Results Found</p>
      <p className="text-sm">
        Try changing your search or filters
      </p>
    </div>
  );
};

export default EmptyState;
