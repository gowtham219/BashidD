const config = {
  data: {
    // Main invitation title that appears on the page
    title: "The Wedding of Bashid & Dhiya",
    // Opening message/description of the invitation
    description:
      "Together With Joyful Hearts We Invite You To Celebrate The Wedding", 
    // Groom's name
    groomName: "Abdul Bashid K",
    // Bride's name
    brideName: "Dhiya Rasmin K T",
    // Groom's parents names
    parentGroom: "Mr.Muhammed Ali & Mrs. Kadeeja",
    // Bride's parents names
    parentBride: "Mr. Aboobacker  & Mrs. Saheeda",
    // Wedding date (format: YYYY-MM-DD)
    date: "2026-07-19",
    // Google Maps link for location (short clickable link)
    maps_url: "https://maps.app.goo.gl/7oBviubYdzLMfkDH8",
    // Google Maps embed code to display map on website
    // How to get: open Google Maps → select location → Share → Embed → copy link
    maps_embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1884633089544!2d76.14219247480636!3d10.873265889281475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c9b575165ae7%3A0x80bb3a72c3e8aa9d!2sKAIPURAM%20AUDITORIUM%2C%20mayilady%20road!5e0!3m2!1sen!2sae!4v1781179936691!5m2!1sen!2sae", 
    // Event time (free format, example: "10:00 - 12:00 WIB")
    time: "12 PM Onwards",
    // Venue/building name
    location: "Kaippuram Auditorium",
    // Full address of the wedding venue
    address: "Mayiladi road kaippuram",
    // Image that appears when link is shared on social media
    ogImage: "/images/og-image.jpg",
    // Icon that appears in browser tab
    favicon: "/images/favicon.ico",

    // Background music settings
    audio: {
      // Music file (choose one or replace with your own file)
      src: "/audio/fulfilling-humming.mp3", // or /audio/nature-sound.mp3
      // Music title to display
      title: "Fulfilling Humming", // or Nature Sound
      // Whether music plays automatically when website opens
      autoplay: true,
      // Whether music repeats continuously
      loop: true,
    },
  },
};

export default config;
