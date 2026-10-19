import type { Ebook } from '../ebookTypes';
import { turnaroundManagementCaseStudy as turnaround } from '../../case-studies/turnaroundManagementData';

export const ebook: Ebook = {
  id: 'ebook-aircraft-turnaround-delays',
  slug: 'aircraft-turnaround-delay-guide',
  topic: 'Aviation',
  title: 'Seeing Turnaround Delays Before They Happen',
  subtitle: 'A practical guide to aircraft turnaround management for airport operations teams',
  description:
    'A guide for airport operations and ground handling teams: one live view of every turnaround, early delay-risk flags, and how to run a pilot.',
  inShort:
    'This ebook explains how airport operations teams can spot turnaround delays earlier: by joining flight, stand and ground handling data into one live timeline per flight, turning milestones into explainable delay-risk flags, and proving the value with a focused pilot before scaling.',
  cardImage: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1792046849/ebooks/aircraft-turnaround-delay-guide-card.png',
  cardImageAlt: 'Cover of the Tizora ebook Seeing Turnaround Delays Before They Happen, a practical guide to aircraft turnaround management, beside its title',
  heroImage: 'https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto:best,w_1600/v1792046853/ebooks/aircraft-turnaround-delay-guide-hero.png',
  heroImageAlt: 'Cover of the Tizora ebook Seeing Turnaround Delays Before They Happen: a dark teal book showing an aircraft on stand beside a turnaround timeline with one task flagged before off-block',
  ogImage: 'https://res.cloudinary.com/cjzo6qye/image/upload/f_jpg,q_82/v1792046857/ebooks/aircraft-turnaround-delay-guide-share.png',
  pdf: { url: '/ebooks/aircraft-turnaround-delay-guide.pdf', pages: 10, size: '147 KB' },
  date: 'October 15, 2026',
  isoDate: '2026-10-15',
  author: 'Tizora Team',
  audience: 'Airport operations control, ground handling managers, airline station managers and airport IT teams',
  learn: [
    { title: 'Where turnaround minutes go', text: 'The milestones of a turnaround and the points where small slips become departure delays.' },
    { title: 'Why delays are seen late', text: 'How status scattered across radios, spreadsheets and separate systems hides problems until off-block.' },
    { title: 'One live view per flight', text: 'Joining schedules, stand plans and ground handling events into a single timeline.' },
    { title: 'Explainable delay-risk flags', text: 'Turning milestone gaps into early warnings that controllers trust and act on.' },
    { title: 'A pilot that proves value', text: 'How to scope, baseline and measure a turnaround pilot on a set of stands.' },
    { title: 'Scaling with partners', text: 'Extending across terminals, handlers and airlines without ripping out existing systems.' },
  ],
  chapters: [
    {
      title: 'Where turnaround minutes go',
      summary: 'A turnaround is a chain of dependent tasks. A few lost minutes early in the chain often become a late departure.',
      body: [
        { type: 'paragraph', text: 'A turnaround is everything that happens between an aircraft arriving on stand and pushing back for its next flight. For a short-haul flight it can be well under an hour, and it is made of many tasks run by different teams: airline, ground handler, caterer, fueller, cleaner and airport.' },
        { type: 'list', items: [
          { lead: 'Arrival:', text: 'on-block, chocks on, ground power and equipment in position.' },
          { lead: 'Deboarding and unloading:', text: 'passengers off, bags and cargo out.' },
          { lead: 'Servicing:', text: 'cleaning, catering, fuelling, water and waste.' },
          { lead: 'Loading and boarding:', text: 'bags and cargo in, passengers on, documents completed.' },
          { lead: 'Departure:', text: 'doors closed, pushback, off-block.' },
        ] },
        { type: 'paragraph', text: 'Many of these tasks depend on each other. Fuelling may need to finish before boarding can start under some procedures; catering cannot start until the galley is clear. A ten-minute late start on one task can consume the slack in the whole plan. By the time the delay is obvious, there is often nothing left to recover it with.' },
        { type: 'paragraph', text: 'The opportunity is not to make every task faster. It is to see sooner which turnarounds are drifting, so the team can act while there is still time to recover.' },
      ],
    },
    {
      title: 'Why delays are spotted late',
      summary: 'Turnaround status usually lives in many places at once. Nobody sees the whole picture until it is too late.',
      body: [
        { type: 'paragraph', text: 'At most airports the information needed to predict a turnaround delay already exists. The problem is where it lives: the airport operational database holds the schedule and stand plan, ground handlers track their own tasks, standard operating procedures sit in documents, and much of the real-time status travels by radio, phone and email.' },
        { type: 'paragraph', text: 'Duty managers end up piecing the picture together by calling around. They see a problem when a milestone is missed, not when it becomes likely. And when they need to act, for example by moving an aircraft to another stand, they need to know which rule allows it and what happens to the next arrival on that stand.' },
        { type: 'heading', text: 'Three common gaps' },
        { type: 'list', items: [
          { lead: 'Late or missing milestones:', text: 'events are recorded after the fact, or not at all.' },
          { lead: 'No shared timeline:', text: 'each team sees its own tasks, not the flight as a whole.' },
          { lead: 'Unexplained recommendations:', text: 'tools that say what to do without saying why are quickly ignored.' },
        ] },
      ],
    },
    {
      title: 'Building one live view of every turnaround',
      summary: 'Join flight schedules, stand plans, SOPs and ground handling events into one timeline per flight, using the systems you already have.',
      body: [
        { type: 'paragraph', text: 'The foundation is a single live timeline for each flight: planned milestones from the schedule and procedures, actual milestones as they happen, and the gap between the two. Everyone looking at the flight sees the same picture.' },
        { type: 'heading', text: 'Read from what is already there' },
        { type: 'paragraph', text: 'Replacing core airport systems is slow and risky. A better approach is to read from the flight and stand systems already in use and add the missing pieces around them.' },
        { type: 'list', items: [
          { lead: 'Schedule and stand plan:', text: 'from the airport operational database.' },
          { lead: 'Procedures:', text: 'turnaround standards per aircraft type and airline, turned into planned milestones.' },
          { lead: 'Ground handling events:', text: 'from handler systems where they exist, or simple mobile check-ins where they do not.' },
          { lead: 'Collaborative decision making:', text: 'where the airport runs A-CDM, its milestones and target times such as the target off-block time.' },
        ] },
        { type: 'paragraph', text: 'Start with the few milestones that best predict departure, rather than trying to capture every task on day one. Data quality matters more than data volume: a milestone that arrives reliably beats ten that arrive late.' },
      ],
    },
    {
      title: 'From milestones to delay-risk flags',
      summary: 'Compare actual progress with the plan, flag drift early, and always show controllers the reason behind each flag.',
      body: [
        { type: 'paragraph', text: 'With a live timeline in place, delay risk can be calculated continuously: if a milestone is late, how much slack remains before off-block, and is it enough? Flights that are running out of slack are flagged while there is still time to act.' },
        { type: 'heading', text: 'Make every flag explainable' },
        { type: 'paragraph', text: 'Controllers act on alerts they understand. Every flag should say which milestone is late, by how much, and what that means for departure. The same applies to recommendations such as a stand change: show which rule allows it and what it does to the next arrival.' },
        { type: 'list', items: [
          { lead: 'Rules first:', text: 'start with transparent rules built from your procedures; they are easy to check and tune.' },
          { lead: 'Learn from history:', text: 'add models that learn typical task durations by aircraft type, stand and time of day once you have clean data.' },
          { lead: 'Avoid alert fatigue:', text: 'flag fewer, earlier and better; tune thresholds with the people who receive the alerts.' },
          { lead: 'Keep people in charge:', text: 'the system recommends; duty managers decide.' },
        ] },
      ],
    },
    {
      title: 'Running a turnaround pilot that proves value',
      summary: 'Pick a set of stands, record a baseline, run for long enough to see a pattern, and measure the same way before and after.',
      body: [
        { type: 'paragraph', text: 'A focused pilot is the fastest way to find out whether earlier warnings change outcomes at your airport. Keep the scope tight and the measurement honest.' },
        { type: 'list', items: [
          { lead: 'Scope:', text: 'one terminal or a defined set of stands, with the handlers and airlines that operate there.' },
          { lead: 'Baseline:', text: 'measure warning lead time, on-time departures and turnaround-caused delay minutes before the pilot starts.' },
          { lead: 'Duration:', text: 'run long enough to cover normal variation in traffic and weather.' },
          { lead: 'Same method before and after:', text: 'otherwise the comparison means little.' },
        ] },
        { type: 'callout', title: 'From our work', text: 'In a 12-week pilot with a mid-size European airport, Tizora\'s turnaround management software flagged delay risk 18 minutes earlier on average, and on-time performance on the pilot stands rose 7 points. Results reflect that pilot\'s stands, traffic and measurement period and will vary.', link: { label: 'Read the aircraft turnaround case study', href: '/insights/case-studies/aviation/aircraft-turnaround-management-software' } },
      ],
    },
    {
      title: 'Scaling across stands, handlers and airlines',
      summary: 'Once the pilot proves value, extend stand by stand and partner by partner, keeping the data agreements clear.',
      body: [
        { type: 'paragraph', text: 'Scaling is mostly about people and data agreements, not technology. Each new handler or airline brings its own systems, procedures and expectations.' },
        { type: 'list', items: [
          { lead: 'Agree data sharing early:', text: 'who provides which milestones, how quickly, and who can see what.' },
          { lead: 'Extend in waves:', text: 'add stands or terminals in groups, and repeat the baseline-and-measure step for each.' },
          { lead: 'Keep the controls:', text: 'role-based access, audit logs and clear ownership of every recommendation.' },
          { lead: 'Review together:', text: 'a short weekly review of flagged turnarounds builds trust across partners.' },
        ] },
        { type: 'callout', title: 'Talk to us', text: 'Tizora builds aircraft turnaround management software that reads from the flight and stand systems you already run. If you are losing minutes on the apron, we can help you scope a pilot.', link: { label: 'Visit tizora.ai/industries/aviation', href: '/industries/aviation' } },
      ],
    },
  ],
  faqs: [
    { question: 'Who is this ebook for?', answer: 'Airport operations control teams, ground handling managers, airline station managers and the airport IT teams who support them.' },
    { question: 'Do we need to replace our airport systems to see delays earlier?', answer: 'No. The approach in this ebook reads from the flight and stand systems already in use and adds a live timeline and delay-risk flags around them.' },
    { question: 'Can Tizora run a turnaround pilot at our airport?', answer: 'Yes. A pilot usually starts on one terminal or a set of stands. Book a call and we will help you scope it and agree how results will be measured.' },
  ],
  related: [
    {
      title: 'Aircraft turnaround management software',
      description: 'An airport pilot that flagged delay risk 18 minutes earlier and lifted on-time departures 7 points.',
      href: '/insights/case-studies/aviation/aircraft-turnaround-management-software',
      image: turnaround.card.image,
      imageAlt: turnaround.card.imageAlt,
      linkLabel: 'aircraft turnaround management case study',
    },
  ],
  notice: "Pilot results quoted in this guide reflect one airport's stands, traffic and measurement period, and will vary for other operations.",
  keywords: ['aircraft turnaround management', 'turnaround delay prediction', 'airport operations software', 'ground handling software', 'A-CDM', 'on-time performance'],
};
