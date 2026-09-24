type RouteLoadingProps = {
  label?: string;
  variant?: "page" | "auth" | "dashboard";
};

export default function RouteLoading({
  label = "Loading page",
  variant = "page",
}: RouteLoadingProps) {
  return (
    <main
      className={`route-loading route-loading--${variant}`}
      aria-busy="true"
      aria-label={label}
    >
      <div className="route-loading__content" aria-hidden="true">
        <span className="route-loading__line route-loading__line--title" />
        <span className="route-loading__line route-loading__line--text" />
        <span className="route-loading__line route-loading__line--text route-loading__line--short" />
        <div className="route-loading__cards">
          <span className="route-loading__card" />
          <span className="route-loading__card" />
          <span className="route-loading__card" />
        </div>
      </div>
    </main>
  );
}
