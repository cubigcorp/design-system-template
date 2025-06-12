export default function Page() {
  return (
    <main className="p-10 space-y-6">
      {/* Pretendard (Korean) */}
      <p className="text-t6 leading-t6 font-600 font-ko tracking-md">
        프리텐다드 Regular (400)
      </p>
      <p className="text-t6 leading-t6 font-700 font-ko tracking-md">
        프리텐다드 Bold (700)
      </p>

      {/* DM Sans (English) */}
      <p className="text-t6 leading-t6 font-400 font-en tracking-md">
        DM Sans Regular (400)
      </p>
      <p className="text-t6 leading-t6 font-700 font-en tracking-lg">
        DM Sans Bold (700)
      </p>

      {/* 반응형 테스트 */}
      <p className="text-t5 md:text-t6 lg:text-t9 font-700 font-ko">
        반응형 폰트 테스트 (기본 t5 → md에서 t6 → lg에서 t9)
      </p>
    </main>
  );
}
