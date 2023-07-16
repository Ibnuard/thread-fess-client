import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-sm">
      <header className="border-b border-gray-600">
        <div className="py-8">
          <h1 className="text-3xl font-bold text-gray-50">{AppConfig.title}</h1>
          <h2 className="text-xl text-gray-500">{AppConfig.description}</h2>
        </div>
        <nav className="pb-4">
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link
                href="/"
                className="border-none text-base text-gray-500 hover:text-gray-50"
              >
                Menfess
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/about/"
                className="border-none text-base text-gray-500 hover:text-gray-50"
              >
                Rules
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="content py-4 text-xl">{props.children}</main>

      <footer className="border-t border-gray-600 py-8 text-center text-sm text-gray-50">
        {AppConfig.title} made with 🧠 by ardthread
      </footer>
    </div>
  </div>
);

export { Main };
