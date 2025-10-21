export type StepStatus = "Inactive" | "Active" | "Complete";
export interface StepItem {
    label?: string;
    status?: StepStatus;
}
export interface StepIndicatorProps {
    count: number;
    currentStep: number;
    steps?: StepItem[];
    showLabel?: boolean;
    className?: string;
}
export interface ProgressTrackerProps {
    status: StepStatus;
    step: number;
    label?: string;
    showLabel?: boolean;
}
export interface DividerProps {
    status: StepStatus;
}
