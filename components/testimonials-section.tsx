import { TestimonialSlider, type Testimonial } from "@/components/ui/testimonial-slider"
import Image from "next/image"

const testimonials: Testimonial[] = [
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "3&Z transformed our web presence completely. The conversion-focused design they delivered increased our inquiries by 85% in just three months. Their attention to detail and understanding of business needs is unmatched.",
    name: "Sarah Mitchell",
    role: "Founder, Digital Growth Business",
    rating: 5,
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "Working with 3&Z has been a game-changer for our business. They deliver consistently high-quality work that exceeded our expectations. The partnership has allowed us to scale faster than we ever thought possible.",
    name: "James Rodriguez",
    role: "Creative Director, Brand Studio",
    rating: 5,
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "The team at 3&Z doesn't just build websites—they build growth engines. Their strategic approach to conversion optimization has helped us achieve a 3x ROI on our web investment. Highly recommend for any business looking to scale.",
    name: "Emily Chen",
    role: "CEO, Marketing Solutions Co.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 px-4 bg-background overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">What Our Clients Say</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from the businesses we've helped grow.
          </p>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  )
}
