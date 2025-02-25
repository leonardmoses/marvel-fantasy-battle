"use client";

import { useFormStatus } from "react-dom";
import { ComponentProps } from "react";

const Props = {
  pendingText: undefined
};

export function SubmitButton({ children, pendingText, ...props }) {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  return (
    <button {...props} type="submit" aria-disabled={pending}>
      {isPending ? pendingText : children}
    </button>
  );
}
