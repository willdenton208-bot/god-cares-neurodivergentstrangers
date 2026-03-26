# god-cares-neurodivergentstrangers
A faith‑based space for neurodivergent hearts to find comfort, hope, and biblical truth — reminding every visitor that they are wonderfully made by God.
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Faith for Neurodivergent Hearts</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Faith for Neurodivergent Hearts</h1>
  <input id="searchInput" type="text" placeholder="Search what you're feeling...">
  <div id="content"></div>

  <script src="content.js"></script>
  <script src="app.js"></script>
</body>
</html>
const messages = [
  {
    title: "How Do You Feel?",
    keywords: ["feel", "feelings", "emotion", "check in"],
    verse: "Psalm 34:18",
    text: "You don’t need perfect words to explain your heart. God understands the feelings you can’t describe, the ones that change fast, and the ones that don’t show up at all."
  },

  {
    title: "When Life Feels Busy",
    keywords: ["busy", "tired", "overwhelmed", "school"],
    verse: "Matthew 11:28",
    text: "Even when your week is packed and your mind feels stretched thin, God invites you to rest — not by doing more, but by letting Him hold you."
  },

  {
    title: "When You Feel Numb",
    keywords: ["numb", "empty", "no feelings", "blank"],
    verse: "Psalm 46:10",
    text: "Feeling nothing doesn’t mean something is wrong with you. Sometimes your heart is protecting itself. God stays close, even in the quiet places inside you."
  },

  {
    title: "When You Like Someone",
    keywords: ["crush", "boy", "girl", "relationship", "like someone"],
    verse: "1 Corinthians 13:4",
    text: "It’s normal to feel drawn to someone. What matters is kindness, patience, and respect — for them and for yourself — as you learn about your own heart."
  },

  {
    title: "When You Feel Lonely",
    keywords: ["lonely", "alone", "isolated"],
    verse: "Deuteronomy 31:6",
    text: "Even when people feel far away, God stays close. Your worth isn’t measured by how many people notice you — it’s held by the One who never leaves you."
  },

  {
    title: "When You Feel Anxious",
    keywords: ["anxiety", "worried", "scared", "fear"],
    verse: "Isaiah 41:10",
    text: "Your mind
    const messages = [
  // FEELINGS
  {
    category: "Feelings",
    title: "When You Feel Sad",
    keywords: ["sad", "down", "hurt"],
    verse: "Psalm 147:3",
    text: "Your sadness matters. God doesn’t rush you or tell you to ‘get over it.’ He sits with you and heals gently."
  },

  {
    category: "Feelings",
    title: "When You Feel Angry",
    keywords: ["angry", "mad", "frustrated"],
    verse: "Ephesians 4:26",
    text: "Anger doesn’t make you bad. It means something inside you needs care. God listens to the parts of you that feel unheard."
  },

  // RELATIONSHIPS
  {
    category: "Relationships",
    title: "When You Have a Crush",
    keywords: ["crush", "boy", "girl", "like someone"],
    verse: "1 Corinthians 13:4",
    text: "It’s normal to like someone. What matters is kindness, patience, and respect — for them and for yourself."
  },

  {
    category: "Relationships",
    title: "When You Feel Left Out",
    keywords: ["left out", "ignored", "excluded"],
    verse: "Psalm 139:14",
    text: "You are not invisible. Even when people overlook you, God sees every detail of who you are."
  },

  // SCHOOL & LIFE
  {
    category: "School & Life",
    title: "When Life Feels Busy",
    keywords: ["busy", "school", "tired", "overwhelmed"],
    verse: "Matthew 11:28",
    text: "Even when your week is packed, God invites you to rest — not by doing more, but by letting Him hold you."
  },

  // IDENTITY
  {
    category: "Identity",
    title: "When You Feel Different",
    keywords: ["different", "weird", "not like others"],
    verse: "Psalm 139:13",
    text: "You were made intentionally. Your differences are not mistakes — they are part of your design."
  },

  // FAITH
  {
    category: "Faith",
    title: "When You Feel Far From God",
    keywords: ["far from God", "doubt", "faith"],
    verse: "James 4:8",
    text: "God doesn’t walk away from you. Even when you feel distant, He stays close and patient."
  },

  // MOTIVATION
  {
    category: "Motivation",
    title: "When You Feel Like Giving Up",
    keywords: ["give up", "done", "tired"],
    verse: "Galatians 6:9",
    text: "You are stronger than you feel right now. God is not finished with your story."
  },

  // RANDOM THOUGHTS
  {
    category: "Random",
    title: "When You Don’t Know What You Feel",
    keywords: ["idk", "mixed", "confusing"],
    verse: "Romans 8:26",
    text: "It’s okay to not understand your emotions. God understands them even when you don’t."
  }
];
