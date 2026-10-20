"use client";

import Image from "next/image";
import FireplaceOffer from "@/components/FireplaceOffer";
import { bookingOptions } from "@/lib/bookingOptions";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { GalleryItem } from "@/lib/catalog";

const film = "https://timelesscontracting.com/wp-content/uploads/2026/03/InShot_20260228_205837736-1.mp4";
type IntroModel = Pick<GalleryItem, "slug" | "title" | "label" | "image">;

export default function HomeIntro({ models }: { models: IntroModel[] }) {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      if (preference.matches) video.current?.pause();
      else video.current?.play().catch(() => { /* Native play control remains available. */ });
    };
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  return (
    <>
      <section className="metro-intro" aria-labelledby="intro-heading">
        <div className="metro-intro__heading">
          <div><p className="fine-label">Metro Media Walls · Custom media walls & built-ins</p>
            <h1 id="intro-heading">Make room for<br /><em>better design.</em></h1>
          </div>
          <div className="metro-intro__copy">
            <p>Bring your TV, fireplace, and storage into one clean design. Explore media walls and built-ins to find the right fit for your space.</p>
            <div className="hero__actions"><Link href="/home" className="stone-button">See what’s possible <span aria-hidden="true">↗</span></Link><Link href="/featured" className="ghost-button">Browse models</Link></div>
          </div>
        </div>
        <div className="metro-intro__film">
          <video ref={video} muted={muted} loop playsInline preload="metadata" poster="/great-wall/editorial/showroom-row.png" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setVideoError(true)} aria-label="Media wall showcase from Timeless Contracting">
            <source src={film} type="video/mp4" />
          </video>
          <div className="metro-intro__caption"><span className="fine-label">Materials. Lighting. Detail.</span><p>See how it all comes together.</p></div>
          <div className="metro-intro__controls">
            <button type="button" disabled={videoError} aria-label={muted ? "Unmute showcase video" : "Mute showcase video"} onClick={() => setMuted(value => !value)}>{muted ? "Sound off" : "Sound on"}</button>
            <button type="button" disabled={videoError} onClick={() => { if (video.current?.paused) video.current.play().catch(() => setVideoError(true)); else video.current?.pause(); }}>{playing ? "Pause video" : "Play video"}</button>
          </div>
          {videoError ? <p className="metro-intro__error" role="status">The film is unavailable. Explore our wall models below.</p> : null}
        </div>
        <p className="metro-intro__credit">Showcase film: <a href="https://timelesscontracting.com/texas-media-walls/" target="_blank" rel="noreferrer">Timeless Contracting ↗</a></p>
      </section>
      <div className="fireplace-offer-wrap">
        <FireplaceOffer />
      </div>
      <section className="metro-consultation" aria-labelledby="consultation-heading">
        <div className="metro-consultation__intro">
          <p className="fine-label">Designed for the way you live</p>
          <h2>One wall.<br />A room that works.</h2>
          <p>Give your screen a place, your storage a purpose, and your room a finished look. Start with a featured model, then explore the finishes, shelving, and fireplace options that suit your space.</p>
        </div>
        <div className="metro-consultation__booking">
          <p className="fine-label">Let’s talk through your options</p>
          <h3 id="consultation-heading">Not sure where to start?</h3>
          <p>You don’t need a design picked out. Tell us about your space, style, and budget. We’ll help you compare options and find what works for your room.</p>
          <dl className="booking-services">
            {bookingOptions.map((option) => (
              <div key={option.id}>
                <dt>{option.title} <strong>{option.price}</strong></dt>
                <dd>{option.details}</dd>
              </div>
            ))}
          </dl>
          <a href="#estimate" className="stone-button">Schedule a consultation <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <section className="metro-showcase" aria-labelledby="showcase-heading">
        <div className="metro-showcase__heading"><div><p className="fine-label">Find your style</p><h2 id="showcase-heading">Find your starting point.</h2></div><div className="metro-showcase__tools"><span>Hover to pause · Tap a model to explore</span><button type="button" aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? "Resume showcase" : "Pause showcase"}</button></div></div>
        <div className="metro-showcase__viewport" data-paused={paused} role="region" aria-label="Media wall models" tabIndex={0}>
          <div className="metro-showcase__track">
            {[false, true].map(duplicate => <div className="metro-showcase__group" key={String(duplicate)} aria-hidden={duplicate || undefined}>
              {models.map(model => <Link className="metro-showcase__card" key={model.slug} href={`/featured/${model.slug}`} tabIndex={duplicate ? -1 : undefined}>
                <div className="metro-showcase__image"><Image src={model.image} alt={duplicate ? "" : `${model.title} — ${model.label}`} fill sizes="(max-width: 640px) 78vw, 340px" /></div>
                <div className="metro-showcase__label"><div><p className="fine-label">{model.label}</p><h3>{model.title}</h3></div><span aria-hidden="true">↗</span></div>
              </Link>)}
            </div>)}
          </div>
        </div>
      </section>
      <div className="metro-intro__enter"><Link href="/home" className="stone-button">Explore designs & options <span aria-hidden="true">↗</span></Link></div>
    </>
  );
}
