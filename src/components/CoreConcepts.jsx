import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept.jsx";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept, index) => {
          return (
            <CoreConcept
              key={index}
              {...concept}
              // title={concept.title}
              // description={concept.description}
              // image={concept.image}
            />
          );
        })}
        {/* <CoreConcepts
                      {...CORE_CONCEPTS[0]}
                      // title={CORE_CONCEPTS[0].title}
                      // description={CORE_CONCEPTS[0].description}
                      // image={CORE_CONCEPTS[0].image}
                    />
                    <CoreConcepts
                      title={CORE_CONCEPTS[1].title}
                      description={CORE_CONCEPTS[1].description}
                      image={CORE_CONCEPTS[1].image}
                    />
                    <CoreConcepts
                      title={CORE_CONCEPTS[2].title}
                      description={CORE_CONCEPTS[2].description}
                      image={CORE_CONCEPTS[2].image}
                    />
                    <CoreConcepts
                      title={CORE_CONCEPTS[3].title}
                      description={CORE_CONCEPTS[3].description}
                      image={CORE_CONCEPTS[3].image}
                    /> */}
      </ul>
    </section>
  );
}
