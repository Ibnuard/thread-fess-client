import * as React from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const [menfess, setMenfess] = React.useState<string>('');

  // is minimum char
  const isMinimumCharAllowed = menfess.split(' ').length >= 5;

  return (
    <Main
      meta={
        <Meta
          title="Testing"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="container mx-auto mb-2 py-2">
        <div className="mb-4 text-sm text-slate-300">
          ⚠️ Mohon baca rules terlebih dahulu!
        </div>
        <textarea
          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm text-black placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
          rows={8}
          placeholder="Tulis menfess kamu disini ( min. 5 kata & maks. 500 karakter )"
          maxLength={500}
          value={menfess}
          onChange={(e) => setMenfess(e.target.value)}
        />
        <div className="float-right mt-2 items-end">
          <span className="text-lg">{menfess.length} </span>
          <span className="text-lg">/ 500</span>
        </div>
        <button
          className="container mt-6 h-10 rounded bg-blue-400 text-sm text-slate-50 disabled:bg-slate-500 disabled:text-slate-300"
          aria-label="Kirim"
          disabled={!menfess || !isMinimumCharAllowed}
          type="submit"
        >
          Kirim Menfess
        </button>
      </div>
    </Main>
  );
};

export default Index;
