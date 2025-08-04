import React from "react";
import styled from "styled-components";
import { MenuProps } from "./types";
import { spacing } from "../../tokens/spacing";
import { shadow } from "../../tokens/shadow";
import color from "../../tokens/color";

const Menu: React.FC<MenuProps> = ({ children, className, ...props }) => {
    return (
        <StyledMenu className={className} {...props}>
            {children}
        </StyledMenu>
    );
};

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap["gap-1"]};
  padding: ${spacing.gap["gap-1"]};
  box-shadow: ${shadow.light["shadow-md"]};
  background-color: white;
  border-radius: 8px;
  box-sizing: border-box;
  width: 300px;

  /* Dropdown 스타일 - Dropdown 컴포넌트 내부에서 사용될 때 */
  .dropdown-container & {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1000;
    margin-top: 4px;
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${color.gray["200"]};
    border-radius: 3px;
    transition: background 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${color.gray["200"]};
  }

  /* Firefox 스크롤바 스타일링 */
  scrollbar-width: thin;
  scrollbar-color: ${color.gray["200"]} transparent;
`;

Menu.displayName = "Menu";

export { Menu }; 