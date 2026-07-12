// ─────────────────────────────────────────────────────────────────────────────
// GuitarFlow — exercise library data
// ─────────────────────────────────────────────────────────────────────────────
// Edit this file to change the built-in categories/exercises, or add new ones.
// It's plain JavaScript — no build step needed. Save the file, then reload the
// app (or redeploy) to see your changes.
//
// IMPORTANT: this only seeds a NEW install. If you already have exercises
// saved on a device (which is the normal case once you've used the app),
// that device keeps using its own saved copy and won't see edits made here.
// To force a device back to this file's data, use Settings and delete/re-add
// the exercise, or clear the app's storage.
//
// ── Categories ──
// Each category is: { id, name, color }
//   id     — internal identifier, must be unique. Don't change an existing
//            category's id, or exercises pointing to it will lose their category.
//   name   — display name (English; the app has separate French translations
//            for these exact built-in ids, see CATEGORY_I18N in the app code —
//            any category you add here just displays "name" as-is in every language).
//   color  — hex color used for that category's accent throughout the app.
//
// ── Exercises ──
// Each exercise is: { id, categoryId, name, defaultMin, icon, description, subExercises? }
//   id          — internal identifier, must be unique. Don't change an existing one.
//   categoryId  — must match one of the category ids above.
//   name        — display name.
//   defaultMin  — default duration in minutes when added to a session.
//   icon        — an emoji shown next to the exercise.
//   description — short one-line description.
//   subExercises (optional) — a checklist you can tick off item-by-item during
//     practice, e.g. individual scale patterns. Each is { id, label }.
//     Progress is remembered per exercise (see subProgress in the app), so it's
//     safe to reuse the exact same subExercises list across several exercises —
//     each exercise still tracks its own checkmarks independently by exercise id.

// Shared checklist used by the three built-in scale exercises below: ascending/
// descending through every interval up to a 9th, plus note groupings of 3 to 7.
const SCALE_SUBEXERCISES = [
  { id: "sub-2-up",     label: "Ascending in 2nds" },
  { id: "sub-2-down",   label: "Descending in 2nds" },
  { id: "sub-3-up",     label: "Ascending in 3rds" },
  { id: "sub-3-down",   label: "Descending in 3rds" },
  { id: "sub-4-up",     label: "Ascending in 4ths" },
  { id: "sub-4-down",   label: "Descending in 4ths" },
  { id: "sub-5-up",     label: "Ascending in 5ths" },
  { id: "sub-5-down",   label: "Descending in 5ths" },
  { id: "sub-6-up",     label: "Ascending in 6ths" },
  { id: "sub-6-down",   label: "Descending in 6ths" },
  { id: "sub-7-up",     label: "Ascending in 7ths" },
  { id: "sub-7-down",   label: "Descending in 7ths" },
  { id: "sub-8-up",     label: "Ascending in octaves" },
  { id: "sub-8-down",   label: "Descending in octaves" },
  { id: "sub-9-up",     label: "Ascending in 9ths" },
  { id: "sub-9-down",   label: "Descending in 9ths" },
  { id: "sub-grp3-up",   label: "Group of 3 ascending" },
  { id: "sub-grp3-down", label: "Group of 3 descending" },
  { id: "sub-grp4-up",   label: "Group of 4 ascending" },
  { id: "sub-grp4-down", label: "Group of 4 descending" },
  { id: "sub-grp5-up",   label: "Group of 5 ascending" },
  { id: "sub-grp5-down", label: "Group of 5 descending" },
  { id: "sub-grp6-up",   label: "Group of 6 ascending" },
  { id: "sub-grp6-down", label: "Group of 6 descending" },
  { id: "sub-grp7-up",   label: "Group of 7 ascending" },
  { id: "sub-grp7-down", label: "Group of 7 descending" },
];

