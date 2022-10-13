import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div className='home-page-layout'>
      <div className='container-centered'>
        <h1 className='text-centered'>
          JOSHUA BRUYLANT
        </h1>

        <h2 className='text-centered'>
          Portfolio
        </h2>

        <h3 className='text-centered'>
          Something really cool will happen here soon
        </h3>

        <p className='text-justified'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla velit sapiente sequi dolorem, facere temporibus inventore reprehenderit quae, voluptatibus, rem ex hic libero ratione neque quam cumque ea illum molestiae. Aperiam repellat quos iste quae possimus sunt dolore, odio libero cum id fugit iure voluptatem ea esse sed excepturi ab?</p>

        <p>Hype 👀</p>

      </div>

      <img className='home-page-photo' src="/josh-photo.jpg" alt="Picture of Joshua Bruylant" />

    </div>
  );
});
