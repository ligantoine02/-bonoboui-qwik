import { PropsOf, component$ } from "@builder.io/qwik";

export interface AvatarProps extends PropsOf<"div"> {
	imgSrc: string;
	imgAlt?: string;
}

export const Avatar = component$<AvatarProps>(
	({ imgSrc, imgAlt, ...attrs }) => {
		return (
			<div class={attrs.class}>
				<img src={imgSrc} alt={imgAlt} height={25} width={25} />
			</div>
		);
	},
);
