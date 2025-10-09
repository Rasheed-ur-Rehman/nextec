import { Loader2 } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";

interface SpinnerButtonProps extends ButtonProps {
  state: boolean;
}

export const SpinnerButton = ({ state, ...props }: SpinnerButtonProps) => {
  return (
    <Button {...props}>
      {state ? (
        <>
          {'Sending'} 
          <Loader2 className="h-4 w-4 animate-spin ml-2" />
        </>
      ) : (
        props.children
      )}
    </Button>
  );
};
