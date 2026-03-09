type Props = {
  title: string;
  children: React.ReactNode;
};

export default function ResultCard({ title, children }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      {children}
    </div>
  );
}