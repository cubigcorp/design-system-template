import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TopBannerProps } from "./types";
import color from "../../tokens/color";

const TopBanner: React.FC<TopBannerProps> = ({
  src,
  link,
  startDate,
  endDate,
  backgroundColor = color.gray["950"],
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // 날짜 범위 체크
  useEffect(() => {
    const now = new Date();

    if (startDate) {
      const start = new Date(startDate);
      if (now < start) {
        setIsVisible(false);
        return;
      }
    }

    if (endDate) {
      const end = new Date(endDate);
      if (now > end) {
        setIsVisible(false);
        return;
      }
    }

    setIsVisible(true);
  }, [startDate, endDate]);

  const handleImageLoad = () => {
    setHasError(false);
  };

  const handleImageError = () => {
    setHasError(true);
  };

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  // 날짜 범위 밖이면 렌더링하지 않음
  if (!isVisible) {
    return null;
  }

  return (
    <BannerContainer
      $hasLink={!!link}
      $hasError={hasError}
      $backgroundColor={backgroundColor}
      onClick={link ? handleClick : undefined}
      {...props}
    >
      {hasError ? (
        <ErrorMessage>배너 이미지를 불러올 수 없습니다</ErrorMessage>
      ) : (
        <BannerImage
          src={src}
          alt="배너"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
    </BannerContainer>
  );
};

const BannerContainer = styled.div<{
  $hasLink: boolean;
  $hasError: boolean;
  $backgroundColor: string;
}>`
  position: relative;
  width: 100%;
  height: 64px;
  overflow: hidden;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  cursor: ${({ $hasLink, $hasError }) =>
    $hasLink && !$hasError ? "pointer" : "default"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ErrorMessage = styled.div`
  color: ${color.gray["700"]};
  font-size: 14px;
`;

TopBanner.displayName = "TopBanner";

export { TopBanner };
