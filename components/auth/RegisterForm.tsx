"use client"

import { CardWrapper } from "./CardWrapper"
import { FormError } from "./FormError"
import { FormSuccess } from "./FormSuccess"
import { RegisterSchema } from "@/schema"

import { useForm } from "react-hook-form"
import { useState, useTransition } from "react"
import { zodResolver } from "@hookform/resolvers/zod"

import "@/style/auth/Form.scss"
import z from "zod"
import { register } from "@/actions/register"

export const RegisterForm = () => {

    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("")
        setSuccess("")

        startTransition(() => {
            register(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                });
        });
    }

    return (
        <CardWrapper
            showBackLink
            showSocial
            headerLabel={"Create Account"}
            headerWriteUp={"Create your account with your email. Secure access starts with a quick verification code."}
            backLinkHref="/login"
            backLinkLabel="Sign in"
            backLinkWriteUp="I have an account ?"
        >
            <form className="form" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="form-container">
                    <div className="input-container">
                        <label htmlFor="fullName">Full name</label>
                        <input
                            disabled={isPending}
                            type="text"
                            id="fullName"
                            placeholder="ex: John Olev Smith"
                            {...form.register("fullName")}
                        />
                        <div className="error-message">{form.formState.errors.fullName?.message}</div>
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="ex: example@mail.com"
                            {...form.register("email")}
                            disabled={isPending}
                        />
                        <div className="error-message">{form.formState.errors.email?.message}</div>
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="******"
                            {...form.register("password")}
                            disabled={isPending}
                        />
                        <div className="error-message">{form.formState.errors.password?.message}</div>
                    </div>
                </div>
                <FormError message={error} />
                <FormSuccess message={success} />
                <button 
                    className={isPending ? "pending" : ""} 
                    disabled={isPending}>{isPending ? "Please wait ..." : "Sign up"}</button>
            </form>
        </CardWrapper>
    )
}