window.EXERCISES_DATA = {
  categories: [
    { id: "cat-warmup",  name: "Warm-Up",     color: "#C8873A" },
    { id: "cat-scales",  name: "Scales",      color: "#4FC3F7" },
    { id: "cat-chords",  name: "Chords",      color: "#A78BFA" },
    { id: "cat-tech",    name: "Technique",   color: "#F87171" },
    { id: "cat-improv",  name: "Improv",      color: "#34D399" },
    { id: "cat-song",    name: "Song Work",   color: "#FBBF24" },
    { id: "cat-ear",     name: "Ear Training", color: "#FB923C" },
  ],

  exercises: [
    { id: "warm1", categoryId: "cat-warmup", name: "Finger Stretches",        defaultMin: 3,  icon: "✋", description: "Gently stretch each finger to prevent injuries." },
    { id: "warm2", categoryId: "cat-warmup", name: "Chromatic Crawl",          defaultMin: 5,  icon: "🐛", description: "Play 1-2-3-4 across all strings, ascending and descending." },
    { id: "warm3", categoryId: "cat-warmup", name: "Spider Exercise",           defaultMin: 5,  icon: "🕷️", description: "Cross-string pattern to build independence." },

    { id: "scale1", categoryId: "cat-scales", name: "Pentatonic (A minor)",  defaultMin: 10, icon: "🎵", description: "Run the Am pentatonic in all 5 positions.", subExercises: SCALE_SUBEXERCISES },
    { id: "scale2", categoryId: "cat-scales", name: "Major Scale Modes",     defaultMin: 10, icon: "🎶", description: "Practice Ionian, Dorian, Phrygian across the neck.", subExercises: SCALE_SUBEXERCISES },
    { id: "scale3", categoryId: "cat-scales", name: "Blues Scale",           defaultMin: 8,  icon: "🎸", description: "Add the b5 note to your pentatonic for bluesy feel.", subExercises: SCALE_SUBEXERCISES },

    { id: "chord1", categoryId: "cat-chords", name: "Barre Chord Transitions", defaultMin: 10, icon: "🤘", description: "Switch between F, B, and Bm shapes fluidly." },
    { id: "chord2", categoryId: "cat-chords", name: "Open Chord Shapes",       defaultMin: 7,  icon: "🔵", description: "Clean up G, C, D, Em, Am transitions." },
    { id: "chord3", categoryId: "cat-chords", name: "Jazz Voicings",          defaultMin: 12, icon: "🎷", description: "Learn ii-V-I progressions with 7th chord voicings." },

    { id: "riff1", categoryId: "cat-tech", name: "Alternate Picking",   defaultMin: 10, icon: "⚡", description: "Strict down-up picking at various tempos with metronome." },
    { id: "riff2", categoryId: "cat-tech", name: "Legato & Hammer-Ons", defaultMin: 8,  icon: "🔨", description: "Build smooth phrasing with hammer-ons and pull-offs." },
    { id: "riff3", categoryId: "cat-tech", name: "Bending & Vibrato",   defaultMin: 8,  icon: "〰️", description: "Accurate bends to pitch, controlled vibrato width and speed." },
    { id: "riff4", categoryId: "cat-tech", name: "Palm Muting",        defaultMin: 7,  icon: "🤚", description: "Control the mute tightness across different rhythms." },

    { id: "improv1", categoryId: "cat-improv", name: "Jam over Backing Track", defaultMin: 15, icon: "🎤", description: "Free improvisation over a chosen key backing track." },
    { id: "improv2", categoryId: "cat-improv", name: "Solo Construction",      defaultMin: 12, icon: "🌟", description: "Build a solo with motif, development, and climax." },

    { id: "song1", categoryId: "cat-song", name: "Riff Memorization",  defaultMin: 15, icon: "📝", description: "Learn a new riff from memory, no tabs." },
    { id: "song2", categoryId: "cat-song", name: "Full Run-Through",   defaultMin: 20, icon: "▶️", description: "Play the song top to bottom without stopping." },

    { id: "ear1", categoryId: "cat-ear", name: "Interval Recognition", defaultMin: 10, icon: "👂", description: "Identify intervals by ear, then find them on the neck." },
  ],
};
