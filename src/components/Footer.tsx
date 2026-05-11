import { Linkedin, Twitter, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className='relative border-t border-cyan-400/10 bg-slate-950/50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-12'>
          {/* Brand */}
          <div>
            <div className='flex items-center gap-2 mb-4'>
              <div className='text-2xl font-bold gradient-text'>NeuroReach</div>
              <span className='text-xs font-semibold text-cyan-400 bg-slate-900 px-2 py-1 rounded-full'>
                AI
              </span>
            </div>
            <p className='text-slate-400 text-sm mb-4'>
              Making AI products go viral through strategic content and growth
              marketing.
            </p>
            <div className='flex gap-3'>
              <a
                href='#'
                className='p-2 rounded-lg bg-slate-900 hover:bg-cyan-500/20 transition'
              >
                <Linkedin size={18} />
              </a>
              <a
                href='#'
                className='p-2 rounded-lg bg-slate-900 hover:bg-cyan-500/20 transition'
              >
                <Twitter size={18} />
              </a>
              <a
                href='#'
                className='p-2 rounded-lg bg-slate-900 hover:bg-cyan-500/20 transition'
              >
                <Youtube size={18} />
              </a>
              <a
                href='#'
                className='p-2 rounded-lg bg-slate-900 hover:bg-cyan-500/20 transition'
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className='font-bold mb-6'>Services</h3>
            <ul className='space-y-3 text-sm text-slate-400'>
              <li>
                <a href='#services' className='hover:text-cyan-400 transition'>
                  YouTube Promotion
                </a>
              </li>
              <li>
                <a href='#services' className='hover:text-cyan-400 transition'>
                  Short-Form Content
                </a>
              </li>
              <li>
                <a href='#services' className='hover:text-cyan-400 transition'>
                  Product Demos
                </a>
              </li>
              <li>
                <a href='#services' className='hover:text-cyan-400 transition'>
                  Growth Marketing
                </a>
              </li>
              <li>
                <a href='#services' className='hover:text-cyan-400 transition'>
                  Social Distribution
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className='font-bold mb-6'>Company</h3>
            <ul className='space-y-3 text-sm text-slate-400'>
              <li>
                <a href='#about' className='hover:text-cyan-400 transition'>
                  About
                </a>
              </li>
              <li>
                <a
                  href='#case-studies'
                  className='hover:text-cyan-400 transition'
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-cyan-400 transition'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-cyan-400 transition'>
                  Careers
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-cyan-400 transition'>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className='font-bold mb-6'>Legal</h3>
            <ul className='space-y-3 text-sm text-slate-400'>
              <li>
                <a href='#' className='hover:text-cyan-400 transition'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-cyan-400 transition'>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-cyan-400 transition'>
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-cyan-400 transition'>
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-cyan-400/10 my-8'></div>

        {/* Bottom */}
        <div className='flex flex-col md:flex-row justify-between items-center text-sm text-slate-400'>
          <p>&copy; 2024 NeuroReach AI. All rights reserved.</p>
          <div className='flex gap-4 mt-4 md:mt-0'>
            <a href='#' className='hover:text-cyan-400 transition'>
              Status
            </a>
            <a href='#' className='hover:text-cyan-400 transition'>
              API
            </a>
            <a href='#' className='hover:text-cyan-400 transition'>
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className='absolute bottom-0 right-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5'></div>
    </footer>
  );
}
