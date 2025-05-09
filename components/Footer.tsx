"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-5" style={{ backgroundColor: "#1a0a14" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3" style={{ color: "#f35b99" }}>FreakABritt</h5>
            <p className="text-white-50">
              Dancer, Reality TV Star, and Entrepreneur. Booking inquiries and business opportunities welcome.
            </p>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/" className="text-decoration-none text-white-50 hover-pink">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-decoration-none text-white-50 hover-pink">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/gallery" className="text-decoration-none text-white-50 hover-pink">
                  Gallery
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/booking" className="text-decoration-none text-white-50 hover-pink">
                  Booking
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-decoration-none text-white-50 hover-pink">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="text-white mb-3">Follow Me</h5>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4 bg-secondary" />

        <div className="row">
          <div className="col text-center text-white-50">
            <small>&copy; {new Date().getFullYear()} FreakABritt. All Rights Reserved.</small>
          </div>
        </div>
      </div>
    </footer>
  );
}
