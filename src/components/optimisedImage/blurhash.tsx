import { component$, useClientEffect$, useSignal } from "@builder.io/qwik";
import { decodeBlurHash as decode } from 'fast-blurhash';

export const renderHash = (
    canvas: any,
    hash: string,
    width: number,
    height: number
) => {
    if (!canvas) return;
    const pixels = decode(hash, width, height);
    const ctx = canvas.getContext('2d')!;
    const imageData = ctx.createImageData(width, height);
    imageData.data.set(pixels);
    ctx.putImageData(imageData, 0, 0);
};

export interface BlurhashProps {
    hash: string;
}

export const BlurHash = component$((props: BlurhashProps) => {
    // The width and height are pre-stretching by style
    // Less pixels is faster but gives more blocky results
    const width = 32;
    const height = width;
    const ref = useSignal<HTMLCanvasElement>();

    // // Render the blurhash when the element is visible on client
    useClientEffect$(() => {
        const hash = props.hash;
        renderHash(ref.value, hash, width, height);
    });

    return (
        <canvas
            // We always fill the container and retain our aspect ratio
            style={{ width: "100%", position: "absolute", top: "0", left: "0" }}
            width={width}
            height={height}
            ref={ref}
        />
    );
});