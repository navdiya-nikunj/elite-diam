import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen mt-10 bg-background">
      <Header />
      <div className="container mx-auto max-w-4xl py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p className="text-muted-foreground">
              Welcome to Elite Daim. These terms and conditions outline the rules and regulations for the use of Elite Daim's website.
              By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Elite Daim's
              website if you do not accept all of the terms and conditions stated on this page.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Intellectual Property Rights</h2>
            <p className="text-muted-foreground">
              Unless otherwise stated, Elite Daim and/or its licensors own the intellectual property rights for all material on Elite Daim.
              All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use
              subject to restrictions set in these terms and conditions.
            </p>
            <p className="text-muted-foreground">You must not:</p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Republish material from this website</li>
              <li>Sell, rent, or sub-license material from this website</li>
              <li>Reproduce, duplicate, or copy material from this website</li>
              <li>Redistribute content from Elite Daim (unless content is specifically made for redistribution)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Product Information</h2>
            <p className="text-muted-foreground">
              Elite Daim makes every effort to display as accurately as possible the colors, features, specifications, and details of the
              products available on the website. However, we cannot guarantee that your computer monitor's display of any color will be
              accurate, and we do not guarantee that product descriptions or other content is accurate, complete, reliable, current, or
              error-free.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Pricing and Payment</h2>
            <p className="text-muted-foreground">
              All prices displayed on the website are subject to change without notice. Elite Daim reserves the right to modify or
              discontinue any product or service without notice at any time. Elite Daim shall not be liable to you or any third party for
              any modification, price change, suspension, or discontinuance of the service.
            </p>
            <p className="text-muted-foreground">
              Payment terms will be specified at the time of purchase. All payments must be made in full before the delivery of products.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Diamond Certification</h2>
            <p className="text-muted-foreground">
              All diamonds sold by Elite Daim come with appropriate certification from recognized gemological laboratories. While we ensure
              the authenticity of these certificates, customers are encouraged to independently verify the certification details.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Shipping and Delivery</h2>
            <p className="text-muted-foreground">
              Elite Daim ships products worldwide. Delivery times may vary depending on the destination country and customs procedures.
              Elite Daim is not responsible for any delays caused by customs or other factors beyond our control.
            </p>
            <p className="text-muted-foreground">
              All shipments are fully insured, and tracking information will be provided once the order is dispatched.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Returns and Refunds</h2>
            <p className="text-muted-foreground">
              Elite Daim offers a 30-day return policy for all products. To be eligible for a return, the item must be unused and in the
              same condition that you received it. The item must also be in the original packaging.
            </p>
            <p className="text-muted-foreground">
              Refunds will be processed once the returned item has been received and inspected. The cost of return shipping is the
              responsibility of the customer unless the return is due to our error.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">8. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              In no event shall Elite Daim, nor any of its officers, directors, and employees, be liable to you for anything arising out of
              or in any way connected with your use of this website, whether such liability is under contract, tort, or otherwise. Elite
              Daim shall not be liable for any indirect, consequential, or special liability arising out of or in any way related to your
              use of this website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">9. Governing Law</h2>
            <p className="text-muted-foreground">
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to
              the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">10. Changes to Terms</h2>
            <p className="text-muted-foreground">
              Elite Daim reserves the right to modify these terms and conditions at any time. We will notify customers of any changes by
              updating the date at the top of these terms and conditions. It is your responsibility to check our website periodically for
              changes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">11. Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p className="text-muted-foreground">
              Email: elitediam76@gmail.com<br />
              Phone: +919023351659
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}