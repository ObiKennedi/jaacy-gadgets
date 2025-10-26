"use server";

import * as z from "zod";
import { LoginSchema } from "@/schema";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    try {
        const validatedFields = LoginSchema.safeParse(values);

        if (!validatedFields.success) {
            return { error: "Invalid input fields." };
        }

        const { email, password } = validatedFields.data;

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return { error: "No account found with this email." };
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return { error: "Incorrect password." };
        }

        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            process.env.JWT_SECRET as string,
            { expiresIn: "7d" }
        );

        (await cookies()).set("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });

        if (user.role === "ADMIN") {
            redirect("/admin/dashboard");
        } else {
            redirect("/customer/dashboard");
        }

        return { success: "Login successful" };
    } catch (error) {
        console.error("Login Error:", error);
        return { error: "Something went wrong. Please try again later." };
    }
};
