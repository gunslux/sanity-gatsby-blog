export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60a65bd0a88a952a5647b3af",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-akx4yvde",
                  apiId: "b6696c70-7c49-4d08-9b52-c2bb0329e6a5",
                },
                {
                  buildHookId: "60a65bd05e65e72e2fdcd274",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-urj36aj3",
                  apiId: "0a6c1412-af92-4757-b2c0-4d42d26c1af5",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/gunslux/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-urj36aj3.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
