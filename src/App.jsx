import { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  aboutData,
  audienceLoopPhrases,
  capabilityEntries,
  clientBelt,
  contactData,
  educationEntries,
  ethosItems,
  experienceEntries,
  externalLinks,
  heroData,
  navItems,
  profileMetrics,
  projectItems,
  skillTags,
} from './data/siteData';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const SHELL_CLASS = 'mx-auto w-full max-w-[1780px] px-[4.2vw] lg:px-[52px]';
const GRID_CLASS = 'grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-[45px]';
const CJK_RE = /[\u3400-\u9fff]/;

function getDisplayClass(text, baseClass, level = 'title') {
  const isCjk = CJK_RE.test(text);
  const cjkClass = level === 'hero' ? 'display-cjk-hero' : 'display-cjk-title';
  return `${baseClass} ${isCjk ? cjkClass : 'display-latin'}`;
}

function attachProjectCardInteraction(card, cleanupHandlers) {
  const quickX = gsap.quickTo(card, 'x', { duration: 0.28, ease: 'power3.out' });
  const quickY = gsap.quickTo(card, 'y', { duration: 0.28, ease: 'power3.out' });
  const quickRotateX = gsap.quickTo(card, 'rotationX', { duration: 0.28, ease: 'power3.out' });
  const quickRotateY = gsap.quickTo(card, 'rotationY', { duration: 0.28, ease: 'power3.out' });
  const quickScale = gsap.quickTo(card, 'scale', { duration: 0.35, ease: 'power3.out' });
  let hoverLift = 0;

  gsap.set(card, {
    transformPerspective: 900,
    transformStyle: 'preserve-3d',
    willChange: 'transform',
  });

  const onMove = (event) => {
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const offsetX = (px - 0.5) * 16;
    const offsetY = (py - 0.5) * 12;
    quickX(offsetX);
    quickY(offsetY + hoverLift);
    quickRotateX((0.5 - py) * 7);
    quickRotateY((px - 0.5) * 7);
    card.style.setProperty('--mx', `${px * 100}%`);
    card.style.setProperty('--my', `${py * 100}%`);
  };

  const onEnter = () => {
    hoverLift = -6;
    quickScale(1.016);
  };

  const onLeave = () => {
    hoverLift = 0;
    quickX(0);
    quickY(0);
    quickRotateX(0);
    quickRotateY(0);
    quickScale(1);
    card.style.setProperty('--mx', '50%');
    card.style.setProperty('--my', '50%');
  };

  card.addEventListener('pointerenter', onEnter);
  card.addEventListener('pointermove', onMove);
  card.addEventListener('pointerleave', onLeave);

  cleanupHandlers.push(() => {
    card.removeEventListener('pointerenter', onEnter);
    card.removeEventListener('pointermove', onMove);
    card.removeEventListener('pointerleave', onLeave);
  });
}

function Wordmark() {
  return (
    <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/95">
      <span className="grid h-6 w-6 place-items-center rounded-full border border-white/18">
        <span className="h-2.5 w-2.5 rounded-full bg-[#d6af76]" />
      </span>
      <span>StudiHuang</span>
    </span>
  );
}

function DoubleWordLink({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-[12px] uppercase tracking-[0.14em] text-white/74 transition hover:text-white"
    >
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );
}

