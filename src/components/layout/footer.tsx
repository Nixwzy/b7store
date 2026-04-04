import Image from 'next/image';
import Link from 'next/link';
import { FooterButton } from './footer-button';
import { data } from '@/data';

export const Footer = () => {
  return (
    <footer>
      <div className="bg-white border-t border-gray-200 px-6 py-14">
        <div className="w-full max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/assets/ui/mail-send-line.png"
            alt=""
            width={68}
            height={68}
          />
          <div className="text-center md:text-left">
            <h3 className="font-bold text-2xl mb-6 md:mb-2">
              Inscreva-se para nossa newsletter
            </h3>
            <p className="text-gray-400">
                Receba novidades sobre produtos, promoções e muito mais!
            </p>
          </div>
          <form
            method="POST"
            className="w-full flex-1 flex flex-col gap-4 md:flex-row"
          >
            <input
              type="text"
              className="flex-1 border border-gray-200 rounded-sm px-6 py-5 outline-0"
              placeholder="Qual seu e-mail?"
            />
            <input
              type="submit"
              value="Enviar"
              className="w-full md:w-50 px-6 py-5 bg-blue-600 text-white border-0 rounded-sm cursor-pointer hover:bg-blue-700"
            />
          </form>
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-16 md:py-10 border-b border-gray-700">
            <Link href="/">
              <Image
                src="/assets/ui/logo-white.png"
                alt="B7Store"
                width={143}
                height={48}
              />
            </Link>
            <ul className="flex flex-col md:flex-row gap-8 items-center">
              {data.menu.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col md:flex-row gap-6 py-16 md:py-10 border-b border-gray-700">
            <div className="flex-1">
              <h4 className="mb-6 text-center md:text-left">
                Precisa de ajuda?
              </h4>
              <div className="flex flex-col md:flex-row gap-6">
                <FooterButton
                  href="mailto:suporte@b7web.com.br"
                  icon="/assets/ui/mail-line.png"
                  label="glopesglcontato@gmail.com"
                />
                <FooterButton
                  href=""
                  icon="/assets/ui/phone-line.png"
                  label="(21) 99999-9999"
                />
              </div>
            </div>
            <div>
              <h4 className="mb-6 text-center md:text-left">Redes Sociais</h4>
              <div className="flex flex-row justify-between gap-6">
                {data.socialLinks.map((social) => (
                  <FooterButton
                    key={social.icon}
                    href={social.href}
                    icon={social.icon}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-14 justify-between items-center py-16 md:py-10">
            <div className="text-xl text-center md:text-left">
              Seu stack favorito agora no seu guarda-roupa.
              <br />
              De dev para dev. Com estilo.
            </div>
            <div className="flex justify-center">
              <FooterButton href="/" icon="/assets/ui/arrow-up-line.png" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
