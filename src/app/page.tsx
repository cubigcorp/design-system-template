export default function Page() {
  return (
    <main className="p-10 space-y-4">
      {/* Pretendard 테스트 */}
      <p className="font-ko font-font/weight-400 text-font-size-t6 leading-line-height-t6">
        프리텐다드 Regular (400)
      </p>
      <p style={{ fontFamily: "DM Sans", fontWeight: 400 }}>
        Inline test: DM Sans 400
      </p>
      <p className="font-ko font-font/weight-700 text-font-size-t6 leading-line-height-t6">
        프리텐다드 Bold (700)
      </p>

      {/* DM Sans 테스트 */}
      <p className="font-en font-font/weight-600 text-font-size-t9 leading-line-height-t6">
        DM Sans Semibold (600)
      </p>
      <p className="font-en font-font/weight-700 text-font-size-t3 leading-line-height-t6">
        DM Sans Bold (700)
      </p>
      <p style={{ fontFamily: "DM Sans", fontWeight: 700 }}>
        DM Sans 700 inline test
      </p>

      {/* 추가 fontWeight 테스트 */}
      <div className="space-y-2 mt-8">
        <h2 className="text-font-size-t8 font-font/weight-700">
          FontWeight 테스트:
        </h2>
        <p className="font-font/weight-400 text-font-size-t6">
          Regular (400) 테스트
        </p>
        <p className="font-font/weight-500 text-font-size-t6">
          Medium (500) 테스트
        </p>
        <p className="font-font/weight-600 text-font-size-t6">
          Semibold (600) 테스트
        </p>
        <p className="font-font/weight-700 text-font-size-t6">
          Bold (700) 테스트
        </p>
      </div>
    </main>
  );
}
