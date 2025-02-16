import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    { id: 1, name: "Cheese Burger", price: 10, image: "/bur1.jpg" },
    { id: 2, name: "French Burger", price: 50, image: "/bur1.jpg" },
    { id: 3, name: "3 Burger", price: 100, image: "/bur1.jpg" },
    { id: 4, name: "XL Burger", price: 200, image: "/bur1.jpg" },
    { id: 5, name: "Crunch Burger", price: 100, image: "/bur1.jpg" },
    { id: 6, name: "Cheesy Burger", price: 100, image: "/bur1.jpg" },
  ];

  return NextResponse.json(products);
}
