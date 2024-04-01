import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Works from "./pages/Works";
import PricingCards from "./pages/Pricing";
import Contact from "./pages/Contact";
import Bootcamp from "./pages/Bootcamp";
import Layout from "./pages/Layout";
import services from "./components/Services/services";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/pricing" element={<PricingCards 
            cards={[
              {
                plan: "Basic", 
                price: "$4179/m", 
                features: [
                  "One request at a time",
                  "3 days turnaround time",
                  "One brand",
                  "Unlimited requests",
                  "Slack updates",
                  "Pause or cancel anytime",
                  "Payments via Stripe"
                ]
              },
              {
                plan: "Pro", 
                price: "$6317/m", 
                features: [
                  "Two requests at a time",
                  "Priority support",
                  "2 days turnaround time",
                  "Unlimited Design Requests",
                  "Unlimited Brands",
                  "Slack updates",
                  "Pause or cancel anytime",
                  "Payments via Stripe"
                ]
              }
            ]}
          
          
          />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/services" element={<Services services={services} />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
