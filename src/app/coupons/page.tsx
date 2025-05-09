import Navbar from "../components/Navbar";
const Coupons = () => {
  return (
    <div>
      <Navbar />
      <iframe
        src="https://kleanfreak.app.rinsed.co/checkout_forms/102"
        className="rinsedFrame"
      ></iframe>
      <script
        src="https://kleanfreak.app.rinsed.co/frame_parent.js"
        defer
      ></script>
    </div>
  );
};

export default Coupons;
