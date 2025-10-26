/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client"
import * as z from "zod"

import { CardWrapper } from "./CardWrapper"
import { FormError } from "./FormError"
import { FormSuccess } from "./FormSuccess"

import { useForm } from "react-hook-form"
import { useState, useTransition } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema } from "@/schema"
import { login } from "@/actions/logins"

import "@/style/auth/Form.scss"

export const LoginForm = () => {

    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("")
        setSuccess("")

        startTransition(() => {
            login(values)
                .then((data) => {
                    setError(data.error),
                        setSuccess(data.success)
                })
        })
    }

    return (
        <CardWrapper
            showSocial
            showBackLink
            headerLabel="Sign In"
            headerWriteUp="Welcome back, make new purchases and track your previous orders.."
            backLinkHref="/register"
            backLinkLabel="Sign Up"
            backLinkWriteUp="Are you a first timer ?"
        >
            <form className="form" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="form-container">
                    <div className="input-container">
                        <label htmlFor="email">Email Address</label>
                        <input
                            disabled={isPending}
                            id="email"
                            placeholder="example@mail.com"
                            type="email"
                            {...form.register("email")}
                        />
                        <div className="error-message">{form.formState.errors.email?.message}</div>
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password</label>
                        <input
                            disabled={isPending}
                            id="password"
                            placeholder="******"
                            type="password"
                            {...form.register("password")}
                        />
                        <div className="error-message">{form.formState.errors.password?.message}</div>
                    </div>
                    <a href="/reset-password">Forgot Password ?</a>
                </div>
                <FormError message={error}/>
                <FormSuccess message={success}/>
                <button 
                    className={isPending? "pending" : ""} 
                    disabled={isPending}
                >{isPending ? "Please wait ...": "Login"}</button>
            </form>
        </CardWrapper>
    )
}