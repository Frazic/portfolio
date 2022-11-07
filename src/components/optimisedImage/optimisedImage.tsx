import { component$, useClientEffect$, useSignal } from "@builder.io/qwik";
import { decodeBlurHash as decode } from "fast-blurhash";
export interface OptimisedImageProps {
    image: {
        src: string,
        hash: string
    }
}

export const OptimisedImage = component$((props: OptimisedImageProps) => {
    const isLoaded = useSignal(false);
    const width = 32;
    const height = 32;
    const ref = useSignal<HTMLCanvasElement>();

    // Render the blurhash when the element is visible on client
    useClientEffect$(() => {
        const pixels = decode(props.image.hash, width, height);
        const canvas = ref.value!;
        const ctx = canvas.getContext('2d')!;
        const imageData = ctx.createImageData(width, height);
        imageData.data.set(pixels);
        ctx.putImageData(imageData, 0, 0);
    }, { eagerness: "load" });

    return (
        <div style={{ position: "relative" }}>
            {!isLoaded.value &&
                (<canvas
                    // We always fill the container and retain our aspect ratio
                    style={{ width: '100%', position: "absolute", top: 0, left: 0, "z-index": 20 }}
                    width={width}
                    height={height}
                    ref={ref}
                />)
            }
            <img src={props.image.src} onLoad$={() => (isLoaded.value = true)} />
        </div>
    );
});