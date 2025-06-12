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

      {/* Color Tokens Test */}
      <section className="space-y-8">
        <h2 className="title2 mb-6">Color System Test</h2>

        {/* Primary Colors */}
        <div className="space-y-4">
          <h3 className="heading2">Primary Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-500 text-white p-4 rounded">
              <div className="caption1">blue-500</div>
              <div className="body2">#2b7fff</div>
            </div>
            <div className="bg-green-500 text-white p-4 rounded">
              <div className="caption1">green-500</div>
              <div className="body2">#00c950</div>
            </div>
            <div className="bg-red-500 text-white p-4 rounded">
              <div className="caption1">red-500</div>
              <div className="body2">#fb2c36</div>
            </div>
            <div className="bg-orange-500 text-white p-4 rounded">
              <div className="caption1">orange-500</div>
              <div className="body2">#ff6900</div>
            </div>
          </div>
        </div>

        {/* Gray Scale */}
        <div className="space-y-4">
          <h3 className="heading2">Gray Scale</h3>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
            <div className="bg-gray-50 border p-2 rounded text-center">
              <div className="caption2 text-gray-900">50</div>
            </div>
            <div className="bg-gray-100 p-2 rounded text-center">
              <div className="caption2 text-gray-900">100</div>
            </div>
            <div className="bg-gray-200 p-2 rounded text-center">
              <div className="caption2 text-gray-900">200</div>
            </div>
            <div className="bg-gray-300 p-2 rounded text-center">
              <div className="caption2 text-gray-900">300</div>
            </div>
            <div className="bg-gray-400 p-2 rounded text-center">
              <div className="caption2 text-white">400</div>
            </div>
            <div className="bg-gray-500 p-2 rounded text-center">
              <div className="caption2 text-white">500</div>
            </div>
            <div className="bg-gray-600 p-2 rounded text-center">
              <div className="caption2 text-white">600</div>
            </div>
            <div className="bg-gray-700 p-2 rounded text-center">
              <div className="caption2 text-white">700</div>
            </div>
            <div className="bg-gray-800 p-2 rounded text-center">
              <div className="caption2 text-white">800</div>
            </div>
            <div className="bg-gray-900 p-2 rounded text-center">
              <div className="caption2 text-white">900</div>
            </div>
          </div>
        </div>

        {/* Text Colors */}
        <div className="space-y-4">
          <h3 className="heading2">Text Colors</h3>
          <div className="space-y-2">
            <p className="body2 text-blue-600">파란색 텍스트 (text-blue-600)</p>
            <p className="body2 text-green-600">
              초록색 텍스트 (text-green-600)
            </p>
            <p className="body2 text-red-600">빨간색 텍스트 (text-red-600)</p>
            <p className="body2 text-gray-600">회색 텍스트 (text-gray-600)</p>
            <p className="body2 text-common-0">검은색 텍스트 (text-common-0)</p>
          </div>
        </div>

        {/* Background + Text Combinations */}
        <div className="space-y-4">
          <h3 className="heading2">Background + Text Combinations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 text-blue-900 p-4 rounded border border-blue-200">
              <div className="body2 font-600">Success Message</div>
              <div className="caption1">bg-blue-50 + text-blue-900</div>
            </div>
            <div className="bg-green-50 text-green-900 p-4 rounded border border-green-200">
              <div className="body2 font-600">Success Message</div>
              <div className="caption1">bg-green-50 + text-green-900</div>
            </div>
            <div className="bg-red-50 text-red-900 p-4 rounded border border-red-200">
              <div className="body2 font-600">Error Message</div>
              <div className="caption1">bg-red-50 + text-red-900</div>
            </div>
            <div className="bg-yellow-50 text-yellow-900 p-4 rounded border border-yellow-200">
              <div className="body2 font-600">Warning Message</div>
              <div className="caption1">bg-yellow-50 + text-yellow-900</div>
            </div>
          </div>
        </div>

        {/* Common Colors */}
        <div className="space-y-4">
          <h3 className="heading2">Common Colors</h3>
          <div className="flex gap-4">
            <div className="bg-common-0 text-common-100 p-4 rounded">
              <div className="caption1">common-0</div>
              <div className="body2">#000000</div>
            </div>
            <div className="bg-common-100 text-common-0 p-4 rounded border">
              <div className="caption1">common-100</div>
              <div className="body2">#ffffff</div>
            </div>
            <div className="bg-common-dimmer text-common-100 p-4 rounded">
              <div className="caption1">common-dimmer</div>
              <div className="body2">#17171980</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