function PillButton({ children, href, variant = 'filled' }) {
  const filled =
    variant === 'filled'
      ? 'border-[#e5cfad] bg-[#e5cfad] text-[#111111] hover:bg-[#f3e5cf]'
      : 'border-white/18 bg-white/5 text-white hover:bg-white/10';

  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-full border px-5 text-sm tracking-[0.08em] transition ${filled}`}
    >
      {children}
    </a>
  );
}

function SectionRule() {
  return (
    <div className="mt-7 h-px w-full origin-left scale-x-0 bg-current/20" data-stroke />
  );
}

function ClientBelt() {
  return (
    <div className="overflow-hidden border-y border-white/10 py-5">
      <div className="belt-track flex min-w-max items-center gap-10 text-[11px] uppercase tracking-[0.22em] text-white/55">
        {[...clientBelt, ...clientBelt].map((client, index) => (
          <span key={`${client}-${index}`} className="inline-flex items-center gap-10">
            <span>{client}</span>
            <span className="h-1 w-1 rounded-full bg-[#d6af76]/80" />
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ item, index, expanded, onToggle }) {
  const detailsId = `project-details-${index}`;
  const toneMap = {
    dark: 'bg-[#1d1b1a] text-[#f2ece2]',
    sepia: 'bg-[#dbd1c3] text-[#111111]',
    graphite: 'bg-[#b7b4ae] text-[#121212]',
    light: 'bg-[#eee4d5] text-[#111111]',
  };
  const toneClass = toneMap[item.tone] || toneMap.light;
  return (
    <article
      className={`${toneClass} group project-card relative overflow-hidden rounded-[28px] border border-black/10 transition-shadow duration-500`}
      style={{
        '--mx': '50%',
        '--my': '50%',
      }}
      data-reveal
      data-project-card
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(360px circle at var(--mx) var(--my), rgba(255,255,255,0.30), rgba(255,255,255,0.07) 30%, transparent 62%)',
          }}
        />
      </div>
      <div
        data-media-scale
        className="absolute inset-0 opacity-65 transition duration-700 group-hover:scale-105"
        style={{
          background:
            'radial-gradient(circle at 20% 18%, rgba(255,255,255,0.45) 0%, transparent 40%), radial-gradient(circle at 82% 74%, rgba(0,0,0,0.18) 0%, transparent 34%)',
        }}
      />
      <div className="relative flex min-h-[360px] flex-col justify-between p-8 md:min-h-[500px] md:p-10">
        <div className="flex items-start justify-between gap-4 text-[11px] uppercase tracking-[0.18em] opacity-75">
          <span>{item.client}</span>
          <span>{item.year}</span>
        </div>

        <div className="pointer-events-none select-none">
          <p
            className="text-[clamp(4rem,12vw,9rem)] font-semibold leading-none opacity-[0.14]"
            style={{ letterSpacing: '-0.08em' }}
          >
            0{index + 1}
          </p>
          <p
            className={getDisplayClass(
              item.title,
              'mt-5 max-w-[20ch] font-display text-[clamp(1.55rem,2.4vw,2.3rem)] leading-[1.1]'
            )}
          >
            {item.title}
          </p>
          <p className="mt-5 max-w-[52ch] text-[0.97rem] leading-8 opacity-78">{item.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-current/28 px-3 py-1 text-[10px] uppercase tracking-[0.14em] opacity-80"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-6 text-[11px] uppercase tracking-[0.16em] opacity-70">{item.stack}</p>

          <div className="pointer-events-auto mt-7">
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls={detailsId}
              onClick={onToggle}
              className="inline-flex items-center gap-2 border-b border-current/35 pb-1 text-[11px] uppercase tracking-[0.18em] transition hover:border-current/80"
            >
              <span>{expanded ? '收起贡献细节' : '展开核心贡献'}</span>
              <span
                className={`inline-block text-[13px] leading-none transition-transform duration-300 ${
                  expanded ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>
          </div>

          <div
            id={detailsId}
            className={`grid transition-all duration-500 ${expanded ? 'mt-6 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'}`}
          >
            <ul className="overflow-hidden space-y-3 border-t border-current/20 pt-5 text-[0.93rem] leading-7 opacity-85">
              {item.highlights.map((highlight, highlightIndex) => (
                <li
                  key={highlight}
                  className={`flex gap-3 transition-all duration-500 ${
                    expanded ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                  }`}
                  style={{ transitionDelay: expanded ? `${highlightIndex * 65}ms` : '0ms' }}
                >
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-current/75" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

function CapabilityCard({ entry }) {
  return (
    <article className="border-t border-black/10 pt-8" data-reveal>
      <p className="text-[11px] uppercase tracking-[0.16em] text-black/36">{entry.label}</p>
      <h3
        className={getDisplayClass(
          entry.title,
          'font-display mt-5 max-w-[18ch] text-[clamp(1.65rem,2.2vw,2.2rem)] leading-[1.1] text-[#101010]'
        )}
      >
        {entry.title}
      </h3>
      <p className="mt-5 max-w-[44ch] text-[0.97rem] leading-8 text-black/62">{entry.body}</p>
    </article>
  );
}

function ExperienceRow({ item, index }) {
  return (
    <article className="grid gap-4 border-t border-white/10 py-7 md:grid-cols-[170px_1fr_120px]" data-reveal>
      <p className="text-[11px] uppercase tracking-[0.16em] text-white/42">{item.period}</p>
      <div>
        <h3
          className={getDisplayClass(
            item.company,
            'font-display text-[clamp(1.55rem,2vw,2rem)] leading-[1.14] text-[#f4efe7]'
          )}
        >
          {item.company}
        </h3>
        <p className="mt-4 max-w-[72ch] text-[0.97rem] leading-8 text-white/62">{item.summary}</p>
      </div>
      <p className="text-[11px] uppercase tracking-[0.16em] text-white/42 md:text-right">
        0{index + 1} / {item.role}
      </p>
    </article>
  );
}

function EducationCard({ item }) {
  return (
    <article className="rounded-[20px] border border-white/12 bg-white/[0.02] p-6" data-reveal>
      <p className="text-[11px] uppercase tracking-[0.2em] text-white/36">{item.period}</p>
      <h3
        className={getDisplayClass(
          item.school,
          'font-display mt-4 text-[clamp(1.5rem,2vw,2rem)] leading-[1.12] text-[#f4efe7]'
        )}
      >
        {item.school}
      </h3>
      <p className="mt-4 text-[0.96rem] leading-7 text-white/62">{item.degree}</p>
    </article>
  );
}

function EthosCard({ item }) {
  return (
    <article className="ethos-card w-full shrink-0 rounded-[26px] border border-white/12 bg-white/[0.03] p-7 md:w-[560px] md:p-10" data-rail-card>
      <p className="text-[11px] uppercase tracking-[0.22em] text-white/42">{item.id} / 04</p>
      <h3
        className={getDisplayClass(
          item.title,
          'font-display mt-7 max-w-[14ch] text-[clamp(1.75rem,2.4vw,2.5rem)] leading-[1.1] text-[#f4efe7]'
        )}
      >
        {item.title}
      </h3>
      <p className="mt-6 max-w-[44ch] text-[0.98rem] leading-8 text-white/62">{item.body}</p>
    </article>
  );
}

function SkillTag({ tag }) {
  return (
    <li className="rounded-full border border-black/14 bg-black/[0.02] px-4 py-2 text-[0.82rem] tracking-[0.02em] text-black/72" data-reveal>
      {tag}
    </li>
  );
}

function AudienceLoopRow({ phrases, reverse = false }) {
  const rows = [...phrases, ...phrases];
  return (
    <div className="overflow-hidden border-y border-white/8 py-3">
      <div
        className="flex min-w-max items-center gap-7 whitespace-nowrap text-[clamp(1rem,1.7vw,1.6rem)] text-white/72"
        data-loop-track
        data-loop-reverse={reverse ? 'true' : 'false'}
      >
        {rows.map((phrase, index) => (
          <span key={`${phrase}-${index}`} className="inline-flex items-center gap-7">
            <span className="font-display tracking-[0.01em]">{phrase}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#d6af76]/78" />
          </span>
        ))}
      </div>
    </div>
  );
}

function App() {
  const appRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    const cleanupHandlers = [];
    const ctx = gsap.context(() => {
      const isMobile = globalThis.matchMedia('(max-width: 767px)').matches;
      const progressLine = document.querySelector('[data-scroll-progress]');
      if (progressLine) {
        gsap.set(progressLine, { scaleX: 0, transformOrigin: 'left center' });
        ScrollTrigger.create({
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: (self) => gsap.set(progressLine, { scaleX: self.progress }),
        });
      }

      if (isMobile) {
        gsap.set('[data-nav-item], [data-cover-item], [data-cover-line], [data-reveal]', {
          opacity: 1,
          clearProps: 'transform',
        });
      } else {
        gsap.from('[data-nav-item]', {
          opacity: 0,
          y: -16,
          duration: 0.65,
          stagger: 0.05,
          ease: 'power3.out',
        });

        gsap.from('[data-cover-item]', {
          opacity: 0,
          y: 24,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
        });

        gsap.from('[data-cover-line]', {
          yPercent: 120,
          duration: 1.1,
          stagger: 0.08,
          ease: 'power4.out',
        });
      }

      gsap.utils.toArray('[data-title-kinetic]').forEach((line, index) => {
        gsap.fromTo(
          line,
          { xPercent: 0 },
          {
            xPercent: index % 2 === 0 ? -0.9 : 0.9,
            ease: 'none',
            scrollTrigger: {
              trigger: line.closest('section') || line,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });

      gsap.fromTo(
        '[data-hero-kinetic]',
        { yPercent: 0 },
        {
          yPercent: -9,
          ease: 'none',
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      if (!isMobile) {
        gsap.utils.toArray('[data-section]').forEach((section) => {
          const nodes = section.querySelectorAll('[data-reveal]');
          if (!nodes.length) return;

          gsap.from(nodes, {
            opacity: 0,
            y: 42,
            duration: 1,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 78%',
            },
          });
        });
      }

      gsap.utils.toArray('[data-stroke]').forEach((line) => {
        gsap.to(line, {
          scaleX: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: line,
            start: 'top 88%',
          },
        });
      });

      gsap.utils.toArray('[data-media-scale]').forEach((media) => {
        gsap.fromTo(
          media,
          { yPercent: 8, scale: 1.08 },
          {
            yPercent: -6,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: media,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });

      gsap.utils.toArray('[data-project-card]').forEach((card) => {
        attachProjectCardInteraction(card, cleanupHandlers);
      });

      gsap.utils.toArray('[data-loop-track]').forEach((track) => {
        const reverse = track.dataset.loopReverse === 'true';
        gsap.set(track, { xPercent: reverse ? -20 : 0 });
        gsap.to(track, {
          xPercent: reverse ? 0 : -20,
          duration: reverse ? 30 : 26,
          repeat: -1,
          ease: 'none',
        });
      });

      mm.add('(min-width: 1024px)', () => {
        const sections = gsap.utils.toArray('[data-rail-section]');
        for (const section of sections) {
          const track = section.querySelector('[data-rail-track]');
          const viewport = section.querySelector('[data-rail-viewport]');
          if (!track || !viewport) continue;

          const distance = Math.max(0, track.scrollWidth - viewport.clientWidth);
          gsap.to(track, {
            x: -distance,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top top+=76',
              end: `+=${Math.max(distance, 800)}`,
              scrub: true,
              pin: true,
              anticipatePin: 1,
            },
          });
        }
      });
    }, appRef);

    return () => {
      cleanupHandlers.forEach((cleanup) => cleanup());
      mm.revert();
      ctx.revert();
    };
  }, []);

  const handleNavClick = (id) => {
    gsap.to(globalThis, {
      duration: 1.1,
      scrollTo: { y: `#${id}`, offsetY: 84 },
      ease: 'power4.inOut',
    });
  };

  return (
    <div ref={appRef} className="grid-noise min-h-screen overflow-x-clip bg-[#0f0f0f] text-white">
      <div className="pointer-events-none fixed left-0 top-0 z-[70] h-[2px] w-full origin-left bg-[#d7b487]" data-scroll-progress />
      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#0f0f0f]/90 backdrop-blur-xl">
        <div className={`${SHELL_CLASS} flex items-center justify-between gap-4 py-5`}>
          <button type="button" onClick={() => handleNavClick('hero')} className="shrink-0">
            <Wordmark />
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <div key={item.id} data-nav-item>
                <DoubleWordLink label={item.label} onClick={() => handleNavClick(item.id)} />
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div data-nav-item>
              <PillButton href="#projects" variant="ghost">
                项目
              </PillButton>
            </div>
            <div data-nav-item>
              <PillButton href="#contact">联系</PillButton>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section
          id="hero"
          className="flex min-h-0 items-start border-b border-white/8 pb-10 pt-8 md:min-h-[calc(100svh-77px)] md:items-end md:pb-20 md:pt-20"
        >
          <div className={SHELL_CLASS}>
            <div className={GRID_CLASS}>
              <div className="lg:col-span-12">
                <p
                  className="text-[11px] uppercase tracking-[0.18em] text-white/48"
                  data-cover-item
                >
                  {heroData.eyebrow}
                </p>
                <div className="mt-8" data-hero-kinetic>
                  {heroData.title.map((line) => (
                    <div key={line} className="overflow-hidden">
                      <p
                        className={getDisplayClass(
                          line,
                          'font-display text-[clamp(2.6rem,5.7vw,6.7rem)] text-[#f4efe7]',
                          'hero'
                        )}
                        data-cover-line
                        data-title-kinetic
                      >
                        {line}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 max-w-[78ch] md:mt-8" data-cover-item>
                  <p className="text-[1rem] leading-8 text-white/62 md:text-[1.08rem]">
                    {heroData.description}
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap gap-3 md:mt-10" data-cover-item>
                  <PillButton href="#projects">查看项目</PillButton>
                  <PillButton href="#contact" variant="ghost">
                    发起沟通
                  </PillButton>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="about" data-section className="bg-[#0f0f0f] py-14 md:py-32">
          <div className={SHELL_CLASS}>
            <div className={GRID_CLASS}>
              <div className="lg:col-span-8">
                <h2
                  className={getDisplayClass(
                    aboutData.title,
                    'font-display max-w-[18ch] text-[clamp(2.2rem,4.2vw,4.9rem)] text-[#f4efe7]'
                  )}
                  data-reveal
                  data-title-kinetic
                >
                  {aboutData.title}
                </h2>
                <SectionRule />
              </div>

              <div className="lg:col-span-4 lg:pt-3">
                <p className="max-w-[50ch] text-[1rem] leading-8 text-white/56" data-reveal>{aboutData.body}</p>
                <div className="mt-9" data-reveal>
                  <PillButton href={aboutData.cta.href}>{aboutData.cta.label}</PillButton>
                </div>
                <div className="mt-10 space-y-5 border-t border-white/10 pt-6" data-reveal>
                  {heroData.meta.map((item) => (
                    <div key={item.label}>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-white/38">{item.label}</p>
                      <p className="mt-2 text-[0.95rem] leading-7 text-white/76">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:mt-10 lg:grid-cols-3">
              {profileMetrics.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-[18px] border border-white/10 bg-white/[0.02] px-6 py-5"
                  data-reveal
                >
                  <p className="font-display text-[clamp(2.1rem,3vw,3rem)] leading-none text-[#f4efe7]">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-[0.92rem] text-white/62">{metric.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section data-section className="bg-[#0f0f0f] pb-12 md:pb-24">
          <div className={SHELL_CLASS}>
            <div className="mb-8" data-reveal>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">Selected Clients</p>
            </div>
            <ClientBelt />
          </div>
        </section>

        <section data-section className="bg-[#0f0f0f] pb-10 md:pb-20">
          <div className={SHELL_CLASS}>
            <p className="mb-6 text-[11px] uppercase tracking-[0.18em] text-white/38" data-reveal>
              你可能是
            </p>
            <div className="space-y-3" data-reveal>
              <AudienceLoopRow phrases={audienceLoopPhrases} />
              <AudienceLoopRow phrases={[...audienceLoopPhrases].reverse()} reverse />
            </div>
          </div>
        </section>

        <section id="experience" data-section className="bg-[#0f0f0f] py-14 md:py-30">
          <div className={SHELL_CLASS}>
            <div className={GRID_CLASS}>
              <div className="lg:col-span-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/40" data-reveal>
                  Experience
                </p>
              </div>
              <div className="lg:col-span-9">
                {experienceEntries.map((item, index) => (
                  <ExperienceRow key={`${item.company}-${item.period}`} item={item} index={index} />
                ))}
              </div>
            </div>
            <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-2">
              {educationEntries.map((item) => (
                <EducationCard key={item.school} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" data-section className="bg-[#0f0f0f] py-14 md:py-32">
          <div className={SHELL_CLASS}>
            <div className={GRID_CLASS}>
              <div className="lg:col-span-7">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/38" data-reveal>
                  Project Experience
                </p>
                <h2
                  className={getDisplayClass(
                    '代表项目不是堆数量，而是清楚说明我解决了哪些复杂问题。',
                    'font-display mt-5 max-w-[15ch] text-[clamp(2.2rem,4vw,4.7rem)] text-[#f4efe7]'
                  )}
                  data-reveal
                  data-title-kinetic
                >
                  代表项目不是堆数量，而是清楚说明我解决了哪些复杂问题。
                </h2>
              </div>

              <div className="lg:col-span-5 lg:pt-3">
                <p className="max-w-[50ch] text-[1rem] leading-8 text-white/56" data-reveal>
                  点击每张卡片可展开“核心贡献”，查看技术方案、性能优化和工程落地细节。
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6">
              {projectItems.map((item, index) => (
                <ProjectCard
                  key={`${item.client}-${item.year}`}
                  item={item}
                  index={index}
                  expanded={activeProject === index}
                  onToggle={() => setActiveProject((prev) => (prev === index ? -1 : index))}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="ethos" data-rail-section className="bg-[#0d0d0d] py-14 md:py-24">
          <div className={SHELL_CLASS}>
            <div className={GRID_CLASS}>
              <div className="lg:col-span-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/40" data-reveal>
                  Our ethos
                </p>
                <h2
                  className={getDisplayClass(
                    'Vision matters. Velocity wins.',
                    'font-display mt-5 max-w-[13ch] text-[clamp(2.1rem,3.8vw,4.3rem)] text-[#f4efe7]'
                  )}
                  data-reveal
                  data-title-kinetic
                >
                  Vision matters. Velocity wins.
                </h2>
              </div>
              <div className="lg:col-span-8 lg:pt-5" data-reveal>
                <p className="max-w-[66ch] text-[0.98rem] leading-8 text-white/58">
                  This is not an accelerator template. It is complete company building logic translated into interface structure and execution speed.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-7 md:mt-10" data-rail-viewport>
            <div
              className="flex flex-col gap-4 px-[4.2vw] md:px-[52px] lg:flex-row lg:gap-5 lg:px-[45px]"
              data-rail-track
            >
              {ethosItems.map((item) => (
                <EthosCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section data-section className="bg-white py-14 text-[#0f0f0f] md:py-32">
          <div className={SHELL_CLASS}>
            <div className={GRID_CLASS}>
              <div className="lg:col-span-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-black/38" data-reveal>
                  What we do
                </p>
                <h2
                  className={getDisplayClass(
                    'A full-stack creative production partner.',
                    'font-display mt-5 max-w-[13ch] text-[clamp(2.1rem,4vw,4.5rem)]'
                  )}
                  data-reveal
                  data-title-kinetic
                >
                  A full-stack creative production partner.
                </h2>
              </div>
              <div className="lg:col-span-8 lg:pt-3">
                <p className="max-w-[56ch] text-[1rem] leading-8 text-black/58" data-reveal>
                  Communication strategy, interaction design and engineering discipline are shaped together to keep the quality consistent from first mockup to final release.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-7 md:mt-14 md:gap-8 lg:grid-cols-3">
              {capabilityEntries.map((entry) => (
                <CapabilityCard key={entry.title} entry={entry} />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" data-section className="bg-white pb-14 text-[#0f0f0f] md:pb-28">
          <div className={SHELL_CLASS}>
            <div className={GRID_CLASS}>
              <div className="lg:col-span-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-black/38" data-reveal>
                  Skills
                </p>
                <h2
                  className={getDisplayClass(
                    '专业技能与工程工具栈。',
                    'font-display mt-5 max-w-[13ch] text-[clamp(2rem,3.8vw,4.1rem)]'
                  )}
                  data-reveal
                  data-title-kinetic
                >
                  专业技能与工程工具栈。
                </h2>
              </div>
              <div className="lg:col-span-8 lg:pt-2">
                <ul className="flex flex-wrap gap-3">
                  {skillTags.map((tag) => (
                    <SkillTag key={tag} tag={tag} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" data-section className="bg-[#0f0f0f] py-14 md:py-28">
          <div className={SHELL_CLASS}>
            <div className="mx-auto max-w-[980px] text-center">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/38" data-reveal>
                {contactData.eyebrow}
              </p>
              <div className="mt-4 space-y-1 md:mt-6">
                <p
                  className={getDisplayClass(
                    'Let’s work',
                    'font-display text-[clamp(2.8rem,6vw,6.2rem)] text-[#f4efe7]',
                    'hero'
                  )}
                  data-reveal
                >
                  Let&apos;s work
                </p>
                <p
                  className={getDisplayClass(
                    'together',
                    'font-display text-[clamp(2.8rem,6vw,6.2rem)] text-[#f4efe7]',
                    'hero'
                  )}
                  data-reveal
                >
                  together
                </p>
              </div>
              <p className="mx-auto mt-4 max-w-[62ch] text-[1rem] leading-8 text-white/58 md:mt-6" data-reveal>
                {contactData.description}
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:mt-10 md:gap-4" data-reveal>
                <a
                  href={`mailto:${contactData.email}`}
                  className="inline-flex min-h-12 items-center rounded-full border border-white/14 px-8 text-[0.95rem] text-white/88 transition hover:border-white/35 hover:bg-white/[0.03]"
                >
                  {contactData.email}
                </a>
                <a
                  href={`tel:${contactData.phone}`}
                  className="inline-flex min-h-12 items-center rounded-full border border-white/14 px-8 text-[0.95rem] text-white/88 transition hover:border-white/35 hover:bg-white/[0.03]"
                >
                  {contactData.phone}
                </a>
              </div>
            </div>

            <div className="mt-12 border-t border-white/10 pt-6 md:mt-20 md:pt-8">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div className="flex flex-wrap gap-8">
                  {externalLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[0.92rem] text-white/72 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="text-right">
                  <p className="text-[0.9rem] text-white/62">Designed and developed by Huang Shenhao</p>
                  <p className="mt-1 text-[0.85rem] text-white/42">© 2026 All rights reserved</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

DoubleWordLink.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

PillButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['filled', 'ghost']),
};

ProjectCard.propTypes = {
  item: PropTypes.shape({
    client: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    tone: PropTypes.string,
    stack: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  expanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

CapabilityCard.propTypes = {
  entry: PropTypes.shape({
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

ExperienceRow.propTypes = {
  item: PropTypes.shape({
    period: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

EducationCard.propTypes = {
  item: PropTypes.shape({
    school: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
  }).isRequired,
};

EthosCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

SkillTag.propTypes = {
  tag: PropTypes.string.isRequired,
};

AudienceLoopRow.propTypes = {
  phrases: PropTypes.arrayOf(PropTypes.string).isRequired,
  reverse: PropTypes.bool,
};

export default App;
