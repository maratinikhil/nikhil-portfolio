// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
// import { Textarea } from "./ui/textarea";
// import { Label } from "./ui/label";
// import { toast } from "sonner";
// import { Send } from "lucide-react";

// const formSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters"),
//   email: z.string().email("Please enter a valid email address"),
//   message: z.string().min(10, "Message must be at least 10 characters"),
// });

// const ContactForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: zodResolver(formSchema),
//   });

//   const onSubmit = async (data) => {
//     setIsSubmitting(true);

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const text = await res.text();

//       console.log("RAW RESPONSE:", text);

//       let json = {};

//       try {
//         json = JSON.parse(text);
//       } catch {
//         throw new Error(text || "Invalid server response");
//       }
//       if (!res.ok) {
//         throw new Error(json.error || "Failed to send message");
//       }

//       toast.success("Message sent successfully!");
//       reset();
//     } catch (error) {
//       console.error("Submit error:", error);
//       toast.error(error.message || "Something went wrong");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//       <div>
//         <Label htmlFor="name" className="text-sm font-medium">
//           Name
//         </Label>
//         <Input
//           id="name"
//           {...register("name")}
//           className="mt-2 bg-card text-foreground"
//           placeholder="Your name"
//         />
//         {errors.name && (
//           <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
//         )}
//       </div>

//       <div>
//         <Label htmlFor="email" className="text-sm font-medium">
//           Email
//         </Label>
//         <Input
//           id="email"
//           type="email"
//           {...register("email")}
//           className="mt-2 bg-card text-foreground"
//           placeholder="your.email@example.com"
//         />
//         {errors.email && (
//           <p className="mt-1 text-sm text-destructive">
//             {errors.email.message}
//           </p>
//         )}
//       </div>

//       <div>
//         <Label htmlFor="message" className="text-sm font-medium">
//           Message
//         </Label>
//         <Textarea
//           id="message"
//           {...register("message")}
//           className="mt-2 min-h-[150px] bg-card text-foreground"
//           placeholder="Tell me about your project or inquiry..."
//         />
//         {errors.message && (
//           <p className="mt-1 text-sm text-destructive">
//             {errors.message.message}
//           </p>
//         )}
//       </div>

//       <Button
//         type="submit"
//         disabled={isSubmitting}
//         className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-98"
//       >
//         {isSubmitting ? (
//           "Sending..."
//         ) : (
//           <>
//             <Send className="mr-2 h-4 w-4" />
//             Send Message
//           </>
//         )}
//       </Button>
//     </form>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { send, init } from "@emailjs/browser";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);



  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    console.log("SERVICE:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("TEMPLATE:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("KEY:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);


    try {
      // Step 1 — Send to you via Resend
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      

      const text = await res.text();
      console.log("RAW RESPONSE:", text);

      let json = {};
      try {
        json = JSON.parse(text);
      } catch {
        throw new Error(text || "Invalid server response");
      }

      if (!res.ok) {
        throw new Error(json.error || "Failed to send message");
      }

      // Step 2 — Send confirmation to user via EmailJS
      await send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          to_email: data.email,
          message: data.message,
        },
      );

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Submit error:", error);
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-sm font-medium">
          Name
        </Label>
        <Input
          id="name"
          {...register("name")}
          className="mt-2 bg-card text-foreground"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="text-sm font-medium">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          className="mt-2 bg-card text-foreground"
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-medium">
          Message
        </Label>
        <Textarea
          id="message"
          {...register("message")}
          className="mt-2 min-h-[150px] bg-card text-foreground"
          placeholder="Tell me about your project or inquiry..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-98"
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;