export function Header({ title }: { title: string }) {
  return (<div className="container mx-auto px-4">
    <h2 className="text-center">{title}</h2>
  </div>)
}