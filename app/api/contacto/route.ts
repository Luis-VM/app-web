// app/api/contacto/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { nombre, empresa, email, servicio, mensaje } = await req.json();

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    const contacto = await prisma.contacto.create({
      data: { nombre, empresa, email, servicio, mensaje },
    });

    return NextResponse.json({ ok: true, id: contacto.id }, { status: 201 });
  } catch (error) {
    console.error("Error al guardar contacto:", error);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}