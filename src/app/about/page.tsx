import MainLayout from "../../../components/MainLayout";

export default function About() {
  return (
    <MainLayout>
      {/* Header Section */}
      <section className="py-5 bg-dark-theme text-white text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">About <span className="text-pink">FreakABritt</span></h1>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="lead">Dancer, Reality TV Star, Performer and Entrepreneur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Bio Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              {/* Replace with actual image when available */}
              <div className="bg-secondary-theme w-100 h-100 rounded-4 d-flex align-items-center justify-content-center">
  <img
    src="/assets/images/freakabritt4.jpg"
    alt="FreakABritt"
    className="img-fluid w-100 h-100"
    style={{ objectFit: "cover", borderRadius: "1rem" }} // rounded-4 = borderRadius
  />
</div>

            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4"></h2>
              <p className="mb-4">
              FreakABritt, is a dynamic performer, reality television
                personality, and entrepreneur who has made a significant impact in the entertainment industry.
              </p>

              <h3 className="h5 fw-bold mt-4 mb-3">Television Career</h3>
              <p className="mb-4">
                FreakABritt gained widespread recognition for her appearances on "Little Women: LA" and as a guest
                on "RuPaul's Drag Race." Her charismatic personality and talent quickly made her a fan favorite,
                opening doors to numerous opportunities in the entertainment world.
              </p>

              <h3 className="h5 fw-bold mt-4 mb-3">Dance & Performance</h3>
              <p className="mb-4">
                As a professionally trained dancer, FreakABritt has performed alongside major artists including
                Miley Cyrus and Kid Rock. Her unique style and energetic performances have solidified her reputation
                as a standout talent in the dance community.
              </p>

              <h3 className="h5 fw-bold mt-4 mb-3">Entrepreneurship</h3>
              <p className="mb-4">
                Beyond her performance career, FreakABritt runs her own fashion line—the Freakabritt Collection—which
                embodies her bold and unique style. Through her business ventures, she continues to expand her brand
                and influence in the fashion world.
              </p>

              <h3 className="h5 fw-bold mt-4 mb-3">Advocacy</h3>
              <p>
                FreakABritt is also a passionate advocate against bullying. Drawing from her own experiences,
                she uses her platform to speak out on issues of acceptance and self-love, inspiring fans and
                followers to embrace their uniqueness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Career Highlights</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="bi bi-tv text-pink fs-1"></i>
                  </div>
                  <h3 className="h5 fw-bold mb-3">Reality TV</h3>
                  <p className="card-text">Starred in "Little Women: LA" and appeared on "RuPaul's Drag Race".</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="bi bi-music-note-beamed text-pink fs-1"></i>
                  </div>
                  <h3 className="h5 fw-bold mb-3">Performance</h3>
                  <p className="card-text">Performed with top artists including Miley Cyrus and Kid Rock.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="bi bi-bag text-pink fs-1"></i>
                  </div>
                  <h3 className="h5 fw-bold mb-3">Fashion Line</h3>
                  <p className="card-text">Founded and runs the Freakabritt Collection fashion brand.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="bi bi-heart text-pink fs-1"></i>
                  </div>
                  <h3 className="h5 fw-bold mb-3">Advocacy</h3>
                  <p className="card-text">Active spokesperson against bullying and advocate for self-acceptance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-dark-theme text-white text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-4">Work With Me</h2>
              <p className="lead mb-4">
                Interested in collaborating or booking me for your next event?
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a href="/booking" className="btn btn-pink btn-lg px-4">Book Now</a>
                <a href="/contact" className="btn btn-outline-light btn-lg px-4">Contact Me</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
