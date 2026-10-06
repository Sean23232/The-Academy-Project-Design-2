import { useState } from "react";
import {
  DONATE_URL,
  EIN,
  EMAIL,
  FORM_EN,
  FORM_ES,
  LAUREN_EMAIL,
  LOCATION,
  MODEL_PHOTO,
  PHONE_DISPLAY,
  PHONE_TEL,
  TAP_PHOTO,
  dailyIncludes,
  gifts,
  journey,
  photos,
  programAreas,
  quotes,
  reasonFromSection,
  schools,
  targetYouth,
  team,
  values,
} from "./data";
import { ContactForm, NewsletterForm } from "./forms";
import { A, Arrow, Container, Kicker, PageHero, Photo, buttonClass } from "./ui";

export function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="A Los Angeles community for foster youth."
        lede="The Academy Project provides resources, advocacy, and support to foster youth in Los Angeles through empowerment, education, and community."
        image={photos.serve}
        imageAlt="A teenager reading in a library"
      />
      <section className="px-5 py-16 md:px-8 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              The Academy Project in Los Angeles has been supporting the child welfare community for over ten years. Our priority is to promote well-being and growth by collaborating with other organizations to provide art enrichment, educational support, and essential services for foster youth.
            </p>
            <p>
              Through these partnerships, we aim to create a robust network of support that empowers foster youth to thrive academically, emotionally, and creatively — to promote joy, well-being, and comprehensive growth.
            </p>
            <p>
              Founded in 2015, TAP is a 501(c)(3) organization. To date, we have positively impacted over 750 foster, unhoused, and other underserved youth with vital out-of-school time enrichment and summer programs.
            </p>
          </div>
          <aside className="border border-line bg-paper p-6 lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-tap">Mission</p>
            <p className="mt-3 font-display text-2xl leading-snug text-ink">
              Resources, advocacy, and support for foster youth in Los Angeles through empowerment, education, and community.
            </p>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-tap">Vision</p>
            <p className="mt-3 leading-relaxed text-ink-soft">
              A community where foster youth are empowered with the resources, skills, and guidance needed to become thriving, independent adults.
            </p>
          </aside>
        </Container>
      </section>

      <section className="bg-sand px-5 py-16 md:px-8 md:py-24">
        <Container>
          <Kicker>History</Kicker>
          <h2 className="display mt-3 text-4xl">A timeline, told plainly.</h2>
          <ol className="mt-10 space-y-0 border-l border-line">
            {[
              ["2015", "Lauren Costa founds The Academy Project as a 501(c)(3) after a decade working in the child welfare system and as a Court Appointed Special Advocate for foster youth in Los Angeles."],
              ["2019", "Claire Conley joins as a volunteer with the Co-Op and later serves on the Board of Directors."],
              ["2021", "Maria Cristel becomes actively involved, supporting initiatives focused on stability, opportunity, and resources for young people impacted by foster care."],
              ["Today", "The Co-Op and Camp Xavier continue in Los Angeles. More than 750 foster, unhoused, and other underserved youth have been impacted."],
            ].map(([year, text]) => (
              <li key={year} className="relative pb-8 pl-8">
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 bg-tap" aria-hidden="true" />
                <p className="font-display text-2xl text-tap">{year}</p>
                <p className="mt-2 max-w-3xl leading-relaxed text-ink-soft">{text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <Container>
          <Kicker>Our values</Kicker>
          <h2 className="display mt-3 text-4xl">What we name, and try to live.</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <li key={value} className="border border-line bg-paper px-4 py-6 text-center font-display text-xl">
                {value}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-ink-soft">
            These are the values published by The Academy Project. They sit beside a simple belief: every child and youth has limitless potential.
          </p>
        </Container>
      </section>

      <section className="bg-paper px-5 py-16 md:px-8 md:py-24" id="team">
        <Container>
          <Kicker>Leadership</Kicker>
          <h2 className="display mt-3 text-4xl">Meet the team.</h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            Lauren Costa leads The Academy Project as Executive Director and Founder. Board members and the treasurer serve alongside her.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <PersonCard person={team[0]} featured />
            <figure className="border border-line bg-ivory p-7">
              <blockquote className="text-xl leading-relaxed text-ink">“{quotes[0].text}”</blockquote>
              <figcaption className="mt-5 text-sm text-ink-soft">
                <span className="font-semibold text-ink">{quotes[0].name}</span>
                <span className="mt-1 block">{quotes[0].role}</span>
              </figcaption>
            </figure>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.slice(1).map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>
        </Container>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <Container className="flex flex-wrap items-center justify-between gap-6 border border-line bg-sand p-8">
          <div>
            <h2 className="font-display text-3xl">Our model, in more detail.</h2>
            <p className="mt-2 max-w-xl text-ink-soft">How education, stability, and consistent relationships shape the work.</p>
          </div>
          <A to="model" variant="dark">
            Our model
          </A>
        </Container>
      </section>
    </>
  );
}

function PersonCard({
  person,
  featured = false,
}: {
  person: (typeof team)[number];
  featured?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const initials = person.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
  return (
    <article className={`border border-line bg-ivory ${featured ? "p-6 md:p-8" : "p-5"}`}>
      <div className="flex gap-4">
        {person.image ? (
          <img src={person.image} alt="" className="h-24 w-20 shrink-0 bg-sand object-cover object-top" />
        ) : (
          <div className="grid h-24 w-20 shrink-0 place-items-center bg-sand font-display text-xl text-tap" aria-hidden="true">
            {initials}
          </div>
        )}
        <div>
          <h3 className="font-display text-2xl leading-tight">{person.name}</h3>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-tap">{person.role}</p>
        </div>
      </div>
      {person.bio ? (
        <>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{open ? person.bio : `${person.bio.slice(0, 140).trim()}…`}</p>
          <button
            type="button"
            className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink underline decoration-line underline-offset-4"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Show less" : "Read biography"}
          </button>
        </>
      ) : (
        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">Treasurer of The Academy Project.</p>
      )}
    </article>
  );
}

export function ModelPage() {
  return (
    <>
      <PageHero
        kicker="Our model"
        title="Support That Goes Beyond the Classroom."
        lede="Holistic, education-focused support for foster youth — especially through the middle school years, when the gap can widen beyond easy recovery."
        image={MODEL_PHOTO}
        imageAlt="Image from The Academy Project model page"
        actions={
          <>
            <A to="programs" variant="red">
              See programs
            </A>
            <A to={DONATE_URL} variant="ghost">
              Support the model
            </A>
          </>
        }
      />
      <section className="px-5 py-16 md:px-8 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              Los Angeles County is home to one of the largest populations of foster youth in the nation, with over 30,000 children in foster care — more than the entire state of New York. The existing system has service gaps. Thousands of foster youth are aging out annually with troubling shortcomings in literacy, work readiness, and life stability.
            </p>
            <p>The Academy Project steps in to offer vital support to foster youth in our communities.</p>
            <p>
              TAP was founded in 2015 by Executive Director Lauren Costa after a decade in the child welfare system and as a Court Appointed Special Advocate for foster youth in Los Angeles.
            </p>
          </div>
          <figure className="bg-ink p-7 text-ivory md:p-9">
            <blockquote className="text-xl leading-relaxed">“{quotes[0].text}”</blockquote>
            <figcaption className="mt-5 text-sm text-ivory/70">
              {quotes[0].name}, {quotes[0].role}
            </figcaption>
          </figure>
        </Container>
      </section>
      <section className="bg-paper px-5 py-16 md:px-8 md:py-24">
        <Container>
          <h2 className="display text-4xl">A path, not a single class.</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {journey.map((step, index) => (
              <li key={step.title} className="border border-line bg-ivory p-6">
                <p className="text-sm font-bold tracking-[0.14em] text-tap">
                  {String(index + 1).padStart(2, "0")}
                  {index < journey.length - 1 ? "  ↓" : ""}
                </p>
                <h3 className="mt-2 font-display text-2xl">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <section className="px-5 py-16 md:px-8 md:py-24">
        <Container className="grid gap-8 lg:grid-cols-3">
          {[
            ["Free, and long-term", "Services are completely free of charge and designed to meet the long-term needs of each child — nurturing academic achievement, emotional resilience, and a deep sense of community and belonging."],
            ["Education as stability", "Research, including studies conducted by Princeton University specifically for TAP, indicates that centering education as a point of stability and connecting youth to consistent, caring adults are key factors in promoting success."],
            ["Middle school, on purpose", "TAP places special emphasis on the transition into and through middle school, when the achievement gap can widen beyond recovery. Focused support now can lessen the need for later support and increase the likelihood of high school graduation and a stable adulthood."],
          ].map(([title, text]) => (
            <article key={title} className="border-t-2 border-tap pt-5">
              <h3 className="font-display text-2xl">{title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{text}</p>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}

const programDetails = [
  {
    id: "co-op",
    title: "The Co-Op",
    image: photos.tutor,
    alt: "Students receiving help with schoolwork",
    who: "Foster youth in middle school, ages 9–14",
    text: "A structured, nurturing out-of-school enrichment program. Adult mentors form a consistent, stable support network during after-school hours. The Co-Op offers academic support, enrichment, field trips, partner services, healthy food, transportation assistance, family support, and more.",
    points: ["Monday–Friday, 2:30–5:30 pm", "Nutritious snack, tutoring, homework help", "Music, art, and film", "Weekend and out-of-school special programs", "Transportation if needed", "Free to families and schools"],
  },
  {
    id: "camp-xavier",
    title: "Camp Xavier",
    image: photos.camp,
    alt: "Young people outdoors together at a summer program",
    who: "Current and former foster youth, ages 8–11",
    text: "A summer full-day program held in week-long sessions each July at Loyola High School in the Pico-Union neighborhood, less than a mile from The Co-Op. Camp encourages self-discovery, connection, and fun, and gives foster youth the normalizing experience of camp. Held annually with Loyola, it provides a week-long retreat for over 50 foster youth.",
    points: ["Loyola High School campus", "Counselors-in-training from Loyola", "Nearly one counselor for every camper", "Trust, community, and room to explore strengths", "A gift of $500 helps send a youth to camp"],
  },
  {
    id: "academic",
    title: "Academic Support",
    image: photos.reading,
    alt: "Students working on an assignment",
    who: "Co-Op members and participating foster youth",
    text: "Tutoring, homework help, reading support, and reading remediation. Academic assessments and support are part of how the team understands each young person’s needs.",
    points: ["Daily tutoring", "Reading support", "Homework help", "Academic assessments"],
  },
  {
    id: "art",
    title: "Art Enrichment",
    image: photos.art,
    alt: "Students painting during an art class",
    who: "Foster youth members",
    text: "Creative opportunities for young people to explore artistic interests. Art enrichment is also part of the daily after-school program.",
    points: ["Daily art enrichment at The Co-Op", "Creative exploration", "Joy and well-being alongside academics"],
  },
  {
    id: "music",
    title: "Music Enrichment",
    image: photos.music,
    alt: "A mentor and student during a guitar lesson",
    who: "Foster youth members",
    text: "Music lessons and creative development. Lessons are one of the specific ways donors can direct support — $25 contributes toward music lessons.",
    points: ["Music lessons", "Creative development", "Offered within Co-Op enrichment"],
  },
  {
    id: "dance",
    title: "Dance",
    image: photos.play,
    alt: "Young people outdoors on a sunny day",
    who: "Foster youth members",
    text: "Dance is one of the enrichment areas TAP offers to foster youth, alongside music, film, and other creative programs.",
    points: ["Listed among TAP program areas", "Part of a broader enrichment mix"],
  },
  {
    id: "film",
    title: "Arts — Film",
    image: photos.sketch,
    alt: "A young artist sketching at an easel",
    who: "Foster youth members, including Co-Op participants",
    text: "Film is offered with music and art as an enrichment opportunity inside The Co-Op and the wider program.",
    points: ["Film enrichment", "Creative storytelling", "Offered with art and music"],
  },
  {
    id: "book-club",
    title: "Book Club",
    image: photos.serve,
    alt: "A teenager with a book in a library",
    who: "Foster youth members",
    text: "Book club sits beside reading support as a way for young people to spend time with stories, language, and one another.",
    points: ["Reading together", "Complements tutoring and reading support"],
  },
  {
    id: "cooking",
    title: "Cooking / Nutrition",
    image: photos.classArt,
    alt: "Young people gathered around a creative project",
    who: "Foster youth members",
    text: "Cooking and nutrition are part of the enrichment mix, alongside the nutritious snack served at The Co-Op.",
    points: ["Cooking and nutrition activities", "Daily nutritious snack at The Co-Op"],
  },
  {
    id: "gardening",
    title: "Gardening",
    image: photos.camp,
    alt: "Young people outside during a group activity",
    who: "Foster youth members",
    text: "Gardening is one of the hands-on program areas offered to enrich the lives of foster youth.",
    points: ["Hands-on outdoor learning", "Part of TAP’s enrichment range"],
  },
  {
    id: "field-trips",
    title: "Field Trips",
    image: photos.friends,
    alt: "Two teenagers talking together outdoors",
    who: "Co-Op members and participating youth",
    text: "Field trips and special days out with partners extend learning beyond the center. A gift of $50 gives youth the chance to enjoy a special day out.",
    points: ["Outings with partners", "Part of Co-Op enrichment", "$50 supports a special day out"],
  },
  {
    id: "therapy",
    title: "Love4Life Therapy",
    image: photos.walk,
    alt: "Two young people walking and talking",
    who: "Foster youth members",
    text: "Love4Life group and individual therapy is offered alongside mental health assessments and support. Staff and volunteers are trained in trauma-informed care.",
    points: ["Group and individual therapy", "Mental health assessments and support", "Trauma-informed training for staff and volunteers"],
  },
  {
    id: "social",
    title: "Social & Community Development",
    image: photos.artGroup,
    alt: "A group of young people creating together",
    who: "Foster youth members",
    text: "Peer activities, relationships with caring adults, and a sense of belonging. Social skills are named alongside art, music, creativity, and academic support as core services.",
    points: ["Peer activities", "Relationships with consistent adults", "Belonging and social skills"],
  },
  {
    id: "out-of-school",
    title: "Out-of-School Programs",
    image: photos.hero,
    alt: "A teacher assisting students in a classroom",
    who: "Foster youth, with emphasis on middle school",
    text: "Meaningful support beyond the school day. The Co-Op is the weekday anchor, with additional programs over some weekends and during other out-of-school time.",
    points: ["Weekday afternoons", "Some weekends", "Out-of-school time enrichment"],
  },
  {
    id: "summer",
    title: "Summer / Special Programs",
    image: photos.play,
    alt: "Young people enjoying time outdoors",
    who: "Current and former foster youth, including Camp Xavier ages 8–11",
    text: "Camp Xavier anchors the summer. Special programs also run over some weekends and during out-of-school time through the year.",
    points: ["Camp Xavier each July", "Week-long sessions", "Special weekend programs"],
  },
];

export function ProgramsPage() {
  return (
    <>
      <PageHero
        kicker="Programs"
        title="Free programs for foster youth in Los Angeles."
        lede="The mission of TAP is to provide resources, advocacy, and support through empowerment, education, and community. Every program below is offered at no cost to families or schools."
        image={photos.artGroup}
        imageAlt="Young people creating art together"
        actions={
          <A to="register" variant="red">
            Register
          </A>
        }
      />
      <section className="px-5 py-16 md:px-8 md:py-24">
        <Container className="space-y-16">
          {programDetails.map((program) => (
            <article key={program.id} id={program.id} className="grid items-center gap-8 border-b border-line pb-16 lg:grid-cols-12">
              <div className="photo-zoom lg:col-span-5">
                <Photo src={program.image} alt={program.alt} className="aspect-[4/3] w-full" />
              </div>
              <div className="lg:col-span-7">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-tap">{program.who}</p>
                <h2 className="display mt-2 text-4xl">{program.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">{program.text}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {program.points.map((point) => (
                    <li key={point} className="border border-line bg-paper px-3 py-2 text-sm text-ink-soft">
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <A to="register" variant="red">
                    Register
                  </A>
                  <A to={DONATE_URL} variant="ghost">
                    Support this work
                  </A>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>
      <section className="bg-sand px-5 py-16 md:px-8 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="display text-3xl">Who the programs are designed for</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              TAP walks with young people who have already lived a great deal. Staff and volunteers receive training in trauma-informed care so support can be steady, respectful, and useful.
            </p>
            <ul className="mt-5 space-y-2">
              {targetYouth.map((item) => (
                <li key={item} className="border-l-2 border-tap pl-3 text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display text-3xl">Daily after-school includes</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {dailyIncludes.map((item) => (
                <li key={item} className="bg-ivory px-3 py-2 text-sm">
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 font-display text-2xl">Program areas</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {programAreas.map((item) => (
                <li key={item} className="text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}

export function ImpactPage() {
  return (
    <>
      <PageHero
        kicker="Impact"
        title="More than a program. A community."
        lede="Over 750 foster, unhoused, and other underserved youth have been reached with out-of-school enrichment and summer programs — free of charge."
        image={TAP_PHOTO}
        imageAlt="Photograph from The Academy Project"
      />
      <section className="px-5 py-16 md:px-8 md:py-24">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["750+", "Youth impacted through enrichment and summer programs"],
            ["50+", "Foster youth in the annual Camp Xavier retreat"],
            ["2015", "The year TAP was founded in Los Angeles"],
            ["Free", "Cost to eligible members, families, and schools"],
          ].map(([n, label]) => (
            <article key={label} className="border border-line bg-paper p-6">
              <p className="display text-4xl text-tap">{n}</p>
              <p className="mt-3 text-ink-soft">{label}</p>
            </article>
          ))}
        </Container>
        <Container className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              Impact, for TAP, is not only a count. It is a young person who has a snack, a tutor, and someone who expects them back tomorrow. It is a camp week where foster youth get to be campers. It is a relationship that does not end when a placement changes.
            </p>
            <p>
              The child welfare system struggles with high caseloads, staffing shortages, and limited resources. TAP’s response is practical: education as a point of stability, and consistent caring adults.
            </p>
            <p>
              Every TAP foster youth has lived severe adversity, including removal from home, often without warning. Trauma can shape development and outlook. That is why staff and volunteers are trained in trauma-informed care — so healing and growth can be supported with skill, not slogans.
            </p>
          </div>
          <Photo src={photos.hero} alt="A teacher helping students in a classroom" className="aspect-[4/3] w-full" />
        </Container>
      </section>
      <section className="bg-paper px-5 py-16 md:px-8 md:py-24">
        <Container className="grid gap-6 lg:grid-cols-2">
          {quotes.map((quote) => (
            <figure key={quote.name} className="border border-line bg-ivory p-7 md:p-9">
              <blockquote className="text-xl leading-relaxed text-ink">“{quote.text}”</blockquote>
              <figcaption className="mt-5 text-sm text-ink-soft">
                <span className="font-semibold text-ink">{quote.name}</span>
                <span className="mt-1 block">{quote.role}</span>
              </figcaption>
            </figure>
          ))}
        </Container>
      </section>
    </>
  );
}

export function GivePage() {
  return (
    <>
      <PageHero
        kicker="Ways to give"
        title="Help Create Brighter Futures."
        lede="Your gift supports free education, enrichment, camp, transportation, and the caring adults who make The Academy Project a steady place."
        image={photos.camp}
        imageAlt="Young people outdoors during a summer program"
        actions={
          <>
            <A to={DONATE_URL} variant="red">
              Donate once
            </A>
            <A to={DONATE_URL} variant="ghost">
              Give monthly
            </A>
          </>
        }
      />
      <section className="px-5 py-16 md:px-8 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-4 text-lg leading-relaxed text-ink-soft lg:col-span-7">
            <p>
              Day camp at Loyola High School in Pico-Union is a chance for foster youth to meet one another and explore what interests them. In partnership with Loyola, high school students volunteer as counselors-in-training. The ratio of counselor to camper is almost one to one.
            </p>
            <p>
              Guided by supportive adult role models, campers build trust and a sense of community. Most importantly, Camp Xavier is a fun, care-free experience where foster youth can explore their unique interests and strengths.
            </p>
            <p>Whether it is a one-time gift or a monthly donation, your support means the world and truly makes a difference. Magnify your impact by making it a monthly donation.</p>
          </div>
          <aside className="border border-line bg-ink p-7 text-ivory lg:col-span-5">
            <h2 className="font-display text-3xl">Give securely online</h2>
            <p className="mt-3 text-ivory/75">
              Donations are completed on Spotfund, the giving page linked from The Academy Project. This site does not process payments.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <A to={DONATE_URL} variant="red">
                Donate once
              </A>
              <A to={DONATE_URL} variant="light">
                Give monthly
              </A>
            </div>
            <p className="mt-6 text-sm text-ivory/60">501(c)(3) · EIN {EIN} · Est. 2015 · Los Angeles</p>
          </aside>
        </Container>
        <Container className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gifts.map((gift) => (
            <article key={gift.amount} className="border border-line bg-paper p-6">
              <p className="display text-4xl text-tap">{gift.amount}</p>
              <p className="mt-3 leading-relaxed text-ink-soft">{gift.text}</p>
            </article>
          ))}
        </Container>
      </section>
      <section className="bg-sand px-5 py-16 md:px-8 md:py-20">
        <Container>
          <h2 className="display text-3xl">Other ways to give</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Become a corporate sponsor", "Partner with TAP so programs, camp, and transportation can keep reaching foster youth.", "contact/partnership"],
              ["Mail your gift", "Contact us and we will share mailing instructions for a check.", "contact/donation"],
              ["Planned gift or stock", "Contact us to establish a planned gift or stock donation.", "contact/donation"],
            ].map(([title, text, href]) => (
              <article key={title} className="bg-ivory p-6">
                <h3 className="font-display text-2xl">{title}</h3>
                <p className="mt-3 text-ink-soft">{text}</p>
                <A to={href} className="mt-4 inline-flex items-center gap-2 font-semibold text-tap">
                  Start a conversation <Arrow />
                </A>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-soft">
            Public profiles:{" "}
            <a className="underline underline-offset-4" href="https://www.guidestar.org/profile/47-1205640" target="_blank" rel="noopener noreferrer">
              GuideStar
            </a>
            {" · "}
            <a className="underline underline-offset-4" href="https://www.charitynavigator.org/ein/471205640" target="_blank" rel="noopener noreferrer">
              Charity Navigator
            </a>
          </p>
        </Container>
      </section>
    </>
  );
}

export function InvolvedPage() {
  const paths = [
    ["Donate", "A one-time or monthly gift supports camp, lessons, transportation, and the daily program.", DONATE_URL, "Give"],
    ["Volunteer", "The current site invites people who want to volunteer to be in touch. Tell us how you hope to help.", "contact/volunteer", "Offer your time"],
    ["Become a partner", "Schools, agencies, and community groups can collaborate on enrichment, referrals, and support.", "contact/partnership", "Talk with us"],
    ["Corporate sponsorship", "Companies can sponsor the work and stand with foster youth in Los Angeles.", "contact/partnership", "Sponsor"],
    ["Workshops", "Want to join our workshops? Send a note and we will follow up.", "contact/volunteer", "Ask about workshops"],
    ["Register a youth", "Parents, foster parents, social workers, teachers, lawyers, and others can start an interest form.", "register", "Register"],
  ] as const;
  return (
    <>
      <PageHero
        kicker="Get involved"
        title="There is a sincere way to help."
        lede="Donate, volunteer, partner, or help a young person find The Co-Op. The invitation is simple, and the work is real."
        image={photos.friends}
        imageAlt="Two teenagers in conversation outdoors"
        actions={
          <>
            <A to={DONATE_URL} variant="red">
              Donate
            </A>
            <A to="register" variant="ghost">
              Register
            </A>
          </>
        }
      />
      <section className="px-5 py-16 md:px-8 md:py-24">
        <Container className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {paths.map(([title, text, href, cta]) => (
            <article key={title} className="flex flex-col border border-line bg-paper p-6">
              <h2 className="font-display text-2xl">{title}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{text}</p>
              <A to={href} className="mt-5 inline-flex items-center gap-2 font-semibold text-tap">
                {cta} <Arrow />
              </A>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}

export function ContactPage({ section }: { section?: string }) {
  const initial = (section && reasonFromSection[section]) || "General Question";
  return (
    <>
      <PageHero
        kicker="Contact"
        title="We would like to hear from you."
        lede="Questions, volunteering, partnerships, donations, registration, or programs — write or call. A person will follow up."
        image={photos.walk}
        imageAlt="Two young people walking together outdoors"
      />
      <section className="px-5 py-16 md:px-8 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl">Send a message</h2>
            <div className="mt-6">
              <ContactForm key={initial} initialReason={initial} />
            </div>
          </div>
          <aside className="space-y-6 lg:col-span-5">
            <div className="border border-line bg-paper p-6">
              <h2 className="font-display text-2xl">Direct</h2>
              <ul className="mt-4 space-y-3 text-ink-soft">
                <li>
                  <a className="font-semibold text-ink underline underline-offset-4" href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                </li>
                <li>
                  <a className="font-semibold text-ink underline underline-offset-4" href={`tel:${PHONE_TEL}`}>
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>{LOCATION}</li>
                <li>
                  Registration questions:{" "}
                  <a className="underline underline-offset-4" href={`mailto:${LAUREN_EMAIL}`}>
                    {LAUREN_EMAIL}
                  </a>
                </li>
              </ul>
            </div>
            <div className="border border-line bg-sand p-6">
              <h2 className="font-display text-2xl">Want to stay connected?</h2>
              <p className="mt-2 text-ink-soft">Join the mailing list for updates from The Academy Project.</p>
              <NewsletterForm />
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}

export function RegisterPage() {
  return (
    <>
      <PageHero
        kicker="Join"
        title="Join The Academy Project"
        lede="In support of our mission, all services are available to foster youth members completely free of charge. There is no cost to families or schools."
        image={photos.tutor}
        imageAlt="A teacher helping students with schoolwork"
        actions={
          <>
            <a className={buttonClass("red")} href={FORM_EN} target="_blank" rel="noopener noreferrer">
              Register in English
            </a>
            <a className={buttonClass("ghost")} href={FORM_ES} target="_blank" rel="noopener noreferrer">
              Registro en español
            </a>
          </>
        }
      />
      <section className="px-5 py-16 md:px-8 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-4 text-lg leading-relaxed text-ink-soft lg:col-span-7">
            <p>
              The Co-Op after-school program supports foster youth in middle school. It operates Monday through Friday from 2:30 pm to 5:30 pm and offers a nutritious snack, tutoring, homework help, and enrichment such as music, art, and film.
            </p>
            <p>Special programs are offered over some weekends and during out-of-school time. Transportation is offered if needed.</p>
            <p>
              Thank you for your interest. Please complete the interest form and we will get back to you as soon as we can to learn more about your student and discuss how The Co-Op can be a fit. Questions can go to Lauren Costa at {LAUREN_EMAIL}.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a className={buttonClass("red")} href={FORM_EN} target="_blank" rel="noopener noreferrer">
                Register
              </a>
              <a className={buttonClass("ghost")} href={FORM_ES} target="_blank" rel="noopener noreferrer">
                Formulario en español
              </a>
            </div>
            <p className="text-sm text-muted">
              Registration stays on The Academy Project’s official Google interest forms for 2026 — English and Spanish. This page does not replace those forms.
            </p>
          </div>
          <aside className="border border-line bg-paper p-6 lg:col-span-5">
            <h2 className="font-display text-2xl">The form asks for</h2>
            <ul className="mt-4 space-y-2 text-ink-soft">
              {[
                "Youth’s first and last name",
                "Parent, guardian, or social worker name",
                "Relationship to the youth",
                "Phone and best times to be contacted",
                "Whether the youth is in care or has an open DCFS case",
                "Approximate time in care, birthday, school, and grade",
              ].map((item) => (
                <li key={item} className="border-b border-line py-2">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">
              Parents, foster parents, social workers, lawyers, teachers, school staff, and others may submit interest.
            </p>
          </aside>
        </Container>
      </section>
      <section className="bg-sand px-5 py-16 md:px-8">
        <Container className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl">Near these schools</h2>
            <ul className="mt-3 space-y-2 text-ink-soft">
              {schools.map((school) => (
                <li key={school}>{school}</li>
              ))}
              <li>and many more</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl">Safety and wellness</h2>
            <ul className="mt-3 space-y-2 text-ink-soft">
              {["Fully secured lot", "Security system", "Outdoor cameras", "Academic assessments and support", "Mental health assessments and support"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl">A short history</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Founded in 2015, TAP is a 501(c)(3) in Los Angeles. The model draws on research, including studies conducted by Princeton University specifically for TAP. Camp Xavier, with Loyola High School, is a week-long retreat for over 50 foster youth.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
