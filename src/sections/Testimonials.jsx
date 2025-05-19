import { GlowCard, TitleHeader } from "../components";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full px-5 md:px-10">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐ Customer Feedback Highlights"
        />
        <div className="mt-16 columns-1 md:columns-2 lg:columns-3 space-y-5">
          {testimonials.map((testimonial, index) => (
            <GlowCard key={index} index={index} card={testimonial}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={testimonial.imgPath} alt={testimonial.name} />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
