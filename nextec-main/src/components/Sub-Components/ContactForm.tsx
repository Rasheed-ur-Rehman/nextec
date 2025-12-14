"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";
import { SpinnerButton } from "./SpinnerButton";
import React from "react";

const formSchema = z.object({
  userName: z.string().min(2, {
    message: "Username can not be empty.",
  }),
  userEmail: z
    .string()
    .min(2, {
      message: "Email can not be empty.",
    })
    .email({
      message: "Please enter a valid email address.",
    }),
  userMessage: z.string().min(2, {
    message: "Message can not be empty.",
  }),
});

type FormSchemaType = z.infer<typeof formSchema>;

const ContactForm = ({ placeholder }: { placeholder: string }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const notify = (variant: string, text: string) => {
    variant == "success"
      ? toast.success(text, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      : toast.error(text, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
  };
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      userEmail: "",
      userMessage: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(data: FormSchemaType) {
    try {
      let formData = {...data, emailType: placeholder}
      setIsLoading(true);
      const res = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      setIsLoading(false);

      if (!res.ok) {
        throw new Error("Failed to send");
      }


      console.log("data: ", data);
      console.log("formData: ", formData);
      notify("success", `${placeholder} sent successfully`);
      form.reset();
    } catch (error) {
      console.error((error as { message: string }).message);
      notify("error", `${placeholder} not sent`);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`space-y-3 ${
          placeholder == "Feedback" ? "flex flex-col" : ""
        }`}
      >
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Your Name*" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="userEmail"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Your Email*"
                  {...field}
                  pattern="^\S+@\S+\.\S+$"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="userMessage"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder={`Your ${placeholder}*`} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SpinnerButton
          disabled={isLoading}
          state={isLoading}
          size={"sm"}
          className={`bg-gradient-to-r to-[#186EF2] from-[#6D18EF] active:scale-95  ${
            placeholder == "Feedback" ? "mx-auto" : ""
          }`}
          type="submit"
        >
          Send {placeholder}
        </SpinnerButton>
      </form>
    </Form>
  );
};

export default ContactForm;
