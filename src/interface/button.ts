export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean | undefined;
  width: string | undefined;
}

export interface StyledButtonProps {
  width: string | undefined;
}
