import "./App.css";
import KonyvTabla from "./components/KonyvTabla";
import Urlap from "./components/Urlap";

function App() {
  return (
    <>
      <h1 className="col-span-full m-0! border-b border-slate-200 pb-4 text-2xl! leading-tight! font-bold! tracking-tight! text-slate-900! sm:text-3xl! after:mt-1 after:block after:text-sm after:font-normal after:tracking-normal after:text-slate-500 after:content-['Könyvkészlet_kezelése'] [html:has(&)]:bg-slate-100! [html:has(&)]:[color-scheme:light]! [:has(>&)]:grid! [:has(>&)]:w-full! [:has(>&)]:max-w-7xl! [:has(>&)]:border-x-0! [:has(>&)]:text-left! [:has(>&)]:content-start [:has(>&)]:items-start [:has(>&)]:gap-6 [:has(>&)]:p-4 [:has(>&)]:text-slate-700 sm:[:has(>&)]:p-6 lg:[:has(>&)]:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] lg:[:has(>&)]:gap-8 lg:[:has(>&)]:p-8">Könyvek</h1>
      <KonyvTabla />
      <Urlap />
    </>
  );
}

export default App;
