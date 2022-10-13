import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <a href="/"><div className="title">Joshua Bruylant's Portfolio</div></a>
    </header>
  );
});
