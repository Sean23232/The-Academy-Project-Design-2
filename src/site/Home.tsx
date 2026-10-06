import {
  DONATE_URL,
  FB,
  IG,
  LI,
  TAP_PHOTO,
  dailyIncludes,
  gifts,
  journey,
  photos,
  quotes,
  services,
  stats,
} from "./data";
import { A, Arrow, Container, CountUp, Icon, Kicker, Photo } from "./ui";
import { NewsletterForm } from "./forms";

const serviceIcons = ["book", "art", "music", "people", "clock", "sun"];

export function HomePage() {
  return (
    <>
      <section className="hero-wash">
        <Container className="grid items-center gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-12 lg:gap-12 lg:py-24">
          <div className="lg:col-span-6">
            <Kicker>Los Angeles · Since 2015</Kicker>
            <h1 className="display mt-5 text-[2.7rem] text-ink sm:text-5xl md:text-[3.6rem]">
              Empowering Foster Youth to Learn, Grow &amp; Thrive.
            </h1>
            <p className="prose-measure mt-6 text-lg leading-relaxed text-ink-soft md:text-xl">
              The Academy Project provides free education, enrichment, advocacy, and support services that help foster youth build confidence, community, and brighter futures.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <A to="involved" variant="red">
                Get involved
              </A>
              <A to="give" variant="ghost">
                Support our mission
              </A>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
              All services are available to eligible foster youth members completely free of charge. No cost to families or schools.
            </p>
          </div>
          <div className="relative lg:col-span-6">
            <div className="absolute -left-3 top-6 hidden h-24 w-1.5 bg-tap lg:block" aria-hidden="true" />
            <Photo
              src={TAP_PHOTO}
              alt="Photograph from The Academy Project"
              eager
              className="aspect-[4/5] w-full sm:aspect-[5/4]"
            />
            <p className="mt-3 text-sm text-muted">A photograph from The Academy Project.</p>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-sand" aria-label="Impact">
        <Container className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-sand px-6 py-8 md:px-8 md:py-10">
              <p className="display text-5xl text-ink md:text-6xl">
                {stat.value === "750+" ? <CountUp to={750} suffix="+" /> : stat.value === "10+" ? <CountUp to={10} suffix="+" /> : stat.value}
              </p>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-tap">{stat.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{stat.note}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-12">
          <div className="photo-zoom reveal lg:col-span-7">
            <Photo
              src={photos.serve}
              alt="A teenager sitting with a book in a library"
              className="aspect-[4/3] w-full"
            />
          </div>
          <div className="reveal lg:col-span-5">
            <Kicker>Who we serve</Kicker>
            <h2 className="display mt-4 text-4xl text-ink md:text-5xl">Every Young Person Deserves the Opportunity to Thrive.</h2>
            <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-ink-soft">
              <p>
                The Academy Project supports foster youth — and has reached unhoused and other underserved young people — through education, enrichment, advocacy, relationships, and community.
              </p>
              <p>
                Too often, foster youth face educational disruption, unstable placements, and gaps in the support around them. What changes the day is a consistent caring adult, a peer community, and a place that stays put even when everything else moves.
              </p>
              <p>
                Los Angeles County has over 30,000 children in foster care — more foster youth than the entire state of New York. TAP’s aim is a community where young people have the resources, skills, and guidance to become thriving, independent adults.
              </p>
              <p>
                At our core is a belief in the limitless potential of every child and youth. Authentic relationships, independence, and self-confidence are how we help build a basis for lifelong success.
              </p>
            </div>
            <A to="about" className="mt-6 inline-flex items-center gap-2 font-semibold text-tap hover:text-tap-dark">
              Learn who we are <Arrow />
            </A>
          </div>
        </Container>
      </section>

      <section className="bg-paper px-5 py-20 md:px-8 md:py-28">
        <Container>
          <div className="max-w-2xl reveal">
            <Kicker>What we do</Kicker>
            <h2 className="display mt-4 text-4xl text-ink md:text-5xl">Care, learning, and creativity — free of charge.</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              TAP is dedicated to breaking the cycle of instability and educational disruption faced by foster youth, through out-of-school enrichment and summer programs.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.id} className="card-lift reveal flex flex-col border border-line bg-ivory p-6">
                <span className="grid h-11 w-11 place-items-center bg-sand text-tap">
                  <Icon name={serviceIcons[index] ?? "book"} />
                </span>
                <h3 className="mt-5 font-display text-2xl text-ink">{service.title}</h3>
                <p className="mt-3 flex-1 text-[16px] leading-relaxed text-ink-soft">{service.text}</p>
                <A to={`programs/${service.id}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-tap">
                  Learn more <Arrow />
                </A>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink text-ivory">
        <Container className="grid lg:grid-cols-2">
          <div className="px-5 py-16 md:px-10 md:py-20">
            <Kicker>The Co-Op</Kicker>
            <h2 className="display mt-4 text-4xl md:text-5xl">An after-school home base for middle school foster youth.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ivory/80">
              The Co-Op is a structured, nurturing out-of-school program for foster youth ages 9–14. A dedicated team of adult mentors forms a consistent support network during key after-school hours.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="border border-white/15 p-4">
                <dt className="uppercase tracking-[0.14em] text-[#e7b7bc]">When</dt>
                <dd className="mt-2 text-lg">Monday–Friday, 2:30–5:30 pm</dd>
              </div>
              <div className="border border-white/15 p-4">
                <dt className="uppercase tracking-[0.14em] text-[#e7b7bc]">Cost</dt>
                <dd className="mt-2 text-lg">Free for members</dd>
              </div>
            </dl>
            <ul className="mt-6 flex flex-wrap gap-2">
              {dailyIncludes.concat(["Music", "Film", "Field trips"]).map((item) => (
                <li key={item} className="border border-white/15 px-3 py-1.5 text-sm text-ivory/85">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] leading-relaxed text-ivory/70">
              A nutritious snack, tutoring, homework help, reading support, and enrichment such as music, art, and film. Special programs run over some weekends. Transportation is offered if needed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <A to="programs/co-op" variant="light">
                Learn about The Co-Op
              </A>
              <A to="register" variant="line">
                Register
              </A>
            </div>
          </div>
          <div className="relative min-h-80">
            <Photo
              src={photos.artGroup}
              alt="Young people drawing together during a creative session"
              className="h-full min-h-80 w-full"
            />
          </div>
        </Container>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <Container>
          <div className="max-w-2xl reveal">
            <Kicker>Our model</Kicker>
            <h2 className="display mt-4 text-4xl text-ink md:text-5xl">Support That Goes Beyond the Classroom.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Services are completely free and designed for the long-term needs of each child — academic achievement, emotional resilience, belonging, and the confidence to thrive in school and in life.
            </p>
          </div>
          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {journey.map((step, index) => (
              <li key={step.title} className="reveal border border-line bg-paper p-6">
                <p className="text-sm font-bold tracking-[0.16em] text-tap">0{index + 1}</p>
                <h3 className="mt-3 font-display text-2xl">{step.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-ink-soft">{step.text}</p>
                {index < journey.length - 1 ? (
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-clay" aria-hidden="true">
                    Continues
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
          <A to="model" className="mt-8 inline-flex items-center gap-2 font-semibold text-tap">
            Read our model <Arrow />
          </A>
        </Container>
      </section>

      <section className="bg-sand px-5 py-20 md:px-8 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <Kicker>Impact</Kicker>
            <h2 className="display mt-4 text-4xl text-ink md:text-5xl">More Than a Program. A Community.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              To date, TAP has positively impacted over 750 foster, unhoused, and other underserved youth. The work looks like homework finished beside someone who knows your name, a camp week that feels ordinary and extraordinary at once, and adults who stay.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              We collaborate with other organizations so foster youth can thrive academically, emotionally, and creatively — and so joy, well-being, and growth are part of the same story.
            </p>
            <A to="impact" className="mt-6 inline-flex items-center gap-2 font-semibold text-tap">
              See our impact <Arrow />
            </A>
          </div>
          <figure className="reveal border border-line bg-paper p-7 md:p-9">
            <blockquote className="font-display text-2xl leading-snug text-ink md:text-[1.7rem]">
              “{quotes[1].text}”
            </blockquote>
            <figcaption className="mt-6 text-sm text-ink-soft">
              <span className="font-semibold text-ink">{quotes[1].name}</span>
              <span className="mt-1 block">{quotes[1].role}</span>
            </figcaption>
          </figure>
        </Container>
        <Container className="mt-8">
          <Photo
            src={TAP_PHOTO}
            alt="Photograph from The Academy Project"
            className="aspect-[16/8] w-full"
          />
          <p className="mt-3 text-sm text-muted">A photograph from The Academy Project.</p>
        </Container>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Kicker>Programs</Kicker>
              <h2 className="display mt-4 text-4xl text-ink md:text-5xl">Places to learn, make, and belong.</h2>
            </div>
            <A to="programs" className="inline-flex items-center gap-2 font-semibold text-tap">
              All programs <Arrow />
            </A>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              {
                href: "programs/co-op",
                title: "The Co-Op",
                image: photos.tutor,
                alt: "A teacher working with students at a classroom table",
                text: "Weekday after-school support for foster youth ages 9–14: snack, tutoring, reading, art, music, film, and peer community.",
              },
              {
                href: "programs/camp-xavier",
                title: "Camp Xavier",
                image: photos.camp,
                alt: "Children outdoors together during a summer program",
                text: "Week-long July day camp at Loyola High School in Pico-Union for current and former foster youth ages 8–11.",
              },
              {
                href: "programs/art",
                title: "Enrichment",
                image: photos.music,
                alt: "A mentor and a young person during a guitar lesson",
                text: "Art, music lessons, dance, film, book club, cooking and nutrition, gardening, and field trips.",
              },
            ].map((item) => (
              <a key={item.title} href={`#/${item.href}`} className="card-lift photo-zoom group block border border-line bg-paper">
                <Photo src={item.image} alt={item.alt} className="aspect-[3/2] w-full" />
                <div className="p-6">
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-ink-soft">{item.text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-tap">
                    Learn more <Arrow />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper px-5 py-20 md:px-8 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Kicker>Ways to give</Kicker>
            <h2 className="display mt-4 text-4xl text-ink md:text-5xl">Help Create Brighter Futures.</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Whether it is a one-time gift or a monthly donation, your support keeps tutoring, transportation, music, camp, and community within reach. Magnify your impact by making it a monthly donation.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gifts.map((gift) => (
              <article key={gift.amount} className="border border-line bg-ivory p-6">
                <p className="display text-4xl text-tap">{gift.amount}</p>
                <p className="mt-3 text-[16px] leading-relaxed text-ink-soft">{gift.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <A to={DONATE_URL} variant="red">
              Donate once
            </A>
            <A to={DONATE_URL} variant="ghost">
              Give monthly
            </A>
            <A to="give" variant="ghost">
              Other ways to give
            </A>
          </div>
        </Container>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <Container>
          <Kicker>Partners</Kicker>
          <h2 className="display mt-4 max-w-3xl text-4xl text-ink md:text-5xl">Together, We Create Greater Impact.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Our priority is to promote well-being and growth by collaborating with other organizations — art enrichment, educational support, and essential services, offered as a network around foster youth.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <article className="border border-line bg-paper p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-tap">Program partner</p>
              <h3 className="mt-3 font-display text-2xl">Loyola High School</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-ink-soft">
                Camp Xavier is held each July on the Loyola campus in Pico-Union, less than a mile from The Co-Op. High school students volunteer as counselors-in-training. The ratio of counselor to camper is almost one to one.
              </p>
            </article>
            <article className="border border-line bg-paper p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-tap">School community</p>
              <h3 className="mt-3 font-display text-2xl">Nearby schools</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-ink-soft">
                The Academy Project Center is near Richard Merkin Middle School, Downtown Value School, Berendo Middle School, Oscar Romero Charter, and many more.
              </p>
            </article>
            <article className="border border-line bg-paper p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-tap">Research</p>
              <h3 className="mt-3 font-display text-2xl">Princeton University</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-ink-soft">
                The program is informed by research, including studies conducted by Princeton University specifically for TAP, on placement stability and relationships with consistent, caring adults.
              </p>
            </article>
          </div>
          <A to="contact/partnership" className="mt-8 inline-flex items-center gap-2 font-semibold text-tap">
            Become a partner <Arrow />
          </A>
        </Container>
      </section>

      <section className="bg-paper px-5 py-20 md:px-8 md:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <Kicker>Follow our journey</Kicker>
              <h2 className="display mt-4 text-4xl text-ink">From our community.</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                Follow The Academy Project for program invitations, community moments, and updates. We do not republish social posts here — the live feeds are the source.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <A to={IG} variant="dark">
                Instagram
              </A>
              <A to={LI} variant="ghost">
                LinkedIn
              </A>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {[
              [photos.art, "Students painting in an art studio"],
              [photos.music, "A guitar lesson between a mentor and a young person"],
              [photos.reading, "Students working on an assignment together"],
              [photos.play, "Young people outdoors on a sunny day"],
              [photos.friends, "Two teenagers talking outdoors"],
              [photos.classArt, "Children focused on art in a classroom"],
            ].map(([src, alt]) => (
              <a key={alt} href={IG} target="_blank" rel="noopener noreferrer" className="photo-zoom group relative block" aria-label="Follow The Academy Project on Instagram">
                <Photo src={src} alt={alt} className="aspect-square w-full" />
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            These photos illustrate learning, creativity, and community. They are not presented as posts from our accounts. Follow Instagram and LinkedIn for images and updates from our programs. Also on{" "}
            <a className="underline decoration-line underline-offset-4 hover:text-ink" href={FB} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            .
          </p>
        </Container>
      </section>

      <section className="px-5 py-16 md:px-8">
        <Container className="border border-line bg-sand px-6 py-10 md:px-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <Kicker>Newsletter</Kicker>
              <h2 className="display mt-4 text-3xl text-ink md:text-4xl">Want to stay connected?</h2>
              <p className="mt-3 text-lg leading-relaxed text-ink-soft">
                Get the latest updates by joining our mailing list. We will only use your email to share news from The Academy Project.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </Container>
      </section>

      <section className="bg-ink text-ivory">
        <Container className="grid lg:grid-cols-2">
          <Photo
            src={photos.walk}
            alt="Two teenagers walking and talking outdoors"
            className="h-72 w-full lg:h-full"
          />
          <div className="px-5 py-16 md:px-12 md:py-20">
            <h2 className="display text-4xl md:text-5xl">Together, We Can Help Young People Thrive.</h2>
            <p className="mt-5 text-lg leading-relaxed text-ivory/80">
              Whether you give, volunteer, partner, or simply help spread the word, your support can help create opportunities and brighter futures for foster youth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <A to={DONATE_URL} variant="red">
                Donate
              </A>
              <A to="involved" variant="line">
                Get involved
              </A>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
