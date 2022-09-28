import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <div className="text-justified">
            <h1>Skills</h1>

            <p>In here we'll have some nice spheres for each skill. Upon hover they will open up for more detail.
                Each circle will have a cool electric blue theme and a line between them
            </p>
            <p>In mobile view: column of spheres</p>
        </div>
    );
});