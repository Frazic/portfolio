import { createQwikCity } from '@builder.io/qwik-city/middleware/cloudflare-pages';
import qwikCityPlan from '@qwik-city-plan';
import render from "./entry.ssr";

export const onRequest = createQwikCity({ render, qwikCityPlan });
