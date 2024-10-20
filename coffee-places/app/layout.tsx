import type { Metadata } from "next";
import { Comfortaa, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
	weight: "300",
	subsets: ["latin"],
	variable: '--roboto'
});
const comfortaa = Comfortaa( {
	weight: "300",
	subsets: ["latin"],
	variable: '--comfortaa'
})

export const metadata: Metadata = {
	title: "Coffee Connoisseur",
	description: "Locate Coffee shops around",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const fontClassNames = `${comfortaa.variable} ${roboto.variable}`;
	return (
		<html lang="en" className = {fontClassNames}>
			<body>{children}</body>
		</html>
	);
}
