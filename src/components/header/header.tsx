import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <a href="/">
        <div className='title'>
          <i class="fa-solid fa-house fa-xs" />
          <span>Joshua Bruylant</span>
        </div>
      </a>
    </header>
  );
});
