import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
let title = "Temporia Card Creator";
const FormPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  let crystalValue = "";
  return `<div class="flex flex-col items-center mt-8"><div class="shadow-md rounded-lg bg-white w-full max-w-md p-8"><div class="rounded-lg"> <h1 class="text-3xl mb-8 text-center font-semibold underline">${escape(title)}</h1></div> <form><label class="block mb-4"><span data-svelte-h="svelte-15ueaex">Name</span> <input class="mt-1 block w-full p-2 border border-gray-300 rounded" type="text" required${add_attribute("value", name, 0)}></label> <label class="block mb-4"><span data-svelte-h="svelte-1hlc515">Image</span> <input class="mt-1 block w-full p-2 border border-gray-300 rounded" type="file" accept="image/*" required></label> ${``} <label class="block mb-4"><span class="mb-2 block" data-svelte-h="svelte-1xdcrmw">Frequency</span> <div class="space-y-2"><div><input id="daily" class="mr-2 leading-tight" type="radio" value="daily"${""}> <label for="daily" data-svelte-h="svelte-fubm58">Daily</label></div> <div><input id="weekly" class="mr-2 leading-tight" type="radio" value="weekly"${""}> <label for="weekly" data-svelte-h="svelte-1sw9bay">Weekly</label></div> <div><input id="monthly" class="mr-2 leading-tight" type="radio" value="monthly"${""}> <label for="monthly" data-svelte-h="svelte-1gp19nc">Monthly</label></div> <div><input id="yearly" class="mr-2 leading-tight" type="radio" value="yearly"${""}> <label for="yearly" data-svelte-h="svelte-1srabsy">Yearly</label></div></div></label> <label class="block mb-4"><span data-svelte-h="svelte-rmspr8">Description</span> <textarea class="mt-1 block w-full p-2 border border-gray-300 rounded" required>${escape("")}</textarea></label> <label class="block mb-4"><span data-svelte-h="svelte-1m1flux">Value</span> <input class="mt-1 block w-full p-2 border border-gray-300 rounded" type="number" required${add_attribute("value", crystalValue, 0)}></label> <div class="flex justify-center" data-svelte-h="svelte-10ax7yh"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Card</button></div></form></div></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{margin:0;height:100vh;display:flex;align-items:center;justify-content:center;background-size:200% 200%;background-image:linear-gradient(35deg, #322d2c 25%, #8e3455 25%, #735963 50%, #295f72 50%, #7bc2db 75%, #62c7b1 75%);animation:svelte-xib81f-gradient-shift 5s linear infinite}@keyframes svelte-xib81f-gradient-shift{{background-position:100% 0}{background-position:0 0}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(FormPage, "FormPage").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
