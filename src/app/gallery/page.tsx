"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MainLayout from "../../../components/MainLayout";

// ✅ Define proper type for items
type GalleryItem = {
  id: number;
  type: string;
  category: string;
  image: string;
};

// ✅ Sample gallery items
const sampleItems: GalleryItem[] = [
  { id: 1, type: "photo", category: "Sexy", image: "/assets/images/britt1.jpg" },
  { id: 2, type: "photo", category: "cum", image: "/assets/images/britt2.jpg" },
  { id: 3, type: "photo", category: "luxury", image: "/assets/images/britt3.jpg" },
  { id: 4, type: "photo", category: "personal", image: "/assets/images/britt4.jpg" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [mediaType, setMediaType] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const router = useRouter();

  const protectedCategories = ["sexy", "cum", "luxury", "personal"];

  const filteredItems = sampleItems.filter((item) => {
    const categoryMatch = filter === "all" || item.category.toLowerCase() === filter.toLowerCase();
    const typeMatch = mediaType === "all" || item.type === mediaType;
    return categoryMatch && typeMatch;
  });

  const handleImageClick = (item: GalleryItem) => {
    if (protectedCategories.includes(item.category.toLowerCase()) && item.type === "photo") {
      setSelectedItem(item);
      setShowModal(true);
    }
  };

  const handlePaymentRedirect = () => {
    setShowModal(false);
    router.push("/payment-info");
  };

  return (
    <MainLayout>
      {/* Header */}
      <section className="py-5 bg-dark-theme text-white text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Gallery</h1>
          <p className="lead">Explore my sexy photos and videos from performances, and more</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="d-flex align-items-center">
                <label className="me-3 fw-medium">Category:</label>
                <select
                  className="form-select"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="sexy">Sexy</option>
                  <option value="cum">Cum</option>
                  <option value="luxury">Luxury</option>
                  <option value="personal">Personal</option>
                </select>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="d-flex align-items-center">
                <label className="me-3 fw-medium">Media Type:</label>
                <select
                  className="form-select"
                  value={mediaType}
                  onChange={(e) => setMediaType(e.target.value)}
                >
                  <option value="all">All Media</option>
                  <option value="photo">Photos</option>
                  <option value="video">Videos</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {filteredItems.map((item) => {
              const isProtected = protectedCategories.includes(item.category.toLowerCase()) && item.type === "photo";

              return (
                <div key={item.id} className="col-md-6 col-lg-4">
                  <div className="gallery-item position-relative">
                    <div
                      className="position-relative"
                      style={{
                        height: "300px",
                        borderRadius: "10px",
                        overflow: "hidden",
                        backgroundColor: "#333",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: isProtected ? "pointer" : "default",
                      }}
                      onClick={() => isProtected && handleImageClick(item)}
                    >
                      <img
                        src={item.image}
                        alt={item.category}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          filter: isProtected ? "blur(10px)" : "none",
                          transition: "filter 0.3s ease",
                        }}
                      />
                      {isProtected && (
                        <button
                          className="btn btn-light btn-sm position-absolute"
                          style={{
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 2,
                            fontWeight: "bold",
                          }}
                        >
                          Click Me
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredItems.length === 0 && (
              <div className="text-center py-5">
                <p className="text-muted">No items match your filter criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div
          className="modal show fade d-block"
          tabIndex={-1}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-center">
              <div className="modal-header">
                <h5 className="modal-title">Premium Content</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>This content requires payment to view.</p>
                <h4 className="text-danger">$100</h4>
              </div>
              <div className="modal-footer justify-content-center">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={handlePaymentRedirect}>
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <section className="py-5 bg-dark-theme text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Want to see more?</h2>
          <p className="lead mb-4">Follow me on social media for my latest photos and videos!</p>
          <div className="d-flex justify-content-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white fs-1">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white fs-1">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white fs-1">
              <i className="bi bi-tiktok"></i>
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}