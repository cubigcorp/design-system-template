import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { TopBanner } from "./TopBanner";
import { TopBannerListProps } from "./types";

const TopBannerList: React.FC<TopBannerListProps> = ({
  banners,
  interval = 4000,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isCrossfading, setIsCrossfading] = useState(false);
  const [isCurrentVisible, setIsCurrentVisible] = useState(true);
  const FADE_DURATION_MS = 400;

  // 날짜 범위에 맞는 배너들만 필터링
  const validBanners = useMemo(() => {
    const now = new Date();
    return banners.filter((banner) => {
      if (banner.startDate) {
        const start = new Date(banner.startDate);
        if (now < start) return false;
      }
      if (banner.endDate) {
        const end = new Date(banner.endDate);
        if (now > end) return false;
      }
      return true;
    });
  }, [banners]);

  // validBanners가 변경되면 currentIndex 리셋
  useEffect(() => {
    setCurrentIndex(0);
    setPrevIndex(null);
    setIsCrossfading(false);
    setIsCurrentVisible(true);
  }, [validBanners]);

  // 배너 자동 전환
  useEffect(() => {
    if (validBanners.length <= 1) return;

    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % validBanners.length;
      setPrevIndex(currentIndex);
      setCurrentIndex(nextIndex);
      setIsCrossfading(true);
      setIsCurrentVisible(false); // 새 배너는 0에서 시작
      // 다음 프레임에 1로 전환하여 애니메이션 트리거
      setTimeout(() => {
        setIsCurrentVisible(true);
      }, 0);
      // 애니메이션 종료 후 이전 배너 제거
      setTimeout(() => {
        setPrevIndex(null);
        setIsCrossfading(false);
      }, FADE_DURATION_MS);
    }, interval);

    return () => clearInterval(timer);
  }, [validBanners.length, interval, currentIndex]);

  // 유효한 배너가 없으면 렌더링하지 않음
  if (validBanners.length === 0) {
    return null;
  }

  const currentBanner = validBanners[currentIndex];

  return (
    <BannerWrapper>
      {prevIndex !== null && validBanners[prevIndex] && (
        <Layer
          style={{
            opacity: isCrossfading ? 0 : 1,
            transition: `opacity ${FADE_DURATION_MS}ms ease`,
            pointerEvents: "none",
          }}
        >
          <TopBanner
            key={`prev-${validBanners[prevIndex].src}`}
            src={validBanners[prevIndex].src}
            link={validBanners[prevIndex].link}
            startDate={validBanners[prevIndex].startDate}
            endDate={validBanners[prevIndex].endDate}
            backgroundColor={validBanners[prevIndex].backgroundColor}
            {...props}
          />
        </Layer>
      )}
      <Layer
        style={{
          opacity: isCurrentVisible ? 1 : 0.5,
          transition: `opacity ${FADE_DURATION_MS}ms ease`,
          pointerEvents: "auto",
        }}
        key={`curr-layer-${currentBanner.src}`}
      >
        <TopBanner
          key={`curr-${currentBanner.src}`}
          src={currentBanner.src}
          link={currentBanner.link}
          startDate={currentBanner.startDate}
          endDate={currentBanner.endDate}
          backgroundColor={currentBanner.backgroundColor}
          {...props}
        />
      </Layer>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 64px;
`;

const Layer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  z-index: 1000;
`;

TopBannerList.displayName = "TopBannerList";

export { TopBannerList };
