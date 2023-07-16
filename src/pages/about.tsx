import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <p className="text-slate-400">
      Halo semuanya sebelum mengirim menfess mohon perhatikan rules berikut ini
    </p>
    <ul>
      <li className="my-2 text-sm text-slate-400">
        1. Pastikan kalian sudah memfollow akun thread Thread.Fest
      </li>
      <li className="my-2 text-sm text-slate-400">
        2. Menfess terdiri minimal 5 kata dan maksimal 500 karakter
      </li>
      <li className="my-2 text-sm text-slate-400">
        3. Menfess tidak boleh mengandung unsur SARA
      </li>
      <li className="my-2 text-sm text-slate-400">
        4. Menfess tidak boleh mengandung unsu pornografi
      </li>
      <li className="my-2 text-sm text-slate-400">
        5. Thread akan otomatis terkirim dan tidak bisa dihapus
      </li>
    </ul>
    <p className="text-slate-400">
      Dengan mengirim Thread berarti anda menyetujui semua peraturan yang
      berlaku.
    </p>
  </Main>
);

export default About;
