import React, { useState, useEffect, useMemo } from "react";
import { TopBanner } from "./TopBanner";
import { TopBannerListProps } from "./types";

const TopBannerList: React.FC<TopBannerListProps> = ({
  banners,
  interval = 4000,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // 배너 자동 전환
  useEffect(() => {
    if (validBanners.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % validBanners.length);
    }, interval);

    return () => clearInterval(timer);
  }, [validBanners.length, interval]);

  // 유효한 배너가 없으면 렌더링하지 않음
  if (validBanners.length === 0) {
    return null;
  }

  const currentBanner = validBanners[currentIndex];

  return (
    <TopBanner
      src={currentBanner.src}
      link={currentBanner.link}
      startDate={currentBanner.startDate}
      endDate={currentBanner.endDate}
      {...props}
    />
  );
};

TopBannerList.displayName = "TopBannerList";

export { TopBannerList };
