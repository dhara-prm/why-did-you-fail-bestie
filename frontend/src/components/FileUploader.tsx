"use client";

export default function FileUploader({ setFiles }: any) {

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFiles = event.target.files;

    if (!selectedFiles) return;

    const fileArray = Array.from(selectedFiles);

    setFiles(fileArray);
  }

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-pink-300 transition">

      <p className="text-gray-500 mb-4">
        Upload your CSV files
      </p>

      <input
        type="file"
        multiple
        accept=".csv"
        onChange={handleChange}
        className="block mx-auto"
      />

    </div>
  );
}