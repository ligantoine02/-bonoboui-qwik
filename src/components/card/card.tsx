import { component$, type PropsOf, Slot } from "@builder.io/qwik";
import { css } from "../../styled-system/css";
import { stack } from "../../styled-system/patterns";
import { Stack } from "../../styled-system/jsx";

export interface CardProps extends PropsOf<"div"> {
	horizontal?: boolean;
}

export const Card = component$<CardProps>(({ horizontal = false }) => {
	const styles = css({
		p: "4",
		flexDirection: "row",
		border: "1px solid",
		_hover: {
			border: "2px solid",
			borderColor: "cyan.700",
			transition: "all ease-in-out .3s",
		},
	});

	return (
		<div class={styles}>
			<div>{horizontal && <p>Is horizontal</p>}</div>

			<Stack gap="8" direction={horizontal ? "row" : "column"}>
				<p class={css({ bg: "rebeccapurple" })}>First</p>
				<p class={css({ bg: "yellow.700" })}>Seconda</p>
			</Stack>
			<Slot />
		</div>
	);
});
