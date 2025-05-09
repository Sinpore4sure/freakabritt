import Link from "next/link";
import MainLayout from "../../components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="hero-section text-center text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">
                FreakA<span className="text-pink">Britt</span>
              </h1>
              <p className="lead mb-5">Dancer, Reality TV Star, and Entrepreneur</p>
              <div className="d-flex justify-content-center gap-3">
                <Link href="/booking" className="btn btn-pink btn-lg px-4 py-2">
                  Book Now
                </Link>
                <Link href="/gallery" className="btn btn-outline-light btn-lg px-4 py-2">
                  View Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="position-relative" style={{ height: "400px" }}>
                <div className="w-100 h-100 rounded-4 overflow-hidden">
                  <img
                    src="/assets/images/freakabritt3.jpg"
                    alt="FreakABritt"
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold mb-4">About Me</h2>
              <p className="mb-4">
                FreakABritt is a dancer, reality television personality, and entrepreneur. She gained recognition for her appearances on "Little Women: LA" and "RuPaul's Drag Race". Beyond TV, she has performed with artists like Miley Cyrus and Kid Rock.
              </p>
              <p className="mb-4">
                She also runs her own fashion line—the Freakabritt Collection—and is an advocate against bullying.
              </p>
              <Link href="/about" className="btn btn-outline-pink px-4">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Gallery Highlights</h2>
            <p className="text-muted">Check out some of my featured moments</p>
          </div>

          <div className="row g-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="col-md-6 col-lg-3">
                <div className="gallery-item">
                  <div
                    className="w-100"
                    style={{
                      height: "250px",
                      borderRadius: "10px",
                      overflow: "hidden",
                      backgroundColor: "#000",
                    }}
                  >
                    <img
                      src={`/assets/images/freak${item}.jpg`}
                      alt={`Gallery Image ${item}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link href="/gallery" className="btn btn-pink px-4">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-dark-theme text-white text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-4">Ready to Book?</h2>
              <p className="lead mb-4">
                Looking to book me for your next event? Let's make it unforgettable!
              </p>
              <Link href="/booking" className="btn btn-pink btn-lg px-4">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}