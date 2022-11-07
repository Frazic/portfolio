import { component$, useClientEffect$, useSignal } from "@builder.io/qwik";
import { decodeBlurHash as decode } from 'fast-blurhash';

interface OptimisedImageProps {
    className: string,
    alt: string,
    image: {
        path: string,
        hash: string
    }
}

export const OptimisedImage = component$((props: OptimisedImageProps) => {
    const width = 32;
    const height = 32;
    const isLoaded = useSignal(false);

    const ref = useSignal<HTMLCanvasElement>();

    // Render the blurhash when the element is visible on client
    useClientEffect$(() => {
        const pixels = decode(props.image.hash, width, height);
        const canvas = ref.value!;
        const ctx = canvas.getContext('2d')!;
        const imageData = ctx.createImageData(width, height);
        imageData.data.set(pixels);
        ctx.putImageData(imageData, 0, 0);
    });
    // , { eagerness: "visible" }
    return (
        <div className={props.className} style={{ "position": "relative" }}>
            {!isLoaded &&
                <canvas
                    // We always fill the container and retain our aspect ratio
                    style={{ width: "100%", "z-index": 20, "position": "absolute", "top": "0", "left": "0" }}
                    width={width}
                    height={height}
                    ref={ref}
                />
            }
            <img className={props.className} src={props.image.path} onLoad$={() => isLoaded.value = true} alt={props.alt} loading="lazy" />
        </div>
    );
});