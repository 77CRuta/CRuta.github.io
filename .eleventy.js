export default function (eleventyConfig) {
  // Copy CSS to _site without processing
  eleventyConfig.addPassthroughCopy("src/css");

  // Format a Date object as "February 20, 2026"
  eleventyConfig.addFilter("readableDate", (dateObj) =>
    dateObj.toLocaleDateString("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

  // Format a Date object as "2026-02-20" for <time datetime="">
  eleventyConfig.addFilter("htmlDateString", (dateObj) =>
    dateObj.toISOString().split("T")[0]
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    // If your site lives at username.github.io/my-blog/ change this to "/my-blog/"
    // If it lives at the root (custom domain or username.github.io) leave it as "/"
    pathPrefix: "/",
  };
}
