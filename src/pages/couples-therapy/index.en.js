import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { BookingButton } from "../../components/buttons"

const Index = props => {
  return (
    <Layout {...props}>
      <SEO
        title="Couples Therapy | Couple Counseling and Marriage Counseling in Tokyo"
        description="Help for partnered couples, premarital counseling, marriage counseling, couples divorced, or considering divorce, dating coaching."
      />
    <section className="py-6 md:py-16 bg-image bg-image-plant">
        <div className="container">
          <div className="lg:flex">
            <div className="lg:w-2/3">
              <div className="flex">
                <div className="w-full">
                  <h1 className="page-title b-line">Couples Therapy</h1>
                  <h2 className="font-light text-4xl">
                    Help for partnered <strong>couples</strong>,{" "}
                    <strong>premarital counseling</strong>,{" "}
                    <strong>marriage counseling</strong>, couples divorced, or considering
                    divorce, dating coaching from Gottman
                    method trained therapist
                  </h2>
                  <p className="text-lg">
                  <ul>
                    <li>Do you want to reduce conflict and improve communication?</li>
                    <li>Do you long for a way to rebuild trust and connection?</li>
                    <li>Are you looking for greater emotional or sexual intimacy?</li>
                    <li>Are you wondering whether to make it work or to get a
                      divorce?</li>
                      <li>Could you benefit from professional support and guidance
                        through a difficult patch in your relationship?</li>
                  </ul>
                  <p>
                    You’re not alone! Most relationships go through challenging times.
                    In fact, most couples find themselves in trouble because they’ve
                    never learned the tools and skills necessary to make a long-term
                    relationship work. What if you didn’t have to end your relationship?
                    What if, by working on these challenges, your relationship actually
                    thrives and you feel closer than ever?
                  </p>
                  </p>
                </div>
  
                <div className="w-full">
                  <h2 className="text-5xl">What is Gottman Method Couples Therapy?</h2>
                  <p>
                    Gottman Method Couple Therapy is a structured, goal-oriented and
                    evidence-based therapy. Intervention strategies are based upon
                    Dr.John Gottman’s three decades of scientific research with over
                    3,000 couples. This research shows us what actually works to help
                    couples achieve a long-term healthy relationship.
                    <strong>Some skills that you and your spouse or partner will learn
                      include:</strong>
                      <ul>
                        <li>Work through and resolve conflict, even around arguments
                          that you’ve been having for years</li>
                          <li>Develop a greater sense of understanding and appreciation for
                            your partner</li>
                            <li>Increase your fondness and love for each other</li>
                            <li>Build soothing and coping strategies to help you and your
                              partner through the inevitable, tough times</li>
                      </ul>
                  </p>
                </div>
              </div>
              <p className="text-lg">
                Couple counseling by an expert may save your relationship before
                it&#39;s too late. Yet, remaining together is not the only--nor
                necessarily the best--outcome for all couples seeking
                professional help. Sometimes couples therapy can facilitate
                letting go of a relationship that is no longer satisfying,
                sustainable, or beneficial. Most often the outcome of couples
                counseling cannot be determined beforehand. In most cases
                though, the outcome (or decisions made after consultations with
                couples therapists) becomes more deliberate and manageable, and
                less catastrophic than those separations or divorces decided and
                executed without professional help.
              </p>
              <p className="text-lg">
                I use an integrative approach to conflict negotiation within
                couples, incorporating the affective, cognitive, and
                transactional levels existing in all interactions to better
                guide the navigation of obstacles and fractures taking place
                among partners. I work with different layers and dimensions
                common to all couples&#39; lives: power, intimacy, and
                commitment; and from multiple perspectives: cognition, emotion,
                past, present, and future; the conscious and the unconscious
                dynamics in and between them; problem-solving or insight focus.
              </p>
              <div className="text-center md:text-left">
                <BookingButton />
              </div>
            </div>
            <div className="w-1/3"></div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
