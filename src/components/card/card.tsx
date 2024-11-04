import { component$, PropsOf, Slot } from "@builder.io/qwik";

export interface CardProps extends PropsOf<"div"> {
	horizontal?: boolean;
}

export const Card = component$<CardProps>(({ horizontal = false }) => {
	return (
		<div>
			{horizontal && <p>Is horizontal</p>}

			<Slot />
		</div>
	);
});
