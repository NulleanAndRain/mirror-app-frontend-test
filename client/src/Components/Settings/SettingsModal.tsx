import "react";
import { SettingsModalWrapper } from "./SettingsStyles";
import { SettingsPanel } from "./SettingsPanel";

export interface SettingsModalProps {
  display: boolean;
  setDisplay: (display: boolean) => void;
}

export const SettingsModal = ({ display, setDisplay }: SettingsModalProps) => {
  return (
    display && (
      <SettingsModalWrapper
        onClick={(e) => {
          e.stopPropagation();
          setDisplay(false);
        }}
      >
        <SettingsPanel saveCallback={() => setDisplay(false)} />
      </SettingsModalWrapper>
    )
  );
};
