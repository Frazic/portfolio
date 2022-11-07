// Special thanks to wmertens#8241
// https://stackblitz.com/edit/qwik-starter-nhupku?file=src%2Froutes%2Findex.tsx,src%2Fcomponents%2Fblurhash.tsx,package.json

import { component$, useSignal } from "@builder.io/qwik";
import { BlurHash } from "./blurhash";

export interface OptimisedImageProps {
    image: {
        src: string,
        hash: string
    },
    className: string,
    alt: string
}

export const OptimisedImage = component$((props: OptimisedImageProps) => {
    const isLoaded = useSignal(false);

    // useClientEffect$(() => {
    //     if (loadState.value === 0) loadState.value = 1;
    // });

    return (
        <div style={{ position: "relative" }}>
            {!isLoaded.value && <BlurHash hash={props.image.hash} />}
            {/* {loadState.value > 0 && ( */}
            <img className={props.className} src={props.image.src} onLoad$={() => (isLoaded.value = true)} alt={props.alt} loading="lazy" />
            {/* )} */}


            {/* This bit might not be needed? */}
            {/* {isServer && props.image.src && (
                // Must write html ourselves or Qwik crashes https://github.com/BuilderIO/qwik/issues/2024
                <noscript dangerouslySetInnerHTML={`<img src="${props.image.src}" />`} />
            )} */}
        </div>
    );
});