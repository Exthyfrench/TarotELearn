/* ============================================================
   TAROT E-LEARN — Complete 78-Card Database
   All meanings verified against traditional Rider-Waite-Smith
   interpretations and widely accepted tarot scholarship.
   ============================================================ */

const TAROT_DECK = [

  /* ============================
     MAJOR ARCANA  (0 – 21)
     ============================ */

  {
    id: 0, name: "The Fool", arcana: "major", suit: null, number: "0",
    element: "Air", planet: "Uranus", zodiac: null,
    uprightKeys: ["New beginnings", "Innocence", "Spontaneity", "Free spirit"],
    reversedKeys: ["Recklessness", "Risk-taking", "Foolishness", "Naivety"],
    upright: "The Fool marks the start of a new journey — a leap of faith into the unknown. It encourages you to embrace adventure, trust the universe, and approach life with a childlike wonder. There is unlimited potential ahead; let go of fear and follow your heart.",
    reversed: "When reversed, The Fool warns against recklessness and poor judgment. You may be taking unnecessary risks without considering the consequences. Pause and look before you leap; this is not the time for blind optimism.",
    advice: "Trust the process but stay grounded. Take that first step toward your new chapter, but keep your eyes open."
  },
  {
    id: 1, name: "The Magician", arcana: "major", suit: null, number: "I",
    element: "Air", planet: "Mercury", zodiac: null,
    uprightKeys: ["Manifestation", "Resourcefulness", "Power", "Inspired action"],
    reversedKeys: ["Manipulation", "Poor planning", "Untapped talents", "Deception"],
    upright: "The Magician represents the power to transform your reality through willpower, skill, and focus. All the tools you need are already at your disposal — you simply need to harness them. Channel your energy with clear intention and watch your ideas take form.",
    reversed: "Reversed, The Magician can indicate manipulation — either by you or someone around you. It may also signal untapped potential and a lack of follow-through. Are you using your gifts to their fullest, or letting them go to waste?",
    advice: "You have everything you need. Focus your intention, take action, and align your mind, heart, and hands."
  },
  {
    id: 2, name: "The High Priestess", arcana: "major", suit: null, number: "II",
    element: "Water", planet: "Moon", zodiac: null,
    uprightKeys: ["Intuition", "Sacred knowledge", "Divine feminine", "Subconscious"],
    reversedKeys: ["Secrets", "Withdrawal", "Silence", "Disconnected from intuition"],
    upright: "The High Priestess urges you to trust your inner voice and look beyond the surface. She guards the threshold between the conscious and subconscious, inviting you to explore dreams, intuition, and the mysteries that logic cannot explain. Still your mind and listen.",
    reversed: "Reversed, this card suggests you may be ignoring your intuition or that hidden information is being withheld. You might feel disconnected from your inner wisdom. Take time for quiet reflection and reconnect with your deeper knowing.",
    advice: "Be still and listen to what lies beneath the surface. Your intuition holds answers that logic alone cannot provide."
  },
  {
    id: 3, name: "The Empress", arcana: "major", suit: null, number: "III",
    element: "Earth", planet: "Venus", zodiac: null,
    uprightKeys: ["Femininity", "Beauty", "Nature", "Nurturing", "Abundance"],
    reversedKeys: ["Creative block", "Dependence", "Emptiness", "Smothering"],
    upright: "The Empress embodies abundance, fertility, and the creative life force. She invites you to connect with nature, nurture yourself and others, and allow beauty and pleasure into your life. This is a time of growth, comfort, and creative expression.",
    reversed: "Reversed, The Empress may point to creative blocks, neglecting self-care, or co-dependency. You could be giving too much to others and depleting yourself, or struggling to connect with your creative and nurturing side.",
    advice: "Nourish your body, mind, and soul. Create beauty, embrace pleasure, and let abundance flow naturally."
  },
  {
    id: 4, name: "The Emperor", arcana: "major", suit: null, number: "IV",
    element: "Fire", planet: "Mars", zodiac: "Aries",
    uprightKeys: ["Authority", "Structure", "Control", "Fatherhood", "Stability"],
    reversedKeys: ["Tyranny", "Rigidity", "Coldness", "Domination", "Inflexibility"],
    upright: "The Emperor represents structure, authority, and the power of discipline. He builds empires through strategic thinking and firm leadership. This card calls you to take charge, set clear boundaries, and create order in your world through logic and determination.",
    reversed: "Reversed, The Emperor can become the tyrant — overly controlling, rigid, or domineering. It may also indicate a lack of discipline or an unhealthy relationship with authority. Seek balance between structure and flexibility.",
    advice: "Lead with strength and fairness. Create solid foundations, but remember that true power includes compassion."
  },
  {
    id: 5, name: "The Hierophant", arcana: "major", suit: null, number: "V",
    element: "Earth", planet: "Venus", zodiac: "Taurus",
    uprightKeys: ["Tradition", "Conformity", "Spiritual wisdom", "Education", "Institutions"],
    reversedKeys: ["Rebellion", "Subversiveness", "New approaches", "Freedom"],
    upright: "The Hierophant represents spiritual wisdom, tradition, and established institutions. He is the bridge between the divine and humanity — a teacher, mentor, or guide. This card may indicate formal education, religious study, or adherence to a belief system that provides meaning.",
    reversed: "Reversed, The Hierophant challenges you to question convention and forge your own spiritual path. You may feel restricted by rules or traditions that no longer serve you. This is an invitation to think independently and break free from dogma.",
    advice: "Seek wisdom from mentors and tradition, but always question what truly resonates with your own truth."
  },
  {
    id: 6, name: "The Lovers", arcana: "major", suit: null, number: "VI",
    element: "Air", planet: "Mercury", zodiac: "Gemini",
    uprightKeys: ["Love", "Harmony", "Relationships", "Values alignment", "Choices"],
    reversedKeys: ["Disharmony", "Imbalance", "Misalignment of values", "Indecision"],
    upright: "The Lovers speaks to deep connection, harmony, and meaningful choices driven by your values. It can represent a soulmate relationship or a crucial crossroads where you must choose with your heart. Alignment between your beliefs and actions brings wholeness.",
    reversed: "Reversed, The Lovers warns of disharmony, misaligned values, or difficult relationship dynamics. You may be avoiding a hard choice, or a partnership may be out of balance. Re-examine what truly matters to you before proceeding.",
    advice: "Make choices rooted in your authentic values. Love with open eyes and choose partnerships that honor who you truly are."
  },
  {
    id: 7, name: "The Chariot", arcana: "major", suit: null, number: "VII",
    element: "Water", planet: "Moon", zodiac: "Cancer",
    uprightKeys: ["Control", "Willpower", "Success", "Determination", "Action"],
    reversedKeys: ["Lack of control", "Lack of direction", "Aggression", "Opposition"],
    upright: "The Chariot is a card of triumph through sheer willpower and determination. It signifies overcoming obstacles, maintaining focus, and driving forward with confidence. Victory is within reach if you harness opposing forces and stay on course.",
    reversed: "Reversed, The Chariot suggests losing control, a lack of direction, or internal conflict pulling you apart. Aggression without strategy leads to failure. Regroup, clarify your goals, and regain mastery over the forces at play.",
    advice: "Harness your willpower and stay focused. Pull opposing forces into alignment and charge ahead with confidence."
  },
  {
    id: 8, name: "Strength", arcana: "major", suit: null, number: "VIII",
    element: "Fire", planet: "Sun", zodiac: "Leo",
    uprightKeys: ["Inner strength", "Bravery", "Compassion", "Focus", "Patience"],
    reversedKeys: ["Self-doubt", "Weakness", "Insecurity", "Raw emotion"],
    upright: "Strength is not about brute force but about quiet, inner courage — the ability to face challenges with patience, compassion, and resilience. Tame your inner beast not through domination but through love and understanding. True power comes from within.",
    reversed: "Reversed, Strength points to self-doubt, insecurity, or being overwhelmed by raw emotions. You may be losing confidence or letting fear control you. Reconnect with your inner courage and remember the strength that already lives inside you.",
    advice: "Lead with compassion and patience. Your inner strength is far greater than any outer challenge you face."
  },
  {
    id: 9, name: "The Hermit", arcana: "major", suit: null, number: "IX",
    element: "Earth", planet: "Mercury", zodiac: "Virgo",
    uprightKeys: ["Soul-searching", "Introspection", "Solitude", "Inner guidance"],
    reversedKeys: ["Isolation", "Loneliness", "Withdrawal", "Lost"],
    upright: "The Hermit invites you to withdraw from the noise of the world and turn inward. Through quiet contemplation and solitude, you discover profound truths about yourself and your path. This is a time for soul-searching, meditation, and seeking your own inner light.",
    reversed: "Reversed, The Hermit warns against excessive isolation or withdrawal. Solitude becomes loneliness when taken too far. You may be avoiding connection or refusing to share your wisdom with others. Find balance between inner reflection and outer engagement.",
    advice: "Take time for solitude and reflection. The answers you seek are within — shine your inner light to find the way."
  },
  {
    id: 10, name: "Wheel of Fortune", arcana: "major", suit: null, number: "X",
    element: "Fire", planet: "Jupiter", zodiac: null,
    uprightKeys: ["Good luck", "Karma", "Life cycles", "Destiny", "Turning point"],
    reversedKeys: ["Bad luck", "Resistance to change", "Breaking cycles"],
    upright: "The Wheel of Fortune signals that the tides are turning. Fate, destiny, and karma converge as life moves through its natural cycles. What goes up must come down, and what was down will rise again. Embrace change — a significant turning point is at hand.",
    reversed: "Reversed, the Wheel suggests resistance to inevitable change, bad luck, or being stuck in a negative cycle. External forces feel out of your control. Accept that change is constant and look for the lesson in the setback.",
    advice: "Embrace the cycles of life. What changes now is meant to change — flow with it and trust in the larger pattern."
  },
  {
    id: 11, name: "Justice", arcana: "major", suit: null, number: "XI",
    element: "Air", planet: "Venus", zodiac: "Libra",
    uprightKeys: ["Justice", "Fairness", "Truth", "Cause and effect", "Law"],
    reversedKeys: ["Unfairness", "Dishonesty", "Lack of accountability", "Bias"],
    upright: "Justice demands truth, fairness, and accountability. Every action has a consequence, and this card reminds you that the scales must balance. Legal matters, ethical decisions, and karmic outcomes are in play. Act with integrity and the truth will prevail.",
    reversed: "Reversed, Justice warns of dishonesty, unfair treatment, or avoiding accountability. Someone may not be playing by the rules — possibly you. Examine where you may be out of alignment with your own moral compass.",
    advice: "Act with integrity and fairness. The truth will emerge — make sure you are on the right side of it."
  },
  {
    id: 12, name: "The Hanged Man", arcana: "major", suit: null, number: "XII",
    element: "Water", planet: "Neptune", zodiac: null,
    uprightKeys: ["Pause", "Surrender", "Letting go", "New perspectives"],
    reversedKeys: ["Delays", "Resistance", "Stalling", "Indecision"],
    upright: "The Hanged Man calls you to pause, surrender, and see the world from a completely different angle. This is not a punishment but an invitation to let go of control and find wisdom in stillness. Sometimes progress requires stepping back and waiting.",
    reversed: "Reversed, The Hanged Man suggests stalling, resisting a necessary pause, or delaying inevitable decisions. You may be clinging to old patterns. The sacrifice you are avoiding may be exactly what will set you free.",
    advice: "Surrender control and allow a shift in perspective. Sometimes the greatest progress comes from standing still."
  },
  {
    id: 13, name: "Death", arcana: "major", suit: null, number: "XIII",
    element: "Water", planet: "Pluto", zodiac: "Scorpio",
    uprightKeys: ["Endings", "Change", "Transformation", "Transition", "Release"],
    reversedKeys: ["Resistance to change", "Stagnation", "Decay", "Fear of letting go"],
    upright: "Death rarely means physical death — it signals profound transformation. One chapter must end so another can begin. Old identities, relationships, or patterns are falling away to make room for something new. Embrace the endings; they are doorways to rebirth.",
    reversed: "Reversed, Death suggests resisting an inevitable transformation or clinging to what no longer serves you. Stagnation and decay set in when you refuse to let go. Release what has run its course and trust in the renewal that follows.",
    advice: "Let go of what has run its course. Transformation is not loss — it is the gateway to your next evolution."
  },
  {
    id: 14, name: "Temperance", arcana: "major", suit: null, number: "XIV",
    element: "Fire", planet: "Jupiter", zodiac: "Sagittarius",
    uprightKeys: ["Balance", "Moderation", "Patience", "Purpose", "Harmony"],
    reversedKeys: ["Imbalance", "Excess", "Self-healing", "Realignment"],
    upright: "Temperance is the art of balance, patience, and harmonious blending. It calls you to find the middle path, mix opposing forces with care, and exercise moderation in all things. A calm, measured approach brings lasting success and inner peace.",
    reversed: "Reversed, Temperance warns of excess, imbalance, or rushing ahead without alignment. You may be overindulging or struggling to find your center. Step back, recalibrate, and restore harmony to your life.",
    advice: "Seek the middle path. Blend patience with action, and find the perfect balance that sustains you."
  },
  {
    id: 15, name: "The Devil", arcana: "major", suit: null, number: "XV",
    element: "Earth", planet: "Saturn", zodiac: "Capricorn",
    uprightKeys: ["Shadow self", "Attachment", "Addiction", "Restriction", "Materialism"],
    reversedKeys: ["Releasing limiting beliefs", "Exploring dark thoughts", "Detachment", "Freedom"],
    upright: "The Devil exposes the chains of attachment, addiction, and materialism that bind you — often by your own choice. It shines a light on your shadow self: unhealthy patterns, toxic relationships, or dependencies. Awareness is the first step to liberation.",
    reversed: "Reversed, The Devil signals breaking free from bondage. You are ready to release limiting beliefs, unhealthy attachments, or addictive patterns. The chains were always loose enough to remove — now you finally see that.",
    advice: "Examine what controls you. Shine a light on your shadow, face your attachments, and reclaim your power."
  },
  {
    id: 16, name: "The Tower", arcana: "major", suit: null, number: "XVI",
    element: "Fire", planet: "Mars", zodiac: null,
    uprightKeys: ["Sudden change", "Upheaval", "Chaos", "Revelation", "Awakening"],
    reversedKeys: ["Personal transformation", "Fear of change", "Averting disaster"],
    upright: "The Tower strikes without warning — shattering false structures, illusions, and everything built on unstable ground. While the destruction feels devastating, it clears away lies and reveals truth. What crumbles needed to fall so something authentic can rise.",
    reversed: "Reversed, The Tower may indicate you are resisting a necessary upheaval or narrowly averting disaster. The transformation is happening internally rather than externally. You can choose to dismantle false structures voluntarily before the universe does it for you.",
    advice: "Let the false structures fall. What survives the storm is real — rebuild on a foundation of truth."
  },
  {
    id: 17, name: "The Star", arcana: "major", suit: null, number: "XVII",
    element: "Air", planet: "Uranus", zodiac: "Aquarius",
    uprightKeys: ["Hope", "Faith", "Purpose", "Renewal", "Spirituality", "Inspiration"],
    reversedKeys: ["Lack of faith", "Despair", "Disconnection", "Self-trust issues"],
    upright: "After the devastation of The Tower, The Star brings healing, hope, and renewed faith. Under her light, you are replenished and reconnected to your higher purpose. This card assures you that the universe supports you — have faith and let yourself be guided.",
    reversed: "Reversed, The Star suggests a crisis of faith, feeling lost, or disconnected from your spiritual source. Hope feels distant and purpose unclear. This is temporary — reconnect with what inspires you and the light will return.",
    advice: "Have faith and remain hopeful. You are being guided and renewed — open your heart to healing and inspiration."
  },
  {
    id: 18, name: "The Moon", arcana: "major", suit: null, number: "XVIII",
    element: "Water", planet: "Neptune", zodiac: "Pisces",
    uprightKeys: ["Illusion", "Fear", "Anxiety", "Subconscious", "Intuition"],
    reversedKeys: ["Release of fear", "Repressed emotion", "Inner confusion", "Clarity emerging"],
    upright: "The Moon casts shadows and illusions, stirring up fears, anxieties, and the unknown depths of the subconscious. Things are not as they seem. Navigate with intuition rather than logic, and be wary of deception — from others or from your own projections.",
    reversed: "Reversed, The Moon signals the release of fears and anxieties, or the surfacing of repressed emotions. Clarity begins to emerge from confusion. Face the shadows rather than running from them, and truth will gradually reveal itself.",
    advice: "Trust your intuition when things feel uncertain. Not everything is as it appears — look deeper before acting."
  },
  {
    id: 19, name: "The Sun", arcana: "major", suit: null, number: "XIX",
    element: "Fire", planet: "Sun", zodiac: null,
    uprightKeys: ["Positivity", "Fun", "Warmth", "Success", "Vitality", "Joy"],
    reversedKeys: ["Inner child", "Feeling down", "Overly optimistic", "Temporary setback"],
    upright: "The Sun radiates pure joy, success, and vitality. It is one of the most positive cards in the deck, bringing warmth, clarity, and celebration. Everything is illuminated — there are no hidden shadows here. Embrace happiness, confidence, and the simple pleasures of life.",
    reversed: "Reversed, The Sun still carries positivity but suggests it may be dimmed — perhaps by sadness, self-doubt, or unrealistic expectations. Your inner child needs attention. The joy is still there; you just need to clear the clouds to see it.",
    advice: "Celebrate life and embrace joy. Shine your light brightly — success and happiness are yours to claim."
  },
  {
    id: 20, name: "Judgement", arcana: "major", suit: null, number: "XX",
    element: "Fire", planet: "Pluto", zodiac: null,
    uprightKeys: ["Judgement", "Rebirth", "Inner calling", "Absolution", "Reflection"],
    reversedKeys: ["Self-doubt", "Inner critic", "Ignoring the call", "Lack of self-awareness"],
    upright: "Judgement sounds the call of awakening — a moment of reckoning and rebirth. It invites deep self-reflection, accountability, and the courage to answer your higher calling. Release guilt, forgive yourself and others, and rise into the person you are meant to become.",
    reversed: "Reversed, Judgement suggests you are ignoring an inner calling or letting your inner critic drown out your truth. Self-doubt and fear of judgment may be holding you back from transformation. Listen to the call — it will not wait forever.",
    advice: "Answer your calling and embrace your transformation. Reflect honestly, forgive freely, and rise renewed."
  },
  {
    id: 21, name: "The World", arcana: "major", suit: null, number: "XXI",
    element: "Earth", planet: "Saturn", zodiac: null,
    uprightKeys: ["Completion", "Integration", "Accomplishment", "Travel", "Wholeness"],
    reversedKeys: ["Incompletion", "Shortcuts", "Delays", "Lack of closure"],
    upright: "The World represents the successful completion of a major life cycle. You have come full circle — wiser, more whole, and ready for what comes next. Celebrate your accomplishments and know that this ending is also a new beginning at a higher level.",
    reversed: "Reversed, The World suggests that something remains incomplete or that you are taking shortcuts to avoid finishing what you started. There may be delays or a sense that closure is just out of reach. Tie up loose ends before moving on.",
    advice: "Celebrate how far you have come. Integrate the lessons, honor the journey, and prepare for the next cycle."
  },

  /* ============================
     MINOR ARCANA — WANDS (Fire)
     ============================ */

  {
    id: 22, name: "Ace of Wands", arcana: "minor", suit: "wands", number: "A",
    element: "Fire", planet: null, zodiac: null,
    uprightKeys: ["Inspiration", "New opportunities", "Growth", "Potential"],
    reversedKeys: ["Delays", "Lack of motivation", "Creative blocks", "Hesitation"],
    upright: "The Ace of Wands is a burst of creative inspiration and new possibilities. A new venture, idea, or passion is igniting within you. Seize this spark of energy and channel it into action — the potential for growth is enormous.",
    reversed: "Reversed, this Ace suggests creative blocks, delays in starting new projects, or a lack of motivation. The spark is there but struggling to catch fire. Clear your mental clutter and reconnect with what truly excites you.",
    advice: "Act on your inspiration now. This creative spark won't last forever — channel it into something meaningful."
  },
  {
    id: 23, name: "Two of Wands", arcana: "minor", suit: "wands", number: "2",
    element: "Fire", planet: "Mars", zodiac: "Aries",
    uprightKeys: ["Future planning", "Progress", "Decisions", "Discovery"],
    reversedKeys: ["Fear of change", "Lack of planning", "Playing it safe"],
    upright: "The Two of Wands finds you at the threshold of possibility, holding the world in your hands. You've made initial progress and now face a decision about your next steps. Plan boldly, think big, and step beyond your comfort zone.",
    reversed: "Reversed, the Two of Wands suggests fear of the unknown, poor planning, or reluctance to leave your comfort zone. You may be playing it safe when bold action is required. Don't let fear of change keep you standing still.",
    advice: "Think big and plan your next move. The world awaits — step beyond familiar territory with confidence."
  },
  {
    id: 24, name: "Three of Wands", arcana: "minor", suit: "wands", number: "3",
    element: "Fire", planet: "Sun", zodiac: "Aries",
    uprightKeys: ["Progress", "Expansion", "Foresight", "Overseas opportunities"],
    reversedKeys: ["Obstacles", "Delays", "Frustration", "Lack of foresight"],
    upright: "The Three of Wands signals that your plans are taking shape and expansion is underway. You can see the horizon and opportunities are arriving — possibly from distant places. Your foresight and preparation are paying off. Keep the momentum going.",
    reversed: "Reversed, the Three of Wands warns of unexpected obstacles, delays, or frustration with the pace of progress. Plans may not be unfolding as expected. Reassess your strategy and be patient — the results will come with persistence.",
    advice: "Your efforts are bearing fruit. Maintain your long-term vision and stay open to opportunities from unexpected sources."
  },
  {
    id: 25, name: "Four of Wands", arcana: "minor", suit: "wands", number: "4",
    element: "Fire", planet: "Venus", zodiac: "Aries",
    uprightKeys: ["Celebration", "Joy", "Harmony", "Homecoming", "Milestones"],
    reversedKeys: ["Personal celebration", "Inner harmony", "Conflict", "Transition"],
    upright: "The Four of Wands is a card of joyful celebration, harmony, and reaching a milestone. It often signals homecoming, reunions, weddings, or marking an achievement with loved ones. Take time to celebrate your progress and enjoy the stability you've created.",
    reversed: "Reversed, the Four of Wands may indicate personal or private celebrations, or tension that disrupts harmony. You might feel unsettled at home or uncertain about a transition. Seek to restore harmony in your personal environment.",
    advice: "Celebrate your achievements and enjoy the warmth of community. You've earned this moment of joy."
  },
  {
    id: 26, name: "Five of Wands", arcana: "minor", suit: "wands", number: "5",
    element: "Fire", planet: "Saturn", zodiac: "Leo",
    uprightKeys: ["Conflict", "Disagreements", "Competition", "Tension", "Diversity"],
    reversedKeys: ["Avoiding conflict", "Respecting differences", "Inner conflict"],
    upright: "The Five of Wands depicts struggle, competition, and clashing energies. Multiple voices compete for attention, and disagreements arise. While this tension can be frustrating, it also sparks growth, innovation, and the sharpening of your ideas through healthy debate.",
    reversed: "Reversed, the Five of Wands suggests avoiding necessary conflict, suppressing disagreements, or internalizing tension. You may be seeking peace at any cost. Sometimes conflict is necessary for growth — address it rather than running from it.",
    advice: "Don't shy away from healthy competition and debate. Sharpen your ideas through challenge, but keep it constructive."
  },
  {
    id: 27, name: "Six of Wands", arcana: "minor", suit: "wands", number: "6",
    element: "Fire", planet: "Jupiter", zodiac: "Leo",
    uprightKeys: ["Success", "Public recognition", "Progress", "Self-confidence", "Victory"],
    reversedKeys: ["Excess pride", "Lack of recognition", "Fall from grace"],
    upright: "The Six of Wands heralds victory, public recognition, and well-deserved praise. Your efforts have been noticed and rewarded. Ride this wave of confidence and let your success inspire others. You are a leader in this moment.",
    reversed: "Reversed, the Six of Wands warns of arrogance, seeking external validation, or a lack of recognition for your efforts. Success may feel hollow, or you may be taking credit where it isn't due. Stay humble and remember that true confidence comes from within.",
    advice: "Accept praise graciously and let your success inspire others. Stay humble even in victory."
  },
  {
    id: 28, name: "Seven of Wands", arcana: "minor", suit: "wands", number: "7",
    element: "Fire", planet: "Mars", zodiac: "Leo",
    uprightKeys: ["Challenge", "Competition", "Protection", "Perseverance", "Standing ground"],
    reversedKeys: ["Exhaustion", "Giving up", "Overwhelmed", "Retreat"],
    upright: "The Seven of Wands shows you holding your ground against opposition. Challenges and competitors may be pressing in, but you have the high ground. Stand firm in your beliefs, defend your position, and persevere — you are stronger than the forces against you.",
    reversed: "Reversed, the Seven of Wands suggests exhaustion from constant battles, feeling overwhelmed, or considering giving up. You may be fighting battles that aren't worth winning. Assess whether your position is truly worth defending.",
    advice: "Stand your ground and defend what matters to you. You have the advantage — don't back down now."
  },
  {
    id: 29, name: "Eight of Wands", arcana: "minor", suit: "wands", number: "8",
    element: "Fire", planet: "Mercury", zodiac: "Sagittarius",
    uprightKeys: ["Speed", "Action", "Movement", "Quick decisions", "Air travel"],
    reversedKeys: ["Delays", "Frustration", "Holding off", "Waiting", "Slowing down"],
    upright: "The Eight of Wands brings rapid movement, swift action, and things falling into place at speed. Messages arrive, travel beckons, and events accelerate. Ride the momentum — this is not a time for hesitation but for decisive, quick action.",
    reversed: "Reversed, the Eight of Wands warns of delays, frustrated plans, or being forced to slow down. Communications may be missed or travel disrupted. Patience is required — the pace will pick up again soon.",
    advice: "Move quickly and decisively. The energy is fast right now — ride the wave and trust the momentum."
  },
  {
    id: 30, name: "Nine of Wands", arcana: "minor", suit: "wands", number: "9",
    element: "Fire", planet: "Moon", zodiac: "Sagittarius",
    uprightKeys: ["Resilience", "Courage", "Persistence", "Test of faith", "Boundaries"],
    reversedKeys: ["Inner resources", "Struggle", "Overwhelm", "Defensive", "Paranoia"],
    upright: "The Nine of Wands shows a battle-weary warrior still standing. You've been through the fire and bear the scars, but you are not defeated. One final push is needed. Draw on your resilience, set your boundaries, and see this challenge through to the end.",
    reversed: "Reversed, the Nine of Wands suggests feeling overly defensive, paranoid, or unable to see when the battle is over. You may be holding on too tightly out of fear. Not everything is a threat — sometimes you need to put down the sword and rest.",
    advice: "You've come too far to quit now. Dig deep, draw on your inner strength, and push through this final test."
  },
  {
    id: 31, name: "Ten of Wands", arcana: "minor", suit: "wands", number: "10",
    element: "Fire", planet: "Saturn", zodiac: "Sagittarius",
    uprightKeys: ["Burden", "Extra responsibility", "Hard work", "Completion", "Duty"],
    reversedKeys: ["Doing everything", "Carrying too much", "Delegation", "Release"],
    upright: "The Ten of Wands depicts the weight of too many responsibilities. You may be carrying burdens that aren't all yours, or struggling under the weight of success itself. The destination is in sight, but you must manage your load. Delegate, prioritize, or let go of what doesn't serve you.",
    reversed: "Reversed, the Ten of Wands urges you to release unnecessary burdens. You are taking on far more than required and it's crushing you. Learn to delegate, say no, and put down what isn't yours to carry.",
    advice: "Lighten your load. Delegate what you can, release what you must, and focus on what truly matters."
  },
  {
    id: 32, name: "Page of Wands", arcana: "minor", suit: "wands", number: "P",
    element: "Fire", planet: null, zodiac: null,
    uprightKeys: ["Inspiration", "Ideas", "Discovery", "Free spirit", "Enthusiasm"],
    reversedKeys: ["New ideas", "Redirecting energy", "Self-limiting beliefs", "Lack of direction"],
    upright: "The Page of Wands is a young explorer bursting with enthusiasm, ideas, and creative potential. A new passion or adventure is calling to you. Approach it with curiosity, courage, and the willingness to learn. Let your excitement guide you.",
    reversed: "Reversed, the Page of Wands may indicate self-limiting beliefs, scattered energy, or creative ideas that lack follow-through. You might be all talk and no action. Channel your enthusiasm into a single focus and commit to it.",
    advice: "Follow your creative spark with enthusiasm. Be the student of your own curiosity and explore fearlessly."
  },
  {
    id: 33, name: "Knight of Wands", arcana: "minor", suit: "wands", number: "Kn",
    element: "Fire", planet: null, zodiac: null,
    uprightKeys: ["Energy", "Passion", "Adventure", "Impulsiveness", "Inspired action"],
    reversedKeys: ["Passion project", "Haste", "Scattered energy", "Delays", "Frustration"],
    upright: "The Knight of Wands charges forward with fiery passion, fearlessness, and adventurous spirit. He acts boldly and inspires others with his enthusiasm. This card encourages you to pursue your goals with energy and confidence — but be mindful not to burn out.",
    reversed: "Reversed, the Knight of Wands warns of reckless impulsiveness, scattered energy, or frustration from delays. Your fire is burning chaotically rather than purposefully. Slow down, focus your energy, and act with intention rather than impulse.",
    advice: "Channel your passion into purposeful action. Be bold and adventurous, but stay focused on your goal."
  },
  {
    id: 34, name: "Queen of Wands", arcana: "minor", suit: "wands", number: "Q",
    element: "Fire", planet: null, zodiac: null,
    uprightKeys: ["Courage", "Confidence", "Independence", "Warmth", "Determination"],
    reversedKeys: ["Self-respect", "Self-confidence", "Introverted", "Rebuilding sense of self"],
    upright: "The Queen of Wands is magnetic, confident, and passionately independent. She radiates warmth and inspires others with her vibrancy and determination. She manages home and career with fierce grace. Embody her energy — be bold, be warm, and own your power.",
    reversed: "Reversed, the Queen of Wands may indicate a loss of confidence, jealousy, or turning inward. You might be doubting your abilities or dimming your light to make others comfortable. Reclaim your self-assurance and shine without apology.",
    advice: "Step into your confidence and warmth. You are magnetic — let your passion and determination light the way."
  },
  {
    id: 35, name: "King of Wands", arcana: "minor", suit: "wands", number: "K",
    element: "Fire", planet: null, zodiac: null,
    uprightKeys: ["Natural leader", "Vision", "Entrepreneur", "Honor", "Big picture"],
    reversedKeys: ["Impulsiveness", "Haste", "Ruthless", "High expectations"],
    upright: "The King of Wands is a visionary leader — bold, charismatic, and entrepreneurial. He sees the big picture and inspires others to follow his lead. This card calls you to step into leadership with honor, pursue your vision with courage, and lead by example.",
    reversed: "Reversed, the King of Wands warns of impulsive leadership, ruthlessness, or setting unrealistically high expectations. Power without wisdom becomes tyranny. Lead with integrity and remember that true leaders serve as well as command.",
    advice: "Lead with vision, courage, and integrity. Inspire others with your confidence but remain humble and fair."
  },

  /* ============================
     MINOR ARCANA — CUPS (Water)
     ============================ */

  {
    id: 36, name: "Ace of Cups", arcana: "minor", suit: "cups", number: "A",
    element: "Water", planet: null, zodiac: null,
    uprightKeys: ["Love", "New relationships", "Compassion", "Creativity", "Emotional overflow"],
    reversedKeys: ["Self-love", "Intuition", "Repressed emotions", "Emotional loss"],
    upright: "The Ace of Cups overflows with love, emotional new beginnings, and creative inspiration. A new relationship, deepened connection, or wave of compassion is emerging. Open your heart fully and receive the abundance of feeling that the universe is offering.",
    reversed: "Reversed, the Ace of Cups suggests repressed emotions, blocked creativity, or difficulty opening your heart. You may need to focus on self-love before you can fully receive love from others. Heal your emotional wounds first.",
    advice: "Open your heart to love and creativity. Emotional abundance is flowing — let yourself receive it fully."
  },
  {
    id: 37, name: "Two of Cups", arcana: "minor", suit: "cups", number: "2",
    element: "Water", planet: "Venus", zodiac: "Cancer",
    uprightKeys: ["Unified love", "Partnership", "Mutual attraction", "Connection"],
    reversedKeys: ["Self-love", "Break-ups", "Disharmony", "Distrust"],
    upright: "The Two of Cups represents a deep, balanced connection between two people. Whether romantic, platonic, or professional, this partnership is built on mutual respect, attraction, and shared values. Two hearts come together as equals.",
    reversed: "Reversed, the Two of Cups may indicate disharmony in a relationship, broken trust, or the need to focus on self-love. A partnership may be out of balance, or you may be giving more than you receive. Restore equilibrium.",
    advice: "Nurture your partnerships with respect and openness. True connection requires both giving and receiving equally."
  },
  {
    id: 38, name: "Three of Cups", arcana: "minor", suit: "cups", number: "3",
    element: "Water", planet: "Mercury", zodiac: "Cancer",
    uprightKeys: ["Celebration", "Friendship", "Creativity", "Community", "Collaborations"],
    reversedKeys: ["Independence", "Alone time", "Overindulgence", "Gossip"],
    upright: "The Three of Cups is a celebration of friendship, community, and creative collaboration. Raise your glass with those who uplift you. This card signals joyful gatherings, successful teamwork, and the beautiful bonds of sisterhood or brotherhood.",
    reversed: "Reversed, the Three of Cups may warn of gossip, overindulgence, or social burnout. You might need alone time away from the group, or relationships may have become superficial. Seek meaningful connection over social obligation.",
    advice: "Celebrate with your community and nurture your friendships. Collaboration and shared joy multiply blessings."
  },
  {
    id: 39, name: "Four of Cups", arcana: "minor", suit: "cups", number: "4",
    element: "Water", planet: "Moon", zodiac: "Cancer",
    uprightKeys: ["Meditation", "Contemplation", "Apathy", "Reevaluation", "Discontent"],
    reversedKeys: ["Retreat", "Withdrawal", "Checking in with yourself", "New awareness"],
    upright: "The Four of Cups shows contemplation, boredom, or dissatisfaction with what's being offered. You may be so focused on what you don't have that you miss the opportunity right in front of you. Step back, reevaluate, and open your eyes to new possibilities.",
    reversed: "Reversed, the Four of Cups signals a new awareness — you're finally seeing what you've been missing. You may be emerging from a period of withdrawal or apathy with renewed interest. A fresh perspective is breaking through.",
    advice: "Don't take what you have for granted. Look around with fresh eyes — an opportunity may be right in front of you."
  },
  {
    id: 40, name: "Five of Cups", arcana: "minor", suit: "cups", number: "5",
    element: "Water", planet: "Mars", zodiac: "Scorpio",
    uprightKeys: ["Regret", "Failure", "Disappointment", "Pessimism", "Grief"],
    reversedKeys: ["Personal setbacks", "Self-forgiveness", "Moving on", "Acceptance"],
    upright: "The Five of Cups mourns what has been lost while overlooking what remains. Grief, regret, and disappointment cloud your vision. Acknowledge your pain, but also turn around — two cups still stand. Not all is lost, and healing begins when you choose to see the full picture.",
    reversed: "Reversed, the Five of Cups signals the beginning of recovery. You are ready to forgive yourself, accept what happened, and focus on what remains. Moving on doesn't mean forgetting — it means choosing to live fully again.",
    advice: "Grieve what you've lost, then turn around to see what remains. Healing begins when you shift your focus."
  },
  {
    id: 41, name: "Six of Cups", arcana: "minor", suit: "cups", number: "6",
    element: "Water", planet: "Sun", zodiac: "Scorpio",
    uprightKeys: ["Revisiting the past", "Childhood memories", "Innocence", "Joy", "Nostalgia"],
    reversedKeys: ["Living in the past", "Forgiveness", "Lacking playfulness", "Moving forward"],
    upright: "The Six of Cups brings a wave of nostalgia, childhood memories, and innocent joy. Someone or something from your past may reappear. This card invites you to reconnect with your inner child, revisit happy memories, and find joy in simple pleasures.",
    reversed: "Reversed, the Six of Cups warns against living in the past or romanticizing what was. Nostalgia can become a trap if it prevents you from embracing the present. Honor your memories but keep moving forward.",
    advice: "Reconnect with your inner child and find joy in simplicity. Let happy memories inspire you, but keep living forward."
  },
  {
    id: 42, name: "Seven of Cups", arcana: "minor", suit: "cups", number: "7",
    element: "Water", planet: "Venus", zodiac: "Scorpio",
    uprightKeys: ["Opportunities", "Choices", "Wishful thinking", "Illusion", "Fantasy"],
    reversedKeys: ["Alignment", "Personal values", "Overwhelmed by choices", "Clarity"],
    upright: "The Seven of Cups presents a dazzling array of options — but not all are what they seem. Some are illusions, fantasies, or wishful thinking. You must see through the glamour to identify what is real and truly aligned with your goals. Choose wisely.",
    reversed: "Reversed, the Seven of Cups cuts through the fantasy and brings clarity. You are beginning to distinguish between realistic goals and pipe dreams. Align your choices with your values and commit to what is genuinely achievable.",
    advice: "Not all that glitters is gold. Look beyond the surface of your options and choose what is real and aligned with your truth."
  },
  {
    id: 43, name: "Eight of Cups", arcana: "minor", suit: "cups", number: "8",
    element: "Water", planet: "Saturn", zodiac: "Pisces",
    uprightKeys: ["Disappointment", "Abandonment", "Withdrawal", "Walking away", "Seeking truth"],
    reversedKeys: ["Stagnation", "Accepting less", "Fear of change", "Avoidance"],
    upright: "The Eight of Cups shows the courage to walk away from something that no longer fulfills you. Despite the emotional investment, you know deep down that it's time to move on and seek deeper meaning. This departure is an act of courage, not defeat.",
    reversed: "Reversed, the Eight of Cups suggests you are afraid to leave a situation that has run its course, or that you keep accepting less than you deserve. Stagnation sets in when you avoid the hard choices. Find the courage to walk away.",
    advice: "Have the courage to walk away from what no longer serves your soul. Something deeper and truer awaits."
  },
  {
    id: 44, name: "Nine of Cups", arcana: "minor", suit: "cups", number: "9",
    element: "Water", planet: "Jupiter", zodiac: "Pisces",
    uprightKeys: ["Contentment", "Satisfaction", "Gratitude", "Wish fulfilled", "Emotional fulfillment"],
    reversedKeys: ["Inner happiness", "Materialism", "Dissatisfaction", "Overindulgence"],
    upright: "The Nine of Cups is the \"wish card\" — a card of deep satisfaction, emotional fulfillment, and dreams coming true. Your heartfelt desires are manifesting. Sit back, smile, and savor the abundance of blessings in your life. Gratitude amplifies joy.",
    reversed: "Reversed, the Nine of Cups warns that material satisfaction may not equal emotional fulfillment. You may be chasing wishes that don't truly make you happy, or overindulging. Seek inner contentment rather than external gratification.",
    advice: "Count your blessings and savor your achievements. True fulfillment comes from gratitude and inner contentment."
  },
  {
    id: 45, name: "Ten of Cups", arcana: "minor", suit: "cups", number: "10",
    element: "Water", planet: "Mars", zodiac: "Pisces",
    uprightKeys: ["Divine love", "Blissful relationships", "Harmony", "Alignment", "Family"],
    reversedKeys: ["Disconnection", "Misaligned values", "Struggling relationships"],
    upright: "The Ten of Cups is the ultimate card of emotional fulfillment, happy families, and lasting love. A rainbow of blessings arches over your relationships and home life. This is the card of \"happily ever after\" — deep, genuine harmony rooted in shared values and love.",
    reversed: "Reversed, the Ten of Cups may indicate family disconnection, broken relationships, or a gap between your ideal vision and reality. Harmony at home may be disrupted. Work on aligning your values with those closest to you.",
    advice: "Cherish your loved ones and invest in your most important relationships. Emotional harmony is your greatest wealth."
  },
  {
    id: 46, name: "Page of Cups", arcana: "minor", suit: "cups", number: "P",
    element: "Water", planet: null, zodiac: null,
    uprightKeys: ["Creative opportunity", "Intuitive messages", "Curiosity", "Possibility"],
    reversedKeys: ["New ideas", "Doubting intuition", "Creative blocks", "Emotional immaturity"],
    upright: "The Page of Cups brings a gentle, dreamy message — an intuitive nudge, a creative spark, or an unexpected emotional offering. Be open to surprises and let your imagination flow. This tender messenger invites you to explore your feelings with wonder and curiosity.",
    reversed: "Reversed, the Page of Cups may indicate doubting your intuition, emotional immaturity, or creative blocks. You might be dismissing your inner voice or avoiding your feelings. Trust the messages your heart is sending.",
    advice: "Stay open to intuitive messages and creative inspiration. Approach your emotions with curiosity, not judgment."
  },
  {
    id: 47, name: "Knight of Cups", arcana: "minor", suit: "cups", number: "Kn",
    element: "Water", planet: null, zodiac: null,
    uprightKeys: ["Creativity", "Romance", "Charm", "Imagination", "Beauty"],
    reversedKeys: ["Overactive imagination", "Unrealistic", "Jealousy", "Moodiness"],
    upright: "The Knight of Cups is the romantic idealist — charming, creative, and guided by his heart. He follows his dreams and pursues beauty in all forms. This card may herald a romantic proposal, creative opportunity, or an invitation to follow your heart's desire.",
    reversed: "Reversed, the Knight of Cups warns of unrealistic expectations, moodiness, or letting emotions override reason. The dreamer becomes the escapist. Ground your romantic visions in reality and watch for emotional manipulation — from yourself or others.",
    advice: "Follow your heart, but keep your feet on the ground. Let beauty and romance inspire you without losing your way."
  },
  {
    id: 48, name: "Queen of Cups", arcana: "minor", suit: "cups", number: "Q",
    element: "Water", planet: null, zodiac: null,
    uprightKeys: ["Compassion", "Calm", "Comfort", "Emotional security", "Intuition"],
    reversedKeys: ["Inner feelings", "Self-care", "Self-love", "Codependency"],
    upright: "The Queen of Cups is the embodiment of emotional intelligence, deep compassion, and intuitive knowing. She holds space for others with warmth and calm, while staying deeply connected to her own inner world. Trust your intuition and lead with empathy.",
    reversed: "Reversed, the Queen of Cups may indicate codependency, emotional overwhelm, or neglecting your own needs while caring for others. You must fill your own cup first. Set emotional boundaries and practice self-care.",
    advice: "Lead with empathy and trust your intuition. Care for others, but never forget to care for yourself first."
  },
  {
    id: 49, name: "King of Cups", arcana: "minor", suit: "cups", number: "K",
    element: "Water", planet: null, zodiac: null,
    uprightKeys: ["Emotionally balanced", "Compassionate", "Diplomatic", "Wise counselor"],
    reversedKeys: ["Self-compassion", "Moodiness", "Emotionally manipulative", "Volatility"],
    upright: "The King of Cups masters his emotions without suppressing them. He is a wise, compassionate diplomat who navigates emotional waters with grace and calm authority. This card calls you to lead with emotional intelligence, balancing head and heart in all decisions.",
    reversed: "Reversed, the King of Cups may indicate emotional volatility, manipulation, or suppressed feelings erupting at inopportune times. The master of emotions becomes their slave. Practice self-compassion and seek healthy outlets for your feelings.",
    advice: "Master your emotions rather than being mastered by them. Lead with wisdom, compassion, and emotional balance."
  },

  /* ============================
     MINOR ARCANA — SWORDS (Air)
     ============================ */

  {
    id: 50, name: "Ace of Swords", arcana: "minor", suit: "swords", number: "A",
    element: "Air", planet: null, zodiac: null,
    uprightKeys: ["Breakthroughs", "New ideas", "Mental clarity", "Success", "Truth"],
    reversedKeys: ["Inner clarity", "Rethinking ideas", "Clouded judgment", "Confusion"],
    upright: "The Ace of Swords cuts through confusion with a flash of mental clarity and truth. A breakthrough idea, a moment of insight, or a surge of intellectual power is at hand. Use this sharp clarity to communicate boldly and pursue justice and truth.",
    reversed: "Reversed, the Ace of Swords suggests clouded thinking, misinformation, or an idea that hasn't fully formed. Your judgment may be impaired. Take time to gather facts and clear your mind before making decisions.",
    advice: "Cut through the noise with clarity and truth. This is your moment of intellectual breakthrough — seize it."
  },
  {
    id: 51, name: "Two of Swords", arcana: "minor", suit: "swords", number: "2",
    element: "Air", planet: "Moon", zodiac: "Libra",
    uprightKeys: ["Difficult decisions", "Weighing options", "Stalemate", "Avoidance"],
    reversedKeys: ["Indecision", "Confusion", "Information overload", "Lesser of two evils"],
    upright: "The Two of Swords depicts a blindfolded figure at a crossroads — a difficult decision where neither option seems clear. You may be avoiding a choice or trying to remain neutral in a conflict. Eventually, the blindfold must come off. Trust your intuition and decide.",
    reversed: "Reversed, the Two of Swords suggests information overload, chronic indecision, or being forced to choose between two imperfect options. The stalemate cannot last forever. Gather what information you can and make the best choice available.",
    advice: "Remove the blindfold and face your decision. Avoidance only prolongs the pain — trust yourself and choose."
  },
  {
    id: 52, name: "Three of Swords", arcana: "minor", suit: "swords", number: "3",
    element: "Air", planet: "Saturn", zodiac: "Libra",
    uprightKeys: ["Heartbreak", "Emotional pain", "Sorrow", "Grief", "Hurt"],
    reversedKeys: ["Recovery", "Forgiveness", "Moving on", "Releasing pain"],
    upright: "The Three of Swords pierces the heart with painful truth — heartbreak, betrayal, grief, or sorrow. This is a deeply painful card, but it also honors the reality of suffering as a part of life. Allow yourself to feel the pain so healing can begin.",
    reversed: "Reversed, the Three of Swords signals the beginning of healing. The worst of the pain is passing, and you are ready to forgive, release, and move forward. The scars remain, but they no longer define you.",
    advice: "Allow yourself to grieve and feel the pain fully. Then release it — healing cannot begin until you let go."
  },
  {
    id: 53, name: "Four of Swords", arcana: "minor", suit: "swords", number: "4",
    element: "Air", planet: "Jupiter", zodiac: "Libra",
    uprightKeys: ["Rest", "Relaxation", "Meditation", "Contemplation", "Recovery"],
    reversedKeys: ["Exhaustion", "Burn-out", "Deep contemplation", "Restlessness"],
    upright: "The Four of Swords prescribes rest, retreat, and recovery. After the turmoil of the Three, you need time to heal and restore your energy. This is not laziness — it is a necessary pause. Meditate, sleep, and give your mind the quiet it craves.",
    reversed: "Reversed, the Four of Swords warns of restlessness, refusing to rest, or burnout from pushing too hard. You may be skipping the recovery period and heading straight back into battle. Your mind and body need this break — take it.",
    advice: "Rest is not weakness — it is wisdom. Retreat, restore, and return stronger than before."
  },
  {
    id: 54, name: "Five of Swords", arcana: "minor", suit: "swords", number: "5",
    element: "Air", planet: "Venus", zodiac: "Aquarius",
    uprightKeys: ["Conflict", "Disagreements", "Competition", "Defeat", "Winning at all costs"],
    reversedKeys: ["Reconciliation", "Making amends", "Past resentment", "Forgiveness"],
    upright: "The Five of Swords is a hollow victory — winning through deception, bullying, or at the expense of others. Someone walks away defeated while another gathers the spoils. Ask yourself: is this battle worth the damage to your relationships and integrity?",
    reversed: "Reversed, the Five of Swords offers a chance for reconciliation and making amends after conflict. Past resentments can be resolved if both parties are willing. Choose peace over pride and mend what was broken.",
    advice: "Not every battle is worth winning. Consider the cost of victory and whether your integrity is intact."
  },
  {
    id: 55, name: "Six of Swords", arcana: "minor", suit: "swords", number: "6",
    element: "Air", planet: "Mercury", zodiac: "Aquarius",
    uprightKeys: ["Transition", "Change", "Rite of passage", "Releasing baggage", "Moving on"],
    reversedKeys: ["Personal transition", "Resistance", "Unfinished business"],
    upright: "The Six of Swords shows a quiet journey from troubled waters toward calmer shores. It represents transition, leaving behind difficulty, and moving toward a more peaceful state. The journey may feel somber, but you are heading in the right direction.",
    reversed: "Reversed, the Six of Swords suggests resistance to necessary change, unfinished business holding you back, or an inability to move on. You may be carrying baggage from the past that weighs you down. Let go and allow the current to carry you forward.",
    advice: "Move toward calmer waters. Leave the turbulence behind and trust that the journey leads somewhere better."
  },
  {
    id: 56, name: "Seven of Swords", arcana: "minor", suit: "swords", number: "7",
    element: "Air", planet: "Moon", zodiac: "Aquarius",
    uprightKeys: ["Betrayal", "Deception", "Getting away with something", "Strategy", "Stealth"],
    reversedKeys: ["Coming clean", "Rethinking approach", "Conscience", "Confession"],
    upright: "The Seven of Swords warns of deception, betrayal, or sneaky behavior — either by you or someone around you. Someone may be acting dishonestly or trying to get away with something. Alternatively, this card can represent strategic thinking and knowing when to be clever rather than confrontational.",
    reversed: "Reversed, the Seven of Swords suggests a guilty conscience, being caught in a lie, or the desire to come clean. The truth is surfacing. If you've been dishonest, now is the time to confess. If someone else has deceived you, the truth will soon emerge.",
    advice: "Be honest and watch for deception. If strategy is needed, use it wisely — but never at the cost of your integrity."
  },
  {
    id: 57, name: "Eight of Swords", arcana: "minor", suit: "swords", number: "8",
    element: "Air", planet: "Jupiter", zodiac: "Gemini",
    uprightKeys: ["Negative thoughts", "Self-imposed restriction", "Imprisonment", "Victim mentality"],
    reversedKeys: ["Self-acceptance", "New perspective", "Freedom", "Releasing limiting beliefs"],
    upright: "The Eight of Swords shows a figure bound and blindfolded, surrounded by swords — yet the bindings are loose. Your imprisonment is largely self-created through negative thinking, fear, and limiting beliefs. You have more power and options than you realize.",
    reversed: "Reversed, the Eight of Swords signals freedom from mental imprisonment. You are beginning to see through your own limiting beliefs and reclaiming your power. The blindfold is coming off and a new perspective is emerging.",
    advice: "Recognize that your prison is largely self-created. Change your thoughts, and you change your reality."
  },
  {
    id: 58, name: "Nine of Swords", arcana: "minor", suit: "swords", number: "9",
    element: "Air", planet: "Mars", zodiac: "Gemini",
    uprightKeys: ["Anxiety", "Worry", "Fear", "Depression", "Nightmares"],
    reversedKeys: ["Inner turmoil", "Deep-seated fears", "Secrets", "Releasing worry"],
    upright: "The Nine of Swords is the card of anxiety, insomnia, and dark thoughts that haunt you in the night. Worry and fear have taken hold, often magnifying problems beyond their true size. This suffering is real but often rooted in thought patterns rather than actual circumstances.",
    reversed: "Reversed, the Nine of Swords suggests you are beginning to confront your anxieties and release deep-seated fears. The nightmares are losing their power. Seek support, face your fears, and know that the worst is often in your head, not in reality.",
    advice: "Your fears may be worse than reality. Reach out for support, challenge anxious thoughts, and know that dawn always follows darkness."
  },
  {
    id: 59, name: "Ten of Swords", arcana: "minor", suit: "swords", number: "10",
    element: "Air", planet: "Sun", zodiac: "Gemini",
    uprightKeys: ["Painful endings", "Deep wounds", "Betrayal", "Loss", "Crisis", "Rock bottom"],
    reversedKeys: ["Recovery", "Regeneration", "Resisting an inevitable end", "Lessons learned"],
    upright: "The Ten of Swords marks a painful, definitive ending — the darkest moment before dawn. You may feel utterly defeated, betrayed, or at rock bottom. But this is the absolute end of the worst. The only direction from here is up. A new chapter awaits.",
    reversed: "Reversed, the Ten of Swords suggests you are recovering from a devastating blow or resisting an inevitable ending. You are learning from the pain and beginning to rise again. The worst is behind you — trust the process of regeneration.",
    advice: "This is the end of the worst, not the end of everything. Accept the ending, learn the lesson, and prepare to rise."
  },
  {
    id: 60, name: "Page of Swords", arcana: "minor", suit: "swords", number: "P",
    element: "Air", planet: null, zodiac: null,
    uprightKeys: ["New ideas", "Curiosity", "Thirst for knowledge", "Communication"],
    reversedKeys: ["Self-expression", "All talk no action", "Haste", "Scattered energy"],
    upright: "The Page of Swords is a sharp-minded, curious investigator hungry for knowledge and truth. New ideas are swirling, and you're eager to communicate them to the world. This card encourages intellectual curiosity, honest communication, and a willingness to question everything.",
    reversed: "Reversed, the Page of Swords warns of hasty communication, gossip, or being all talk with no follow-through. You may be speaking without thinking or scattering your mental energy. Focus your thoughts before sharing them.",
    advice: "Stay curious and question everything. Communicate your ideas clearly, but think before you speak."
  },
  {
    id: 61, name: "Knight of Swords", arcana: "minor", suit: "swords", number: "Kn",
    element: "Air", planet: null, zodiac: null,
    uprightKeys: ["Ambitious", "Action-oriented", "Driven", "Fast-thinking", "Direct"],
    reversedKeys: ["Restless", "Unfocused", "Burnout", "No direction", "Aggressive"],
    upright: "The Knight of Swords charges into action with fierce determination and razor-sharp intellect. He is ambitious, direct, and relentlessly driven. This card signals a time to pursue your goals with speed and conviction — but be careful not to run over others in your haste.",
    reversed: "Reversed, the Knight of Swords loses direction and becomes restless, aggressive, or unfocused. Speed without purpose leads to burnout and damaged relationships. Slow down, think strategically, and aim before you fire.",
    advice: "Pursue your goals with determination, but pair speed with strategy. Don't let ambition blind you to consequences."
  },
  {
    id: 62, name: "Queen of Swords", arcana: "minor", suit: "swords", number: "Q",
    element: "Air", planet: null, zodiac: null,
    uprightKeys: ["Independent", "Unbiased judgement", "Clear boundaries", "Direct communication"],
    reversedKeys: ["Overly emotional", "Easily influenced", "Cold-hearted", "Bitter"],
    upright: "The Queen of Swords is a master of independent thought, clear communication, and honest judgment. She sees through deception and speaks truth without apology. She sets firm boundaries and values intellectual integrity above all. Be direct, fair, and unapologetically honest.",
    reversed: "Reversed, the Queen of Swords may become cold, bitter, or overly harsh in her judgments. She might be using intellect as a weapon or shutting out emotions entirely. Balance your sharp mind with an open heart.",
    advice: "Speak your truth clearly and set firm boundaries. Be honest and fair, but don't let sharpness become cruelty."
  },
  {
    id: 63, name: "King of Swords", arcana: "minor", suit: "swords", number: "K",
    element: "Air", planet: null, zodiac: null,
    uprightKeys: ["Mental clarity", "Intellectual power", "Authority", "Truth", "Ethical leadership"],
    reversedKeys: ["Quiet power", "Inner truth", "Misuse of power", "Manipulation"],
    upright: "The King of Swords rules with the mind — sharp, analytical, and committed to truth and justice. He is a fair authority figure who leads through intellectual clarity and ethical standards. This card calls you to make decisions based on logic, facts, and moral integrity.",
    reversed: "Reversed, the King of Swords may misuse intellectual power through manipulation, cruelty, or abuse of authority. The brilliant mind becomes a weapon rather than a tool for justice. Use your intelligence responsibly and with integrity.",
    advice: "Lead with clarity, truth, and ethical standards. Your intellect is powerful — use it in service of justice."
  },

  /* ============================
     MINOR ARCANA — PENTACLES (Earth)
     ============================ */

  {
    id: 64, name: "Ace of Pentacles", arcana: "minor", suit: "pentacles", number: "A",
    element: "Earth", planet: null, zodiac: null,
    uprightKeys: ["New financial opportunity", "Manifestation", "Abundance", "Prosperity"],
    reversedKeys: ["Lost opportunity", "Lack of planning", "Missed chance", "Scarcity mindset"],
    upright: "The Ace of Pentacles offers a golden opportunity for material and financial growth. A new job, investment, or venture is emerging — tangible, practical, and full of potential. Plant this seed with care, nurture it with discipline, and watch it grow into abundance.",
    reversed: "Reversed, the Ace of Pentacles warns of missed opportunities, poor financial planning, or a promising start that fizzles. Don't let a good opportunity slip through your fingers. Plan carefully and act on offers before they expire.",
    advice: "Seize this opportunity for material growth. Plant the seed now and nurture it with patience and discipline."
  },
  {
    id: 65, name: "Two of Pentacles", arcana: "minor", suit: "pentacles", number: "2",
    element: "Earth", planet: "Jupiter", zodiac: "Capricorn",
    uprightKeys: ["Multiple priorities", "Time management", "Prioritization", "Adaptability", "Balance"],
    reversedKeys: ["Over-committed", "Disorganization", "Reprioritization", "Dropped balls"],
    upright: "The Two of Pentacles juggles multiple responsibilities with playful grace. Life demands balance between competing priorities — work and play, saving and spending, giving and receiving. Stay flexible, adapt to changing circumstances, and keep everything in motion.",
    reversed: "Reversed, the Two of Pentacles signals that you're over-committed and dropping balls. Too many responsibilities are pulling you in different directions. It's time to reprioritize and let go of what isn't essential.",
    advice: "Stay flexible and adapt to competing demands. Prioritize what matters most and keep your balance."
  },
  {
    id: 66, name: "Three of Pentacles", arcana: "minor", suit: "pentacles", number: "3",
    element: "Earth", planet: "Mars", zodiac: "Capricorn",
    uprightKeys: ["Teamwork", "Collaboration", "Learning", "Implementation", "Craftsmanship"],
    reversedKeys: ["Disharmony", "Misalignment", "Working alone", "Lack of teamwork"],
    upright: "The Three of Pentacles celebrates skilled teamwork, collaboration, and the early stages of building something meaningful. Each person brings unique talents to the project. This card signals that quality work requires both individual mastery and collaborative effort.",
    reversed: "Reversed, the Three of Pentacles warns of poor teamwork, misaligned goals, or trying to do everything alone. Collaboration is breaking down. Realign with your team, clarify roles, and remember that great work is rarely a solo effort.",
    advice: "Collaborate, learn, and build together. Great craftsmanship requires both individual skill and team effort."
  },
  {
    id: 67, name: "Four of Pentacles", arcana: "minor", suit: "pentacles", number: "4",
    element: "Earth", planet: "Sun", zodiac: "Capricorn",
    uprightKeys: ["Conservation", "Security", "Frugality", "Control", "Stability"],
    reversedKeys: ["Over-spending", "Greed", "Self-protection", "Hoarding", "Letting go"],
    upright: "The Four of Pentacles clings tightly to security and material wealth. While financial prudence is wise, this card warns against holding on too tightly out of fear. True security comes not from hoarding but from healthy stewardship and generosity.",
    reversed: "Reversed, the Four of Pentacles may indicate either reckless spending or finally releasing a scarcity mindset. You might be letting go of material attachments or, conversely, losing your financial grip. Find balance between saving and living.",
    advice: "Protect your resources wisely, but don't let fear of loss prevent you from living generously and fully."
  },
  {
    id: 68, name: "Five of Pentacles", arcana: "minor", suit: "pentacles", number: "5",
    element: "Earth", planet: "Mercury", zodiac: "Taurus",
    uprightKeys: ["Financial loss", "Poverty", "Lack mindset", "Isolation", "Worry"],
    reversedKeys: ["Recovery", "Spiritual poverty", "Overcoming adversity", "Asking for help"],
    upright: "The Five of Pentacles depicts hardship, financial loss, and feeling left out in the cold. You may be experiencing material struggle or spiritual poverty. Help is available — often closer than you think — but you must be willing to look up and ask for it.",
    reversed: "Reversed, the Five of Pentacles signals recovery from financial or spiritual hardship. You are beginning to see the light at the end of the tunnel. Accept help when offered and know that the worst of the struggle is passing.",
    advice: "Don't suffer in silence. Help is closer than you think — look up, reach out, and accept the support available."
  },
  {
    id: 69, name: "Six of Pentacles", arcana: "minor", suit: "pentacles", number: "6",
    element: "Earth", planet: "Moon", zodiac: "Taurus",
    uprightKeys: ["Giving", "Receiving", "Sharing wealth", "Generosity", "Charity"],
    reversedKeys: ["Self-care", "Unpaid debts", "One-sided generosity", "Strings attached"],
    upright: "The Six of Pentacles embodies the flow of generosity — giving and receiving in balanced measure. You may be in a position to share your wealth, time, or knowledge with those in need. Alternatively, you may be receiving much-needed support. Keep the cycle of giving flowing.",
    reversed: "Reversed, the Six of Pentacles warns of one-sided generosity, strings-attached giving, or power imbalances in relationships involving money. Ensure that giving and receiving are truly balanced and that no one is being exploited.",
    advice: "Give generously when you can, receive graciously when you must. Keep the flow of abundance moving."
  },
  {
    id: 70, name: "Seven of Pentacles", arcana: "minor", suit: "pentacles", number: "7",
    element: "Earth", planet: "Saturn", zodiac: "Taurus",
    uprightKeys: ["Long-term view", "Sustainable results", "Perseverance", "Investment", "Patience"],
    reversedKeys: ["Lack of long-term vision", "Limited success", "Impatience", "Bad investment"],
    upright: "The Seven of Pentacles pauses to assess the fruits of long, hard labor. Your investment of time, energy, or money is showing results — but is the harvest what you expected? This is a time for reflection, patience, and determining whether to continue on this path.",
    reversed: "Reversed, the Seven of Pentacles suggests impatience, frustration with slow results, or questioning whether your investment was worthwhile. You may need to cut your losses or simply be more patient. Not all seeds bear fruit at the same rate.",
    advice: "Assess your progress and be patient. Long-term investments take time — trust the process and adjust your approach if needed."
  },
  {
    id: 71, name: "Eight of Pentacles", arcana: "minor", suit: "pentacles", number: "8",
    element: "Earth", planet: "Sun", zodiac: "Virgo",
    uprightKeys: ["Apprenticeship", "Repetitive tasks", "Mastery", "Skill development", "Diligence"],
    reversedKeys: ["Self-development", "Perfectionism", "Misdirected activity", "Lack of focus"],
    upright: "The Eight of Pentacles is the apprentice at the workbench — devoted to honing their craft through focused, repetitive practice. Mastery comes through dedication and attention to detail. This card encourages you to commit to skill development and take pride in your work.",
    reversed: "Reversed, the Eight of Pentacles warns of perfectionism, misdirected effort, or shortcuts that undermine quality. You may be working hard at the wrong things or lacking the focus needed for true mastery. Realign your efforts with your true goals.",
    advice: "Commit to mastery through dedicated practice. There are no shortcuts to excellence — embrace the process."
  },
  {
    id: 72, name: "Nine of Pentacles", arcana: "minor", suit: "pentacles", number: "9",
    element: "Earth", planet: "Venus", zodiac: "Virgo",
    uprightKeys: ["Abundance", "Luxury", "Self-sufficiency", "Financial independence", "Refinement"],
    reversedKeys: ["Self-worth", "Over-investment in work", "Hustling", "Superficiality"],
    upright: "The Nine of Pentacles stands in a lush garden of abundance — the reward of disciplined effort and smart decisions. You have achieved financial independence and can enjoy the finer things in life. This is self-made luxury, earned through patience and perseverance.",
    reversed: "Reversed, the Nine of Pentacles may warn that you are sacrificing personal fulfillment for financial success, or that your sense of self-worth is tied too closely to material possessions. True abundance includes time, freedom, and inner peace.",
    advice: "Enjoy the fruits of your labor and appreciate your achievements. True luxury is the freedom you've earned."
  },
  {
    id: 73, name: "Ten of Pentacles", arcana: "minor", suit: "pentacles", number: "10",
    element: "Earth", planet: "Mercury", zodiac: "Virgo",
    uprightKeys: ["Wealth", "Financial security", "Family", "Long-term success", "Legacy"],
    reversedKeys: ["Financial failure", "Loneliness", "Loss of legacy", "Family disputes"],
    upright: "The Ten of Pentacles represents the pinnacle of material success — lasting wealth, strong family bonds, and a legacy that endures. Financial security is established across generations. This card celebrates the stability and abundance that comes from wise long-term planning.",
    reversed: "Reversed, the Ten of Pentacles warns of family financial disputes, squandered wealth, or a legacy in jeopardy. Material success means nothing without meaningful relationships. Don't let money become a source of division among loved ones.",
    advice: "Build lasting wealth and nurture the family bonds that give it meaning. Think in terms of legacy, not just profit."
  },
  {
    id: 74, name: "Page of Pentacles", arcana: "minor", suit: "pentacles", number: "P",
    element: "Earth", planet: null, zodiac: null,
    uprightKeys: ["Manifestation", "Financial opportunity", "Skill development", "Studiousness"],
    reversedKeys: ["Lack of progress", "Procrastination", "Learning from failure"],
    upright: "The Page of Pentacles is a studious, grounded young person with a practical vision and the willingness to work for it. A new financial opportunity or learning path is opening up. Approach it with diligence, curiosity, and a commitment to steady progress.",
    reversed: "Reversed, the Page of Pentacles warns of procrastination, lack of focus, or unrealistic financial goals. You may be all plans and no action, or struggling to turn knowledge into practical results. Get out of your head and start doing.",
    advice: "Approach new opportunities with diligence and a practical mindset. Study, plan, and then take the first step."
  },
  {
    id: 75, name: "Knight of Pentacles", arcana: "minor", suit: "pentacles", number: "Kn",
    element: "Earth", planet: null, zodiac: null,
    uprightKeys: ["Hard work", "Productivity", "Routine", "Conservatism", "Methodical"],
    reversedKeys: ["Self-discipline", "Boredom", "Feeling stuck", "Perfectionism", "Laziness"],
    upright: "The Knight of Pentacles is the most reliable and hardworking of all the knights. He approaches every task with patience, thoroughness, and unwavering commitment. Progress is slow but steady and built to last. This card values quality, routine, and practical effort.",
    reversed: "Reversed, the Knight of Pentacles may indicate boredom, feeling stuck in routine, or perfectionism that prevents progress. You could also be lacking the discipline needed to see a project through. Break the monotony or recommit to the work.",
    advice: "Embrace the value of steady, reliable effort. Not everything needs to be exciting — consistency builds empires."
  },
  {
    id: 76, name: "Queen of Pentacles", arcana: "minor", suit: "pentacles", number: "Q",
    element: "Earth", planet: null, zodiac: null,
    uprightKeys: ["Nurturing", "Practical", "Providing financially", "Down-to-earth", "Resourceful"],
    reversedKeys: ["Financial independence", "Self-care", "Work-home conflict", "Smothering"],
    upright: "The Queen of Pentacles is a nurturing, practical provider who creates a warm, abundant home while managing finances with skill. She is deeply connected to nature and values comfort, quality, and the well-being of those she loves. She balances career and family with grace.",
    reversed: "Reversed, the Queen of Pentacles may indicate work-home conflict, neglecting self-care, or being overly focused on material security at the expense of relationships. Find balance between providing and being present.",
    advice: "Create abundance through nurturing, practical care. Balance your material responsibilities with warmth and presence."
  },
  {
    id: 77, name: "King of Pentacles", arcana: "minor", suit: "pentacles", number: "K",
    element: "Earth", planet: null, zodiac: null,
    uprightKeys: ["Wealth", "Business", "Leadership", "Security", "Discipline", "Abundance"],
    reversedKeys: ["Financially inept", "Obsessed with wealth", "Stubbornness", "Materialism"],
    upright: "The King of Pentacles sits on a throne of material mastery — a successful leader, shrewd businessperson, and generous provider. He has built his wealth through discipline, patience, and practical intelligence. This card calls you to lead with stability, abundance, and wisdom.",
    reversed: "Reversed, the King of Pentacles warns of obsession with wealth, stubbornness, or poor financial management. Success without soul becomes empty materialism. Don't let the pursuit of money overshadow your values and relationships.",
    advice: "Build your empire with discipline and generosity. True wealth is measured not just in gold, but in the lives you enrich."
  }
];

/* Helper: get suit icon */
function getSuitIcon(suit) {
  const icons = { wands: "🪄", cups: "🏆", swords: "⚔️", pentacles: "⬟" };
  return icons[suit] || "⭐";
}

/* Helper: get suit background class */
function getSuitClass(card) {
  return card.arcana === "major" ? "major" : card.suit;
}
