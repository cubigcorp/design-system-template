import React from "react";
import styled from "styled-components";
import { StepIndicatorProps, StepStatus } from "./types";
import { ProgressTracker } from "./ProgressTracker";
import { StepDivider } from "./StepDivider";
import { spacing } from "../../tokens/spacing";

export const StepIndicator = ({
  count,
  currentStep,
  steps,
  showLabel = false,
  className,
}: StepIndicatorProps) => {
  const getStepStatus = (stepIndex: number): StepStatus => {
    if (stepIndex < currentStep) return "Complete";
    if (stepIndex === currentStep) return "Active";
    return "Inactive";
  };

  const renderSteps = () => {
    const stepElements = [];

    for (let i = 1; i <= count; i++) {
      const status = getStepStatus(i);
      const stepData = steps?.[i - 1];
      const label = stepData?.label || `단계`;

      stepElements.push(
        <StyledStepWrapper key={i}>
          <ProgressTracker
            status={status}
            step={i}
            label={label}
            showLabel={showLabel}
          />
          {i < count && <StepDivider status={status} />}
        </StyledStepWrapper>
      );
    }

    return stepElements;
  };

  return (
    <StyledStepIndicator className={className}>
      <StyledStepContainer showLabel={showLabel}>
        {renderSteps()}
      </StyledStepContainer>
    </StyledStepIndicator>
  );
};

const StyledStepIndicator = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledStepContainer = styled.div<{ showLabel: boolean }>`
  display: flex;
  align-items: ${({ showLabel }) => (showLabel ? "flex-start" : "center")};
  gap: 0; // 트래커-디바이더 간격을 0으로 고정
  width: 100%;
`;

const StyledStepWrapper = styled.div`
  display: flex;
  align-items: flex-start; // 라벨이 있을 때도 위에서 시작
  flex: 1;

  &:last-child {
    flex: 0; // 마지막 아이템 뒤쪽 여백 제거 (좌우 균형)
  }
`;
