import { TitleHeader } from "../components";
import { ContactModel } from "../components/ContactModels";

const Contact = () => {
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full px-5 md:px-10">
        <TitleHeader
          title="Get in Touch With Me"
          sub="✉️ Contact Information"
        />
        <div className="mt-16 grid-12-cols">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form className="w-full flex flex-col gap-7">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="resize-none"
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">Send Message</p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="Arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full bg-[#cd7c2e] rounded-xl hover:cursor-grab overflow-hidden">
              <ContactModel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
