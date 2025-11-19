import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { TopBannerListProps } from "./types";
import color from "../../tokens/color";

const TopBannerList: React.FC<TopBannerListProps> = ({
  banners,
  interval = 4000,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const FADE_DURATION_MS = 800;

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
    setIsVisible(true);
  }, [validBanners]);

  // 배너 자동 전환
  useEffect(() => {
    if (validBanners.length <= 1) return;

    const timer = setInterval(() => {
      // 페이드아웃
      setIsVisible(false);

      // 페이드아웃 완료 후 배너 변경하고 페이드인
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % validBanners.length);
        setIsVisible(true);
      }, FADE_DURATION_MS);
    }, interval);

    return () => clearInterval(timer);
  }, [validBanners.length, interval]);

  // 유효한 배너가 없으면 렌더링하지 않음
  if (validBanners.length === 0) {
    return null;
  }

  const currentBanner = validBanners[currentIndex];

  const handleClick = () => {
    if (currentBanner.link) {
      window.open(currentBanner.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <BannerContainer
      $hasLink={!!currentBanner.link}
      $backgroundColor={currentBanner.backgroundColor || color.gray["950"]}
      onClick={currentBanner.link ? handleClick : undefined}
      style={{
        opacity: isVisible ? 1 : 0.3,
        transition: `opacity ${FADE_DURATION_MS}ms ease-in-out`,
      }}
      {...props}
    >
      <BannerImage src={currentBanner.src} alt="배너" />
    </BannerContainer>
  );
};

const BannerContainer = styled.div<{
  $hasLink: boolean;
  $backgroundColor: string;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  overflow: hidden;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  cursor: ${({ $hasLink }) => ($hasLink ? "pointer" : "default")};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const BannerImage = styled.img`
  height: 100%;
  width: auto;
  max-width: 100%;
  object-fit: contain;
`;

TopBannerList.displayName = "TopBannerList";

export { TopBannerList };
