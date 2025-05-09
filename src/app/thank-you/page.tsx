import MainLayout from "../../../components/MainLayout";
export default function ThankYou() {
    return (
      <main className="d-flex align-items-center justify-content-center vh-100 bg-light text-center">
        <div className="p-4 shadow bg-white rounded">
          <h1 className="text-success">🎉 Thank You!</h1>
          <p>Your payment has been submitted successfully. We’ll get back to you shortly.</p>
          <a href="/" className="btn btn-primary mt-3">Go Home</a>
        </div>
      </main>
    );
  }  