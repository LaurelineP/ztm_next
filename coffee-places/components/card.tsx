interface CardProps {
	children: React.ReactNode;
	className?: string
}

export const Card = ({ children, className, ...props }: CardProps) => {

	const twClass = "flex shadow-md rounded bg-stone-100 p-5 justify-center"
	const clss = `${twClass} ${className}`
	return (
		<div className = {clss}>
			{ children }
		</div>
	)
}