// src/app/page.tsx
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 space-y-12">
      {/* Display Tokens */}
      <section>
        <h1 className="display1 mb-2">Display1 - Ultimate Data Security</h1>
        <h1 className="display2 mb-2">Display2 - No Access, No Risk</h1>
        <h1 className="display3 mb-2">Display3 - Secure by Design</h1>
        <h1 className="display4 mb-2">Display4 - Trust and Verify</h1>
        <h1 className="display5 mb-2">Display5 - Built for Scale</h1>
      </section>

      {/* Title Tokens */}
      <section>
        <h2 className="title1 mb-2">Title1 - Section Header</h2>
        <h2 className="title2 mb-2">Title2 - Subsection Header</h2>
        <h2 className="title3 mb-2">Title3 - Minor Header</h2>
        <h2 className="title4 mb-2">Title4 - Caption Header</h2>
      </section>

      {/* Heading Tokens */}
      <section>
        <h3 className="heading1 mb-2">Heading1 - Feature Title</h3>
        <h3 className="heading2 mb-2">Heading2 - Feature Subtitle</h3>
        <h3 className="heading3 mb-2">Heading3 - Small Title</h3>
      </section>

      {/* Body Tokens */}
      <section className="space-y-4">
        <p className="body1">
          Body1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer nec odio.
        </p>
        <p className="body2">
          Body2: Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
        </p>
        <p className="body3">
          Body3: Nulla quis sem at nibh elementum imperdiet. Duis sagittis
          ipsum.
        </p>
      </section>

      {/* Caption Tokens */}
      <section className="space-y-2">
        <span className="caption1 block">
          Caption1: Footnote text or annotation.
        </span>
        <span className="caption2 block">
          Caption2: Secondary footnote or metadata.
        </span>
      </section>
    </main>
  );
}
