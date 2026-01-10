import { notFound } from "next/navigation";
import Link from "next/link";
import { getSolution, getAllSolutions } from "@/lib/content";

// Generate static paths for all solutions
export async function generateStaticParams() {
  const solutions = getAllSolutions();
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

// Generate metadata for each solution page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    return { title: "Solution Not Found" };
  }

  return {
    title: `${solution.title} | Banner`,
    description: solution.description,
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    notFound();
  }

  return (
    <>
      <header className="section_header1">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="header1_component">
                <div className="max-width-large">
                  <div className="margin-bottom margin-small">
                    <h1 className="heading-style-h1">{solution.heroTitle}</h1>
                  </div>
                  <p className="text-size-medium">{solution.heroDescription}</p>
                  <div className="margin-top margin-medium">
                    <div className="button-group">
                      <Link href="/contact" className="button w-button">
                        Book a Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section_layout16">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="text-align-center">
                <div className="max-width-large align-center">
                  <h2 className="heading-style-h2">Key Features</h2>
                </div>
              </div>
              <div className="spacer-large"></div>
              <div className="layout16_component">
                <div className="layout16_list">
                  {solution.features.map((feature, index) => (
                    <div key={index} className="layout16_item">
                      <div className="layout16_item-content">
                        <h3 className="heading-style-h5">{feature.title}</h3>
                        <p className="text-size-regular">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_cta">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="text-align-center">
                <div className="max-width-large align-center">
                  <h2 className="heading-style-h2 text-color-white">
                    Ready to streamline your {solution.title.toLowerCase()} CapEx?
                  </h2>
                  <p className="text-size-medium text-color-white">
                    See how Banner can help your team work smarter.
                  </p>
                  <div className="margin-top margin-medium">
                    <Link href="/contact" className="button is-white w-button">
                      Book a Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
