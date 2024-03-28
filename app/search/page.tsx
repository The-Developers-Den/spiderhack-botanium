"use client";

import React, { useState } from "react";
import { Form, FormField, FormItem } from "../_components/ui/form";
import { Input } from "../_components/ui/input";
import { Button } from "../_components/ui/button";
import { Bot, User } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  inputTxt: z.string().min(2).max(50),
});

export default function Page() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inputTxt: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const newMessages: { role: string; content: string }[] = [
      ...messages,
      {
        role: "user",
        content: values.inputTxt,
      },
    ];
    setMessages(newMessages);

    form.reset();
  }

  //   <div className="max-w-2xl flex items-center gap-4">
  //   <div className="p-3 bg-blue-500 rounded-full">
  //     <Bot />
  //   </div>
  //   <p>Hello</p>
  // </div>

  return (
    <div className="h-full max-h-full relative overflow-y-clip">
      <div className="space-y-1.5 px-6 border-b border-[#444444] py-3">
        <h5 className="text-3xl  mx-auto">Ask AI</h5>
        <p className="text-lg opacity-80 mx-auto">
          Explore the Bonatix Ecosystem and find the resources that you need
        </p>
      </div>
      <div className="w-[98%] h-[90%] mx-auto flex flex-col">
        <div className="flex-1 overflow-scroll py-8 space-y-10">
          {messages.reverse().map(({ role, content }, index) => (
            <div key={index} className="max-w-2xl flex items-center gap-4">
              {role === "user" ? (
                <div className="p-3 bg-[#3f3f46] rounded-full">
                  <User />
                </div>
              ) : (
                <div className="p-3 bg-blue-500 rounded-full">
                  <Bot />
                </div>
              )}
              <p>{content}</p>
            </div>
          ))}
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex gap-4 mto sticky bottom-0 w-full"
          >
            <FormField
              control={form.control}
              name="inputTxt"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Input
                    {...field}
                    placeholder="Search here..."
                    className="w-full mt-auto  bg-transparent border-[#444444] focus-visible:ring-0 focus-visible:ring-offset-0 ring-0"
                  />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 rounded-xl"
            >
              Search
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
