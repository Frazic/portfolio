import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div>
            <h1>Projects</h1>
            <p>In here will go the swanky cards, one for each project</p>
        </div>
    );
});

export const head: DocumentHead = () => {
    return {
        title: "Projects"
    };
};