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
  const [isTransitioning, setIsTransitioning] = useState(false);

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
  }, [validBanners]);

  // 배너 자동 전환
  useEffect(() => {
    if (validBanners.length <= 1) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % validBanners.length);
        setIsTransitioning(false);
      }, 300); // fade-out 시간
    }, interval);

    return () => clearInterval(timer);
  }, [validBanners.length, interval]);

  // 유효한 배너가 없으면 렌더링하지 않음
  if (validBanners.length === 0) {
    return null;
  }

  const currentBanner = validBanners[currentIndex];

  return (
    <BannerWrapper>
      <FadeContainer $isVisible={!isTransitioning}>
        <TopBanner
          key={currentBanner.src}
          src={currentBanner.src}
          link={currentBanner.link}
          startDate={currentBanner.startDate}
          endDate={currentBanner.endDate}
          backgroundColor={currentBanner.backgroundColor}
          {...props}
        />
      </FadeContainer>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 64px;
`;

const FadeContainer = styled.div<{ $isVisible: boolean }>`
  width: 100%;
  height: 100%;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0.5)};
  transition: opacity 0.3s ease-in-out;
`;

TopBannerList.displayName = "TopBannerList";

export { TopBannerList };
