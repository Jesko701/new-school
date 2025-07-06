export function CuricullumSection() {
  return (
    <section className="bg-white my-6">
      <div className="p-6 bg-red-300 text-center mt-6 mb-6 text-2xl">
        <h1 className="max-w text-lg font-semibold text-white uppercase tracking-wide">
          Our Curriculum Overview
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="mt-4 text-5xl font-extrabold text-gray-900 leading-tight">
          A Commitment to Excellence
        </h2>

        <div className="mt-6 w-20 h-1 bg-red-400"></div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Granada Preschool & Kindergarten aims at offering all our students
              a broad and balanced curriculum that provides rewarding and
              stimulating activities to prepare them for the best social and
              cultural life.
            </p>
          </div>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether it is our books or hands-on training, we make sure each
              student gets personal attention to cope up and flourish in every
              subject for better scores and a brighter future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
