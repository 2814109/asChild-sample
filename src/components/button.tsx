import { ReactNode } from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";

interface ButtonProps {
  asChild?: boolean;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  children: ReactNode;
}

export function Button({
  asChild,
  leftElement,
  rightElement,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp {...props}>
      {leftElement}
      <Slottable>{children}</Slottable>
      {rightElement}
    </Comp>
  );
}
