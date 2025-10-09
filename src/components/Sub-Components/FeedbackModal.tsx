import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ContactForm from "./ContactForm";

function FeedbackModal() {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button
          size={"lg"}
          className="gradient-border hover:bg-gradient-to-r to-[#6D18EF] from-[#186EF2] active:scale-95 rounded-lg"
        >
          Your Feedback
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Give Us Feedback</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription> */}
        </DialogHeader>
        <ContactForm placeholder="Feedback" />
      </DialogContent>
    </Dialog>
  );
}

export default FeedbackModal;
