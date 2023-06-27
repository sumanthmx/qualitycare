export default function Home() {
  return (
    <div className = "flex flex-col min-h-screen">
      <div className="bg-blue-950 py-4">Section 1</div>
      <div className="bg-white py-4">Section 2</div>
      <div className="bg-sky-100 py-4">Section 3</div>
      <div className="bg-white py-4 flex-grow">Section 4</div>
    </div>
  )
}
